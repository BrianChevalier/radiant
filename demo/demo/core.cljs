(ns demo.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [radiant.core :as rad]
            [clojure.edn :as edn]
            [hickory.core :as hic]
            ["react-simple-code-editor" :as e]
            ["highlight.js/lib/core" :as hljs]
            [clojure.string :as str]
            ["highlight.js/lib/languages/clojure" :as hljsclj]
            [clojure.pprint :as pprint]))

;; -------------------------
;; Views


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

(def content
  (r/atom
   (with-out-str
     (pprint/pprint
     [:div
      [:h1
       {:style {:color :white}}
       "Radiant"]
      [:p {:style {:color :white}} "Write CSS as Clojure Data Structures"]
      [:h1
       {:style/small
        {:color :green}
        :style/hover {:color :blue}}
       "Pseudoselectors"]
      [:p
       {:style/hover {:color :red}}
       "Enable inline pseudoselectors"]]))))

(defn highlight [x]
  (->> x
       ;(#(str "<pre><code>" % "</code></pre>"))
       (hljs/highlight "clojure")
       .-value
      ; (#(str/replace % #"&quot;" "\""))
       ;hic/parse-fragment
       ;(map hic/as-hiccup)
       ;str
       #_(map str)))

(def sty
  {:position :absolute
   :width "90%"
   :height "90%"
   :margin 0
   :padding 0
   :top 0
   :left 0
   :font-family "monospace"
   :resize :none
   :overflow-wrap :break-word
   :white-space :pre-wrap
   :background :transparent
   :font-size "1.2rem"
   :line-height "1.2rem"})

(defn code-editor [initial-state]
  (let [state (r/atom (str @initial-state))
        valid? (r/atom true)]
    (fn []
      [div
       {:style {:position :relative
                :width "100%"
                :height "100%"}}
       [textarea
        {:autocomplete "off"
         :autocorrect "off"
         :autocapitalize "off"
         :spellcheck "false"
         :style (merge sty {:color "rgba(255, 255, 255, 0)"
                            :caret-color :white
                            :WebkitTextFillColor :transparent})
        :value @state
        :on-change #(let [value (-> % .-target .-value)]
                      (reset! state value)
                      (reset! valid? false)
                      (when (edn/read-string value)
                        (reset! valid? true)
                        (reset! content value)))}]
       [div
        {:aria-hidden true
         :style (merge sty {:whitespace :normal
                            :color :white
                            :pointer-events :none
                        :border [1 :solid :transparent]}
                       )
         :dangerouslySetInnerHTML {:__html (highlight @state)}}]
       ;(hic/as-hiccup (hic/parse-fragment ))
        ])))





#_(defn code-editor [initial-state]
  (let [state (r/atom (str @initial-state))
        valid? (r/atom true)]
    (fn []
      [div
       {:style
        {:margin 20
         :color :white
         :border-radius 7
         :background-color "#2e3440"
         :border [2 :solid (if @valid? nil :red)]}}
       [:> e/default
        {:value @state
         :padding 10
         :style {:font-family "monospace"
                 :font-size 13
                 :color :white}
         :highlight highlight
         :onValueChange
         (fn [e]
                      (let [value e #_(-> e .-target .-value)]
                       (reset! state value)
                       (reset! valid? false)
                       (when (edn/read-string value)
                         (reset! valid? true)
                         (reset! content value))))}]])))

(defn preview-view [content]
  (let [state (r/atom :html-css)]
    (fn []
     (let [{:keys [css hiccup]}
           (rad/extract-all-styles
            (edn/read-string @content))]
       [:div
        [:button {:on-click #(if (= @state :preview)
                               (reset! state :html-css)
                               (reset! state :preview))}
         "Preview"]
        (case @state
          :preview [:div [:style (str css)] hiccup]
          :html-css [div {:style {:font-size "10pt"}}
                     [:h3 "Hiccup"]
                     [:pre {:style {:overflow-x :scroll :color :white}}
                      [:code {:dangerouslySetInnerHTML
                              {:__html (highlight (with-out-str (pprint/pprint hiccup)))}}]]
                     [:h3 "CSS"]
                     [:pre [:code css]]])]))))

(defn home-page []
  [:div
   [:link {:rel "stylesheet"
           :href "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/nord.min.css"
           :integrity "sha512-igI4zzTHEU3IASS/ojMD7tO6hScqpnEnz41u+xVRNZvZEaF3XaCdre0qZ08frR1hri9+aSNeAXlQz1DS3luvxA=="
           :crossOrigin "anonymous"}]
 ;  [:style "textarea:focus { outline: none; }"]
    [div
     {:style
      {:display :grid
       :margin [0 :auto]
       :width "100%"
       :height "100%"
       :grid-template-areas [[:inputarea :outputarea]]
       :grid-template-rows  "1fr"
       :grid-template-columns ["1fr" "1fr"]}
      :style/large
      {:max-width 1000
       :padding-top 50}
      :style/medium
      {:max-width 1000
       :padding-top 50}
      :style/small
      {:grid-template-areas [[:outputarea] [:inputarea]]
       :grid-template-rows "1fr 1fr"
       :grid-template-columns "1fr"}}
     [div
      {:style
       {:grid-area :inputarea
        :width "100%"}}
      [code-editor content]
      #_[text-input content]]
     [div
      {:style
       {:margin 20
        :grid-area :outputarea}}
      #_[code-editor]
     [preview-view content]
      #_(rad/hoist-styles
       (edn/read-string @content))]]])

(defn render []
  (rdom/render [home-page] (js/document.getElementById "root")))

(defn main!
  "Once per app"
  []
  (hljs/registerLanguage "clojure" hljsclj)
  (render))

(defn reload!
  "On each reload, when the file is saved"
  []
  (render))
