goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54284){
var map__54286 = p__54284;
var map__54286__$1 = (((((!((map__54286 == null))))?(((((map__54286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54286):map__54286);
var m = map__54286__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54289_54501 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54290_54502 = null;
var count__54291_54503 = (0);
var i__54292_54504 = (0);
while(true){
if((i__54292_54504 < count__54291_54503)){
var f_54505 = chunk__54290_54502.cljs$core$IIndexed$_nth$arity$2(null,i__54292_54504);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54505], 0));


var G__54508 = seq__54289_54501;
var G__54509 = chunk__54290_54502;
var G__54510 = count__54291_54503;
var G__54511 = (i__54292_54504 + (1));
seq__54289_54501 = G__54508;
chunk__54290_54502 = G__54509;
count__54291_54503 = G__54510;
i__54292_54504 = G__54511;
continue;
} else {
var temp__5735__auto___54514 = cljs.core.seq(seq__54289_54501);
if(temp__5735__auto___54514){
var seq__54289_54515__$1 = temp__5735__auto___54514;
if(cljs.core.chunked_seq_QMARK_(seq__54289_54515__$1)){
var c__4556__auto___54516 = cljs.core.chunk_first(seq__54289_54515__$1);
var G__54517 = cljs.core.chunk_rest(seq__54289_54515__$1);
var G__54518 = c__4556__auto___54516;
var G__54519 = cljs.core.count(c__4556__auto___54516);
var G__54520 = (0);
seq__54289_54501 = G__54517;
chunk__54290_54502 = G__54518;
count__54291_54503 = G__54519;
i__54292_54504 = G__54520;
continue;
} else {
var f_54521 = cljs.core.first(seq__54289_54515__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54521], 0));


var G__54522 = cljs.core.next(seq__54289_54515__$1);
var G__54523 = null;
var G__54524 = (0);
var G__54525 = (0);
seq__54289_54501 = G__54522;
chunk__54290_54502 = G__54523;
count__54291_54503 = G__54524;
i__54292_54504 = G__54525;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54526 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54526], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54526)))?cljs.core.second(arglists_54526):arglists_54526)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54294_54527 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54295_54528 = null;
var count__54296_54529 = (0);
var i__54297_54530 = (0);
while(true){
if((i__54297_54530 < count__54296_54529)){
var vec__54311_54531 = chunk__54295_54528.cljs$core$IIndexed$_nth$arity$2(null,i__54297_54530);
var name_54532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54311_54531,(0),null);
var map__54314_54533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54311_54531,(1),null);
var map__54314_54534__$1 = (((((!((map__54314_54533 == null))))?(((((map__54314_54533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54314_54533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54314_54533):map__54314_54533);
var doc_54535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54314_54534__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54314_54534__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54532], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54536], 0));

if(cljs.core.truth_(doc_54535)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54535], 0));
} else {
}


var G__54537 = seq__54294_54527;
var G__54538 = chunk__54295_54528;
var G__54539 = count__54296_54529;
var G__54540 = (i__54297_54530 + (1));
seq__54294_54527 = G__54537;
chunk__54295_54528 = G__54538;
count__54296_54529 = G__54539;
i__54297_54530 = G__54540;
continue;
} else {
var temp__5735__auto___54541 = cljs.core.seq(seq__54294_54527);
if(temp__5735__auto___54541){
var seq__54294_54542__$1 = temp__5735__auto___54541;
if(cljs.core.chunked_seq_QMARK_(seq__54294_54542__$1)){
var c__4556__auto___54543 = cljs.core.chunk_first(seq__54294_54542__$1);
var G__54544 = cljs.core.chunk_rest(seq__54294_54542__$1);
var G__54545 = c__4556__auto___54543;
var G__54546 = cljs.core.count(c__4556__auto___54543);
var G__54547 = (0);
seq__54294_54527 = G__54544;
chunk__54295_54528 = G__54545;
count__54296_54529 = G__54546;
i__54297_54530 = G__54547;
continue;
} else {
var vec__54318_54548 = cljs.core.first(seq__54294_54542__$1);
var name_54549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54318_54548,(0),null);
var map__54321_54550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54318_54548,(1),null);
var map__54321_54551__$1 = (((((!((map__54321_54550 == null))))?(((((map__54321_54550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54321_54550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54321_54550):map__54321_54550);
var doc_54552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54321_54551__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54321_54551__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54549], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54553], 0));

if(cljs.core.truth_(doc_54552)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54552], 0));
} else {
}


var G__54554 = cljs.core.next(seq__54294_54542__$1);
var G__54555 = null;
var G__54556 = (0);
var G__54557 = (0);
seq__54294_54527 = G__54554;
chunk__54295_54528 = G__54555;
count__54296_54529 = G__54556;
i__54297_54530 = G__54557;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54323 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54324 = null;
var count__54325 = (0);
var i__54326 = (0);
while(true){
if((i__54326 < count__54325)){
var role = chunk__54324.cljs$core$IIndexed$_nth$arity$2(null,i__54326);
var temp__5735__auto___54558__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54558__$1)){
var spec_54559 = temp__5735__auto___54558__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54559)], 0));
} else {
}


var G__54560 = seq__54323;
var G__54561 = chunk__54324;
var G__54562 = count__54325;
var G__54563 = (i__54326 + (1));
seq__54323 = G__54560;
chunk__54324 = G__54561;
count__54325 = G__54562;
i__54326 = G__54563;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54323);
if(temp__5735__auto____$1){
var seq__54323__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54323__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54323__$1);
var G__54564 = cljs.core.chunk_rest(seq__54323__$1);
var G__54565 = c__4556__auto__;
var G__54566 = cljs.core.count(c__4556__auto__);
var G__54567 = (0);
seq__54323 = G__54564;
chunk__54324 = G__54565;
count__54325 = G__54566;
i__54326 = G__54567;
continue;
} else {
var role = cljs.core.first(seq__54323__$1);
var temp__5735__auto___54568__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54568__$2)){
var spec_54569 = temp__5735__auto___54568__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54569)], 0));
} else {
}


var G__54570 = cljs.core.next(seq__54323__$1);
var G__54571 = null;
var G__54572 = (0);
var G__54573 = (0);
seq__54323 = G__54570;
chunk__54324 = G__54571;
count__54325 = G__54572;
i__54326 = G__54573;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54575 = cljs.core.ex_cause(t);
via = G__54574;
t = G__54575;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54397 = datafied_throwable;
var map__54397__$1 = (((((!((map__54397 == null))))?(((((map__54397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54397):map__54397);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54397__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54397__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54397__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54399 = cljs.core.last(via);
var map__54399__$1 = (((((!((map__54399 == null))))?(((((map__54399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54399):map__54399);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54399__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54399__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54400 = data;
var map__54400__$1 = (((((!((map__54400 == null))))?(((((map__54400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54400):map__54400);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54400__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54400__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54400__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54401 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54401__$1 = (((((!((map__54401 == null))))?(((((map__54401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54401):map__54401);
var top_data = map__54401__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54401__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54428 = phase;
var G__54428__$1 = (((G__54428 instanceof cljs.core.Keyword))?G__54428.fqn:null);
switch (G__54428__$1) {
case "read-source":
var map__54429 = data;
var map__54429__$1 = (((((!((map__54429 == null))))?(((((map__54429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54429):map__54429);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54429__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54429__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54435 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54435__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54435,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54435);
var G__54435__$2 = (cljs.core.truth_((function (){var fexpr__54436 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54436.cljs$core$IFn$_invoke$arity$1 ? fexpr__54436.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54436.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54435__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54435__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54435__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54435__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54437 = top_data;
var G__54437__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54437,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54437);
var G__54437__$2 = (cljs.core.truth_((function (){var fexpr__54438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54438.cljs$core$IFn$_invoke$arity$1 ? fexpr__54438.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54438.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54437__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54437__$1);
var G__54437__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54437__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54437__$2);
var G__54437__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54437__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54437__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54437__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54437__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54440 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54440,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54440,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54440,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54440,(3),null);
var G__54443 = top_data;
var G__54443__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54443,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54443);
var G__54443__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54443__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54443__$1);
var G__54443__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54443__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54443__$2);
var G__54443__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54443__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54443__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54443__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54443__$4;
}

break;
case "execution":
var vec__54445 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54445,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54445,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54445,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54445,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54390_SHARP_){
var or__4126__auto__ = (p1__54390_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54449 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54449.cljs$core$IFn$_invoke$arity$1 ? fexpr__54449.cljs$core$IFn$_invoke$arity$1(p1__54390_SHARP_) : fexpr__54449.call(null,p1__54390_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54450 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54450__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54450,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54450);
var G__54450__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54450__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54450__$1);
var G__54450__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54450__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54450__$2);
var G__54450__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54450__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54450__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54450__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54450__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54428__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54456){
var map__54457 = p__54456;
var map__54457__$1 = (((((!((map__54457 == null))))?(((((map__54457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54457):map__54457);
var triage_data = map__54457__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54459 = phase;
var G__54459__$1 = (((G__54459 instanceof cljs.core.Keyword))?G__54459.fqn:null);
switch (G__54459__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54461 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54462 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54463 = loc;
var G__54464 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54465_54580 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54466_54581 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54467_54582 = true;
var _STAR_print_fn_STAR__temp_val__54468_54583 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54467_54582);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54468_54583);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54453_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54453_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54466_54581);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54465_54580);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54461,G__54462,G__54463,G__54464) : format.call(null,G__54461,G__54462,G__54463,G__54464));

break;
case "macroexpansion":
var G__54469 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54470 = cause_type;
var G__54471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54472 = loc;
var G__54473 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54469,G__54470,G__54471,G__54472,G__54473) : format.call(null,G__54469,G__54470,G__54471,G__54472,G__54473));

break;
case "compile-syntax-check":
var G__54474 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54475 = cause_type;
var G__54476 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54477 = loc;
var G__54478 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54474,G__54475,G__54476,G__54477,G__54478) : format.call(null,G__54474,G__54475,G__54476,G__54477,G__54478));

break;
case "compilation":
var G__54479 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54480 = cause_type;
var G__54481 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54482 = loc;
var G__54483 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54479,G__54480,G__54481,G__54482,G__54483) : format.call(null,G__54479,G__54480,G__54481,G__54482,G__54483));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54484 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54485 = symbol;
var G__54486 = loc;
var G__54487 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54488_54585 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54489_54586 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54490_54587 = true;
var _STAR_print_fn_STAR__temp_val__54491_54588 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54490_54587);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54491_54588);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54454_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54454_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54489_54586);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54488_54585);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54484,G__54485,G__54486,G__54487) : format.call(null,G__54484,G__54485,G__54486,G__54487));
} else {
var G__54492 = "Execution error%s at %s(%s).\n%s\n";
var G__54493 = cause_type;
var G__54494 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54495 = loc;
var G__54496 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54492,G__54493,G__54494,G__54495,G__54496) : format.call(null,G__54492,G__54493,G__54494,G__54495,G__54496));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54459__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
