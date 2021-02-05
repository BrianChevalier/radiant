.PHONY: dev test
DEPLOYBRANCH=gh-pages
DIR=target/resources/

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

release:
	clojure -M:demo release demo

test/ui:
	python -m http.server 8000 --directory $(DIR)

site: release
	git branch -D $(DEPLOYBRANCH) || echo 'skip'
	rm -rf $(DIR)
	cp -r ./public $(DIR)
	git --git-dir=.git --work-tree="$(DIR)" checkout --orphan $(DEPLOYBRANCH)
	git --git-dir=.git --work-tree="$(DIR)" add .
	git --git-dir=.git --work-tree="$(DIR)" commit -m 'Build site'
	git --git-dir=.git --work-tree="$(DIR)" checkout main -f
	rm -rf $(DIR)

deploy: site
	git checkout gh-pages
	git push --set-upstream origin gh-pages --force
	git checkout main
