
.PHONY: dev test

index:
	mkdir -p target/resources
	touch target/resources/index.html
	bb -cp demo -m demo.index > target/resources/index.html

node_modules: package.json package-lock.json
	npm ci

dev: node_modules index
	clojure -M:demo watch demo

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
