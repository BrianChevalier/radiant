(ns radiant.core
  "Core functions for converting Clojure data to CSS"
  (:require [clojure.string :as s]))

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
  #?(:clj  (instance? clojure.lang.Cons x)
     :cljs (instance? cljs.core.Cons x)))

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
  (fn [_sel k _map] k))

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

(defn style
  "Accepts a css map keyed by selectors"
  [m]
  (s/join
   "\n"
   (mapcat (fn [[tag kv]]
             (map (fn [[k v]] (css {:tags tag} k v)) kv))
           m)))
