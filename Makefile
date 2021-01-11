
.PHONY: dev test

test/clj:
	clojure -M:test -m radiant.test-runner

test/cljs:
	clojure -M:test -m cljs-test-runner.main

test: test/clj test/cljs

check/clj-kondo:
	clojure -M:kondo --lint src test

check/cljfmt:
	clojure -M:cljfmt check

fmt:
	clojure -M:cljfmt fix

lint: check/clj-kondo check/cljfmt
