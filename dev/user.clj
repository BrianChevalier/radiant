(ns user
  (:require [radiant.core :as rad]
            [radiant.hiccup :as radh]))

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
  (radh/extract-all-styles example-hiccup)

  ;; Extract inline styles from hiccup, wrap in :div, and add generated css
  ;; string in a :style tag
  (radh/hoist-styles example-hiccup)

  ;; Use CSS element tag selectors, and generate a CSS string
  (rad/css
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
