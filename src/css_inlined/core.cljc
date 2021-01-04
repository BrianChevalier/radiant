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

;; Creates selectors
(defn- class-selector
  [cls]
  (str "." cls))

(defn- pseudo-class-selector
  [sel]
  (let [{:keys [cls pseudo]} sel]
    (str "." cls ":" pseudo)))

(defn- element-tag-selector
  [tags]
  (s/join ", " (normalize-css-keys tags)))

(defn- element-tag-pseudo-class-selector
  [sel]
  (let [tags (get-in sel [:cls :tags])
        pseudo (:pseudo sel)]
    (s/join ", "
            (for [tag tags]
                (str (normalize-css-key tag) ":" pseudo)))))

(defn- selector
  "Normalizes call to create a CSS selector depending on the input
  Can create a class selector, pseudo-class selector, etc."
  [sel]
  (cond
    (string? sel)           (class-selector sel)
    (and (contains? sel :pseudo) (contains? (:cls sel) :tags)) (element-tag-pseudo-class-selector sel)
    (contains? sel :pseudo) (pseudo-class-selector sel)
    (contains? sel :tags)   (element-tag-selector (:tags sel))))


(defn- css-body
  "Create the non-selector portion of a CSS map"
  [m]
  (str "{" (s/join ";" (map kv->css-attrs m)) "}"))


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
  [cls _ m]
  (str
    (selector cls)
    (css-body m)))

;; Pseudo class selectors
(defn pseudo [cls k m]
  (str
    (selector {:cls cls :pseudo (name k)})
    (css-body m)))

(defmethod css :style/hover          [cls k m]  (pseudo cls k m))
(defmethod css :style/focus          [cls k m]  (pseudo cls k m))
(defmethod css :style/visited        [cls k m]  (pseudo cls k m))
(defmethod css :style/active         [cls k m]  (pseudo cls k m))
(defmethod css :style/focus-visible  [cls k m]  (pseudo cls k m))
(defmethod css :style/focus-within   [cls k m]  (pseudo cls k m))

;; MEDIA QUERIES #####

(defn prefers-color-scheme [cls k m]
  (str
    "@media "
    "(prefers-color-scheme: " (name k) ")"
    "{"
    (css cls :style m)
    "}"))

(defmethod css :style/light [cls k m] (prefers-color-scheme cls k m))
(defmethod css :style/dark  [cls k m] (prefers-color-scheme cls k m))

(defmethod css :style/small
  [cls _ m]
  (str
    "@media "
    "screen and (max-width: 42rem)"
    "{"
    (css cls :style m)
    "}"))

(defmethod css :style/medium
  [cls _ m]
  (str
    "@media "
    "screen and (min-width: 42rem) and (max-width: 64rem)"
    "{"
    (css cls :style m)
    "}"))

(defmethod css :style/large
  [cls _ m]
  (str
    "@media "
    "screen and (min-width: 64rem)"
    "{"
    (css cls :style m)
    "}"))

(defn- animation-name [cls]
  (str cls "_keyframes"))

(defmethod css :style/keyframes
  ;; :style/keyframes { from: {} to: {}}}
  [cls _ m]
  (str
    "@keyframes "
    (animation-name cls)
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
  [cls m]
  (if (and (contains? m :style) (contains? m :style/keyframes))
    (assoc-in m [:style :animation-name] (animation-name cls))
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
             (css cls k v)))
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
    (do
      (let [{:keys [css hiccup]} (extract-styles v)]
        (swap! a str css)
        hiccup))
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
  ;; Extract inline styles, wrap in wrapper :div, and add generated css
  ;; in a :style tag
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
  (hoist-styles example-hiccup)

  ;; Use CSS element tag selectors, and generate a CSS string
  (css
   {:h1
    {:style {:color :red}}
    [:h2 :h3 :h4 :h5 :h6]
    {:style/hover {:color :red}
     :style/dark {:color :blue}}})
  (css
   {:div
    {:style/dark
     {:background-color :black :color :white}}}))
