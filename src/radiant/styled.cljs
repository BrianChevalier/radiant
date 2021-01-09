(ns radiant.styled
  "Provides dynamic client-side components"
  (:require [radiant.core :as rad]))

(defonce cache {})

(defn- generate-class
  "Update cache with new generated CSS class name, and
  append a new style tag to HTML head with CSS."
  [dispatch-key style-map]
  (let [cls (gensym)
        css (rad/css {:cls cls} dispatch-key style-map)
        el (js/document.createElement "style")]
    (set! (.-innerHTML el) css)
    (.appendChild js/document.head el)
    (swap! cache assoc #{dispatch-key style-map} cls)))

(defn- get-class
  "Get class name for existing style map cache or create a
  new class and append to head element of DOM"
  [dispatch-key style-map]
  (or (get @cache #{dispatch-key style-map})
      (generate-class dispatch-key style-map)))

(defn- update-hiccup-attrs
  "take a hiccup attribute map, append css class to
  the :class attribute, remove the dispatch key and map
  and return the new map"
  [attrs dispatch-key]
  (if-not (contains? attrs dispatch-key)
    attrs
    (let [style (get attrs dispatch-key)
          cls (get-class dispatch-key style)]
      (-> attrs
          (dissoc dispatch-key)
          (update :class str " " cls)))))

(defn- process-hiccup-attrs
  [attrs]
  (reduce
   update-hiccup-attrs
   attrs
   (methods rad/css)))

(defn styled
  ""
  [tag attrs & children]
  (into [tag
         (if-not (map? attrs)
           attrs
           (process-hiccup-attrs attrs))]
        children))

(def a      (partial styled :a))
(def table  (partial styled :table))
(def tbody  (partial styled :tbody))
(def thead  (partial styled :thead))
(def tr     (partial styled :tr))
(def th     (partial styled :th))
(def td     (partial styled :td))
(def div    (partial styled :div))
(def span   (partial styled :span))
(def input  (partial styled :input))
(def button (partial styled :button))
(def img    (partial styled :img))
