(ns radiant.core
  (:require [clojure.string :as s]
            [clojure.walk :as w]))

(defn- normalize-css-key
  "Normalize css keyword to string"
  [k]
  (cond
    (symbol? k)  (name k)
    (keyword? k) (name k)
    (string? k)  k))

(def accepts-unitless-values
  ;; There may be some missing.
  ;; https://stackoverflow.com/a/45392255
  #{:animation-iteration-count
    :border-image-slice
    :border-image-width
    :column-count
    :counter-increment
    :counter-reset
    :columns
    :flex
    :flex-grow
    :flex-shrink
    :font-size-adjust
    :font-weight
    :line-height
    :nav-index
    :opacity
    :order
    :orphans
    :tab-size
    :widows
    :z-index
    :pitch-range
    :richness
    :speech-rate
    :volume
    :flood-opacity
    :mask-box-outset
    :mask-border-outset
    :mask-box-width
    :mask-border-width
    :shape-image-threshold})

(defmulti normalize-css-value
          "Multimethod that allows processing some css properties
          differently, converting the css value to a css string dispatches
          on type by default.
          Extend this multimethod to handle special css key cases. Will be passed
          the CSS property as a clojure keyword and the value"
          (fn [k _] k))

(defmethod normalize-css-value :content
  ;; the content css property requires quotes around the value
  [_ v]
  (str "\"" v "\""))

(defmethod normalize-css-value :grid-template-areas
  ;; Given a nested vector grid template area convert to string
  ;; with double quotes around each row specification.
  [_ v]
  (if (not (every? vector? v))
    (normalize-css-value :default v)
    (str "\"" (s/join "\" \"" (map (partial normalize-css-value :default) v)) "\"")))

(defn- cons? [x]
  (instance? clojure.lang.Cons x))

(defmethod normalize-css-value :default
  ;; Dispatch on type by default
  [k v]
  (cond
    (string? v)
    v

    (keyword? v)
    (name v)

    (symbol? v)
    (name v)

    (number? v)
    (if (accepts-unitless-values k) (str v) (str v "px"))

    (or (list? v) (cons? v))
    (str (name (first v)) "(" (s/join ", " (map (partial normalize-css-value (first v)) (rest v))) ")")

    (vector? v)
    (s/join " " (map (partial normalize-css-value k) v))))

(defn- kv->css-attrs
  "Take a vector with a key-value pair and create css key: value
  pair for css string"
  [[k v]]
  (str (normalize-css-key k) ":" (normalize-css-value k v)))

(defn css-block
  "Create the non-selector portion of a CSS map"
  [m]
  (str "{" (s/join ";" (map kv->css-attrs (sort m))) "}"))

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
    (cond
      ;; Set of selectors, selects each one
      (set? tags)
      (s/join ", " (map normalize-css-key (sort tags)))
      ;; vectors of selectors creates descendant selector
      (vector? tags)
      (s/join " " (map normalize-css-key tags))
      ;; single selectors
      (not (coll? tags))
      (normalize-css-key tags))))

(defmethod selector #{:tags :pseudo}
  [sel]
  (let [{:keys [tags pseudo]} sel]
    (cond
      (set? tags)
      (s/join ", "
             (for [tag tags]
               (str (normalize-css-key tag) ":" pseudo)))
      (vector? tags)
      (s/join " "
              (for [tag tags]
                (str (normalize-css-key tag) ":" pseudo))))))

(defmulti css
          "A function that dispatches on :style or a :style namespaced key

          Extend this multimethod to add additional styles to extract from a hiccup tree
          The function should take a CSS class selector `cls`, the dispatch key
          (i.e. :style, :style/dark), and a map of key-value CSS styles"
          (fn
            ([_] (-> ::normalize))
            ([_sel k _map] k)))

(defmethod css ::normalize
  ;; If only one input is given assume css map. redispatch
  ;; to css to produce css string
  [m]
  (s/join "\n"
          (mapcat (fn [[tag kv]]
                    (map (fn [[k v]] (css {:tags tag} k v)) kv))
                  m)))

(defmethod css :style
  [sel _ m]
  (str
    (selector sel)
    (css-block m)))

;; Pseudo class selectors
(defn- pseudo [sel k m]
  (str
    (selector (assoc sel :pseudo (name k)))
    (css-block m)))

(defmethod css :style/hover          [sel k m]  (pseudo sel k m))
(defmethod css :style/focus          [sel k m]  (pseudo sel k m))
(defmethod css :style/visited        [sel k m]  (pseudo sel k m))
(defmethod css :style/active         [sel k m]  (pseudo sel k m))
(defmethod css :style/focus-visible  [sel k m]  (pseudo sel k m))
(defmethod css :style/focus-within   [sel k m]  (pseudo sel k m))

;; Media queries
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
          (str k (css-block v)))))
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
        m (inject-attr {:cls cls} m)]
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

(def ignored-tags
  #{:code})

(defn extract-styles
  "Normalize a hiccup vector and produces css based on the style keys,
  and strips style keys and values from the hiccup structure.
  Returns map with hiccup vector and CSS string"
  [v]
  (let [normal (normalize-hiccup-vector v)
        tag (first normal)
        attrs (second normal)
        {:keys [attributes css]} (if (or (ignored-tags tag) (empty? attrs)) {:attributes attrs} (hiccup-attribute->css attrs))
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
       :color "white"}}]
    [:p
     {:style/hover
      {:color "red"}}
     "Paragraph Content"])

  ;; Extract inline styles, return hiccup and css string
  (extract-all-styles example-hiccup)

  ;; Extract inline styles from hiccup, wrap in :div, and add generated css
  ;; string in a :style tag
  (hoist-styles example-hiccup)

  ;; Use CSS element tag selectors, and generate a CSS string
  (css
    {:h1
     {:style
      {:color :red
       :font-size "12pt"
       :opacity 0.7
       :transform '[(tanslateX 10) (translateY 20)]
       :background-image '(linear-gradient :red :yellow :blue)
       :padding [10 10]
       :margin 0}}

     #{:h2 :h3 :h4 :h5 :h6}
     {:style {:color :black}
      :style/hover {:color :red}
      :style/dark {:color :blue}}

     :div
     {:style
      {:content "content"
       :grid-template-areas [[:header  :header]
                             [:sidebar :body]
                             [:footer  :footer]]}
      :style/dark
      {:background-color :black
       :color :white}}}))
