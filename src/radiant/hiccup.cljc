(ns radiant.hiccup
  "Functions related to processing trees of Hiccup data with inline CSS"
  (:require [clojure.string :as s]
            [clojure.walk :as w]
            [radiant.core :as rad]))

(defn- animation-name [sel]
  (str (:cls sel) "_keyframes"))

(defn- inject-attr
  "Inject an attribute in a css style.
  Used to inject a keyframe animation name"
  [sel m]
  (if (and (contains? m :style) (contains? m :style/keyframes))
    (assoc-in m [:style :animation-name] (animation-name sel))
    m))

(defn- remove-inline-styles
  [m]
  (apply dissoc m (keys (methods rad/css))))

(defn- hiccup-attribute->css
  "Given a hiccup attribute map, returns produced CSS and the updated attribute
  map with the associated CSS styles removed from the map"
  [m]
  (let [cls (gensym)
        m (inject-attr {:cls cls} m)]
    {:css (s/join "\n"
                  (for [[k v] m]
                    (rad/css {:cls cls} k v)))
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

(defn- extract-style
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
    (let [{:keys [css hiccup]} (extract-style v)]
      (swap! a str (str css "\n"))
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
