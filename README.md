# Radiant

Write CSS styles with access to media queries and keyframe animations within [Hiccup](https://github.com/weavejester/hiccup) and all of CSS, inline. CSS styles are specified as pure Clojure data.

Hiccup already supports inline styling like the following, but is restricted to only styles that can be defined inline when writing HTML.

``` clojure
[:div {:style {:css-attribute "value"}}]
```

Radiant extends this idea of inline styling by using namespaced hiccup attributes to bring more of CSS's power inline. The following example shows using CSS media queries, pseudo-selectors and animation keyframes.

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

Radiant can be used to extract these inline styles and produce unique CSS classes to select the corresponding elements.

Since these styles are written as data you only need to call functions from `radiant` when you're ready to generate CSS from data structures. Your styles can be defined independent of an API and can be serialized as EDN. They can also be handled as regular Clojure data. You can create functions that return styles, bindings for shared styles, or dynamically alter styles at runtime.

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


You can also write CSS with provided selectors as a Clojure Map and use similar syntax to inline styles, and access to media queries.

```clojure
 (css
   {:h1
    {:style {:color :red}}
    #{:h2 :h3 :h4 :h5 :h6}
    {:style {:color :black}
     :style/hover {:color :red}
     :style/dark {:color :blue}}
    :div
    {:style/dark
     {:background-color :black
     :color :white}}})
```

## Translating Clojure data to CSS values

By default values are converted based on the type of the value according to the following

* string: passed through, without quotes
  * `"white"` -> `white`
* keyword: passed through without preceding `:`
  * `:color` -> `color`
* symbol: passed through as the name of the symbol (unqualified)
  * `'symbol` -> `symbol`
* number: converted to string and px are added as the unit, unless the CSS key accepts dimensionless values
  * `42` -> `42px`
* list: converted to CSS function call with comma separated arguments
  * `'(linear-gradient :red :yellow :blue)` -> `linear-gradient(red, yellow, blue)`
* vector: space separated values (each value is processed by the same type dispatch)
  * `[5 5]` -> `5px 5px`
  *  `'[(translateX 10) (translateY 20)]` -> `translateX(10px) translateY(20px)`
  * `'(circle [75 :at :center])` -> `circle(75px at center)`

There are some cases where a CSS property may need to be handled differently. If your case is not covered in a particular release, you can extend the appropriate multimethod (see below).

If you need to perform a computation when writing a CSS function call, you can use Clojure's backtick to quote the list and tilde to execute code while in the list (example below). See [Syntax-quote](https://clojure.org/reference/reader#syntax-quote) for more details.

``` clojure
`(rgb ~(+ 10 x) 0 139)
```

## CSS Selectors

When writing your own CSS selectors, the following rules are applied:

* A single selector can be a string, keyword, or a symbol and will follow the same rules as above
  * `:h1` -> `h1 {...}`
  * `'h1` -> `h1 {...}`
  * `"h1"` -> `h1 {...}`
* A set selectors becomes comma seperated selectors (i.e. the CSS body applied to each selector). Each selector in the set is translated based on the previous rule
  * `#{:h1 :h2}` -> `h1, h2 {...}`
* A vector of selectors becomes a space seperated collection (i.e. descendant selectors)
  * `[:div :h1]` -> `div h1 {...}`

* For child selectors do use a vector with `:>` 
  * `[:div :> :h1]` -> `div > h1`
* For adjacent sibling selectors use a vector with `:+`
  * `[:div :+ :p]` -> `div + h1`

If your exact use case is not covered, you can always pass in a single string which will be pass through to the final CSS with no change.

## Customization & Extension
Extend `radiant.core/css` to define your own style handler. Use `radiant.core/selector` to generate a CSS selector
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

 
