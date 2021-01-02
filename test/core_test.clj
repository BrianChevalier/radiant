(ns core_test
  (:require [css-inline.core :as c]
            [clojure.test :refer :all]))

(deftest my-test
  (testing "generate selector"
   (is (= ((c/generate-selector :class) "class") ".class"))))