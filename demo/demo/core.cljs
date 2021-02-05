(ns demo.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [radiant.core :as rad]
            [radiant.reagent :refer [div pre code textarea]]
            [clojure.edn :as edn]
            ["highlight.js/lib/core" :as hljs]
            ["highlight.js/lib/languages/clojure" :as hljsclj]
            ["highlight.js/lib/languages/css" :as hljscss]
            [clojure.pprint :as pprint]))

(defn highlight [x]
  (->> x
       (hljs/highlight "clojure")
       .-value))

(def sty
  {:position :absolute
   :width "90%"
   :height "90%"
   :padding 10
   :top 0
   :left 0
   :font-family "monospace"
   :resize :none
   :overflow-wrap :break-word
   :white-space :pre-wrap
   ;:background :transparent
   :font-size "1.2rem"
   :line-height "1.2rem"})

(defn code-editor [initial-state]
  (let [local-state (r/atom (str @initial-state))
        valid? (r/atom true)
        id (gensym)
        textarea-id (str id "_text")
        div-id (str id "_div")]
    (fn []
      [div
       {:style
        {:position :relative
         :width "100%"
         :height "100%"}}
       [textarea
        {:on-scroll #(set!
                      (.-scrollTop (js/document.getElementById div-id))
                      (.-scrollTop (js/document.getElementById textarea-id)))
         :id textarea-id
         :autoComplete "off"
         :autoCorrect "off"
         :autoCapitalize "off"
         :spellCheck "false"
         :style/focus {:border [3 :solid (if @valid? "#2E3440" "#BF616A")]}
         :style (merge sty {:box-shadow '[(rgba "15" "17" "21" "0.2") 0 3 6 0]
                            :color "rgba(255, 255, 255, 0)"
                            :caret-color :white
                            :border-radius 7
                            :background-color "#2E3440"
                            :border [3 :solid (if @valid? "#2E3440" "#BF616A")]})
        :value @local-state
        :on-change #(let [value (-> % .-target .-value)]
                      (reset! local-state value)
                      (reset! valid? false)
                      (when (edn/read-string value)
                        (reset! valid? true)
                        (reset! initial-state value)))}]
       [div
        {:aria-hidden true
         :id div-id
         :style (merge sty {:whitespace :normal
                            :overflow :hidden
                            :color :white
                            :pointer-events :none
                        :border [3 :solid :transparent]})
         :dangerouslySetInnerHTML
         {:__html (str (highlight @local-state) "</br>")}}]])))

(defn segmented-control
  "{:key key :label label}"
  [state on-select options & _]
  (let [selected-color "#D8DEE9"
        unselected-color "#4C566A"]
    [div
    {:style {:display :flex
             :flex-direction :row
             :border-radius 5
             :width :fit-content
             :overflow :hidden}}
    (for [option options]
      ^{:key (name (:key option))}
      [div
       {:on-click (partial on-select option)
        :style {:background-color (if (= state (:key option)) selected-color unselected-color)
                :color (if (= state (:key option)) unselected-color selected-color)
                :padding [5 7]
                :font-family "sans-serif"}}
       (:label option)])]))

(defn preview-view [content]
  (let [local-state (r/atom :preview)]
    (fn []
     (let [{:keys [css hiccup]}
           (rad/extract-all-styles
            (edn/read-string @content))]
       [:div
        [segmented-control
         @local-state
         #(reset! local-state (:key %))
         [{:key :preview :label "Preview"}
          {:key :html-css :label "Hiccup & CSS"}]]
        (case @local-state
          :preview [:div
                    [:style (str css)]
                    hiccup]
          :html-css [div {:style {:font-size "10pt" :overflow :auto}}
                     [:h2 "Hiccup"]
                     [pre
                      {:style {:overflow :scroll
                               :font-size "1rem"
                               :border-radius 7
                               :padding 10
                               :background-color "#2E3440"}}
                      [code
                       {:style {:overflow :scroll}
                        :dangerouslySetInnerHTML
                        {:__html (highlight (with-out-str (pprint/pprint hiccup)))}}]]
                     [:h2 "CSS"]
                     [pre
                      {:style {:overflow-x :scroll
                               :font-size "1rem"
                               :border-radius 7
                               :padding 10
                               :background-color "#2E3440"}}
                      [code
                       {:dangerouslySetInnerHTML
                        {:__html (->> css (hljs/highlight "css") .-value)}}]]])]))))

(defn example-section [code]
  (let [code (r/atom (with-out-str (pprint/pprint code)))]
    (fn []
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
        :padding-top 0}
       :style/medium
       {:max-width 1000
        :padding-top 0}
       :style/small
       {:grid-template-areas [[:inputarea] [:outputarea]]
        :grid-template-rows "1fr 1fr"
        :grid-template-columns "1fr"}}
      [div
       {:style
        {:grid-area :inputarea
         :margin 20
         :width "100%"}}
  ;     [:h3 {:style {:opacity 0.5}} "Input"]
       [code-editor code]]
      [div
       {:style
        {:overflow :scroll
         :margin 20
         :grid-area :outputarea}}
   ;    [:h3  {:style {:opacity 0.5}} "Output"]
       [preview-view code]]])))

(defn home-page []
  [div
   {:style {:margin 0
            :padding 0}}
   [:link {:rel "stylesheet"
           :href "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/nord.min.css"
           :integrity "sha512-igI4zzTHEU3IASS/ojMD7tO6hScqpnEnz41u+xVRNZvZEaF3XaCdre0qZ08frR1hri9+aSNeAXlQz1DS3luvxA=="
           :crossOrigin "anonymous"}]
   [:style "textarea:focus { outline: none; }
* {color: white;}
h1, h2, h3, h4, h5, p, li {font-family: sans-serif}"]
   [div
    {:style {:text-align :center
             :width "100%"
             :height "fit-content"
             :padding [30 0]
             :margin 0
             :background '(linear-gradient "120deg" "#2E3440" "#2E3440")}}
    [:h1 {:style {:color "#D8DEE9" :opacity 0.9}} "Radiant CSS"]
    [:h2 {:style {:color "#D8DEE9" :opacity 0.5}} "Write CSS as Clojure Data Structures"]]
   ;; First example
   [example-section
     [:div
      [:h2
       {:style {:color :white}}
       "Radiant"]
      [:p {:style {:color :white}}
       "Radiant is a Clojure(Script) library that lets you express
        CSS as regular Clojure data structures"]]]
   [example-section
    [:div
     [:style "code:scope {border-radius: 3px;font-size:0.8rem; background-color: #434C5E;color:#ECEFF4;padding:0px 5px;margin:5px;} li {margin:5px}"]
     [:h2 "Express CSS as Data"]
     [:p "By default values are converted based on the type of the
          value according to the following:"]
     [:ul
      [:li "string: passed through, without quotes"]
      [:ul
       [:li [:code "\"red\""] "->" [:code "red"]]]
      [:li "keyword: passed through without leading " [:code ":"]]
      [:ul
       [:li [:code ":red"] "->" [:code "red"]]]
      [:li "symbols: passed through"]
     [:ul
      [:li [:code "'red"] "->" [:code "red"]]]
      [:li "number: converted to string and px are added as the unit,
            unless the CSS key accepts dimensionless values"]
      [:ul
       [:li [:code "42"] "->" [:code "42px"]]]
      [:li "list: converted to CSS function call with comma separated arguments"]
      [:ul
       [:li [:code "'(linear-gradient :red :yellow :blue)"] "->" [:code "linear-gradient(red, yellow, blue)"]]]
      [:li "vector: space separated values (each value is processed by the same type dispatch)"]
      [:ul
       [:li [:code "[5 5]"] "->" [:code "5px 5px"]]
       [:li [:code "[0 :auto]"] "->" [:code "0 auto"]]
       [:li [:code "'[(translateX 10) (translateY 20)]"] "->"
        [:code "translateX(10px) translateY(20px)"]]
       [:li [:code "'(circle [75 :at :center])"] "->" [:code "circle(75px at center)"]]]]]]
   [example-section
    [:div
     [:h2 "Inline Pseudoselectors"]
     [:p "Use pseuselectors in your Hiccup."]
     [:p
      {:style/hover {:color :red}}
      "Hover over this element"]]]
   [example-section
    [:div
     [:h2 "Inline Animations"]
     [:p
      {:style
       {:padding 10
        :border-radius 7
        :color "#2E3440"
        :animation-duration "6s"
        :animation-iteration-count :infinite}
       :style/keyframes {0  {:background-color "#BF616A"}
                         20 {:background-color "#D08770"}
                         40 {:background-color "#EBCB8B"}
                         60 {:background-color "#A3BE8C"}
                         80 {:background-color "#B48EAD"}
                         100  {:background-color "#BF616A"}}}
      "Use CSS Keyframe animations, inline. The background of this element will cycle infinitely over a rainbow."]]]
   [example-section
    [:div
     [:h2 "Media Queries"]
     [:p
      "Use CSS media queries, inline such as theme and screen media queries."]
     [:p {:style {:padding 10
                  :border-radius 7}
          :style/light {:color "#2E3440" :background-color "#D8DEE9"}
          :style/dark {:color "#D8DEE9" :background-color "#2E3440"}}
      "The background here will be light, and text will be dark when your system is in 'light mode' and the colors will switch in dark mode"]
     [:p {:style {:padding 10
                  :border-radius 7}
          :style/small {:background-color "#BF616A"}
          :style/medium {:background-color "#EBCB8B"}
          :style/large {:background-color "#A3BE8C"}}
      "This background will be red on small screens, yellow on medium screens, and green on large screens."]]]])




(defn render []
  (rdom/render [home-page] (js/document.getElementById "root")))

(defn main!
  "Once per app"
  []
  (hljs/registerLanguage "clojure" hljsclj)
  (hljs/registerLanguage "css" hljscss)
  (render))

(defn reload!
  "On each reload, when the file is saved"
  []
  (render))
