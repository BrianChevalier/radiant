goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48968,p__48969){
var map__48970 = p__48968;
var map__48970__$1 = (((((!((map__48970 == null))))?(((((map__48970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48970):map__48970);
var svc = map__48970__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48972 = p__48969;
var map__48972__$1 = (((((!((map__48972 == null))))?(((((map__48972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48972):map__48972);
var msg = map__48972__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48972__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48972__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48972__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48972__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__49005,p__49006){
var map__49008 = p__49005;
var map__49008__$1 = (((((!((map__49008 == null))))?(((((map__49008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49008):map__49008);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49008__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__49009 = p__49006;
var map__49009__$1 = (((((!((map__49009 == null))))?(((((map__49009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49009):map__49009);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__49024,p__49025){
var map__49026 = p__49024;
var map__49026__$1 = (((((!((map__49026 == null))))?(((((map__49026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49026):map__49026);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49026__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49026__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49028 = p__49025;
var map__49028__$1 = (((((!((map__49028 == null))))?(((((map__49028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49028):map__49028);
var msg = map__49028__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49028__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__49042,tid){
var map__49043 = p__49042;
var map__49043__$1 = (((((!((map__49043 == null))))?(((((map__49043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49043):map__49043);
var svc = map__49043__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49043__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__49053 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__49054 = null;
var count__49055 = (0);
var i__49056 = (0);
while(true){
if((i__49056 < count__49055)){
var vec__49087 = chunk__49054.cljs$core$IIndexed$_nth$arity$2(null,i__49056);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49087,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49087,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49155 = seq__49053;
var G__49156 = chunk__49054;
var G__49157 = count__49055;
var G__49158 = (i__49056 + (1));
seq__49053 = G__49155;
chunk__49054 = G__49156;
count__49055 = G__49157;
i__49056 = G__49158;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49053);
if(temp__5735__auto__){
var seq__49053__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49053__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49053__$1);
var G__49160 = cljs.core.chunk_rest(seq__49053__$1);
var G__49161 = c__4556__auto__;
var G__49162 = cljs.core.count(c__4556__auto__);
var G__49163 = (0);
seq__49053 = G__49160;
chunk__49054 = G__49161;
count__49055 = G__49162;
i__49056 = G__49163;
continue;
} else {
var vec__49106 = cljs.core.first(seq__49053__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49106,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49106,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49166 = cljs.core.next(seq__49053__$1);
var G__49167 = null;
var G__49168 = (0);
var G__49169 = (0);
seq__49053 = G__49166;
chunk__49054 = G__49167;
count__49055 = G__49168;
i__49056 = G__49169;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__49045_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__49045_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__49046_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__49046_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__49047_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__49047_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__49048_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__49048_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49118){
var map__49119 = p__49118;
var map__49119__$1 = (((((!((map__49119 == null))))?(((((map__49119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49119):map__49119);
var svc = map__49119__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49119__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49119__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
