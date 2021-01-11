(ns radiant.test-runner
  (:require [clojure.test :refer [run-tests]]
            [radiant.core-test]))

(defn -main []
  (let [{:keys [fail error]}
        (run-tests 'radiant.core-test)
        #_:clj-kondo/ignore status (+ fail error)]
    #?(:clj (shutdown-agents)
       (System/exit status)
       :cljs (println status))))
