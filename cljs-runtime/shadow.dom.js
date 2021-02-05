goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51849 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51849(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51853 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51853(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50703 = coll;
var G__50704 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50703,G__50704) : shadow.dom.lazy_native_coll_seq.call(null,G__50703,G__50704));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50733 = arguments.length;
switch (G__50733) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50751 = arguments.length;
switch (G__50751) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50761 = arguments.length;
switch (G__50761) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50773 = arguments.length;
switch (G__50773) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50797 = arguments.length;
switch (G__50797) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50820 = arguments.length;
switch (G__50820) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50833){if((e50833 instanceof Object)){
var e = e50833;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50833;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50838 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50839 = null;
var count__50840 = (0);
var i__50841 = (0);
while(true){
if((i__50841 < count__50840)){
var el = chunk__50839.cljs$core$IIndexed$_nth$arity$2(null,i__50841);
var handler_51891__$1 = ((function (seq__50838,chunk__50839,count__50840,i__50841,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50838,chunk__50839,count__50840,i__50841,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51891__$1);


var G__51895 = seq__50838;
var G__51896 = chunk__50839;
var G__51897 = count__50840;
var G__51898 = (i__50841 + (1));
seq__50838 = G__51895;
chunk__50839 = G__51896;
count__50840 = G__51897;
i__50841 = G__51898;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50838);
if(temp__5735__auto__){
var seq__50838__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50838__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50838__$1);
var G__51899 = cljs.core.chunk_rest(seq__50838__$1);
var G__51900 = c__4556__auto__;
var G__51901 = cljs.core.count(c__4556__auto__);
var G__51902 = (0);
seq__50838 = G__51899;
chunk__50839 = G__51900;
count__50840 = G__51901;
i__50841 = G__51902;
continue;
} else {
var el = cljs.core.first(seq__50838__$1);
var handler_51904__$1 = ((function (seq__50838,chunk__50839,count__50840,i__50841,el,seq__50838__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50838,chunk__50839,count__50840,i__50841,el,seq__50838__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51904__$1);


var G__51905 = cljs.core.next(seq__50838__$1);
var G__51906 = null;
var G__51907 = (0);
var G__51908 = (0);
seq__50838 = G__51905;
chunk__50839 = G__51906;
count__50840 = G__51907;
i__50841 = G__51908;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50865 = arguments.length;
switch (G__50865) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50888 = cljs.core.seq(events);
var chunk__50889 = null;
var count__50890 = (0);
var i__50891 = (0);
while(true){
if((i__50891 < count__50890)){
var vec__50903 = chunk__50889.cljs$core$IIndexed$_nth$arity$2(null,i__50891);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50903,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50903,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51917 = seq__50888;
var G__51918 = chunk__50889;
var G__51919 = count__50890;
var G__51920 = (i__50891 + (1));
seq__50888 = G__51917;
chunk__50889 = G__51918;
count__50890 = G__51919;
i__50891 = G__51920;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50888);
if(temp__5735__auto__){
var seq__50888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50888__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50888__$1);
var G__51921 = cljs.core.chunk_rest(seq__50888__$1);
var G__51922 = c__4556__auto__;
var G__51923 = cljs.core.count(c__4556__auto__);
var G__51924 = (0);
seq__50888 = G__51921;
chunk__50889 = G__51922;
count__50890 = G__51923;
i__50891 = G__51924;
continue;
} else {
var vec__50912 = cljs.core.first(seq__50888__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50912,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51925 = cljs.core.next(seq__50888__$1);
var G__51926 = null;
var G__51927 = (0);
var G__51928 = (0);
seq__50888 = G__51925;
chunk__50889 = G__51926;
count__50890 = G__51927;
i__50891 = G__51928;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50918 = cljs.core.seq(styles);
var chunk__50919 = null;
var count__50920 = (0);
var i__50921 = (0);
while(true){
if((i__50921 < count__50920)){
var vec__50944 = chunk__50919.cljs$core$IIndexed$_nth$arity$2(null,i__50921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50944,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51932 = seq__50918;
var G__51933 = chunk__50919;
var G__51934 = count__50920;
var G__51935 = (i__50921 + (1));
seq__50918 = G__51932;
chunk__50919 = G__51933;
count__50920 = G__51934;
i__50921 = G__51935;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50918);
if(temp__5735__auto__){
var seq__50918__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50918__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50918__$1);
var G__51936 = cljs.core.chunk_rest(seq__50918__$1);
var G__51937 = c__4556__auto__;
var G__51938 = cljs.core.count(c__4556__auto__);
var G__51939 = (0);
seq__50918 = G__51936;
chunk__50919 = G__51937;
count__50920 = G__51938;
i__50921 = G__51939;
continue;
} else {
var vec__50951 = cljs.core.first(seq__50918__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50951,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51940 = cljs.core.next(seq__50918__$1);
var G__51941 = null;
var G__51942 = (0);
var G__51943 = (0);
seq__50918 = G__51940;
chunk__50919 = G__51941;
count__50920 = G__51942;
i__50921 = G__51943;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50960_51944 = key;
var G__50960_51945__$1 = (((G__50960_51944 instanceof cljs.core.Keyword))?G__50960_51944.fqn:null);
switch (G__50960_51945__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51947 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_51947,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_51947,"aria-");
}
})())){
el.setAttribute(ks_51947,value);
} else {
(el[ks_51947] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50989){
var map__50990 = p__50989;
var map__50990__$1 = (((((!((map__50990 == null))))?(((((map__50990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50990):map__50990);
var props = map__50990__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50990__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50992 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50996 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50996,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50996;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51004 = arguments.length;
switch (G__51004) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51017){
var vec__51019 = p__51017;
var seq__51020 = cljs.core.seq(vec__51019);
var first__51021 = cljs.core.first(seq__51020);
var seq__51020__$1 = cljs.core.next(seq__51020);
var nn = first__51021;
var first__51021__$1 = cljs.core.first(seq__51020__$1);
var seq__51020__$2 = cljs.core.next(seq__51020__$1);
var np = first__51021__$1;
var nc = seq__51020__$2;
var node = vec__51019;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51024 = nn;
var G__51025 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51024,G__51025) : create_fn.call(null,G__51024,G__51025));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51029 = nn;
var G__51030 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51029,G__51030) : create_fn.call(null,G__51029,G__51030));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51034 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51034,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51034,(1),null);
var seq__51047_51964 = cljs.core.seq(node_children);
var chunk__51048_51965 = null;
var count__51049_51966 = (0);
var i__51050_51967 = (0);
while(true){
if((i__51050_51967 < count__51049_51966)){
var child_struct_51968 = chunk__51048_51965.cljs$core$IIndexed$_nth$arity$2(null,i__51050_51967);
var children_51969 = shadow.dom.dom_node(child_struct_51968);
if(cljs.core.seq_QMARK_(children_51969)){
var seq__51099_51970 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51969));
var chunk__51101_51971 = null;
var count__51102_51972 = (0);
var i__51103_51973 = (0);
while(true){
if((i__51103_51973 < count__51102_51972)){
var child_51974 = chunk__51101_51971.cljs$core$IIndexed$_nth$arity$2(null,i__51103_51973);
if(cljs.core.truth_(child_51974)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51974);


var G__51975 = seq__51099_51970;
var G__51976 = chunk__51101_51971;
var G__51977 = count__51102_51972;
var G__51978 = (i__51103_51973 + (1));
seq__51099_51970 = G__51975;
chunk__51101_51971 = G__51976;
count__51102_51972 = G__51977;
i__51103_51973 = G__51978;
continue;
} else {
var G__51979 = seq__51099_51970;
var G__51980 = chunk__51101_51971;
var G__51981 = count__51102_51972;
var G__51982 = (i__51103_51973 + (1));
seq__51099_51970 = G__51979;
chunk__51101_51971 = G__51980;
count__51102_51972 = G__51981;
i__51103_51973 = G__51982;
continue;
}
} else {
var temp__5735__auto___51983 = cljs.core.seq(seq__51099_51970);
if(temp__5735__auto___51983){
var seq__51099_51984__$1 = temp__5735__auto___51983;
if(cljs.core.chunked_seq_QMARK_(seq__51099_51984__$1)){
var c__4556__auto___51986 = cljs.core.chunk_first(seq__51099_51984__$1);
var G__51987 = cljs.core.chunk_rest(seq__51099_51984__$1);
var G__51988 = c__4556__auto___51986;
var G__51989 = cljs.core.count(c__4556__auto___51986);
var G__51990 = (0);
seq__51099_51970 = G__51987;
chunk__51101_51971 = G__51988;
count__51102_51972 = G__51989;
i__51103_51973 = G__51990;
continue;
} else {
var child_51991 = cljs.core.first(seq__51099_51984__$1);
if(cljs.core.truth_(child_51991)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51991);


var G__51992 = cljs.core.next(seq__51099_51984__$1);
var G__51993 = null;
var G__51994 = (0);
var G__51995 = (0);
seq__51099_51970 = G__51992;
chunk__51101_51971 = G__51993;
count__51102_51972 = G__51994;
i__51103_51973 = G__51995;
continue;
} else {
var G__51996 = cljs.core.next(seq__51099_51984__$1);
var G__51997 = null;
var G__51998 = (0);
var G__51999 = (0);
seq__51099_51970 = G__51996;
chunk__51101_51971 = G__51997;
count__51102_51972 = G__51998;
i__51103_51973 = G__51999;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51969);
}


var G__52000 = seq__51047_51964;
var G__52001 = chunk__51048_51965;
var G__52002 = count__51049_51966;
var G__52003 = (i__51050_51967 + (1));
seq__51047_51964 = G__52000;
chunk__51048_51965 = G__52001;
count__51049_51966 = G__52002;
i__51050_51967 = G__52003;
continue;
} else {
var temp__5735__auto___52004 = cljs.core.seq(seq__51047_51964);
if(temp__5735__auto___52004){
var seq__51047_52005__$1 = temp__5735__auto___52004;
if(cljs.core.chunked_seq_QMARK_(seq__51047_52005__$1)){
var c__4556__auto___52006 = cljs.core.chunk_first(seq__51047_52005__$1);
var G__52007 = cljs.core.chunk_rest(seq__51047_52005__$1);
var G__52008 = c__4556__auto___52006;
var G__52009 = cljs.core.count(c__4556__auto___52006);
var G__52010 = (0);
seq__51047_51964 = G__52007;
chunk__51048_51965 = G__52008;
count__51049_51966 = G__52009;
i__51050_51967 = G__52010;
continue;
} else {
var child_struct_52011 = cljs.core.first(seq__51047_52005__$1);
var children_52012 = shadow.dom.dom_node(child_struct_52011);
if(cljs.core.seq_QMARK_(children_52012)){
var seq__51128_52013 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52012));
var chunk__51130_52014 = null;
var count__51131_52015 = (0);
var i__51132_52016 = (0);
while(true){
if((i__51132_52016 < count__51131_52015)){
var child_52019 = chunk__51130_52014.cljs$core$IIndexed$_nth$arity$2(null,i__51132_52016);
if(cljs.core.truth_(child_52019)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52019);


var G__52021 = seq__51128_52013;
var G__52022 = chunk__51130_52014;
var G__52023 = count__51131_52015;
var G__52024 = (i__51132_52016 + (1));
seq__51128_52013 = G__52021;
chunk__51130_52014 = G__52022;
count__51131_52015 = G__52023;
i__51132_52016 = G__52024;
continue;
} else {
var G__52026 = seq__51128_52013;
var G__52027 = chunk__51130_52014;
var G__52028 = count__51131_52015;
var G__52029 = (i__51132_52016 + (1));
seq__51128_52013 = G__52026;
chunk__51130_52014 = G__52027;
count__51131_52015 = G__52028;
i__51132_52016 = G__52029;
continue;
}
} else {
var temp__5735__auto___52030__$1 = cljs.core.seq(seq__51128_52013);
if(temp__5735__auto___52030__$1){
var seq__51128_52031__$1 = temp__5735__auto___52030__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51128_52031__$1)){
var c__4556__auto___52032 = cljs.core.chunk_first(seq__51128_52031__$1);
var G__52033 = cljs.core.chunk_rest(seq__51128_52031__$1);
var G__52034 = c__4556__auto___52032;
var G__52035 = cljs.core.count(c__4556__auto___52032);
var G__52036 = (0);
seq__51128_52013 = G__52033;
chunk__51130_52014 = G__52034;
count__51131_52015 = G__52035;
i__51132_52016 = G__52036;
continue;
} else {
var child_52037 = cljs.core.first(seq__51128_52031__$1);
if(cljs.core.truth_(child_52037)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52037);


var G__52038 = cljs.core.next(seq__51128_52031__$1);
var G__52039 = null;
var G__52040 = (0);
var G__52041 = (0);
seq__51128_52013 = G__52038;
chunk__51130_52014 = G__52039;
count__51131_52015 = G__52040;
i__51132_52016 = G__52041;
continue;
} else {
var G__52043 = cljs.core.next(seq__51128_52031__$1);
var G__52044 = null;
var G__52045 = (0);
var G__52046 = (0);
seq__51128_52013 = G__52043;
chunk__51130_52014 = G__52044;
count__51131_52015 = G__52045;
i__51132_52016 = G__52046;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52012);
}


var G__52047 = cljs.core.next(seq__51047_52005__$1);
var G__52048 = null;
var G__52049 = (0);
var G__52050 = (0);
seq__51047_51964 = G__52047;
chunk__51048_51965 = G__52048;
count__51049_51966 = G__52049;
i__51050_51967 = G__52050;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51199 = cljs.core.seq(node);
var chunk__51200 = null;
var count__51201 = (0);
var i__51202 = (0);
while(true){
if((i__51202 < count__51201)){
var n = chunk__51200.cljs$core$IIndexed$_nth$arity$2(null,i__51202);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52056 = seq__51199;
var G__52057 = chunk__51200;
var G__52058 = count__51201;
var G__52059 = (i__51202 + (1));
seq__51199 = G__52056;
chunk__51200 = G__52057;
count__51201 = G__52058;
i__51202 = G__52059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51199);
if(temp__5735__auto__){
var seq__51199__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51199__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51199__$1);
var G__52061 = cljs.core.chunk_rest(seq__51199__$1);
var G__52062 = c__4556__auto__;
var G__52063 = cljs.core.count(c__4556__auto__);
var G__52064 = (0);
seq__51199 = G__52061;
chunk__51200 = G__52062;
count__51201 = G__52063;
i__51202 = G__52064;
continue;
} else {
var n = cljs.core.first(seq__51199__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52065 = cljs.core.next(seq__51199__$1);
var G__52066 = null;
var G__52067 = (0);
var G__52068 = (0);
seq__51199 = G__52065;
chunk__51200 = G__52066;
count__51201 = G__52067;
i__51202 = G__52068;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51223 = arguments.length;
switch (G__51223) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51230 = arguments.length;
switch (G__51230) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51244 = arguments.length;
switch (G__51244) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52082 = arguments.length;
var i__4737__auto___52083 = (0);
while(true){
if((i__4737__auto___52083 < len__4736__auto___52082)){
args__4742__auto__.push((arguments[i__4737__auto___52083]));

var G__52084 = (i__4737__auto___52083 + (1));
i__4737__auto___52083 = G__52084;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51257_52085 = cljs.core.seq(nodes);
var chunk__51258_52086 = null;
var count__51259_52087 = (0);
var i__51260_52088 = (0);
while(true){
if((i__51260_52088 < count__51259_52087)){
var node_52089 = chunk__51258_52086.cljs$core$IIndexed$_nth$arity$2(null,i__51260_52088);
fragment.appendChild(shadow.dom._to_dom(node_52089));


var G__52090 = seq__51257_52085;
var G__52091 = chunk__51258_52086;
var G__52092 = count__51259_52087;
var G__52093 = (i__51260_52088 + (1));
seq__51257_52085 = G__52090;
chunk__51258_52086 = G__52091;
count__51259_52087 = G__52092;
i__51260_52088 = G__52093;
continue;
} else {
var temp__5735__auto___52094 = cljs.core.seq(seq__51257_52085);
if(temp__5735__auto___52094){
var seq__51257_52095__$1 = temp__5735__auto___52094;
if(cljs.core.chunked_seq_QMARK_(seq__51257_52095__$1)){
var c__4556__auto___52096 = cljs.core.chunk_first(seq__51257_52095__$1);
var G__52097 = cljs.core.chunk_rest(seq__51257_52095__$1);
var G__52098 = c__4556__auto___52096;
var G__52099 = cljs.core.count(c__4556__auto___52096);
var G__52100 = (0);
seq__51257_52085 = G__52097;
chunk__51258_52086 = G__52098;
count__51259_52087 = G__52099;
i__51260_52088 = G__52100;
continue;
} else {
var node_52101 = cljs.core.first(seq__51257_52095__$1);
fragment.appendChild(shadow.dom._to_dom(node_52101));


var G__52102 = cljs.core.next(seq__51257_52095__$1);
var G__52103 = null;
var G__52104 = (0);
var G__52105 = (0);
seq__51257_52085 = G__52102;
chunk__51258_52086 = G__52103;
count__51259_52087 = G__52104;
i__51260_52088 = G__52105;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51255){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51255));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51272_52109 = cljs.core.seq(scripts);
var chunk__51273_52110 = null;
var count__51274_52111 = (0);
var i__51275_52113 = (0);
while(true){
if((i__51275_52113 < count__51274_52111)){
var vec__51285_52114 = chunk__51273_52110.cljs$core$IIndexed$_nth$arity$2(null,i__51275_52113);
var script_tag_52115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51285_52114,(0),null);
var script_body_52116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51285_52114,(1),null);
eval(script_body_52116);


var G__52117 = seq__51272_52109;
var G__52118 = chunk__51273_52110;
var G__52119 = count__51274_52111;
var G__52120 = (i__51275_52113 + (1));
seq__51272_52109 = G__52117;
chunk__51273_52110 = G__52118;
count__51274_52111 = G__52119;
i__51275_52113 = G__52120;
continue;
} else {
var temp__5735__auto___52121 = cljs.core.seq(seq__51272_52109);
if(temp__5735__auto___52121){
var seq__51272_52122__$1 = temp__5735__auto___52121;
if(cljs.core.chunked_seq_QMARK_(seq__51272_52122__$1)){
var c__4556__auto___52123 = cljs.core.chunk_first(seq__51272_52122__$1);
var G__52128 = cljs.core.chunk_rest(seq__51272_52122__$1);
var G__52129 = c__4556__auto___52123;
var G__52130 = cljs.core.count(c__4556__auto___52123);
var G__52131 = (0);
seq__51272_52109 = G__52128;
chunk__51273_52110 = G__52129;
count__51274_52111 = G__52130;
i__51275_52113 = G__52131;
continue;
} else {
var vec__51290_52132 = cljs.core.first(seq__51272_52122__$1);
var script_tag_52133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290_52132,(0),null);
var script_body_52134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290_52132,(1),null);
eval(script_body_52134);


var G__52136 = cljs.core.next(seq__51272_52122__$1);
var G__52137 = null;
var G__52138 = (0);
var G__52139 = (0);
seq__51272_52109 = G__52136;
chunk__51273_52110 = G__52137;
count__51274_52111 = G__52138;
i__51275_52113 = G__52139;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51293){
var vec__51294 = p__51293;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51294,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51294,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51302 = arguments.length;
switch (G__51302) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51331 = cljs.core.seq(style_keys);
var chunk__51332 = null;
var count__51333 = (0);
var i__51334 = (0);
while(true){
if((i__51334 < count__51333)){
var it = chunk__51332.cljs$core$IIndexed$_nth$arity$2(null,i__51334);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52151 = seq__51331;
var G__52152 = chunk__51332;
var G__52153 = count__51333;
var G__52154 = (i__51334 + (1));
seq__51331 = G__52151;
chunk__51332 = G__52152;
count__51333 = G__52153;
i__51334 = G__52154;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51331);
if(temp__5735__auto__){
var seq__51331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51331__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51331__$1);
var G__52158 = cljs.core.chunk_rest(seq__51331__$1);
var G__52159 = c__4556__auto__;
var G__52160 = cljs.core.count(c__4556__auto__);
var G__52161 = (0);
seq__51331 = G__52158;
chunk__51332 = G__52159;
count__51333 = G__52160;
i__51334 = G__52161;
continue;
} else {
var it = cljs.core.first(seq__51331__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52163 = cljs.core.next(seq__51331__$1);
var G__52164 = null;
var G__52165 = (0);
var G__52166 = (0);
seq__51331 = G__52163;
chunk__51332 = G__52164;
count__51333 = G__52165;
i__51334 = G__52166;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51348,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51358 = k51348;
var G__51358__$1 = (((G__51358 instanceof cljs.core.Keyword))?G__51358.fqn:null);
switch (G__51358__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51348,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51361){
var vec__51363 = p__51361;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51363,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51363,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51347){
var self__ = this;
var G__51347__$1 = this;
return (new cljs.core.RecordIter((0),G__51347__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51349,other51350){
var self__ = this;
var this51349__$1 = this;
return (((!((other51350 == null)))) && ((this51349__$1.constructor === other51350.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51349__$1.x,other51350.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51349__$1.y,other51350.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51349__$1.__extmap,other51350.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51347){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51390 = cljs.core.keyword_identical_QMARK_;
var expr__51391 = k__4388__auto__;
if(cljs.core.truth_((pred__51390.cljs$core$IFn$_invoke$arity$2 ? pred__51390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__51391) : pred__51390.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__51391)))){
return (new shadow.dom.Coordinate(G__51347,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51390.cljs$core$IFn$_invoke$arity$2 ? pred__51390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__51391) : pred__51390.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__51391)))){
return (new shadow.dom.Coordinate(self__.x,G__51347,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51347),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51347){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51347,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51351){
var extmap__4419__auto__ = (function (){var G__51402 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51351,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51351)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51402);
} else {
return G__51402;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51351),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51351),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51419,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51429 = k51419;
var G__51429__$1 = (((G__51429 instanceof cljs.core.Keyword))?G__51429.fqn:null);
switch (G__51429__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51419,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51432){
var vec__51433 = p__51432;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51418){
var self__ = this;
var G__51418__$1 = this;
return (new cljs.core.RecordIter((0),G__51418__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51420,other51421){
var self__ = this;
var this51420__$1 = this;
return (((!((other51421 == null)))) && ((this51420__$1.constructor === other51421.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51420__$1.w,other51421.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51420__$1.h,other51421.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51420__$1.__extmap,other51421.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51418){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51451 = cljs.core.keyword_identical_QMARK_;
var expr__51452 = k__4388__auto__;
if(cljs.core.truth_((pred__51451.cljs$core$IFn$_invoke$arity$2 ? pred__51451.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51452) : pred__51451.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51452)))){
return (new shadow.dom.Size(G__51418,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51451.cljs$core$IFn$_invoke$arity$2 ? pred__51451.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51452) : pred__51451.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51452)))){
return (new shadow.dom.Size(self__.w,G__51418,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51418),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51418){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51418,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51424){
var extmap__4419__auto__ = (function (){var G__51464 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51424,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51424)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51464);
} else {
return G__51464;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51424),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51424),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__52226 = (i + (1));
var G__52227 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52226;
ret = G__52227;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51500){
var vec__51502 = p__51500;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51502,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51513 = arguments.length;
switch (G__51513) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52237 = ps;
var G__52238 = (i + (1));
el__$1 = G__52237;
i = G__52238;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51566 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51566,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51566,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51566,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51570_52242 = cljs.core.seq(props);
var chunk__51571_52243 = null;
var count__51572_52244 = (0);
var i__51573_52245 = (0);
while(true){
if((i__51573_52245 < count__51572_52244)){
var vec__51590_52246 = chunk__51571_52243.cljs$core$IIndexed$_nth$arity$2(null,i__51573_52245);
var k_52247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51590_52246,(0),null);
var v_52248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51590_52246,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_52247);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52247),v_52248);


var G__52249 = seq__51570_52242;
var G__52250 = chunk__51571_52243;
var G__52251 = count__51572_52244;
var G__52252 = (i__51573_52245 + (1));
seq__51570_52242 = G__52249;
chunk__51571_52243 = G__52250;
count__51572_52244 = G__52251;
i__51573_52245 = G__52252;
continue;
} else {
var temp__5735__auto___52253 = cljs.core.seq(seq__51570_52242);
if(temp__5735__auto___52253){
var seq__51570_52254__$1 = temp__5735__auto___52253;
if(cljs.core.chunked_seq_QMARK_(seq__51570_52254__$1)){
var c__4556__auto___52255 = cljs.core.chunk_first(seq__51570_52254__$1);
var G__52256 = cljs.core.chunk_rest(seq__51570_52254__$1);
var G__52257 = c__4556__auto___52255;
var G__52258 = cljs.core.count(c__4556__auto___52255);
var G__52259 = (0);
seq__51570_52242 = G__52256;
chunk__51571_52243 = G__52257;
count__51572_52244 = G__52258;
i__51573_52245 = G__52259;
continue;
} else {
var vec__51606_52260 = cljs.core.first(seq__51570_52254__$1);
var k_52261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51606_52260,(0),null);
var v_52262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51606_52260,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_52261);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52261),v_52262);


var G__52263 = cljs.core.next(seq__51570_52254__$1);
var G__52264 = null;
var G__52265 = (0);
var G__52266 = (0);
seq__51570_52242 = G__52263;
chunk__51571_52243 = G__52264;
count__51572_52244 = G__52265;
i__51573_52245 = G__52266;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51624 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51624,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51624,(1),null);
var seq__51631_52268 = cljs.core.seq(node_children);
var chunk__51633_52269 = null;
var count__51634_52270 = (0);
var i__51635_52271 = (0);
while(true){
if((i__51635_52271 < count__51634_52270)){
var child_struct_52275 = chunk__51633_52269.cljs$core$IIndexed$_nth$arity$2(null,i__51635_52271);
if((!((child_struct_52275 == null)))){
if(typeof child_struct_52275 === 'string'){
var text_52276 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52276),child_struct_52275].join(''));
} else {
var children_52277 = shadow.dom.svg_node(child_struct_52275);
if(cljs.core.seq_QMARK_(children_52277)){
var seq__51704_52278 = cljs.core.seq(children_52277);
var chunk__51706_52279 = null;
var count__51707_52280 = (0);
var i__51708_52281 = (0);
while(true){
if((i__51708_52281 < count__51707_52280)){
var child_52282 = chunk__51706_52279.cljs$core$IIndexed$_nth$arity$2(null,i__51708_52281);
if(cljs.core.truth_(child_52282)){
node.appendChild(child_52282);


var G__52283 = seq__51704_52278;
var G__52284 = chunk__51706_52279;
var G__52285 = count__51707_52280;
var G__52286 = (i__51708_52281 + (1));
seq__51704_52278 = G__52283;
chunk__51706_52279 = G__52284;
count__51707_52280 = G__52285;
i__51708_52281 = G__52286;
continue;
} else {
var G__52287 = seq__51704_52278;
var G__52288 = chunk__51706_52279;
var G__52289 = count__51707_52280;
var G__52290 = (i__51708_52281 + (1));
seq__51704_52278 = G__52287;
chunk__51706_52279 = G__52288;
count__51707_52280 = G__52289;
i__51708_52281 = G__52290;
continue;
}
} else {
var temp__5735__auto___52293 = cljs.core.seq(seq__51704_52278);
if(temp__5735__auto___52293){
var seq__51704_52295__$1 = temp__5735__auto___52293;
if(cljs.core.chunked_seq_QMARK_(seq__51704_52295__$1)){
var c__4556__auto___52296 = cljs.core.chunk_first(seq__51704_52295__$1);
var G__52297 = cljs.core.chunk_rest(seq__51704_52295__$1);
var G__52298 = c__4556__auto___52296;
var G__52299 = cljs.core.count(c__4556__auto___52296);
var G__52300 = (0);
seq__51704_52278 = G__52297;
chunk__51706_52279 = G__52298;
count__51707_52280 = G__52299;
i__51708_52281 = G__52300;
continue;
} else {
var child_52301 = cljs.core.first(seq__51704_52295__$1);
if(cljs.core.truth_(child_52301)){
node.appendChild(child_52301);


var G__52302 = cljs.core.next(seq__51704_52295__$1);
var G__52303 = null;
var G__52304 = (0);
var G__52305 = (0);
seq__51704_52278 = G__52302;
chunk__51706_52279 = G__52303;
count__51707_52280 = G__52304;
i__51708_52281 = G__52305;
continue;
} else {
var G__52306 = cljs.core.next(seq__51704_52295__$1);
var G__52307 = null;
var G__52308 = (0);
var G__52309 = (0);
seq__51704_52278 = G__52306;
chunk__51706_52279 = G__52307;
count__51707_52280 = G__52308;
i__51708_52281 = G__52309;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52277);
}
}


var G__52310 = seq__51631_52268;
var G__52311 = chunk__51633_52269;
var G__52312 = count__51634_52270;
var G__52313 = (i__51635_52271 + (1));
seq__51631_52268 = G__52310;
chunk__51633_52269 = G__52311;
count__51634_52270 = G__52312;
i__51635_52271 = G__52313;
continue;
} else {
var G__52314 = seq__51631_52268;
var G__52315 = chunk__51633_52269;
var G__52316 = count__51634_52270;
var G__52317 = (i__51635_52271 + (1));
seq__51631_52268 = G__52314;
chunk__51633_52269 = G__52315;
count__51634_52270 = G__52316;
i__51635_52271 = G__52317;
continue;
}
} else {
var temp__5735__auto___52318 = cljs.core.seq(seq__51631_52268);
if(temp__5735__auto___52318){
var seq__51631_52319__$1 = temp__5735__auto___52318;
if(cljs.core.chunked_seq_QMARK_(seq__51631_52319__$1)){
var c__4556__auto___52320 = cljs.core.chunk_first(seq__51631_52319__$1);
var G__52321 = cljs.core.chunk_rest(seq__51631_52319__$1);
var G__52322 = c__4556__auto___52320;
var G__52323 = cljs.core.count(c__4556__auto___52320);
var G__52324 = (0);
seq__51631_52268 = G__52321;
chunk__51633_52269 = G__52322;
count__51634_52270 = G__52323;
i__51635_52271 = G__52324;
continue;
} else {
var child_struct_52325 = cljs.core.first(seq__51631_52319__$1);
if((!((child_struct_52325 == null)))){
if(typeof child_struct_52325 === 'string'){
var text_52326 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52326),child_struct_52325].join(''));
} else {
var children_52327 = shadow.dom.svg_node(child_struct_52325);
if(cljs.core.seq_QMARK_(children_52327)){
var seq__51756_52328 = cljs.core.seq(children_52327);
var chunk__51758_52329 = null;
var count__51759_52330 = (0);
var i__51760_52331 = (0);
while(true){
if((i__51760_52331 < count__51759_52330)){
var child_52332 = chunk__51758_52329.cljs$core$IIndexed$_nth$arity$2(null,i__51760_52331);
if(cljs.core.truth_(child_52332)){
node.appendChild(child_52332);


var G__52333 = seq__51756_52328;
var G__52334 = chunk__51758_52329;
var G__52335 = count__51759_52330;
var G__52336 = (i__51760_52331 + (1));
seq__51756_52328 = G__52333;
chunk__51758_52329 = G__52334;
count__51759_52330 = G__52335;
i__51760_52331 = G__52336;
continue;
} else {
var G__52337 = seq__51756_52328;
var G__52338 = chunk__51758_52329;
var G__52339 = count__51759_52330;
var G__52340 = (i__51760_52331 + (1));
seq__51756_52328 = G__52337;
chunk__51758_52329 = G__52338;
count__51759_52330 = G__52339;
i__51760_52331 = G__52340;
continue;
}
} else {
var temp__5735__auto___52341__$1 = cljs.core.seq(seq__51756_52328);
if(temp__5735__auto___52341__$1){
var seq__51756_52342__$1 = temp__5735__auto___52341__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51756_52342__$1)){
var c__4556__auto___52343 = cljs.core.chunk_first(seq__51756_52342__$1);
var G__52344 = cljs.core.chunk_rest(seq__51756_52342__$1);
var G__52345 = c__4556__auto___52343;
var G__52346 = cljs.core.count(c__4556__auto___52343);
var G__52347 = (0);
seq__51756_52328 = G__52344;
chunk__51758_52329 = G__52345;
count__51759_52330 = G__52346;
i__51760_52331 = G__52347;
continue;
} else {
var child_52348 = cljs.core.first(seq__51756_52342__$1);
if(cljs.core.truth_(child_52348)){
node.appendChild(child_52348);


var G__52349 = cljs.core.next(seq__51756_52342__$1);
var G__52350 = null;
var G__52351 = (0);
var G__52352 = (0);
seq__51756_52328 = G__52349;
chunk__51758_52329 = G__52350;
count__51759_52330 = G__52351;
i__51760_52331 = G__52352;
continue;
} else {
var G__52353 = cljs.core.next(seq__51756_52342__$1);
var G__52354 = null;
var G__52355 = (0);
var G__52356 = (0);
seq__51756_52328 = G__52353;
chunk__51758_52329 = G__52354;
count__51759_52330 = G__52355;
i__51760_52331 = G__52356;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52327);
}
}


var G__52357 = cljs.core.next(seq__51631_52319__$1);
var G__52358 = null;
var G__52359 = (0);
var G__52360 = (0);
seq__51631_52268 = G__52357;
chunk__51633_52269 = G__52358;
count__51634_52270 = G__52359;
i__51635_52271 = G__52360;
continue;
} else {
var G__52363 = cljs.core.next(seq__51631_52319__$1);
var G__52364 = null;
var G__52365 = (0);
var G__52366 = (0);
seq__51631_52268 = G__52363;
chunk__51633_52269 = G__52364;
count__51634_52270 = G__52365;
i__51635_52271 = G__52366;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52367 = arguments.length;
var i__4737__auto___52368 = (0);
while(true){
if((i__4737__auto___52368 < len__4736__auto___52367)){
args__4742__auto__.push((arguments[i__4737__auto___52368]));

var G__52369 = (i__4737__auto___52368 + (1));
i__4737__auto___52368 = G__52369;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51787){
var G__51788 = cljs.core.first(seq51787);
var seq51787__$1 = cljs.core.next(seq51787);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51788,seq51787__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51798 = arguments.length;
switch (G__51798) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__46537__auto___52375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_51812){
var state_val_51813 = (state_51812[(1)]);
if((state_val_51813 === (1))){
var state_51812__$1 = state_51812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51812__$1,(2),once_or_cleanup);
} else {
if((state_val_51813 === (2))){
var inst_51808 = (state_51812[(2)]);
var inst_51810 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51812__$1 = (function (){var statearr_51817 = state_51812;
(statearr_51817[(7)] = inst_51808);

return statearr_51817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51812__$1,inst_51810);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45830__auto__ = null;
var shadow$dom$state_machine__45830__auto____0 = (function (){
var statearr_51819 = [null,null,null,null,null,null,null,null];
(statearr_51819[(0)] = shadow$dom$state_machine__45830__auto__);

(statearr_51819[(1)] = (1));

return statearr_51819;
});
var shadow$dom$state_machine__45830__auto____1 = (function (state_51812){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_51812);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e51821){var ex__45833__auto__ = e51821;
var statearr_51824_52377 = state_51812;
(statearr_51824_52377[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_51812[(4)]))){
var statearr_51826_52378 = state_51812;
(statearr_51826_52378[(1)] = cljs.core.first((state_51812[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52380 = state_51812;
state_51812 = G__52380;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
shadow$dom$state_machine__45830__auto__ = function(state_51812){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45830__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45830__auto____1.call(this,state_51812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45830__auto____0;
shadow$dom$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45830__auto____1;
return shadow$dom$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_51831 = f__46538__auto__();
(statearr_51831[(6)] = c__46537__auto___52375);

return statearr_51831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
