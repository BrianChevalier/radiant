(ns radiant.core-test
  (:require [radiant.core :as rad]
            [clojure.test :refer [deftest is testing]]))

(def values->css
  #{{:input [:content "string"]
     :expected "\"string\""}
    {:input [:color :red]
     :expected "red"}
    {:input [:color 'red]
     :expected "red"}
    {:input [:color "red"]
     :expected "red"}
    {:input [:opacity 0.7]
     :expected "0.7"}
    {:input [:margin [0 :auto]]
     :expected "0px auto"}
    {:input [:margin [0 10 20 30]]
     :expected "0px 10px 20px 30px"}
    {:input [:padding [10 20]]
     :expected "10px 20px"}
    {:input [:background-image '(linear-gradient :red :yellow :blue)]
     :expected "linear-gradient(red, yellow, blue)"}
    {:input [:mask-image '(url "image.svg")]
     :expected "url(image.svg)"}
    {:input [:clip-path '(rect 10 20 30 40)]
     :expected "rect(10px, 20px, 30px, 40px)"}
    {:input [:clip-path '(circle [50 :at :center])]
     :expected "circle(50px at center)"}
    {:input [:transform '[(translateX 10) (translateY 10)]]
     :expected "translateX(10px) translateY(10px)"}
    {:input [:transform `(translateX ~(+ 10 20))]
     :expected "translateX(30px)"}
    {:input [:grid-template-areas [[:a] [:b]]]
     :expected "\"a\" \"b\""}
    {:input [:grid-template-areas [[:a :b]]]
     :expected "\"a b\""}})

(deftest create-css-values
  (testing "Clojure values to CSS values"
    (doall
     (for [t values->css]
       (is (= (apply rad/normalize-css-value (:input t)) (:expected t)))))))

(def css-body-maps
  #{{:input {:border-radius 7}
     :expected "{border-radius:7px}"}
    {:input {:padding 0 :border-radius 7}
     :expected "{border-radius:7px;padding:0px}"}
    {:input {:color :red :background-color "#ffffff"}
     :expected "{background-color:#ffffff;color:red}"}
    {:input {}
     :expected "{}"}
    {:input {:border [2 :solid :red] :align-items :center}
     :expected "{align-items:center;border:2px solid red}"}
    {:input {:font-size "1rem" :font-family "\"Times New Roman\",Times,serif"}
     :expected "{font-family:\"Times New Roman\",Times,serif;font-size:1rem}"}})

(deftest css-body-tests
  (testing "Test Clojure Map->CSS body"
    (doall
     (for [t css-body-maps]
       (is (= (rad/css-block (:input t)) (:expected t)))))))

(def style-test
  #{{:input [{:cls "class"} :style {:color :red}]
     :expected ".class{color:red}"}
    {:input [{:cls "class"} :style {:margin [0 0]}]
     :expected ".class{margin:0px 0px}"}
    {:input [{:cls "class"} :style {:content "content"}]
     :expected ".class{content:\"content\"}"}
    {:input [{:cls "class"} :style/hover {:color :blue}]
     :expected ".class:hover{color:blue}"}})

(deftest css
  (testing "inline style test"
    (doall
     (for [t style-test]
       (is (= (apply rad/css (:input t)) (:expected t)))))))

(def style-given-selector
  #{{:input {:h1 {:style {:padding 0}}}
     :expected "h1{padding:0px}"}
    {:input {"h2" {:style {:padding 0}}}
     :expected "h2{padding:0px}"}
    {:input {'h1 {:style {:padding 0}}}
     :expected "h1{padding:0px}"}
    {:input {"h1, .header" {:style {:color :green}}}
     :expected "h1, .header{color:green}"}
    {:input {:.my-css-class {:style {:color :blue}}}
     :expected ".my-css-class{color:blue}"}
    {:input {#{:h1 :h2} {:style {:padding 0}}}
     :expected "h1, h2{padding:0px}"}
    {:input {[:h1 :h2] {:style {:padding 0}}}
     :expected "h1 h2{padding:0px}"}
    {:input {[:div :> :p] {:style {:color :red}}}
     :expected "div > p{color:red}"}
    {:input {[:div :+ :p] {:style {:color :red}}}
     :expected "div + p{color:red}"}
    {:input {[:div "~" :p] {:style {:color :red}}}
     :expected "div ~ p{color:red}"}})

(deftest css-with-selectors
  (testing "Test css with given selectors"
    (doall
     (for [t style-given-selector]
       (is (= (rad/css (:input t)) (:expected t)))))))
