goog.provide('radiant.core');
/**
 * Normalize css keyword to string
 */
radiant.core.normalize_css_key = (function radiant$core$normalize_css_key(k){
if((k instanceof cljs.core.Symbol)){
return cljs.core.name(k);
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
if(typeof k === 'string'){
return k;
} else {
return null;
}
}
}
});
radiant.core.accepts_unitless_values = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 30, [new cljs.core.Keyword(null,"border-image-slice","border-image-slice",-4957056),null,new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"mask-box-outset","mask-box-outset",-1970885696),null,new cljs.core.Keyword(null,"richness","richness",-1270054206),null,new cljs.core.Keyword(null,"mask-border-width","mask-border-width",534762500),null,new cljs.core.Keyword(null,"speech-rate","speech-rate",-2086524604),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"columns","columns",1998437288),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"pitch-range","pitch-range",903372076),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"volume","volume",1900330799),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"flood-opacity","flood-opacity",-479030608),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"nav-index","nav-index",1552206581),null,new cljs.core.Keyword(null,"mask-border-outset","mask-border-outset",1342844056),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"shape-image-threshold","shape-image-threshold",-1978694824),null,new cljs.core.Keyword(null,"mask-box-width","mask-box-width",849107706),null,new cljs.core.Keyword(null,"font-size-adjust","font-size-adjust",-104156772),null,new cljs.core.Keyword(null,"counter-increment","counter-increment",-181725540),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"counter-reset","counter-reset",1170260511),null,new cljs.core.Keyword(null,"border-image-width","border-image-width",-478445793),null], null), null);
if((typeof radiant !== 'undefined') && (typeof radiant.core !== 'undefined') && (typeof radiant.core.normalize_css_value !== 'undefined')){
} else {
/**
 * Multimethod that allows processing some css properties
 * differently, converting the css value to a css string dispatches
 * on type by default.
 * Extend this multimethod to handle special css key cases. Will be passed
 * the CSS property as a clojure keyword and the value
 */
radiant.core.normalize_css_value = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55312 = cljs.core.get_global_hierarchy;
return (fexpr__55312.cljs$core$IFn$_invoke$arity$0 ? fexpr__55312.cljs$core$IFn$_invoke$arity$0() : fexpr__55312.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("radiant.core","normalize-css-value"),(function (k,_){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
radiant.core.normalize_css_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"content","content",15833224),(function (_,v){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join('');
}));
radiant.core.normalize_css_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),(function (_,v){
if((!(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,v)))){
return radiant.core.normalize_css_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),v);
} else {
return ["\"",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\" \"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.core.normalize_css_value,new cljs.core.Keyword(null,"default","default",-1987822328)),v)),"\""].join('');
}
}));
radiant.core.cons_QMARK_ = (function radiant$core$cons_QMARK_(x){
return (x instanceof cljs.core.Cons);
});
radiant.core.normalize_css_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v){
if(typeof v === 'string'){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
if((v instanceof cljs.core.Symbol)){
return cljs.core.name(v);
} else {
if(typeof v === 'number'){
if(cljs.core.truth_((radiant.core.accepts_unitless_values.cljs$core$IFn$_invoke$arity$1 ? radiant.core.accepts_unitless_values.cljs$core$IFn$_invoke$arity$1(k) : radiant.core.accepts_unitless_values.call(null,k)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
}
} else {
if(((cljs.core.list_QMARK_(v)) || (radiant.core.cons_QMARK_(v)))){
return [cljs.core.name(cljs.core.first(v)),"(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.core.normalize_css_value,cljs.core.first(v)),cljs.core.rest(v))),")"].join('');
} else {
if(cljs.core.vector_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.core.normalize_css_value,k),v));
} else {
return null;
}
}
}
}
}
}
}));
/**
 * Take a vector with a key-value pair and create css key: value
 *   pair for css string
 */
radiant.core.kv__GT_css_attrs = (function radiant$core$kv__GT_css_attrs(p__55313){
var vec__55314 = p__55313;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55314,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55314,(1),null);
return [radiant.core.normalize_css_key(k),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(radiant.core.normalize_css_value.cljs$core$IFn$_invoke$arity$2(k,v))].join('');
});
/**
 * Create the non-selector portion of a CSS map
 */
radiant.core.css_block = (function radiant$core$css_block(m){
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(radiant.core.kv__GT_css_attrs,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(m))),"}"].join('');
});
if((typeof radiant !== 'undefined') && (typeof radiant.core !== 'undefined') && (typeof radiant.core.selector !== 'undefined')){
} else {
/**
 * Create a CSS selector given a map. Dispatch on the set of keys given
 */
radiant.core.selector = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55317 = cljs.core.get_global_hierarchy;
return (fexpr__55317.cljs$core$IFn$_invoke$arity$0 ? fexpr__55317.cljs$core$IFn$_invoke$arity$0() : fexpr__55317.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("radiant.core","selector"),(function (sel){
return cljs.core.set(cljs.core.keys(sel));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
radiant.core.selector.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cls","cls",-1270350575),null], null), null),(function (sel){
var map__55318 = sel;
var map__55318__$1 = (((((!((map__55318 == null))))?(((((map__55318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55318):map__55318);
var cls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55318__$1,new cljs.core.Keyword(null,"cls","cls",-1270350575));
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)].join('');
}));
radiant.core.selector.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cls","cls",-1270350575),null,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),null], null), null),(function (sel){
var map__55320 = sel;
var map__55320__$1 = (((((!((map__55320 == null))))?(((((map__55320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55320):map__55320);
var cls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword(null,"cls","cls",-1270350575));
var pseudo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55320__$1,new cljs.core.Keyword(null,"pseudo","pseudo",851696982));
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo)].join('');
}));
radiant.core.selector.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),null], null), null),(function (sel){
var map__55322 = sel;
var map__55322__$1 = (((((!((map__55322 == null))))?(((((map__55322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55322):map__55322);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55322__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
if(cljs.core.set_QMARK_(tags)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(radiant.core.normalize_css_key,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(tags)));
} else {
if(cljs.core.vector_QMARK_(tags)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(radiant.core.normalize_css_key,tags));
} else {
if((!(cljs.core.coll_QMARK_(tags)))){
return radiant.core.normalize_css_key(tags);
} else {
return null;
}
}
}
}));
radiant.core.selector.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),null], null), null),(function (sel){
var map__55324 = sel;
var map__55324__$1 = (((((!((map__55324 == null))))?(((((map__55324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55324):map__55324);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55324__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var pseudo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55324__$1,new cljs.core.Keyword(null,"pseudo","pseudo",851696982));
if(cljs.core.set_QMARK_(tags)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",(function (){var iter__4529__auto__ = (function radiant$core$iter__55326(s__55327){
return (new cljs.core.LazySeq(null,(function (){
var s__55327__$1 = s__55327;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55327__$1);
if(temp__5735__auto__){
var s__55327__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55327__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55327__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55329 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55328 = (0);
while(true){
if((i__55328 < size__4528__auto__)){
var tag = cljs.core._nth(c__4527__auto__,i__55328);
cljs.core.chunk_append(b__55329,[radiant.core.normalize_css_key(tag),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo)].join(''));

var G__55382 = (i__55328 + (1));
i__55328 = G__55382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55329),radiant$core$iter__55326(cljs.core.chunk_rest(s__55327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55329),null);
}
} else {
var tag = cljs.core.first(s__55327__$2);
return cljs.core.cons([radiant.core.normalize_css_key(tag),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo)].join(''),radiant$core$iter__55326(cljs.core.rest(s__55327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tags);
})());
} else {
if(cljs.core.vector_QMARK_(tags)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__4529__auto__ = (function radiant$core$iter__55330(s__55331){
return (new cljs.core.LazySeq(null,(function (){
var s__55331__$1 = s__55331;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55331__$1);
if(temp__5735__auto__){
var s__55331__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55331__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55331__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55333 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55332 = (0);
while(true){
if((i__55332 < size__4528__auto__)){
var tag = cljs.core._nth(c__4527__auto__,i__55332);
cljs.core.chunk_append(b__55333,[radiant.core.normalize_css_key(tag),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo)].join(''));

var G__55383 = (i__55332 + (1));
i__55332 = G__55383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55333),radiant$core$iter__55330(cljs.core.chunk_rest(s__55331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55333),null);
}
} else {
var tag = cljs.core.first(s__55331__$2);
return cljs.core.cons([radiant.core.normalize_css_key(tag),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo)].join(''),radiant$core$iter__55330(cljs.core.rest(s__55331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tags);
})());
} else {
return null;
}
}
}));
if((typeof radiant !== 'undefined') && (typeof radiant.core !== 'undefined') && (typeof radiant.core.css !== 'undefined')){
} else {
/**
 * A function that dispatches on :style or a :style namespaced key
 * 
 * Extend this multimethod to add additional styles to extract from a hiccup tree
 * The function should take a CSS class selector `cls`, the dispatch key
 * (i.e. :style, :style/dark), and a map of key-value CSS styles
 */
radiant.core.css = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55334 = cljs.core.get_global_hierarchy;
return (fexpr__55334.cljs$core$IFn$_invoke$arity$0 ? fexpr__55334.cljs$core$IFn$_invoke$arity$0() : fexpr__55334.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("radiant.core","css"),(function() {
var G__55384 = null;
var G__55384__1 = (function (_){
return new cljs.core.Keyword("radiant.core","normalize","radiant.core/normalize",-2106921389);
});
var G__55384__3 = (function (_sel,k,_map){
return k;
});
G__55384 = function(_sel,k,_map){
switch(arguments.length){
case 1:
return G__55384__1.call(this,_sel);
case 3:
return G__55384__3.call(this,_sel,k,_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55384.cljs$core$IFn$_invoke$arity$1 = G__55384__1;
G__55384.cljs$core$IFn$_invoke$arity$3 = G__55384__3;
return G__55384;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("radiant.core","normalize","radiant.core/normalize",-2106921389),(function (m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__55335){
var vec__55336 = p__55335;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55336,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55336,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55339){
var vec__55340 = p__55339;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55340,(1),null);
return radiant.core.css.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),tag], null),k,v);
}),kv);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"style","style",-496642736),(function (sel,_,m){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(radiant.core.selector.cljs$core$IFn$_invoke$arity$1(sel)),radiant.core.css_block(m)].join('');
}));
radiant.core.pseudo = (function radiant$core$pseudo(sel,k,m){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(radiant.core.selector.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sel,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.name(k)))),radiant.core.css_block(m)].join('');
});
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","hover","style/hover",-366585246),(function (sel,k,m){
return radiant.core.pseudo(sel,k,m);
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","focus","style/focus",262667354),(function (sel,k,m){
return radiant.core.pseudo(sel,k,m);
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","visited","style/visited",-1532415008),(function (sel,k,m){
return radiant.core.pseudo(sel,k,m);
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","active","style/active",1719104515),(function (sel,k,m){
return radiant.core.pseudo(sel,k,m);
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","focus-visible","style/focus-visible",-261290354),(function (sel,k,m){
return radiant.core.pseudo(sel,k,m);
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","focus-within","style/focus-within",1764062610),(function (sel,k,m){
return radiant.core.pseudo(sel,k,m);
}));
radiant.core.prefers_color_scheme = (function radiant$core$prefers_color_scheme(sel,k,m){
return ["@media ","(prefers-color-scheme: ",cljs.core.name(k),")","{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(radiant.core.css.cljs$core$IFn$_invoke$arity$3(sel,new cljs.core.Keyword(null,"style","style",-496642736),m)),"}"].join('');
});
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","light","style/light",1760080652),(function (sel,k,m){
return radiant.core.prefers_color_scheme(sel,k,m);
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","dark","style/dark",1860594272),(function (sel,k,m){
return radiant.core.prefers_color_scheme(sel,k,m);
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","small","style/small",2009020543),(function (sel,_,m){
return ["@media ","screen and (max-width: 42rem)","{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(radiant.core.css.cljs$core$IFn$_invoke$arity$3(sel,new cljs.core.Keyword(null,"style","style",-496642736),m)),"}"].join('');
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","medium","style/medium",-1722428247),(function (sel,_,m){
return ["@media ","screen and (min-width: 42rem) and (max-width: 64rem)","{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(radiant.core.css.cljs$core$IFn$_invoke$arity$3(sel,new cljs.core.Keyword(null,"style","style",-496642736),m)),"}"].join('');
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","large","style/large",-84941649),(function (sel,_,m){
return ["@media ","screen and (min-width: 64rem)","{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(radiant.core.css.cljs$core$IFn$_invoke$arity$3(sel,new cljs.core.Keyword(null,"style","style",-496642736),m)),"}"].join('');
}));
radiant.core.animation_name = (function radiant$core$animation_name(sel){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cls","cls",-1270350575).cljs$core$IFn$_invoke$arity$1(sel)),"_keyframes"].join('');
});
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("style","keyframes","style/keyframes",-1596901533),(function (sel,_,m){
return ["@keyframes ",radiant.core.animation_name(sel),"{",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__4529__auto__ = (function radiant$core$iter__55353(s__55354){
return (new cljs.core.LazySeq(null,(function (){
var s__55354__$1 = s__55354;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55354__$1);
if(temp__5735__auto__){
var s__55354__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55354__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55354__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55356 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55355 = (0);
while(true){
if((i__55355 < size__4528__auto__)){
var vec__55357 = cljs.core._nth(c__4527__auto__,i__55355);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55357,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55357,(1),null);
cljs.core.chunk_append(b__55356,(function (){var k__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name(k):((typeof k === 'number')?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"%"].join(''):k
));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),radiant.core.css_block(v)].join('');
})());

var G__55389 = (i__55355 + (1));
i__55355 = G__55389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55356),radiant$core$iter__55353(cljs.core.chunk_rest(s__55354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55356),null);
}
} else {
var vec__55360 = cljs.core.first(s__55354__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55360,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55360,(1),null);
return cljs.core.cons((function (){var k__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name(k):((typeof k === 'number')?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"%"].join(''):k
));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),radiant.core.css_block(v)].join('');
})(),radiant$core$iter__55353(cljs.core.rest(s__55354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})()),"}"].join('');
}));
radiant.core.css.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2){
return "";
}));
/**
 * Inject an attribute in a css style.
 *   Used to inject a keyframe animation name
 */
radiant.core.inject_attr = (function radiant$core$inject_attr(sel,m){
if(((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"style","style",-496642736))) && (cljs.core.contains_QMARK_(m,new cljs.core.Keyword("style","keyframes","style/keyframes",-1596901533))))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"animation-name","animation-name",-302195330)], null),radiant.core.animation_name(sel));
} else {
return m;
}
});
radiant.core.remove_inline_styles = (function radiant$core$remove_inline_styles(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,cljs.core.keys(cljs.core.methods$(radiant.core.css)));
});
/**
 * Given a hiccup attribute map, returns produced CSS and the updated attribute
 *   map with the associated CSS styles removed from the map
 */
radiant.core.hiccup_attribute__GT_css = (function radiant$core$hiccup_attribute__GT_css(m){
var cls = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var m__$1 = radiant.core.inject_attr(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cls","cls",-1270350575),cls], null),m);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__4529__auto__ = (function radiant$core$hiccup_attribute__GT_css_$_iter__55363(s__55364){
return (new cljs.core.LazySeq(null,(function (){
var s__55364__$1 = s__55364;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55364__$1);
if(temp__5735__auto__){
var s__55364__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55364__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55364__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55366 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55365 = (0);
while(true){
if((i__55365 < size__4528__auto__)){
var vec__55367 = cljs.core._nth(c__4527__auto__,i__55365);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55367,(1),null);
cljs.core.chunk_append(b__55366,radiant.core.css.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cls","cls",-1270350575),cls], null),k,v));

var G__55390 = (i__55365 + (1));
i__55365 = G__55390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55366),radiant$core$hiccup_attribute__GT_css_$_iter__55363(cljs.core.chunk_rest(s__55364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55366),null);
}
} else {
var vec__55370 = cljs.core.first(s__55364__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55370,(1),null);
return cljs.core.cons(radiant.core.css.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cls","cls",-1270350575),cls], null),k,v),radiant$core$hiccup_attribute__GT_css_$_iter__55363(cljs.core.rest(s__55364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m__$1);
})()),new cljs.core.Keyword(null,"attributes","attributes",-74013604),radiant.core.remove_inline_styles(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cls))], null);
});
/**
 * Takes a vector and normalizes it to [:tag {attributes...} content...]
 */
radiant.core.normalize_hiccup_vector = (function radiant$core$normalize_hiccup_vector(v){
var tag = cljs.core.first(v);
var has_attributes_QMARK_ = cljs.core.map_QMARK_(cljs.core.second(v));
var attributes = ((has_attributes_QMARK_)?cljs.core.second(v):cljs.core.PersistentArrayMap.EMPTY);
var content = ((has_attributes_QMARK_)?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),v):cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),v));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attributes], null),content);
});
radiant.core.ignored_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null);
/**
 * Normalize a hiccup vector and produces css based on the style keys,
 *   and strips style keys and values from the hiccup structure.
 *   Returns map with hiccup vector and CSS string
 */
radiant.core.extract_styles = (function radiant$core$extract_styles(v){
var normal = radiant.core.normalize_hiccup_vector(v);
var tag = cljs.core.first(normal);
var attrs = cljs.core.second(normal);
var map__55373 = (cljs.core.truth_((function (){var or__4126__auto__ = (radiant.core.ignored_tags.cljs$core$IFn$_invoke$arity$1 ? radiant.core.ignored_tags.cljs$core$IFn$_invoke$arity$1(tag) : radiant.core.ignored_tags.call(null,tag));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.empty_QMARK_(attrs);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),attrs], null):radiant.core.hiccup_attribute__GT_css(attrs));
var map__55373__$1 = (((((!((map__55373 == null))))?(((((map__55373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55373):map__55373);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55373__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var hiccup = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(normal,(1),attributes);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),hiccup,new cljs.core.Keyword(null,"css","css",1135045163),css], null);
});
/**
 * Inspect the item, v. If it's an outer hiccup vector process the vector
 *   and build up the css. Otherwise just return the item
 */
radiant.core.inspect_item = (function radiant$core$inspect_item(a,v){
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.map_QMARK_(cljs.core.second(v))))){
var map__55375 = radiant.core.extract_styles(v);
var map__55375__$1 = (((((!((map__55375 == null))))?(((((map__55375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55375):map__55375);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.str,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(css),"\n"].join(''));

return hiccup;
} else {
return v;

}
});
/**
 * Traverse hiccup tree from the outside in.
 *   Accumulates a new hiccup structure with style attributes stripped
 *   and creates a css string
 */
radiant.core.extract_all_styles = (function radiant$core$extract_all_styles(v){
var css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),clojure.walk.prewalk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.core.inspect_item,css),v),new cljs.core.Keyword(null,"css","css",1135045163),clojure.string.trim(cljs.core.deref(css))], null);
});
/**
 * Extracts hiccup element styles and injects them in a top level div
 */
radiant.core.hoist_styles = (function radiant$core$hoist_styles(v){
var map__55377 = radiant.core.extract_all_styles(v);
var map__55377__$1 = (((((!((map__55377 == null))))?(((((map__55377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55377):map__55377);
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55377__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),css], null),hiccup], null);
});

//# sourceMappingURL=radiant.core.js.map
