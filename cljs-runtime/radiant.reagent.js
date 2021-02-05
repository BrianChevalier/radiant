goog.provide('radiant.reagent');
if((typeof radiant !== 'undefined') && (typeof radiant.reagent !== 'undefined') && (typeof radiant.reagent.cache !== 'undefined')){
} else {
radiant.reagent.cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
radiant.reagent.generate_class = (function radiant$reagent$generate_class(selector,style){
if(cljs.core.empty_QMARK_(style)){
return null;
} else {
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var el = document.createElement("style");
(el.innerHTML = radiant.core.css.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cls","cls",-1270350575),k], null),selector,style));

document.head.appendChild(el);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(radiant.reagent.cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector,style], null),k);

return k;
}
});
radiant.reagent.get_class = (function radiant$reagent$get_class(selector,style){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(radiant.reagent.cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector,style], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return radiant.reagent.generate_class(selector,style);
}
});
radiant.reagent.attrs__GT_css = (function radiant$reagent$attrs__GT_css(attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (attrs__$1,selector){
if((!(cljs.core.contains_QMARK_(attrs__$1,selector)))){
return attrs__$1;
} else {
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs__$1,selector);
var class$ = radiant.reagent.get_class(selector,style);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs__$1,selector),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.str," ",class$);
}
}),attrs,cljs.core.keys(cljs.core.methods$(radiant.core.css)));
});
radiant.reagent.styled = (function radiant$reagent$styled(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55385 = arguments.length;
var i__4737__auto___55386 = (0);
while(true){
if((i__4737__auto___55386 < len__4736__auto___55385)){
args__4742__auto__.push((arguments[i__4737__auto___55386]));

var G__55387 = (i__4737__auto___55386 + (1));
i__4737__auto___55386 = G__55387;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return radiant.reagent.styled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(radiant.reagent.styled.cljs$core$IFn$_invoke$arity$variadic = (function (component,attrs,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,(((!(cljs.core.map_QMARK_(attrs))))?attrs:radiant.reagent.attrs__GT_css(attrs))], null),children);
}));

(radiant.reagent.styled.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(radiant.reagent.styled.cljs$lang$applyTo = (function (seq55379){
var G__55380 = cljs.core.first(seq55379);
var seq55379__$1 = cljs.core.next(seq55379);
var G__55381 = cljs.core.first(seq55379__$1);
var seq55379__$2 = cljs.core.next(seq55379__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55380,G__55381,seq55379__$2);
}));

radiant.reagent.a = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"a","a",-2123407586));
radiant.reagent.table = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"table","table",-564943036));
radiant.reagent.tbody = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"tbody","tbody",-80678300));
radiant.reagent.thead = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"thead","thead",-291875296));
radiant.reagent.tr = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"tr","tr",-1424774646));
radiant.reagent.th = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"th","th",-545608566));
radiant.reagent.td = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"td","td",1479933353));
radiant.reagent.div = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"div","div",1057191632));
radiant.reagent.span = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"span","span",1394872991));
radiant.reagent.input = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"input","input",556931961));
radiant.reagent.button = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"button","button",1456579943));
radiant.reagent.img = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"img","img",1442687358));
radiant.reagent.iframe = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"iframe","iframe",884422026));
radiant.reagent.code = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"code","code",1586293142));
radiant.reagent.pre = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"pre","pre",2118456869));
radiant.reagent.textarea = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(radiant.reagent.styled,new cljs.core.Keyword(null,"textarea","textarea",-650375824));

//# sourceMappingURL=radiant.reagent.js.map
