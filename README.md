# css-inlined

Write CSS styles with media queries inline in [hiccup](https://github.com/weavejester/hiccup)

Example hiccup:
```clojure
[:div
 {:style {}}
 "content"]
```

Inline styling using media queries and animating with keyframes:
```clojure
{:style
 {:color "black" 
  :background "white"}
 :style/dark
 {:background "black"
  :color "white"}
 :style/hover
 {:color "red"}
 :style/keyframes
 {:from {:background "blue"}
  :to {:background "green"}}}
```

Extract inline styles and return new hiccup in a wrapper div and `:style` with generated css
```clojure
(hoist-styles [:div {:style {}} ...])
=> [:div
     [:style ".class {...}"]
     [:div {:class "class"}]]
```

Write CSS as a clojure map use similar syntax to inline styles using element tag selectors, and access to media queries.
```clojure
 (css
   {:h1
    {:style {:color :red}}
    [:h2 :h3 :h4 :h5 :h6]
    {:style {:color :black}
     :style/hover {:color :red}
     :style/dark {:color :blue}}
    :div
    {:style/dark
     {:background-color :black :color :white}}})
```

Extend `css-inlined/css` to define your own style handler. Use `css-inlined/selector` to generate a CSS selector
``` clojure
(defmethod css :style/custom
  [sel k m]
  ;; Your css generator here.
  )
```
