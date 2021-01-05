(ns css-inlined.core
  (:require [clojure.string :as s]
            [clojure.walk :as w]))

(defn- normalize-css-key
  "Normalize css keyword to string"
  [k]
  (cond
    (keyword? k) (name k)
    (string? k)  k))

(defn- normalize-css-keys
  "Normalize css key(s) to vector of strings"
  [k]
  (cond
    (coll? k) (map normalize-css-key k)
    :else (normalize-css-keys [k])))

(defn- kv->css-attrs
  "Take a vector with a key-value pair and create css key: value
  pair for css string"
  [[k v]]
  (str (normalize-css-key k) ":" (name v)))

(defn- css-body
  "Create the non-selector portion of a CSS map"
  [m]
  (str "{" (s/join ";" (map kv->css-attrs m)) "}"))

(defmulti selector
  "Create a CSS selector given a map. Dispatch on the set of keys given"
  (fn [sel] (set (keys sel))))

(defmethod selector #{:cls}
  [sel]
  (let [{:keys [cls]} sel]
    (str "." cls)))

(defmethod selector #{:cls :pseudo}
  [sel]
  (let [{:keys [cls pseudo]} sel]
    (str "." cls ":" pseudo)))

(defmethod selector #{:tags}
  [sel]
  (let [{:keys [tags]} sel]
    (s/join ", " (normalize-css-keys tags))))

(defmethod selector #{:tags :pseudo}
  [sel]
  (let [{:keys [tags pseudo]} sel]
    (s/join ", "
            (for [tag tags]
                (str (normalize-css-key tag) ":" pseudo)))))


(defmulti css
  "A function that dispatches on :style or a :style namespaced key

  Extend this multimethod to add additional styles to extract from a hiccup tree
  The function should take a CSS class selector `cls`, the dispatch key
  (i.e. :style, :style/dark), and a map of key-value CSS styles"
  (fn
    ([_] (-> :normalize))
    ([_cls k _map] k)))

(defmethod css :normalize
  ;; (css
  ;; {:h1
  ;; {:style {:color :red}}
  ;; [:h2 :h3 :h4 :h5 :h6]
  ;; {:style/hover {:color :red}
  ;;  :style/dark {:color :blue}}})
  [m]
  (s/join "\n"
   (mapcat (fn [[tag kv]]
             (map (fn [[k v]] (css {:tags tag} k v)) kv))
           m)))

(defmethod css :style
  [sel _ m]
  (str
    (selector sel)
    (css-body m)))

;; Pseudo class selectors
(defn pseudo [sel k m]
  (str
    (selector (assoc sel :pseudo (name k)))
    (css-body m)))

(defmethod css :style/hover          [sel k m]  (pseudo sel k m))
(defmethod css :style/focus          [sel k m]  (pseudo sel k m))
(defmethod css :style/visited        [sel k m]  (pseudo sel k m))
(defmethod css :style/active         [sel k m]  (pseudo sel k m))
(defmethod css :style/focus-visible  [sel k m]  (pseudo sel k m))
(defmethod css :style/focus-within   [sel k m]  (pseudo sel k m))

;; MEDIA QUERIES #####

(defn prefers-color-scheme [sel k m]
  (str
    "@media "
    "(prefers-color-scheme: " (name k) ")"
    "{"
    (css sel :style m)
    "}"))

(defmethod css :style/light [sel k m] (prefers-color-scheme sel k m))
(defmethod css :style/dark  [sel k m] (prefers-color-scheme sel k m))

(defmethod css :style/small
  [sel _ m]
  (str
    "@media "
    "screen and (max-width: 42rem)"
    "{"
    (css sel :style m)
    "}"))

(defmethod css :style/medium
  [sel _ m]
  (str
    "@media "
    "screen and (min-width: 42rem) and (max-width: 64rem)"
    "{"
    (css sel :style m)
    "}"))

(defmethod css :style/large
  [sel _ m]
  (str
    "@media "
    "screen and (min-width: 64rem)"
    "{"
    (css sel :style m)
    "}"))

(defn- animation-name [sel]
  (str (:cls sel) "_keyframes"))

(defmethod css :style/keyframes
  ;; :style/keyframes { from: {} to: {}}}
  [sel _ m]
  (str
    "@keyframes "
    (animation-name sel)
    "{"
    (s/join
      " "
      (for [[k v] m]
        (let [k (cond
                  (keyword? k) (name k)
                  (number? k) (str k "%")
                  :else k)]
          (str k (css-body v)))))
    "}"))

(defmethod css :default [_ _ _] "")

(defn- inject-attr
  "Inject an attribute in a css style.
  Used to inject a keyframe animation name"
  [sel m]
  (if (and (contains? m :style) (contains? m :style/keyframes))
    (assoc-in m [:style :animation-name] (animation-name sel))
    m))

(defn- remove-inline-styles
  [m]
  (apply dissoc m (keys (methods css))))

(defn- hiccup-attribute->css
  "Given a hiccup attribute map, returns produced CSS and the updated attribute
  map with the associated CSS styles removed from the map"
  [m]
  (let [cls (gensym)
        m (inject-attr cls m)]
    {:css (s/join "\n"
            (for [[k v] m]
             (css {:cls cls} k v)))
     :attributes (-> m
                     (assoc :class cls)
                     (remove-inline-styles))}))

(defn- normalize-hiccup-vector
  "Takes a vector and normalizes it to [:tag {attributes...} content...]"
  [v]
  (let [tag (first v)
        has-attributes? (map? (second v))
        attributes (if has-attributes? (second v) {})
        content (if has-attributes? (drop 2 v) (drop 1 v))]
    (into [tag attributes] content)))

(defn extract-styles
  "Normalize a hiccup vector and produces css based on the style keys,
  and strips style keys and values from the hiccup structure.
  Returns map with hiccup vector and CSS string"
  [v]
  (let [normal (normalize-hiccup-vector v)
        {:keys [attributes css]} (hiccup-attribute->css (second normal))
        hiccup (assoc normal 1 attributes)]
    {:hiccup hiccup
     :css    css}))

(defn- inspect-item
  "Inspect the item, v. If it's an outer hiccup vector process the vector
  and build up the css. Otherwise just return the item"
  [a v]
  (cond
    (and (vector? v) (map? (second v)))
      (let [{:keys [css hiccup]} (extract-styles v)]
        (swap! a str css)
        hiccup)
    :else
    v))

(defn extract-all-styles
  "Traverse hiccup tree from the outside in.
  Accumulates a new hiccup structure with style attributes stripped
  and creates a css string"
  [v]
  (let [css (atom "")]
    {:hiccup (w/prewalk (partial inspect-item css) v)
     :css    (s/trim @css)}))

(defn hoist-styles
  "Extracts hiccup element styles and injects them in a top level div"
  [v]
  (let [{:keys [hiccup css]} (extract-all-styles v)]
    [:div
     [:style css]
     hiccup]))

(comment
  (def example-hiccup
    [:div
     {:style
      {:background-color "white"
       :color "black"}
      :style/dark
      {:background-color "black"
       :color "white"}}
    [:p
     {:style/hover
      {:color "red"}}
     "Paragraph Content"]])

  ;; Extract inline styles, return hiccup and css string
  (extract-all-styles example-hiccup)

  ;; Extract inline styles from hiccup, wrap in :div, and add generated css
  ;; string in a :style tag
  (hoist-styles example-hiccup)

  ;; Use CSS element tag selectors, and generate a CSS string
  (css
   {:h1
    {:style {:color :red}}
    [:h2 :h3 :h4 :h5 :h6]
    {:style {:color :black}
     :style/hover {:color :red}
     :style/dark {:color :blue}}
    :div
    {:style/dark
     {:background-color :black :color :white}}}))
