
.PHONY: dev test

test/clj:
	clojure -M:test -m radiant.test-runner

test/cljs:
	clojure -M:test -m cljs-test-runner.main

test: test/clj test/cljs
