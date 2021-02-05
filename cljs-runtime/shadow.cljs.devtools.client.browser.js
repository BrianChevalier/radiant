goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53327 = arguments.length;
var i__4737__auto___53328 = (0);
while(true){
if((i__4737__auto___53328 < len__4736__auto___53327)){
args__4742__auto__.push((arguments[i__4737__auto___53328]));

var G__53329 = (i__4737__auto___53328 + (1));
i__4737__auto___53328 = G__53329;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53159){
var G__53160 = cljs.core.first(seq53159);
var seq53159__$1 = cljs.core.next(seq53159);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53160,seq53159__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53173 = cljs.core.seq(sources);
var chunk__53174 = null;
var count__53175 = (0);
var i__53176 = (0);
while(true){
if((i__53176 < count__53175)){
var map__53189 = chunk__53174.cljs$core$IIndexed$_nth$arity$2(null,i__53176);
var map__53189__$1 = (((((!((map__53189 == null))))?(((((map__53189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53189):map__53189);
var src = map__53189__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53189__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53191){var e_53330 = e53191;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53330);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53330.message)].join('')));
}

var G__53331 = seq__53173;
var G__53332 = chunk__53174;
var G__53333 = count__53175;
var G__53334 = (i__53176 + (1));
seq__53173 = G__53331;
chunk__53174 = G__53332;
count__53175 = G__53333;
i__53176 = G__53334;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53173);
if(temp__5735__auto__){
var seq__53173__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53173__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53173__$1);
var G__53335 = cljs.core.chunk_rest(seq__53173__$1);
var G__53336 = c__4556__auto__;
var G__53337 = cljs.core.count(c__4556__auto__);
var G__53338 = (0);
seq__53173 = G__53335;
chunk__53174 = G__53336;
count__53175 = G__53337;
i__53176 = G__53338;
continue;
} else {
var map__53192 = cljs.core.first(seq__53173__$1);
var map__53192__$1 = (((((!((map__53192 == null))))?(((((map__53192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53192):map__53192);
var src = map__53192__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53197){var e_53339 = e53197;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53339);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53339.message)].join('')));
}

var G__53340 = cljs.core.next(seq__53173__$1);
var G__53341 = null;
var G__53342 = (0);
var G__53343 = (0);
seq__53173 = G__53340;
chunk__53174 = G__53341;
count__53175 = G__53342;
i__53176 = G__53343;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53199 = cljs.core.seq(js_requires);
var chunk__53200 = null;
var count__53201 = (0);
var i__53202 = (0);
while(true){
if((i__53202 < count__53201)){
var js_ns = chunk__53200.cljs$core$IIndexed$_nth$arity$2(null,i__53202);
var require_str_53344 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53344);


var G__53345 = seq__53199;
var G__53346 = chunk__53200;
var G__53347 = count__53201;
var G__53348 = (i__53202 + (1));
seq__53199 = G__53345;
chunk__53200 = G__53346;
count__53201 = G__53347;
i__53202 = G__53348;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53199);
if(temp__5735__auto__){
var seq__53199__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53199__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53199__$1);
var G__53349 = cljs.core.chunk_rest(seq__53199__$1);
var G__53350 = c__4556__auto__;
var G__53351 = cljs.core.count(c__4556__auto__);
var G__53352 = (0);
seq__53199 = G__53349;
chunk__53200 = G__53350;
count__53201 = G__53351;
i__53202 = G__53352;
continue;
} else {
var js_ns = cljs.core.first(seq__53199__$1);
var require_str_53353 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53353);


var G__53354 = cljs.core.next(seq__53199__$1);
var G__53355 = null;
var G__53356 = (0);
var G__53357 = (0);
seq__53199 = G__53354;
chunk__53200 = G__53355;
count__53201 = G__53356;
i__53202 = G__53357;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53205){
var map__53206 = p__53205;
var map__53206__$1 = (((((!((map__53206 == null))))?(((((map__53206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53206):map__53206);
var msg = map__53206__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53206__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53206__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53208(s__53209){
return (new cljs.core.LazySeq(null,(function (){
var s__53209__$1 = s__53209;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53209__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__53214 = cljs.core.first(xs__6292__auto__);
var map__53214__$1 = (((((!((map__53214 == null))))?(((((map__53214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53214):map__53214);
var src = map__53214__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53214__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53214__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__53209__$1,map__53214,map__53214__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53206,map__53206__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53208_$_iter__53210(s__53211){
return (new cljs.core.LazySeq(null,((function (s__53209__$1,map__53214,map__53214__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53206,map__53206__$1,msg,info,reload_info){
return (function (){
var s__53211__$1 = s__53211;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53211__$1);
if(temp__5735__auto____$1){
var s__53211__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53211__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53211__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53213 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53212 = (0);
while(true){
if((i__53212 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__53212);
cljs.core.chunk_append(b__53213,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53358 = (i__53212 + (1));
i__53212 = G__53358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53213),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53208_$_iter__53210(cljs.core.chunk_rest(s__53211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53213),null);
}
} else {
var warning = cljs.core.first(s__53211__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53208_$_iter__53210(cljs.core.rest(s__53211__$2)));
}
} else {
return null;
}
break;
}
});})(s__53209__$1,map__53214,map__53214__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53206,map__53206__$1,msg,info,reload_info))
,null,null));
});})(s__53209__$1,map__53214,map__53214__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53206,map__53206__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53208(cljs.core.rest(s__53209__$1)));
} else {
var G__53359 = cljs.core.rest(s__53209__$1);
s__53209__$1 = G__53359;
continue;
}
} else {
var G__53360 = cljs.core.rest(s__53209__$1);
s__53209__$1 = G__53360;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53216_53361 = cljs.core.seq(warnings);
var chunk__53217_53362 = null;
var count__53218_53363 = (0);
var i__53219_53364 = (0);
while(true){
if((i__53219_53364 < count__53218_53363)){
var map__53225_53365 = chunk__53217_53362.cljs$core$IIndexed$_nth$arity$2(null,i__53219_53364);
var map__53225_53366__$1 = (((((!((map__53225_53365 == null))))?(((((map__53225_53365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53225_53365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53225_53365):map__53225_53365);
var w_53367 = map__53225_53366__$1;
var msg_53368__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53225_53366__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53225_53366__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53225_53366__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53225_53366__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53371)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53369),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53370),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53368__$1)].join(''));


var G__53372 = seq__53216_53361;
var G__53373 = chunk__53217_53362;
var G__53374 = count__53218_53363;
var G__53375 = (i__53219_53364 + (1));
seq__53216_53361 = G__53372;
chunk__53217_53362 = G__53373;
count__53218_53363 = G__53374;
i__53219_53364 = G__53375;
continue;
} else {
var temp__5735__auto___53376 = cljs.core.seq(seq__53216_53361);
if(temp__5735__auto___53376){
var seq__53216_53377__$1 = temp__5735__auto___53376;
if(cljs.core.chunked_seq_QMARK_(seq__53216_53377__$1)){
var c__4556__auto___53378 = cljs.core.chunk_first(seq__53216_53377__$1);
var G__53379 = cljs.core.chunk_rest(seq__53216_53377__$1);
var G__53380 = c__4556__auto___53378;
var G__53381 = cljs.core.count(c__4556__auto___53378);
var G__53382 = (0);
seq__53216_53361 = G__53379;
chunk__53217_53362 = G__53380;
count__53218_53363 = G__53381;
i__53219_53364 = G__53382;
continue;
} else {
var map__53228_53383 = cljs.core.first(seq__53216_53377__$1);
var map__53228_53384__$1 = (((((!((map__53228_53383 == null))))?(((((map__53228_53383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53228_53383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53228_53383):map__53228_53383);
var w_53385 = map__53228_53384__$1;
var msg_53386__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53228_53384__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53228_53384__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53228_53384__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53228_53384__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53389)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53387),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53388),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53386__$1)].join(''));


var G__53390 = cljs.core.next(seq__53216_53377__$1);
var G__53391 = null;
var G__53392 = (0);
var G__53393 = (0);
seq__53216_53361 = G__53390;
chunk__53217_53362 = G__53391;
count__53218_53363 = G__53392;
i__53219_53364 = G__53393;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53204_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53204_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53230){
var map__53231 = p__53230;
var map__53231__$1 = (((((!((map__53231 == null))))?(((((map__53231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53231):map__53231);
var msg = map__53231__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53231__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53233 = cljs.core.seq(updates);
var chunk__53235 = null;
var count__53236 = (0);
var i__53237 = (0);
while(true){
if((i__53237 < count__53236)){
var path = chunk__53235.cljs$core$IIndexed$_nth$arity$2(null,i__53237);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53267_53394 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53271_53395 = null;
var count__53272_53396 = (0);
var i__53273_53397 = (0);
while(true){
if((i__53273_53397 < count__53272_53396)){
var node_53398 = chunk__53271_53395.cljs$core$IIndexed$_nth$arity$2(null,i__53273_53397);
if(cljs.core.not(node_53398.shadow$old)){
var path_match_53399 = shadow.cljs.devtools.client.browser.match_paths(node_53398.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53399)){
var new_link_53400 = (function (){var G__53279 = node_53398.cloneNode(true);
G__53279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53399),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53279;
})();
(node_53398.shadow$old = true);

(new_link_53400.onload = ((function (seq__53267_53394,chunk__53271_53395,count__53272_53396,i__53273_53397,seq__53233,chunk__53235,count__53236,i__53237,new_link_53400,path_match_53399,node_53398,path,map__53231,map__53231__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53398);
});})(seq__53267_53394,chunk__53271_53395,count__53272_53396,i__53273_53397,seq__53233,chunk__53235,count__53236,i__53237,new_link_53400,path_match_53399,node_53398,path,map__53231,map__53231__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53399], 0));

goog.dom.insertSiblingAfter(new_link_53400,node_53398);


var G__53401 = seq__53267_53394;
var G__53402 = chunk__53271_53395;
var G__53403 = count__53272_53396;
var G__53404 = (i__53273_53397 + (1));
seq__53267_53394 = G__53401;
chunk__53271_53395 = G__53402;
count__53272_53396 = G__53403;
i__53273_53397 = G__53404;
continue;
} else {
var G__53405 = seq__53267_53394;
var G__53406 = chunk__53271_53395;
var G__53407 = count__53272_53396;
var G__53408 = (i__53273_53397 + (1));
seq__53267_53394 = G__53405;
chunk__53271_53395 = G__53406;
count__53272_53396 = G__53407;
i__53273_53397 = G__53408;
continue;
}
} else {
var G__53409 = seq__53267_53394;
var G__53410 = chunk__53271_53395;
var G__53411 = count__53272_53396;
var G__53412 = (i__53273_53397 + (1));
seq__53267_53394 = G__53409;
chunk__53271_53395 = G__53410;
count__53272_53396 = G__53411;
i__53273_53397 = G__53412;
continue;
}
} else {
var temp__5735__auto___53413 = cljs.core.seq(seq__53267_53394);
if(temp__5735__auto___53413){
var seq__53267_53414__$1 = temp__5735__auto___53413;
if(cljs.core.chunked_seq_QMARK_(seq__53267_53414__$1)){
var c__4556__auto___53415 = cljs.core.chunk_first(seq__53267_53414__$1);
var G__53416 = cljs.core.chunk_rest(seq__53267_53414__$1);
var G__53417 = c__4556__auto___53415;
var G__53418 = cljs.core.count(c__4556__auto___53415);
var G__53419 = (0);
seq__53267_53394 = G__53416;
chunk__53271_53395 = G__53417;
count__53272_53396 = G__53418;
i__53273_53397 = G__53419;
continue;
} else {
var node_53420 = cljs.core.first(seq__53267_53414__$1);
if(cljs.core.not(node_53420.shadow$old)){
var path_match_53421 = shadow.cljs.devtools.client.browser.match_paths(node_53420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53421)){
var new_link_53422 = (function (){var G__53280 = node_53420.cloneNode(true);
G__53280.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53421),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53280;
})();
(node_53420.shadow$old = true);

(new_link_53422.onload = ((function (seq__53267_53394,chunk__53271_53395,count__53272_53396,i__53273_53397,seq__53233,chunk__53235,count__53236,i__53237,new_link_53422,path_match_53421,node_53420,seq__53267_53414__$1,temp__5735__auto___53413,path,map__53231,map__53231__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53420);
});})(seq__53267_53394,chunk__53271_53395,count__53272_53396,i__53273_53397,seq__53233,chunk__53235,count__53236,i__53237,new_link_53422,path_match_53421,node_53420,seq__53267_53414__$1,temp__5735__auto___53413,path,map__53231,map__53231__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53421], 0));

goog.dom.insertSiblingAfter(new_link_53422,node_53420);


var G__53423 = cljs.core.next(seq__53267_53414__$1);
var G__53424 = null;
var G__53425 = (0);
var G__53426 = (0);
seq__53267_53394 = G__53423;
chunk__53271_53395 = G__53424;
count__53272_53396 = G__53425;
i__53273_53397 = G__53426;
continue;
} else {
var G__53427 = cljs.core.next(seq__53267_53414__$1);
var G__53428 = null;
var G__53429 = (0);
var G__53430 = (0);
seq__53267_53394 = G__53427;
chunk__53271_53395 = G__53428;
count__53272_53396 = G__53429;
i__53273_53397 = G__53430;
continue;
}
} else {
var G__53431 = cljs.core.next(seq__53267_53414__$1);
var G__53432 = null;
var G__53433 = (0);
var G__53434 = (0);
seq__53267_53394 = G__53431;
chunk__53271_53395 = G__53432;
count__53272_53396 = G__53433;
i__53273_53397 = G__53434;
continue;
}
}
} else {
}
}
break;
}


var G__53435 = seq__53233;
var G__53436 = chunk__53235;
var G__53437 = count__53236;
var G__53438 = (i__53237 + (1));
seq__53233 = G__53435;
chunk__53235 = G__53436;
count__53236 = G__53437;
i__53237 = G__53438;
continue;
} else {
var G__53439 = seq__53233;
var G__53440 = chunk__53235;
var G__53441 = count__53236;
var G__53442 = (i__53237 + (1));
seq__53233 = G__53439;
chunk__53235 = G__53440;
count__53236 = G__53441;
i__53237 = G__53442;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53233);
if(temp__5735__auto__){
var seq__53233__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53233__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53233__$1);
var G__53443 = cljs.core.chunk_rest(seq__53233__$1);
var G__53444 = c__4556__auto__;
var G__53445 = cljs.core.count(c__4556__auto__);
var G__53446 = (0);
seq__53233 = G__53443;
chunk__53235 = G__53444;
count__53236 = G__53445;
i__53237 = G__53446;
continue;
} else {
var path = cljs.core.first(seq__53233__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53281_53447 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53285_53448 = null;
var count__53286_53449 = (0);
var i__53287_53450 = (0);
while(true){
if((i__53287_53450 < count__53286_53449)){
var node_53451 = chunk__53285_53448.cljs$core$IIndexed$_nth$arity$2(null,i__53287_53450);
if(cljs.core.not(node_53451.shadow$old)){
var path_match_53452 = shadow.cljs.devtools.client.browser.match_paths(node_53451.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53452)){
var new_link_53453 = (function (){var G__53293 = node_53451.cloneNode(true);
G__53293.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53452),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53293;
})();
(node_53451.shadow$old = true);

(new_link_53453.onload = ((function (seq__53281_53447,chunk__53285_53448,count__53286_53449,i__53287_53450,seq__53233,chunk__53235,count__53236,i__53237,new_link_53453,path_match_53452,node_53451,path,seq__53233__$1,temp__5735__auto__,map__53231,map__53231__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53451);
});})(seq__53281_53447,chunk__53285_53448,count__53286_53449,i__53287_53450,seq__53233,chunk__53235,count__53236,i__53237,new_link_53453,path_match_53452,node_53451,path,seq__53233__$1,temp__5735__auto__,map__53231,map__53231__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53452], 0));

goog.dom.insertSiblingAfter(new_link_53453,node_53451);


var G__53454 = seq__53281_53447;
var G__53455 = chunk__53285_53448;
var G__53456 = count__53286_53449;
var G__53457 = (i__53287_53450 + (1));
seq__53281_53447 = G__53454;
chunk__53285_53448 = G__53455;
count__53286_53449 = G__53456;
i__53287_53450 = G__53457;
continue;
} else {
var G__53458 = seq__53281_53447;
var G__53459 = chunk__53285_53448;
var G__53460 = count__53286_53449;
var G__53461 = (i__53287_53450 + (1));
seq__53281_53447 = G__53458;
chunk__53285_53448 = G__53459;
count__53286_53449 = G__53460;
i__53287_53450 = G__53461;
continue;
}
} else {
var G__53462 = seq__53281_53447;
var G__53463 = chunk__53285_53448;
var G__53464 = count__53286_53449;
var G__53465 = (i__53287_53450 + (1));
seq__53281_53447 = G__53462;
chunk__53285_53448 = G__53463;
count__53286_53449 = G__53464;
i__53287_53450 = G__53465;
continue;
}
} else {
var temp__5735__auto___53466__$1 = cljs.core.seq(seq__53281_53447);
if(temp__5735__auto___53466__$1){
var seq__53281_53467__$1 = temp__5735__auto___53466__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53281_53467__$1)){
var c__4556__auto___53468 = cljs.core.chunk_first(seq__53281_53467__$1);
var G__53469 = cljs.core.chunk_rest(seq__53281_53467__$1);
var G__53470 = c__4556__auto___53468;
var G__53471 = cljs.core.count(c__4556__auto___53468);
var G__53472 = (0);
seq__53281_53447 = G__53469;
chunk__53285_53448 = G__53470;
count__53286_53449 = G__53471;
i__53287_53450 = G__53472;
continue;
} else {
var node_53473 = cljs.core.first(seq__53281_53467__$1);
if(cljs.core.not(node_53473.shadow$old)){
var path_match_53474 = shadow.cljs.devtools.client.browser.match_paths(node_53473.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53474)){
var new_link_53475 = (function (){var G__53294 = node_53473.cloneNode(true);
G__53294.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53294;
})();
(node_53473.shadow$old = true);

(new_link_53475.onload = ((function (seq__53281_53447,chunk__53285_53448,count__53286_53449,i__53287_53450,seq__53233,chunk__53235,count__53236,i__53237,new_link_53475,path_match_53474,node_53473,seq__53281_53467__$1,temp__5735__auto___53466__$1,path,seq__53233__$1,temp__5735__auto__,map__53231,map__53231__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53473);
});})(seq__53281_53447,chunk__53285_53448,count__53286_53449,i__53287_53450,seq__53233,chunk__53235,count__53236,i__53237,new_link_53475,path_match_53474,node_53473,seq__53281_53467__$1,temp__5735__auto___53466__$1,path,seq__53233__$1,temp__5735__auto__,map__53231,map__53231__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53474], 0));

goog.dom.insertSiblingAfter(new_link_53475,node_53473);


var G__53476 = cljs.core.next(seq__53281_53467__$1);
var G__53477 = null;
var G__53478 = (0);
var G__53479 = (0);
seq__53281_53447 = G__53476;
chunk__53285_53448 = G__53477;
count__53286_53449 = G__53478;
i__53287_53450 = G__53479;
continue;
} else {
var G__53480 = cljs.core.next(seq__53281_53467__$1);
var G__53481 = null;
var G__53482 = (0);
var G__53483 = (0);
seq__53281_53447 = G__53480;
chunk__53285_53448 = G__53481;
count__53286_53449 = G__53482;
i__53287_53450 = G__53483;
continue;
}
} else {
var G__53484 = cljs.core.next(seq__53281_53467__$1);
var G__53485 = null;
var G__53486 = (0);
var G__53487 = (0);
seq__53281_53447 = G__53484;
chunk__53285_53448 = G__53485;
count__53286_53449 = G__53486;
i__53287_53450 = G__53487;
continue;
}
}
} else {
}
}
break;
}


var G__53488 = cljs.core.next(seq__53233__$1);
var G__53489 = null;
var G__53490 = (0);
var G__53491 = (0);
seq__53233 = G__53488;
chunk__53235 = G__53489;
count__53236 = G__53490;
i__53237 = G__53491;
continue;
} else {
var G__53492 = cljs.core.next(seq__53233__$1);
var G__53493 = null;
var G__53494 = (0);
var G__53495 = (0);
seq__53233 = G__53492;
chunk__53235 = G__53493;
count__53236 = G__53494;
i__53237 = G__53495;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53295){
var map__53296 = p__53295;
var map__53296__$1 = (((((!((map__53296 == null))))?(((((map__53296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53296):map__53296);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53296__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53298){
var map__53299 = p__53298;
var map__53299__$1 = (((((!((map__53299 == null))))?(((((map__53299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53299):map__53299);
var _ = map__53299__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53299__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53301,done,error){
var map__53302 = p__53301;
var map__53302__$1 = (((((!((map__53302 == null))))?(((((map__53302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53302):map__53302);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53302__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53304,done,error){
var map__53305 = p__53304;
var map__53305__$1 = (((((!((map__53305 == null))))?(((((map__53305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53305):map__53305);
var msg = map__53305__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53305__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53305__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53305__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53307){
var map__53308 = p__53307;
var map__53308__$1 = (((((!((map__53308 == null))))?(((((map__53308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53308):map__53308);
var src = map__53308__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53308__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53310 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53310) : done.call(null,G__53310));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53311){
var map__53312 = p__53311;
var map__53312__$1 = (((((!((map__53312 == null))))?(((((map__53312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53312):map__53312);
var msg__$1 = map__53312__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53312__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53314){var ex = e53314;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53315){
var map__53316 = p__53315;
var map__53316__$1 = (((((!((map__53316 == null))))?(((((map__53316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53316):map__53316);
var env = map__53316__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53316__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53318){
var map__53319 = p__53318;
var map__53319__$1 = (((((!((map__53319 == null))))?(((((map__53319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53319):map__53319);
var msg = map__53319__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53319__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53321){
var map__53322 = p__53321;
var map__53322__$1 = (((((!((map__53322 == null))))?(((((map__53322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53322):map__53322);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53322__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53322__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53324){
var map__53325 = p__53324;
var map__53325__$1 = (((((!((map__53325 == null))))?(((((map__53325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53325):map__53325);
var svc = map__53325__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53325__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
