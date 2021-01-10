(ns radiant.test-runner
  (:require [clojure.test :refer [run-tests]]
            [radiant.core-test]))

(defn -main []
  (let [{:keys [fail error]}
        (run-tests 'radiant.core-test)
        status (+ fail error)]
   #?(:clj (do (shutdown-agents)
               (System/exit status)))))
