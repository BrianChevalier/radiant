
Write CSS styles with media queries inline in Hiccup and extract them to top level elements.

Example Hiccup:
```clojure
[:div
 {:style {}}
 "content"]
```

Inline styling using media queries and keyframes:
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

```clojure
(hoist-styles [:div {:style {}} ...])
=> [:div
     [:style ".class {...}"]
     [:div {:class "class"}]]
```