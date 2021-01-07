# css-inlined

Write CSS styles with access to media queries and keyframe animations within [Hiccup](https://github.com/weavejester/hiccup) and all of CSS, inline. CSS styles are specified as pure Clojure data.

Hiccup already supports inline styling like the following, but is restricted to only styles that can be defined inline when writing HTML.

``` clojure
[:div {:style {:css-attribute "value"}}]
```

This library extends this idea of inline styling by using namespaced `style` attributes to bring more of CSS's power inline. The following example shows using CSS media queries, pseudo-selectors and animation keyframes.

```clojure
[:div
  {:style
   {:color :black 
    :background :white}
   :style/dark
   {:background :black
    :color :white}
   :style/hover
   {:color :red}
   :style/keyframes
   {:from {:background :blue}
    :to {:background :green}}}
  "div content"]
```

Since these styles are written as data you only need to call functions from `css-inlined` when you're ready to generate CSS from data structures.

## Example Usage

Once your Hiccup is written you can extract inline styles and return new hiccup in a wrapper div and `:style` with generated css.
```clojure
(hoist-styles [:div {:style {}} ...])
=> [:div
     [:style ".class {...}"]
     [:div {:class "class"}]]
```

Or extract the Hiccup (with generated CSS classes) and a CSS string

``` clojure
(extract-all-styles [:div {:style {}}])
=> {:hiccup [:div {:class "class"}]
    :css ".class {}..."}
```


You can also write CSS with tag selectors as a clojure map and use similar syntax to inline styles using element tag selectors, and access to media queries.
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

## Translating Clojure data to CSS values

By default values are converted based on the type of the value according to the following

* string: passed through, without quotes
  * `"white"` -> `white`
* keyword: passed through without preceeding `:`
  * `:color` -> `color`
* number: converted to string and px are added as the unit, unless the CSS key accepts dimensionless values
  * `42` -> `42px`
* list: converted to CSS function call with comma seperated arguments
  * `'(linear-gradient :red :yellow :blue)` -> `linear-gradient(red, yellow, blue)`
* vector: space seperated values (each value is processed by the same type dispatch)
  * `[5 5]` -> `5px 5px`
  *  `'[(translateX 10) (translateY 20)]` -> `translateX(10px) translateY(20px)`
  * `'(circle [75 :at :center])'` -> `circle(75px at center)`

There are some cases where a CSS property may need to be handled differently. 

## Customization & Extension
Extend `css-inlined.core/css` to define your own style handler. Use `css-inlined.core/selector` to generate a CSS selector
``` clojure
(defmethod css :style/custom
  [sel k m]
  ;; Your css generator here.
  )
```


Define how a CSS value is translated from Clojure data by extending the following multimethod.
 ``` clojure
(defmethod normalize-css-value :css-property-name
  [k v]
  ;; return a string 
  ;; use `normalize-css-value` where necessary
  )
 ```

 
