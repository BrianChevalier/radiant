goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__51598 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51599 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51599);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__51603 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51604 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51604);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51603);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51598);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__51620 = arguments.length;
switch (G__51620) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__51628 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51628,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51628,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__51649_51720 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__51650_51722 = null;
var count__51651_51723 = (0);
var i__51652_51724 = (0);
while(true){
if((i__51652_51724 < count__51651_51723)){
var vec__51673_51726 = chunk__51650_51722.cljs$core$IIndexed$_nth$arity$2(null,i__51652_51724);
var container_51727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51673_51726,(0),null);
var comp_51728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51673_51726,(1),null);
reagent.dom.re_render_component(comp_51728,container_51727);


var G__51732 = seq__51649_51720;
var G__51733 = chunk__51650_51722;
var G__51734 = count__51651_51723;
var G__51735 = (i__51652_51724 + (1));
seq__51649_51720 = G__51732;
chunk__51650_51722 = G__51733;
count__51651_51723 = G__51734;
i__51652_51724 = G__51735;
continue;
} else {
var temp__5735__auto___51736 = cljs.core.seq(seq__51649_51720);
if(temp__5735__auto___51736){
var seq__51649_51737__$1 = temp__5735__auto___51736;
if(cljs.core.chunked_seq_QMARK_(seq__51649_51737__$1)){
var c__4556__auto___51738 = cljs.core.chunk_first(seq__51649_51737__$1);
var G__51739 = cljs.core.chunk_rest(seq__51649_51737__$1);
var G__51740 = c__4556__auto___51738;
var G__51741 = cljs.core.count(c__4556__auto___51738);
var G__51742 = (0);
seq__51649_51720 = G__51739;
chunk__51650_51722 = G__51740;
count__51651_51723 = G__51741;
i__51652_51724 = G__51742;
continue;
} else {
var vec__51691_51743 = cljs.core.first(seq__51649_51737__$1);
var container_51744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51691_51743,(0),null);
var comp_51745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51691_51743,(1),null);
reagent.dom.re_render_component(comp_51745,container_51744);


var G__51746 = cljs.core.next(seq__51649_51737__$1);
var G__51747 = null;
var G__51748 = (0);
var G__51749 = (0);
seq__51649_51720 = G__51746;
chunk__51650_51722 = G__51747;
count__51651_51723 = G__51748;
i__51652_51724 = G__51749;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
