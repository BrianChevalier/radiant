(ns radiant.reagent
  "Provides dynamic client-side reagent components
   Extracts style maps, creates css and inserts it at the head of the DOM, caching
   styles that have already been added."
  (:require [radiant.core :as rad]))

(defonce cache (atom {}))

(defn- generate-class [selector style]
  (when-not (empty? style)
    (let [k  (gensym)
          el (js/document.createElement "style")]
      (set! (.-innerHTML el)
            (rad/css {:cls k} selector style))
      (.appendChild js/document.head el)
      (swap! cache assoc [selector style] k)
      k)))

(defn- get-class [selector style]
  (or (get @cache [selector style])
      (generate-class selector style)))

(defn- attrs->css [attrs]
  (reduce
   (fn [attrs selector]
     (if-not (contains? attrs selector)
       attrs
       (let [style (get attrs selector)
             class (get-class selector style)]
         (-> attrs
             (dissoc selector)
             (update :class str " " class)))))
   attrs
   (keys (methods rad/css))))

(defn styled [component attrs & children]
  (into [component
         (if-not (map? attrs)
           attrs
           (attrs->css attrs))]
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
(def iframe (partial styled :iframe))
(def code (partial styled :code))
(def pre (partial styled :pre))
(def textarea      (partial styled :textarea))
