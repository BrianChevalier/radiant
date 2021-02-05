goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46800 = arguments.length;
switch (G__46800) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46808 = (function (f,blockable,meta46809){
this.f = f;
this.blockable = blockable;
this.meta46809 = meta46809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46810,meta46809__$1){
var self__ = this;
var _46810__$1 = this;
return (new cljs.core.async.t_cljs$core$async46808(self__.f,self__.blockable,meta46809__$1));
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46810){
var self__ = this;
var _46810__$1 = this;
return self__.meta46809;
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46809","meta46809",1961571688,null)], null);
}));

(cljs.core.async.t_cljs$core$async46808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46808");

(cljs.core.async.t_cljs$core$async46808.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46808.
 */
cljs.core.async.__GT_t_cljs$core$async46808 = (function cljs$core$async$__GT_t_cljs$core$async46808(f__$1,blockable__$1,meta46809){
return (new cljs.core.async.t_cljs$core$async46808(f__$1,blockable__$1,meta46809));
});

}

return (new cljs.core.async.t_cljs$core$async46808(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46871 = arguments.length;
switch (G__46871) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46884 = arguments.length;
switch (G__46884) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46892 = arguments.length;
switch (G__46892) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50669 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50669) : fn1.call(null,val_50669));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50669) : fn1.call(null,val_50669));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46897 = arguments.length;
switch (G__46897) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___50682 = n;
var x_50684 = (0);
while(true){
if((x_50684 < n__4613__auto___50682)){
(a[x_50684] = x_50684);

var G__50685 = (x_50684 + (1));
x_50684 = G__50685;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46931 = (function (flag,meta46932){
this.flag = flag;
this.meta46932 = meta46932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46933,meta46932__$1){
var self__ = this;
var _46933__$1 = this;
return (new cljs.core.async.t_cljs$core$async46931(self__.flag,meta46932__$1));
}));

(cljs.core.async.t_cljs$core$async46931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46933){
var self__ = this;
var _46933__$1 = this;
return self__.meta46932;
}));

(cljs.core.async.t_cljs$core$async46931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46932","meta46932",-1154557831,null)], null);
}));

(cljs.core.async.t_cljs$core$async46931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46931");

(cljs.core.async.t_cljs$core$async46931.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46931.
 */
cljs.core.async.__GT_t_cljs$core$async46931 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46931(flag__$1,meta46932){
return (new cljs.core.async.t_cljs$core$async46931(flag__$1,meta46932));
});

}

return (new cljs.core.async.t_cljs$core$async46931(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46945 = (function (flag,cb,meta46946){
this.flag = flag;
this.cb = cb;
this.meta46946 = meta46946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46947,meta46946__$1){
var self__ = this;
var _46947__$1 = this;
return (new cljs.core.async.t_cljs$core$async46945(self__.flag,self__.cb,meta46946__$1));
}));

(cljs.core.async.t_cljs$core$async46945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46947){
var self__ = this;
var _46947__$1 = this;
return self__.meta46946;
}));

(cljs.core.async.t_cljs$core$async46945.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46945.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46946","meta46946",-47128090,null)], null);
}));

(cljs.core.async.t_cljs$core$async46945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46945");

(cljs.core.async.t_cljs$core$async46945.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46945.
 */
cljs.core.async.__GT_t_cljs$core$async46945 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46945(flag__$1,cb__$1,meta46946){
return (new cljs.core.async.t_cljs$core$async46945(flag__$1,cb__$1,meta46946));
});

}

return (new cljs.core.async.t_cljs$core$async46945(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46983_SHARP_){
var G__47018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46983_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47018) : fret.call(null,G__47018));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46984_SHARP_){
var G__47028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46984_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47028) : fret.call(null,G__47028));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50705 = (i + (1));
i = G__50705;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50710 = arguments.length;
var i__4737__auto___50711 = (0);
while(true){
if((i__4737__auto___50711 < len__4736__auto___50710)){
args__4742__auto__.push((arguments[i__4737__auto___50711]));

var G__50712 = (i__4737__auto___50711 + (1));
i__4737__auto___50711 = G__50712;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47063){
var map__47064 = p__47063;
var map__47064__$1 = (((((!((map__47064 == null))))?(((((map__47064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47064):map__47064);
var opts = map__47064__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47047){
var G__47048 = cljs.core.first(seq47047);
var seq47047__$1 = cljs.core.next(seq47047);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47048,seq47047__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47089 = arguments.length;
switch (G__47089) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46537__auto___50720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47224){
var state_val_47231 = (state_47224[(1)]);
if((state_val_47231 === (7))){
var inst_47208 = (state_47224[(2)]);
var state_47224__$1 = state_47224;
var statearr_47249_50721 = state_47224__$1;
(statearr_47249_50721[(2)] = inst_47208);

(statearr_47249_50721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (1))){
var state_47224__$1 = state_47224;
var statearr_47251_50723 = state_47224__$1;
(statearr_47251_50723[(2)] = null);

(statearr_47251_50723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (4))){
var inst_47170 = (state_47224[(7)]);
var inst_47170__$1 = (state_47224[(2)]);
var inst_47186 = (inst_47170__$1 == null);
var state_47224__$1 = (function (){var statearr_47253 = state_47224;
(statearr_47253[(7)] = inst_47170__$1);

return statearr_47253;
})();
if(cljs.core.truth_(inst_47186)){
var statearr_47254_50725 = state_47224__$1;
(statearr_47254_50725[(1)] = (5));

} else {
var statearr_47255_50726 = state_47224__$1;
(statearr_47255_50726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (13))){
var state_47224__$1 = state_47224;
var statearr_47260_50728 = state_47224__$1;
(statearr_47260_50728[(2)] = null);

(statearr_47260_50728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (6))){
var inst_47170 = (state_47224[(7)]);
var state_47224__$1 = state_47224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47224__$1,(11),to,inst_47170);
} else {
if((state_val_47231 === (3))){
var inst_47217 = (state_47224[(2)]);
var state_47224__$1 = state_47224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47224__$1,inst_47217);
} else {
if((state_val_47231 === (12))){
var state_47224__$1 = state_47224;
var statearr_47262_50735 = state_47224__$1;
(statearr_47262_50735[(2)] = null);

(statearr_47262_50735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (2))){
var state_47224__$1 = state_47224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47224__$1,(4),from);
} else {
if((state_val_47231 === (11))){
var inst_47195 = (state_47224[(2)]);
var state_47224__$1 = state_47224;
if(cljs.core.truth_(inst_47195)){
var statearr_47267_50738 = state_47224__$1;
(statearr_47267_50738[(1)] = (12));

} else {
var statearr_47268_50739 = state_47224__$1;
(statearr_47268_50739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (9))){
var state_47224__$1 = state_47224;
var statearr_47269_50743 = state_47224__$1;
(statearr_47269_50743[(2)] = null);

(statearr_47269_50743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (5))){
var state_47224__$1 = state_47224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47270_50746 = state_47224__$1;
(statearr_47270_50746[(1)] = (8));

} else {
var statearr_47271_50747 = state_47224__$1;
(statearr_47271_50747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (14))){
var inst_47206 = (state_47224[(2)]);
var state_47224__$1 = state_47224;
var statearr_47272_50748 = state_47224__$1;
(statearr_47272_50748[(2)] = inst_47206);

(statearr_47272_50748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (10))){
var inst_47192 = (state_47224[(2)]);
var state_47224__$1 = state_47224;
var statearr_47274_50750 = state_47224__$1;
(statearr_47274_50750[(2)] = inst_47192);

(statearr_47274_50750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (8))){
var inst_47189 = cljs.core.async.close_BANG_(to);
var state_47224__$1 = state_47224;
var statearr_47275_50752 = state_47224__$1;
(statearr_47275_50752[(2)] = inst_47189);

(statearr_47275_50752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_47276 = [null,null,null,null,null,null,null,null];
(statearr_47276[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_47276[(1)] = (1));

return statearr_47276;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_47224){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47224);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47280){var ex__45833__auto__ = e47280;
var statearr_47281_50756 = state_47224;
(statearr_47281_50756[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47224[(4)]))){
var statearr_47282_50757 = state_47224;
(statearr_47282_50757[(1)] = cljs.core.first((state_47224[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50760 = state_47224;
state_47224 = G__50760;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_47224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_47224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_47286 = f__46538__auto__();
(statearr_47286[(6)] = c__46537__auto___50720);

return statearr_47286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47291){
var vec__47296 = p__47291;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47296,(1),null);
var job = vec__47296;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46537__auto___50769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47307){
var state_val_47308 = (state_47307[(1)]);
if((state_val_47308 === (1))){
var state_47307__$1 = state_47307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47307__$1,(2),res,v);
} else {
if((state_val_47308 === (2))){
var inst_47304 = (state_47307[(2)]);
var inst_47305 = cljs.core.async.close_BANG_(res);
var state_47307__$1 = (function (){var statearr_47311 = state_47307;
(statearr_47311[(7)] = inst_47304);

return statearr_47311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47307__$1,inst_47305);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0 = (function (){
var statearr_47317 = [null,null,null,null,null,null,null,null];
(statearr_47317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__);

(statearr_47317[(1)] = (1));

return statearr_47317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1 = (function (state_47307){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47307);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47319){var ex__45833__auto__ = e47319;
var statearr_47320_50772 = state_47307;
(statearr_47320_50772[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47307[(4)]))){
var statearr_47321_50774 = state_47307;
(statearr_47321_50774[(1)] = cljs.core.first((state_47307[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50775 = state_47307;
state_47307 = G__50775;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = function(state_47307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1.call(this,state_47307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_47322 = f__46538__auto__();
(statearr_47322[(6)] = c__46537__auto___50769);

return statearr_47322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47323){
var vec__47325 = p__47323;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47325,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47325,(1),null);
var job = vec__47325;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___50781 = n;
var __50782 = (0);
while(true){
if((__50782 < n__4613__auto___50781)){
var G__47333_50783 = type;
var G__47333_50784__$1 = (((G__47333_50783 instanceof cljs.core.Keyword))?G__47333_50783.fqn:null);
switch (G__47333_50784__$1) {
case "compute":
var c__46537__auto___50786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50782,c__46537__auto___50786,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async){
return (function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = ((function (__50782,c__46537__auto___50786,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async){
return (function (state_47346){
var state_val_47347 = (state_47346[(1)]);
if((state_val_47347 === (1))){
var state_47346__$1 = state_47346;
var statearr_47350_50787 = state_47346__$1;
(statearr_47350_50787[(2)] = null);

(statearr_47350_50787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (2))){
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47346__$1,(4),jobs);
} else {
if((state_val_47347 === (3))){
var inst_47344 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47346__$1,inst_47344);
} else {
if((state_val_47347 === (4))){
var inst_47336 = (state_47346[(2)]);
var inst_47337 = process(inst_47336);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47337)){
var statearr_47351_50791 = state_47346__$1;
(statearr_47351_50791[(1)] = (5));

} else {
var statearr_47352_50792 = state_47346__$1;
(statearr_47352_50792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (5))){
var state_47346__$1 = state_47346;
var statearr_47353_50795 = state_47346__$1;
(statearr_47353_50795[(2)] = null);

(statearr_47353_50795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (6))){
var state_47346__$1 = state_47346;
var statearr_47358_50796 = state_47346__$1;
(statearr_47358_50796[(2)] = null);

(statearr_47358_50796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (7))){
var inst_47342 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47359_50798 = state_47346__$1;
(statearr_47359_50798[(2)] = inst_47342);

(statearr_47359_50798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50782,c__46537__auto___50786,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async))
;
return ((function (__50782,switch__45829__auto__,c__46537__auto___50786,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0 = (function (){
var statearr_47360 = [null,null,null,null,null,null,null];
(statearr_47360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__);

(statearr_47360[(1)] = (1));

return statearr_47360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1 = (function (state_47346){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47346);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47362){var ex__45833__auto__ = e47362;
var statearr_47363_50804 = state_47346;
(statearr_47363_50804[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47346[(4)]))){
var statearr_47364_50808 = state_47346;
(statearr_47364_50808[(1)] = cljs.core.first((state_47346[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50809 = state_47346;
state_47346 = G__50809;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = function(state_47346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1.call(this,state_47346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__;
})()
;})(__50782,switch__45829__auto__,c__46537__auto___50786,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async))
})();
var state__46539__auto__ = (function (){var statearr_47366 = f__46538__auto__();
(statearr_47366[(6)] = c__46537__auto___50786);

return statearr_47366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
});})(__50782,c__46537__auto___50786,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async))
);


break;
case "async":
var c__46537__auto___50815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50782,c__46537__auto___50815,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async){
return (function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = ((function (__50782,c__46537__auto___50815,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async){
return (function (state_47381){
var state_val_47382 = (state_47381[(1)]);
if((state_val_47382 === (1))){
var state_47381__$1 = state_47381;
var statearr_47385_50816 = state_47381__$1;
(statearr_47385_50816[(2)] = null);

(statearr_47385_50816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (2))){
var state_47381__$1 = state_47381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47381__$1,(4),jobs);
} else {
if((state_val_47382 === (3))){
var inst_47378 = (state_47381[(2)]);
var state_47381__$1 = state_47381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47381__$1,inst_47378);
} else {
if((state_val_47382 === (4))){
var inst_47370 = (state_47381[(2)]);
var inst_47371 = async(inst_47370);
var state_47381__$1 = state_47381;
if(cljs.core.truth_(inst_47371)){
var statearr_47394_50819 = state_47381__$1;
(statearr_47394_50819[(1)] = (5));

} else {
var statearr_47397_50821 = state_47381__$1;
(statearr_47397_50821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (5))){
var state_47381__$1 = state_47381;
var statearr_47399_50822 = state_47381__$1;
(statearr_47399_50822[(2)] = null);

(statearr_47399_50822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (6))){
var state_47381__$1 = state_47381;
var statearr_47400_50823 = state_47381__$1;
(statearr_47400_50823[(2)] = null);

(statearr_47400_50823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47382 === (7))){
var inst_47376 = (state_47381[(2)]);
var state_47381__$1 = state_47381;
var statearr_47401_50826 = state_47381__$1;
(statearr_47401_50826[(2)] = inst_47376);

(statearr_47401_50826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50782,c__46537__auto___50815,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async))
;
return ((function (__50782,switch__45829__auto__,c__46537__auto___50815,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0 = (function (){
var statearr_47405 = [null,null,null,null,null,null,null];
(statearr_47405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__);

(statearr_47405[(1)] = (1));

return statearr_47405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1 = (function (state_47381){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47381);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47408){var ex__45833__auto__ = e47408;
var statearr_47409_50828 = state_47381;
(statearr_47409_50828[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47381[(4)]))){
var statearr_47412_50829 = state_47381;
(statearr_47412_50829[(1)] = cljs.core.first((state_47381[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50830 = state_47381;
state_47381 = G__50830;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = function(state_47381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1.call(this,state_47381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__;
})()
;})(__50782,switch__45829__auto__,c__46537__auto___50815,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async))
})();
var state__46539__auto__ = (function (){var statearr_47417 = f__46538__auto__();
(statearr_47417[(6)] = c__46537__auto___50815);

return statearr_47417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
});})(__50782,c__46537__auto___50815,G__47333_50783,G__47333_50784__$1,n__4613__auto___50781,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47333_50784__$1)].join('')));

}

var G__50831 = (__50782 + (1));
__50782 = G__50831;
continue;
} else {
}
break;
}

var c__46537__auto___50832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47450){
var state_val_47451 = (state_47450[(1)]);
if((state_val_47451 === (7))){
var inst_47446 = (state_47450[(2)]);
var state_47450__$1 = state_47450;
var statearr_47462_50834 = state_47450__$1;
(statearr_47462_50834[(2)] = inst_47446);

(statearr_47462_50834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47451 === (1))){
var state_47450__$1 = state_47450;
var statearr_47463_50835 = state_47450__$1;
(statearr_47463_50835[(2)] = null);

(statearr_47463_50835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47451 === (4))){
var inst_47423 = (state_47450[(7)]);
var inst_47423__$1 = (state_47450[(2)]);
var inst_47425 = (inst_47423__$1 == null);
var state_47450__$1 = (function (){var statearr_47464 = state_47450;
(statearr_47464[(7)] = inst_47423__$1);

return statearr_47464;
})();
if(cljs.core.truth_(inst_47425)){
var statearr_47469_50836 = state_47450__$1;
(statearr_47469_50836[(1)] = (5));

} else {
var statearr_47471_50837 = state_47450__$1;
(statearr_47471_50837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47451 === (6))){
var inst_47423 = (state_47450[(7)]);
var inst_47429 = (state_47450[(8)]);
var inst_47429__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47438 = [inst_47423,inst_47429__$1];
var inst_47439 = (new cljs.core.PersistentVector(null,2,(5),inst_47433,inst_47438,null));
var state_47450__$1 = (function (){var statearr_47476 = state_47450;
(statearr_47476[(8)] = inst_47429__$1);

return statearr_47476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47450__$1,(8),jobs,inst_47439);
} else {
if((state_val_47451 === (3))){
var inst_47448 = (state_47450[(2)]);
var state_47450__$1 = state_47450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47450__$1,inst_47448);
} else {
if((state_val_47451 === (2))){
var state_47450__$1 = state_47450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47450__$1,(4),from);
} else {
if((state_val_47451 === (9))){
var inst_47443 = (state_47450[(2)]);
var state_47450__$1 = (function (){var statearr_47477 = state_47450;
(statearr_47477[(9)] = inst_47443);

return statearr_47477;
})();
var statearr_47478_50842 = state_47450__$1;
(statearr_47478_50842[(2)] = null);

(statearr_47478_50842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47451 === (5))){
var inst_47427 = cljs.core.async.close_BANG_(jobs);
var state_47450__$1 = state_47450;
var statearr_47479_50843 = state_47450__$1;
(statearr_47479_50843[(2)] = inst_47427);

(statearr_47479_50843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47451 === (8))){
var inst_47429 = (state_47450[(8)]);
var inst_47441 = (state_47450[(2)]);
var state_47450__$1 = (function (){var statearr_47480 = state_47450;
(statearr_47480[(10)] = inst_47441);

return statearr_47480;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47450__$1,(9),results,inst_47429);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0 = (function (){
var statearr_47481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__);

(statearr_47481[(1)] = (1));

return statearr_47481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1 = (function (state_47450){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47450);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47485){var ex__45833__auto__ = e47485;
var statearr_47486_50848 = state_47450;
(statearr_47486_50848[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47450[(4)]))){
var statearr_47487_50849 = state_47450;
(statearr_47487_50849[(1)] = cljs.core.first((state_47450[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50850 = state_47450;
state_47450 = G__50850;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = function(state_47450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1.call(this,state_47450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_47488 = f__46538__auto__();
(statearr_47488[(6)] = c__46537__auto___50832);

return statearr_47488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


var c__46537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47529){
var state_val_47530 = (state_47529[(1)]);
if((state_val_47530 === (7))){
var inst_47525 = (state_47529[(2)]);
var state_47529__$1 = state_47529;
var statearr_47533_50851 = state_47529__$1;
(statearr_47533_50851[(2)] = inst_47525);

(statearr_47533_50851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (20))){
var state_47529__$1 = state_47529;
var statearr_47536_50855 = state_47529__$1;
(statearr_47536_50855[(2)] = null);

(statearr_47536_50855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (1))){
var state_47529__$1 = state_47529;
var statearr_47537_50856 = state_47529__$1;
(statearr_47537_50856[(2)] = null);

(statearr_47537_50856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (4))){
var inst_47491 = (state_47529[(7)]);
var inst_47491__$1 = (state_47529[(2)]);
var inst_47493 = (inst_47491__$1 == null);
var state_47529__$1 = (function (){var statearr_47539 = state_47529;
(statearr_47539[(7)] = inst_47491__$1);

return statearr_47539;
})();
if(cljs.core.truth_(inst_47493)){
var statearr_47540_50857 = state_47529__$1;
(statearr_47540_50857[(1)] = (5));

} else {
var statearr_47541_50858 = state_47529__$1;
(statearr_47541_50858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (15))){
var inst_47505 = (state_47529[(8)]);
var state_47529__$1 = state_47529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47529__$1,(18),to,inst_47505);
} else {
if((state_val_47530 === (21))){
var inst_47520 = (state_47529[(2)]);
var state_47529__$1 = state_47529;
var statearr_47545_50862 = state_47529__$1;
(statearr_47545_50862[(2)] = inst_47520);

(statearr_47545_50862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (13))){
var inst_47522 = (state_47529[(2)]);
var state_47529__$1 = (function (){var statearr_47547 = state_47529;
(statearr_47547[(9)] = inst_47522);

return statearr_47547;
})();
var statearr_47548_50864 = state_47529__$1;
(statearr_47548_50864[(2)] = null);

(statearr_47548_50864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (6))){
var inst_47491 = (state_47529[(7)]);
var state_47529__$1 = state_47529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47529__$1,(11),inst_47491);
} else {
if((state_val_47530 === (17))){
var inst_47513 = (state_47529[(2)]);
var state_47529__$1 = state_47529;
if(cljs.core.truth_(inst_47513)){
var statearr_47558_50870 = state_47529__$1;
(statearr_47558_50870[(1)] = (19));

} else {
var statearr_47560_50871 = state_47529__$1;
(statearr_47560_50871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (3))){
var inst_47527 = (state_47529[(2)]);
var state_47529__$1 = state_47529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47529__$1,inst_47527);
} else {
if((state_val_47530 === (12))){
var inst_47502 = (state_47529[(10)]);
var state_47529__$1 = state_47529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47529__$1,(14),inst_47502);
} else {
if((state_val_47530 === (2))){
var state_47529__$1 = state_47529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47529__$1,(4),results);
} else {
if((state_val_47530 === (19))){
var state_47529__$1 = state_47529;
var statearr_47564_50872 = state_47529__$1;
(statearr_47564_50872[(2)] = null);

(statearr_47564_50872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (11))){
var inst_47502 = (state_47529[(2)]);
var state_47529__$1 = (function (){var statearr_47565 = state_47529;
(statearr_47565[(10)] = inst_47502);

return statearr_47565;
})();
var statearr_47566_50876 = state_47529__$1;
(statearr_47566_50876[(2)] = null);

(statearr_47566_50876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (9))){
var state_47529__$1 = state_47529;
var statearr_47569_50877 = state_47529__$1;
(statearr_47569_50877[(2)] = null);

(statearr_47569_50877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (5))){
var state_47529__$1 = state_47529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47572_50878 = state_47529__$1;
(statearr_47572_50878[(1)] = (8));

} else {
var statearr_47574_50879 = state_47529__$1;
(statearr_47574_50879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (14))){
var inst_47505 = (state_47529[(8)]);
var inst_47505__$1 = (state_47529[(2)]);
var inst_47506 = (inst_47505__$1 == null);
var inst_47507 = cljs.core.not(inst_47506);
var state_47529__$1 = (function (){var statearr_47575 = state_47529;
(statearr_47575[(8)] = inst_47505__$1);

return statearr_47575;
})();
if(inst_47507){
var statearr_47577_50880 = state_47529__$1;
(statearr_47577_50880[(1)] = (15));

} else {
var statearr_47580_50884 = state_47529__$1;
(statearr_47580_50884[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (16))){
var state_47529__$1 = state_47529;
var statearr_47584_50885 = state_47529__$1;
(statearr_47584_50885[(2)] = false);

(statearr_47584_50885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (10))){
var inst_47499 = (state_47529[(2)]);
var state_47529__$1 = state_47529;
var statearr_47585_50886 = state_47529__$1;
(statearr_47585_50886[(2)] = inst_47499);

(statearr_47585_50886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (18))){
var inst_47510 = (state_47529[(2)]);
var state_47529__$1 = state_47529;
var statearr_47586_50887 = state_47529__$1;
(statearr_47586_50887[(2)] = inst_47510);

(statearr_47586_50887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47530 === (8))){
var inst_47496 = cljs.core.async.close_BANG_(to);
var state_47529__$1 = state_47529;
var statearr_47589_50892 = state_47529__$1;
(statearr_47589_50892[(2)] = inst_47496);

(statearr_47589_50892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0 = (function (){
var statearr_47594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__);

(statearr_47594[(1)] = (1));

return statearr_47594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1 = (function (state_47529){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47529);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47596){var ex__45833__auto__ = e47596;
var statearr_47597_50896 = state_47529;
(statearr_47597_50896[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47529[(4)]))){
var statearr_47598_50897 = state_47529;
(statearr_47598_50897[(1)] = cljs.core.first((state_47529[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50898 = state_47529;
state_47529 = G__50898;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__ = function(state_47529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1.call(this,state_47529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_47602 = f__46538__auto__();
(statearr_47602[(6)] = c__46537__auto__);

return statearr_47602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));

return c__46537__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47612 = arguments.length;
switch (G__47612) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47623 = arguments.length;
switch (G__47623) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47646 = arguments.length;
switch (G__47646) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46537__auto___50916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47685){
var state_val_47686 = (state_47685[(1)]);
if((state_val_47686 === (7))){
var inst_47679 = (state_47685[(2)]);
var state_47685__$1 = state_47685;
var statearr_47689_50917 = state_47685__$1;
(statearr_47689_50917[(2)] = inst_47679);

(statearr_47689_50917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (1))){
var state_47685__$1 = state_47685;
var statearr_47690_50922 = state_47685__$1;
(statearr_47690_50922[(2)] = null);

(statearr_47690_50922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (4))){
var inst_47659 = (state_47685[(7)]);
var inst_47659__$1 = (state_47685[(2)]);
var inst_47660 = (inst_47659__$1 == null);
var state_47685__$1 = (function (){var statearr_47694 = state_47685;
(statearr_47694[(7)] = inst_47659__$1);

return statearr_47694;
})();
if(cljs.core.truth_(inst_47660)){
var statearr_47696_50929 = state_47685__$1;
(statearr_47696_50929[(1)] = (5));

} else {
var statearr_47697_50930 = state_47685__$1;
(statearr_47697_50930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (13))){
var state_47685__$1 = state_47685;
var statearr_47700_50931 = state_47685__$1;
(statearr_47700_50931[(2)] = null);

(statearr_47700_50931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (6))){
var inst_47659 = (state_47685[(7)]);
var inst_47665 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47659) : p.call(null,inst_47659));
var state_47685__$1 = state_47685;
if(cljs.core.truth_(inst_47665)){
var statearr_47705_50937 = state_47685__$1;
(statearr_47705_50937[(1)] = (9));

} else {
var statearr_47706_50938 = state_47685__$1;
(statearr_47706_50938[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (3))){
var inst_47682 = (state_47685[(2)]);
var state_47685__$1 = state_47685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47685__$1,inst_47682);
} else {
if((state_val_47686 === (12))){
var state_47685__$1 = state_47685;
var statearr_47715_50943 = state_47685__$1;
(statearr_47715_50943[(2)] = null);

(statearr_47715_50943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (2))){
var state_47685__$1 = state_47685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47685__$1,(4),ch);
} else {
if((state_val_47686 === (11))){
var inst_47659 = (state_47685[(7)]);
var inst_47669 = (state_47685[(2)]);
var state_47685__$1 = state_47685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47685__$1,(8),inst_47669,inst_47659);
} else {
if((state_val_47686 === (9))){
var state_47685__$1 = state_47685;
var statearr_47724_50947 = state_47685__$1;
(statearr_47724_50947[(2)] = tc);

(statearr_47724_50947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (5))){
var inst_47662 = cljs.core.async.close_BANG_(tc);
var inst_47663 = cljs.core.async.close_BANG_(fc);
var state_47685__$1 = (function (){var statearr_47730 = state_47685;
(statearr_47730[(8)] = inst_47662);

return statearr_47730;
})();
var statearr_47732_50948 = state_47685__$1;
(statearr_47732_50948[(2)] = inst_47663);

(statearr_47732_50948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (14))){
var inst_47677 = (state_47685[(2)]);
var state_47685__$1 = state_47685;
var statearr_47734_50949 = state_47685__$1;
(statearr_47734_50949[(2)] = inst_47677);

(statearr_47734_50949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (10))){
var state_47685__$1 = state_47685;
var statearr_47735_50950 = state_47685__$1;
(statearr_47735_50950[(2)] = fc);

(statearr_47735_50950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47686 === (8))){
var inst_47671 = (state_47685[(2)]);
var state_47685__$1 = state_47685;
if(cljs.core.truth_(inst_47671)){
var statearr_47736_50954 = state_47685__$1;
(statearr_47736_50954[(1)] = (12));

} else {
var statearr_47738_50956 = state_47685__$1;
(statearr_47738_50956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_47747 = [null,null,null,null,null,null,null,null,null];
(statearr_47747[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_47747[(1)] = (1));

return statearr_47747;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_47685){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47685);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47749){var ex__45833__auto__ = e47749;
var statearr_47750_50958 = state_47685;
(statearr_47750_50958[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47685[(4)]))){
var statearr_47754_50959 = state_47685;
(statearr_47754_50959[(1)] = cljs.core.first((state_47685[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50961 = state_47685;
state_47685 = G__50961;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_47685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_47685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_47761 = f__46538__auto__();
(statearr_47761[(6)] = c__46537__auto___50916);

return statearr_47761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47798){
var state_val_47800 = (state_47798[(1)]);
if((state_val_47800 === (7))){
var inst_47788 = (state_47798[(2)]);
var state_47798__$1 = state_47798;
var statearr_47809_50964 = state_47798__$1;
(statearr_47809_50964[(2)] = inst_47788);

(statearr_47809_50964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (1))){
var inst_47768 = init;
var inst_47770 = inst_47768;
var state_47798__$1 = (function (){var statearr_47810 = state_47798;
(statearr_47810[(7)] = inst_47770);

return statearr_47810;
})();
var statearr_47812_50966 = state_47798__$1;
(statearr_47812_50966[(2)] = null);

(statearr_47812_50966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (4))){
var inst_47773 = (state_47798[(8)]);
var inst_47773__$1 = (state_47798[(2)]);
var inst_47774 = (inst_47773__$1 == null);
var state_47798__$1 = (function (){var statearr_47815 = state_47798;
(statearr_47815[(8)] = inst_47773__$1);

return statearr_47815;
})();
if(cljs.core.truth_(inst_47774)){
var statearr_47817_50968 = state_47798__$1;
(statearr_47817_50968[(1)] = (5));

} else {
var statearr_47818_50969 = state_47798__$1;
(statearr_47818_50969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (6))){
var inst_47773 = (state_47798[(8)]);
var inst_47770 = (state_47798[(7)]);
var inst_47777 = (state_47798[(9)]);
var inst_47777__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47770,inst_47773) : f.call(null,inst_47770,inst_47773));
var inst_47778 = cljs.core.reduced_QMARK_(inst_47777__$1);
var state_47798__$1 = (function (){var statearr_47825 = state_47798;
(statearr_47825[(9)] = inst_47777__$1);

return statearr_47825;
})();
if(inst_47778){
var statearr_47828_50974 = state_47798__$1;
(statearr_47828_50974[(1)] = (8));

} else {
var statearr_47831_50976 = state_47798__$1;
(statearr_47831_50976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (3))){
var inst_47791 = (state_47798[(2)]);
var state_47798__$1 = state_47798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47798__$1,inst_47791);
} else {
if((state_val_47800 === (2))){
var state_47798__$1 = state_47798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47798__$1,(4),ch);
} else {
if((state_val_47800 === (9))){
var inst_47777 = (state_47798[(9)]);
var inst_47770 = inst_47777;
var state_47798__$1 = (function (){var statearr_47836 = state_47798;
(statearr_47836[(7)] = inst_47770);

return statearr_47836;
})();
var statearr_47837_50980 = state_47798__$1;
(statearr_47837_50980[(2)] = null);

(statearr_47837_50980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (5))){
var inst_47770 = (state_47798[(7)]);
var state_47798__$1 = state_47798;
var statearr_47838_50981 = state_47798__$1;
(statearr_47838_50981[(2)] = inst_47770);

(statearr_47838_50981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (10))){
var inst_47785 = (state_47798[(2)]);
var state_47798__$1 = state_47798;
var statearr_47846_50982 = state_47798__$1;
(statearr_47846_50982[(2)] = inst_47785);

(statearr_47846_50982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (8))){
var inst_47777 = (state_47798[(9)]);
var inst_47780 = cljs.core.deref(inst_47777);
var state_47798__$1 = state_47798;
var statearr_47853_50985 = state_47798__$1;
(statearr_47853_50985[(2)] = inst_47780);

(statearr_47853_50985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45830__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45830__auto____0 = (function (){
var statearr_47861 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47861[(0)] = cljs$core$async$reduce_$_state_machine__45830__auto__);

(statearr_47861[(1)] = (1));

return statearr_47861;
});
var cljs$core$async$reduce_$_state_machine__45830__auto____1 = (function (state_47798){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47798);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47865){var ex__45833__auto__ = e47865;
var statearr_47867_50986 = state_47798;
(statearr_47867_50986[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47798[(4)]))){
var statearr_47875_50987 = state_47798;
(statearr_47875_50987[(1)] = cljs.core.first((state_47798[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50988 = state_47798;
state_47798 = G__50988;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45830__auto__ = function(state_47798){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45830__auto____1.call(this,state_47798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45830__auto____0;
cljs$core$async$reduce_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45830__auto____1;
return cljs$core$async$reduce_$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_47881 = f__46538__auto__();
(statearr_47881[(6)] = c__46537__auto__);

return statearr_47881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));

return c__46537__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47899){
var state_val_47900 = (state_47899[(1)]);
if((state_val_47900 === (1))){
var inst_47893 = cljs.core.async.reduce(f__$1,init,ch);
var state_47899__$1 = state_47899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47899__$1,(2),inst_47893);
} else {
if((state_val_47900 === (2))){
var inst_47895 = (state_47899[(2)]);
var inst_47896 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47895) : f__$1.call(null,inst_47895));
var state_47899__$1 = state_47899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47899__$1,inst_47896);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45830__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45830__auto____0 = (function (){
var statearr_47923 = [null,null,null,null,null,null,null];
(statearr_47923[(0)] = cljs$core$async$transduce_$_state_machine__45830__auto__);

(statearr_47923[(1)] = (1));

return statearr_47923;
});
var cljs$core$async$transduce_$_state_machine__45830__auto____1 = (function (state_47899){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47899);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e47927){var ex__45833__auto__ = e47927;
var statearr_47928_50997 = state_47899;
(statearr_47928_50997[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47899[(4)]))){
var statearr_47929_51000 = state_47899;
(statearr_47929_51000[(1)] = cljs.core.first((state_47899[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51003 = state_47899;
state_47899 = G__51003;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45830__auto__ = function(state_47899){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45830__auto____1.call(this,state_47899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45830__auto____0;
cljs$core$async$transduce_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45830__auto____1;
return cljs$core$async$transduce_$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_47936 = f__46538__auto__();
(statearr_47936[(6)] = c__46537__auto__);

return statearr_47936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));

return c__46537__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47946 = arguments.length;
switch (G__47946) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_47990){
var state_val_47991 = (state_47990[(1)]);
if((state_val_47991 === (7))){
var inst_47969 = (state_47990[(2)]);
var state_47990__$1 = state_47990;
var statearr_47996_51009 = state_47990__$1;
(statearr_47996_51009[(2)] = inst_47969);

(statearr_47996_51009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (1))){
var inst_47956 = cljs.core.seq(coll);
var inst_47960 = inst_47956;
var state_47990__$1 = (function (){var statearr_48003 = state_47990;
(statearr_48003[(7)] = inst_47960);

return statearr_48003;
})();
var statearr_48005_51012 = state_47990__$1;
(statearr_48005_51012[(2)] = null);

(statearr_48005_51012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (4))){
var inst_47960 = (state_47990[(7)]);
var inst_47967 = cljs.core.first(inst_47960);
var state_47990__$1 = state_47990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47990__$1,(7),ch,inst_47967);
} else {
if((state_val_47991 === (13))){
var inst_47981 = (state_47990[(2)]);
var state_47990__$1 = state_47990;
var statearr_48010_51014 = state_47990__$1;
(statearr_48010_51014[(2)] = inst_47981);

(statearr_48010_51014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (6))){
var inst_47972 = (state_47990[(2)]);
var state_47990__$1 = state_47990;
if(cljs.core.truth_(inst_47972)){
var statearr_48013_51015 = state_47990__$1;
(statearr_48013_51015[(1)] = (8));

} else {
var statearr_48016_51016 = state_47990__$1;
(statearr_48016_51016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (3))){
var inst_47985 = (state_47990[(2)]);
var state_47990__$1 = state_47990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47990__$1,inst_47985);
} else {
if((state_val_47991 === (12))){
var state_47990__$1 = state_47990;
var statearr_48019_51018 = state_47990__$1;
(statearr_48019_51018[(2)] = null);

(statearr_48019_51018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (2))){
var inst_47960 = (state_47990[(7)]);
var state_47990__$1 = state_47990;
if(cljs.core.truth_(inst_47960)){
var statearr_48025_51022 = state_47990__$1;
(statearr_48025_51022[(1)] = (4));

} else {
var statearr_48027_51023 = state_47990__$1;
(statearr_48027_51023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (11))){
var inst_47978 = cljs.core.async.close_BANG_(ch);
var state_47990__$1 = state_47990;
var statearr_48031_51028 = state_47990__$1;
(statearr_48031_51028[(2)] = inst_47978);

(statearr_48031_51028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (9))){
var state_47990__$1 = state_47990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48032_51031 = state_47990__$1;
(statearr_48032_51031[(1)] = (11));

} else {
var statearr_48033_51032 = state_47990__$1;
(statearr_48033_51032[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (5))){
var inst_47960 = (state_47990[(7)]);
var state_47990__$1 = state_47990;
var statearr_48034_51033 = state_47990__$1;
(statearr_48034_51033[(2)] = inst_47960);

(statearr_48034_51033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (10))){
var inst_47983 = (state_47990[(2)]);
var state_47990__$1 = state_47990;
var statearr_48063_51037 = state_47990__$1;
(statearr_48063_51037[(2)] = inst_47983);

(statearr_48063_51037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47991 === (8))){
var inst_47960 = (state_47990[(7)]);
var inst_47974 = cljs.core.next(inst_47960);
var inst_47960__$1 = inst_47974;
var state_47990__$1 = (function (){var statearr_48064 = state_47990;
(statearr_48064[(7)] = inst_47960__$1);

return statearr_48064;
})();
var statearr_48065_51039 = state_47990__$1;
(statearr_48065_51039[(2)] = null);

(statearr_48065_51039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_48066 = [null,null,null,null,null,null,null,null];
(statearr_48066[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_48066[(1)] = (1));

return statearr_48066;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_47990){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_47990);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e48067){var ex__45833__auto__ = e48067;
var statearr_48068_51040 = state_47990;
(statearr_48068_51040[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_47990[(4)]))){
var statearr_48069_51041 = state_47990;
(statearr_48069_51041[(1)] = cljs.core.first((state_47990[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51042 = state_47990;
state_47990 = G__51042;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_47990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_47990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_48070 = f__46538__auto__();
(statearr_48070[(6)] = c__46537__auto__);

return statearr_48070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));

return c__46537__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48080 = arguments.length;
switch (G__48080) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_51046 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_51046(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51051 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_51051(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51059 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_51059(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51061 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_51061(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48146 = (function (ch,cs,meta48147){
this.ch = ch;
this.cs = cs;
this.meta48147 = meta48147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48148,meta48147__$1){
var self__ = this;
var _48148__$1 = this;
return (new cljs.core.async.t_cljs$core$async48146(self__.ch,self__.cs,meta48147__$1));
}));

(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48148){
var self__ = this;
var _48148__$1 = this;
return self__.meta48147;
}));

(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48146.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48147","meta48147",1040751147,null)], null);
}));

(cljs.core.async.t_cljs$core$async48146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48146");

(cljs.core.async.t_cljs$core$async48146.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48146.
 */
cljs.core.async.__GT_t_cljs$core$async48146 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48146(ch__$1,cs__$1,meta48147){
return (new cljs.core.async.t_cljs$core$async48146(ch__$1,cs__$1,meta48147));
});

}

return (new cljs.core.async.t_cljs$core$async48146(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46537__auto___51082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_48341){
var state_val_48342 = (state_48341[(1)]);
if((state_val_48342 === (7))){
var inst_48334 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48346_51094 = state_48341__$1;
(statearr_48346_51094[(2)] = inst_48334);

(statearr_48346_51094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (20))){
var inst_48213 = (state_48341[(7)]);
var inst_48227 = cljs.core.first(inst_48213);
var inst_48228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48227,(0),null);
var inst_48229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48227,(1),null);
var state_48341__$1 = (function (){var statearr_48347 = state_48341;
(statearr_48347[(8)] = inst_48228);

return statearr_48347;
})();
if(cljs.core.truth_(inst_48229)){
var statearr_48348_51105 = state_48341__$1;
(statearr_48348_51105[(1)] = (22));

} else {
var statearr_48349_51106 = state_48341__$1;
(statearr_48349_51106[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (27))){
var inst_48171 = (state_48341[(9)]);
var inst_48269 = (state_48341[(10)]);
var inst_48267 = (state_48341[(11)]);
var inst_48278 = (state_48341[(12)]);
var inst_48278__$1 = cljs.core._nth(inst_48267,inst_48269);
var inst_48279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48278__$1,inst_48171,done);
var state_48341__$1 = (function (){var statearr_48351 = state_48341;
(statearr_48351[(12)] = inst_48278__$1);

return statearr_48351;
})();
if(cljs.core.truth_(inst_48279)){
var statearr_48352_51115 = state_48341__$1;
(statearr_48352_51115[(1)] = (30));

} else {
var statearr_48353_51116 = state_48341__$1;
(statearr_48353_51116[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (1))){
var state_48341__$1 = state_48341;
var statearr_48354_51117 = state_48341__$1;
(statearr_48354_51117[(2)] = null);

(statearr_48354_51117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (24))){
var inst_48213 = (state_48341[(7)]);
var inst_48240 = (state_48341[(2)]);
var inst_48241 = cljs.core.next(inst_48213);
var inst_48184 = inst_48241;
var inst_48185 = null;
var inst_48186 = (0);
var inst_48187 = (0);
var state_48341__$1 = (function (){var statearr_48361 = state_48341;
(statearr_48361[(13)] = inst_48185);

(statearr_48361[(14)] = inst_48186);

(statearr_48361[(15)] = inst_48184);

(statearr_48361[(16)] = inst_48240);

(statearr_48361[(17)] = inst_48187);

return statearr_48361;
})();
var statearr_48366_51121 = state_48341__$1;
(statearr_48366_51121[(2)] = null);

(statearr_48366_51121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (39))){
var state_48341__$1 = state_48341;
var statearr_48377_51123 = state_48341__$1;
(statearr_48377_51123[(2)] = null);

(statearr_48377_51123[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (4))){
var inst_48171 = (state_48341[(9)]);
var inst_48171__$1 = (state_48341[(2)]);
var inst_48172 = (inst_48171__$1 == null);
var state_48341__$1 = (function (){var statearr_48378 = state_48341;
(statearr_48378[(9)] = inst_48171__$1);

return statearr_48378;
})();
if(cljs.core.truth_(inst_48172)){
var statearr_48379_51124 = state_48341__$1;
(statearr_48379_51124[(1)] = (5));

} else {
var statearr_48380_51125 = state_48341__$1;
(statearr_48380_51125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (15))){
var inst_48185 = (state_48341[(13)]);
var inst_48186 = (state_48341[(14)]);
var inst_48184 = (state_48341[(15)]);
var inst_48187 = (state_48341[(17)]);
var inst_48208 = (state_48341[(2)]);
var inst_48209 = (inst_48187 + (1));
var tmp48373 = inst_48185;
var tmp48374 = inst_48186;
var tmp48375 = inst_48184;
var inst_48184__$1 = tmp48375;
var inst_48185__$1 = tmp48373;
var inst_48186__$1 = tmp48374;
var inst_48187__$1 = inst_48209;
var state_48341__$1 = (function (){var statearr_48384 = state_48341;
(statearr_48384[(13)] = inst_48185__$1);

(statearr_48384[(14)] = inst_48186__$1);

(statearr_48384[(15)] = inst_48184__$1);

(statearr_48384[(17)] = inst_48187__$1);

(statearr_48384[(18)] = inst_48208);

return statearr_48384;
})();
var statearr_48390_51126 = state_48341__$1;
(statearr_48390_51126[(2)] = null);

(statearr_48390_51126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (21))){
var inst_48244 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48405_51127 = state_48341__$1;
(statearr_48405_51127[(2)] = inst_48244);

(statearr_48405_51127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (31))){
var inst_48278 = (state_48341[(12)]);
var inst_48282 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48278);
var state_48341__$1 = state_48341;
var statearr_48416_51134 = state_48341__$1;
(statearr_48416_51134[(2)] = inst_48282);

(statearr_48416_51134[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (32))){
var inst_48268 = (state_48341[(19)]);
var inst_48266 = (state_48341[(20)]);
var inst_48269 = (state_48341[(10)]);
var inst_48267 = (state_48341[(11)]);
var inst_48284 = (state_48341[(2)]);
var inst_48289 = (inst_48269 + (1));
var tmp48398 = inst_48268;
var tmp48399 = inst_48266;
var tmp48400 = inst_48267;
var inst_48266__$1 = tmp48399;
var inst_48267__$1 = tmp48400;
var inst_48268__$1 = tmp48398;
var inst_48269__$1 = inst_48289;
var state_48341__$1 = (function (){var statearr_48427 = state_48341;
(statearr_48427[(19)] = inst_48268__$1);

(statearr_48427[(21)] = inst_48284);

(statearr_48427[(20)] = inst_48266__$1);

(statearr_48427[(10)] = inst_48269__$1);

(statearr_48427[(11)] = inst_48267__$1);

return statearr_48427;
})();
var statearr_48433_51155 = state_48341__$1;
(statearr_48433_51155[(2)] = null);

(statearr_48433_51155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (40))){
var inst_48303 = (state_48341[(22)]);
var inst_48307 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48303);
var state_48341__$1 = state_48341;
var statearr_48443_51163 = state_48341__$1;
(statearr_48443_51163[(2)] = inst_48307);

(statearr_48443_51163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (33))){
var inst_48293 = (state_48341[(23)]);
var inst_48296 = cljs.core.chunked_seq_QMARK_(inst_48293);
var state_48341__$1 = state_48341;
if(inst_48296){
var statearr_48449_51165 = state_48341__$1;
(statearr_48449_51165[(1)] = (36));

} else {
var statearr_48450_51167 = state_48341__$1;
(statearr_48450_51167[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (13))){
var inst_48198 = (state_48341[(24)]);
var inst_48203 = cljs.core.async.close_BANG_(inst_48198);
var state_48341__$1 = state_48341;
var statearr_48451_51169 = state_48341__$1;
(statearr_48451_51169[(2)] = inst_48203);

(statearr_48451_51169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (22))){
var inst_48228 = (state_48341[(8)]);
var inst_48235 = cljs.core.async.close_BANG_(inst_48228);
var state_48341__$1 = state_48341;
var statearr_48456_51170 = state_48341__$1;
(statearr_48456_51170[(2)] = inst_48235);

(statearr_48456_51170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (36))){
var inst_48293 = (state_48341[(23)]);
var inst_48298 = cljs.core.chunk_first(inst_48293);
var inst_48299 = cljs.core.chunk_rest(inst_48293);
var inst_48300 = cljs.core.count(inst_48298);
var inst_48266 = inst_48299;
var inst_48267 = inst_48298;
var inst_48268 = inst_48300;
var inst_48269 = (0);
var state_48341__$1 = (function (){var statearr_48457 = state_48341;
(statearr_48457[(19)] = inst_48268);

(statearr_48457[(20)] = inst_48266);

(statearr_48457[(10)] = inst_48269);

(statearr_48457[(11)] = inst_48267);

return statearr_48457;
})();
var statearr_48460_51173 = state_48341__$1;
(statearr_48460_51173[(2)] = null);

(statearr_48460_51173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (41))){
var inst_48293 = (state_48341[(23)]);
var inst_48309 = (state_48341[(2)]);
var inst_48311 = cljs.core.next(inst_48293);
var inst_48266 = inst_48311;
var inst_48267 = null;
var inst_48268 = (0);
var inst_48269 = (0);
var state_48341__$1 = (function (){var statearr_48461 = state_48341;
(statearr_48461[(25)] = inst_48309);

(statearr_48461[(19)] = inst_48268);

(statearr_48461[(20)] = inst_48266);

(statearr_48461[(10)] = inst_48269);

(statearr_48461[(11)] = inst_48267);

return statearr_48461;
})();
var statearr_48462_51179 = state_48341__$1;
(statearr_48462_51179[(2)] = null);

(statearr_48462_51179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (43))){
var state_48341__$1 = state_48341;
var statearr_48466_51184 = state_48341__$1;
(statearr_48466_51184[(2)] = null);

(statearr_48466_51184[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (29))){
var inst_48319 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48469_51190 = state_48341__$1;
(statearr_48469_51190[(2)] = inst_48319);

(statearr_48469_51190[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (44))){
var inst_48331 = (state_48341[(2)]);
var state_48341__$1 = (function (){var statearr_48476 = state_48341;
(statearr_48476[(26)] = inst_48331);

return statearr_48476;
})();
var statearr_48477_51191 = state_48341__$1;
(statearr_48477_51191[(2)] = null);

(statearr_48477_51191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (6))){
var inst_48254 = (state_48341[(27)]);
var inst_48253 = cljs.core.deref(cs);
var inst_48254__$1 = cljs.core.keys(inst_48253);
var inst_48259 = cljs.core.count(inst_48254__$1);
var inst_48260 = cljs.core.reset_BANG_(dctr,inst_48259);
var inst_48265 = cljs.core.seq(inst_48254__$1);
var inst_48266 = inst_48265;
var inst_48267 = null;
var inst_48268 = (0);
var inst_48269 = (0);
var state_48341__$1 = (function (){var statearr_48481 = state_48341;
(statearr_48481[(28)] = inst_48260);

(statearr_48481[(19)] = inst_48268);

(statearr_48481[(20)] = inst_48266);

(statearr_48481[(27)] = inst_48254__$1);

(statearr_48481[(10)] = inst_48269);

(statearr_48481[(11)] = inst_48267);

return statearr_48481;
})();
var statearr_48482_51196 = state_48341__$1;
(statearr_48482_51196[(2)] = null);

(statearr_48482_51196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (28))){
var inst_48266 = (state_48341[(20)]);
var inst_48293 = (state_48341[(23)]);
var inst_48293__$1 = cljs.core.seq(inst_48266);
var state_48341__$1 = (function (){var statearr_48483 = state_48341;
(statearr_48483[(23)] = inst_48293__$1);

return statearr_48483;
})();
if(inst_48293__$1){
var statearr_48484_51198 = state_48341__$1;
(statearr_48484_51198[(1)] = (33));

} else {
var statearr_48485_51203 = state_48341__$1;
(statearr_48485_51203[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (25))){
var inst_48268 = (state_48341[(19)]);
var inst_48269 = (state_48341[(10)]);
var inst_48271 = (inst_48269 < inst_48268);
var inst_48272 = inst_48271;
var state_48341__$1 = state_48341;
if(cljs.core.truth_(inst_48272)){
var statearr_48486_51206 = state_48341__$1;
(statearr_48486_51206[(1)] = (27));

} else {
var statearr_48487_51209 = state_48341__$1;
(statearr_48487_51209[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (34))){
var state_48341__$1 = state_48341;
var statearr_48490_51213 = state_48341__$1;
(statearr_48490_51213[(2)] = null);

(statearr_48490_51213[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (17))){
var state_48341__$1 = state_48341;
var statearr_48491_51217 = state_48341__$1;
(statearr_48491_51217[(2)] = null);

(statearr_48491_51217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (3))){
var inst_48336 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48341__$1,inst_48336);
} else {
if((state_val_48342 === (12))){
var inst_48249 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48496_51218 = state_48341__$1;
(statearr_48496_51218[(2)] = inst_48249);

(statearr_48496_51218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (2))){
var state_48341__$1 = state_48341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48341__$1,(4),ch);
} else {
if((state_val_48342 === (23))){
var state_48341__$1 = state_48341;
var statearr_48507_51219 = state_48341__$1;
(statearr_48507_51219[(2)] = null);

(statearr_48507_51219[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (35))){
var inst_48317 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48511_51221 = state_48341__$1;
(statearr_48511_51221[(2)] = inst_48317);

(statearr_48511_51221[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (19))){
var inst_48213 = (state_48341[(7)]);
var inst_48219 = cljs.core.chunk_first(inst_48213);
var inst_48220 = cljs.core.chunk_rest(inst_48213);
var inst_48221 = cljs.core.count(inst_48219);
var inst_48184 = inst_48220;
var inst_48185 = inst_48219;
var inst_48186 = inst_48221;
var inst_48187 = (0);
var state_48341__$1 = (function (){var statearr_48519 = state_48341;
(statearr_48519[(13)] = inst_48185);

(statearr_48519[(14)] = inst_48186);

(statearr_48519[(15)] = inst_48184);

(statearr_48519[(17)] = inst_48187);

return statearr_48519;
})();
var statearr_48520_51225 = state_48341__$1;
(statearr_48520_51225[(2)] = null);

(statearr_48520_51225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (11))){
var inst_48213 = (state_48341[(7)]);
var inst_48184 = (state_48341[(15)]);
var inst_48213__$1 = cljs.core.seq(inst_48184);
var state_48341__$1 = (function (){var statearr_48521 = state_48341;
(statearr_48521[(7)] = inst_48213__$1);

return statearr_48521;
})();
if(inst_48213__$1){
var statearr_48523_51226 = state_48341__$1;
(statearr_48523_51226[(1)] = (16));

} else {
var statearr_48524_51227 = state_48341__$1;
(statearr_48524_51227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (9))){
var inst_48251 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48528_51229 = state_48341__$1;
(statearr_48528_51229[(2)] = inst_48251);

(statearr_48528_51229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (5))){
var inst_48180 = cljs.core.deref(cs);
var inst_48181 = cljs.core.seq(inst_48180);
var inst_48184 = inst_48181;
var inst_48185 = null;
var inst_48186 = (0);
var inst_48187 = (0);
var state_48341__$1 = (function (){var statearr_48530 = state_48341;
(statearr_48530[(13)] = inst_48185);

(statearr_48530[(14)] = inst_48186);

(statearr_48530[(15)] = inst_48184);

(statearr_48530[(17)] = inst_48187);

return statearr_48530;
})();
var statearr_48531_51231 = state_48341__$1;
(statearr_48531_51231[(2)] = null);

(statearr_48531_51231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (14))){
var state_48341__$1 = state_48341;
var statearr_48532_51232 = state_48341__$1;
(statearr_48532_51232[(2)] = null);

(statearr_48532_51232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (45))){
var inst_48328 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48533_51233 = state_48341__$1;
(statearr_48533_51233[(2)] = inst_48328);

(statearr_48533_51233[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (26))){
var inst_48254 = (state_48341[(27)]);
var inst_48322 = (state_48341[(2)]);
var inst_48325 = cljs.core.seq(inst_48254);
var state_48341__$1 = (function (){var statearr_48542 = state_48341;
(statearr_48542[(29)] = inst_48322);

return statearr_48542;
})();
if(inst_48325){
var statearr_48543_51234 = state_48341__$1;
(statearr_48543_51234[(1)] = (42));

} else {
var statearr_48544_51235 = state_48341__$1;
(statearr_48544_51235[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (16))){
var inst_48213 = (state_48341[(7)]);
var inst_48217 = cljs.core.chunked_seq_QMARK_(inst_48213);
var state_48341__$1 = state_48341;
if(inst_48217){
var statearr_48549_51236 = state_48341__$1;
(statearr_48549_51236[(1)] = (19));

} else {
var statearr_48550_51237 = state_48341__$1;
(statearr_48550_51237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (38))){
var inst_48314 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48552_51238 = state_48341__$1;
(statearr_48552_51238[(2)] = inst_48314);

(statearr_48552_51238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (30))){
var state_48341__$1 = state_48341;
var statearr_48556_51239 = state_48341__$1;
(statearr_48556_51239[(2)] = null);

(statearr_48556_51239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (10))){
var inst_48185 = (state_48341[(13)]);
var inst_48187 = (state_48341[(17)]);
var inst_48197 = cljs.core._nth(inst_48185,inst_48187);
var inst_48198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48197,(0),null);
var inst_48199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48197,(1),null);
var state_48341__$1 = (function (){var statearr_48558 = state_48341;
(statearr_48558[(24)] = inst_48198);

return statearr_48558;
})();
if(cljs.core.truth_(inst_48199)){
var statearr_48559_51240 = state_48341__$1;
(statearr_48559_51240[(1)] = (13));

} else {
var statearr_48561_51241 = state_48341__$1;
(statearr_48561_51241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (18))){
var inst_48247 = (state_48341[(2)]);
var state_48341__$1 = state_48341;
var statearr_48564_51242 = state_48341__$1;
(statearr_48564_51242[(2)] = inst_48247);

(statearr_48564_51242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (42))){
var state_48341__$1 = state_48341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48341__$1,(45),dchan);
} else {
if((state_val_48342 === (37))){
var inst_48303 = (state_48341[(22)]);
var inst_48171 = (state_48341[(9)]);
var inst_48293 = (state_48341[(23)]);
var inst_48303__$1 = cljs.core.first(inst_48293);
var inst_48304 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48303__$1,inst_48171,done);
var state_48341__$1 = (function (){var statearr_48567 = state_48341;
(statearr_48567[(22)] = inst_48303__$1);

return statearr_48567;
})();
if(cljs.core.truth_(inst_48304)){
var statearr_48568_51245 = state_48341__$1;
(statearr_48568_51245[(1)] = (39));

} else {
var statearr_48570_51246 = state_48341__$1;
(statearr_48570_51246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48342 === (8))){
var inst_48186 = (state_48341[(14)]);
var inst_48187 = (state_48341[(17)]);
var inst_48191 = (inst_48187 < inst_48186);
var inst_48192 = inst_48191;
var state_48341__$1 = state_48341;
if(cljs.core.truth_(inst_48192)){
var statearr_48573_51247 = state_48341__$1;
(statearr_48573_51247[(1)] = (10));

} else {
var statearr_48574_51248 = state_48341__$1;
(statearr_48574_51248[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45830__auto__ = null;
var cljs$core$async$mult_$_state_machine__45830__auto____0 = (function (){
var statearr_48576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48576[(0)] = cljs$core$async$mult_$_state_machine__45830__auto__);

(statearr_48576[(1)] = (1));

return statearr_48576;
});
var cljs$core$async$mult_$_state_machine__45830__auto____1 = (function (state_48341){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_48341);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e48577){var ex__45833__auto__ = e48577;
var statearr_48579_51249 = state_48341;
(statearr_48579_51249[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_48341[(4)]))){
var statearr_48582_51250 = state_48341;
(statearr_48582_51250[(1)] = cljs.core.first((state_48341[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51251 = state_48341;
state_48341 = G__51251;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45830__auto__ = function(state_48341){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45830__auto____1.call(this,state_48341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45830__auto____0;
cljs$core$async$mult_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45830__auto____1;
return cljs$core$async$mult_$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_48586 = f__46538__auto__();
(statearr_48586[(6)] = c__46537__auto___51082);

return statearr_48586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48596 = arguments.length;
switch (G__48596) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_51253 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_51253(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51254 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_51254(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51256 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51256(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51263 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_51263(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51264 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51264(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51268 = arguments.length;
var i__4737__auto___51269 = (0);
while(true){
if((i__4737__auto___51269 < len__4736__auto___51268)){
args__4742__auto__.push((arguments[i__4737__auto___51269]));

var G__51270 = (i__4737__auto___51269 + (1));
i__4737__auto___51269 = G__51270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48674){
var map__48676 = p__48674;
var map__48676__$1 = (((((!((map__48676 == null))))?(((((map__48676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48676):map__48676);
var opts = map__48676__$1;
var statearr_48678_51271 = state;
(statearr_48678_51271[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48679_51276 = state;
(statearr_48679_51276[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_48682_51280 = state;
(statearr_48682_51280[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48665){
var G__48666 = cljs.core.first(seq48665);
var seq48665__$1 = cljs.core.next(seq48665);
var G__48667 = cljs.core.first(seq48665__$1);
var seq48665__$2 = cljs.core.next(seq48665__$1);
var G__48668 = cljs.core.first(seq48665__$2);
var seq48665__$3 = cljs.core.next(seq48665__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48666,G__48667,G__48668,seq48665__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48714 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48715){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48715 = meta48715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48716,meta48715__$1){
var self__ = this;
var _48716__$1 = this;
return (new cljs.core.async.t_cljs$core$async48714(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48715__$1));
}));

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48716){
var self__ = this;
var _48716__$1 = this;
return self__.meta48715;
}));

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48714.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48715","meta48715",1319146775,null)], null);
}));

(cljs.core.async.t_cljs$core$async48714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48714");

(cljs.core.async.t_cljs$core$async48714.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48714.
 */
cljs.core.async.__GT_t_cljs$core$async48714 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48714(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48715){
return (new cljs.core.async.t_cljs$core$async48714(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48715));
});

}

return (new cljs.core.async.t_cljs$core$async48714(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46537__auto___51305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_48853){
var state_val_48854 = (state_48853[(1)]);
if((state_val_48854 === (7))){
var inst_48759 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
var statearr_48857_51308 = state_48853__$1;
(statearr_48857_51308[(2)] = inst_48759);

(statearr_48857_51308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (20))){
var inst_48771 = (state_48853[(7)]);
var state_48853__$1 = state_48853;
var statearr_48858_51309 = state_48853__$1;
(statearr_48858_51309[(2)] = inst_48771);

(statearr_48858_51309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (27))){
var state_48853__$1 = state_48853;
var statearr_48860_51310 = state_48853__$1;
(statearr_48860_51310[(2)] = null);

(statearr_48860_51310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (1))){
var inst_48741 = (state_48853[(8)]);
var inst_48741__$1 = calc_state();
var inst_48745 = (inst_48741__$1 == null);
var inst_48746 = cljs.core.not(inst_48745);
var state_48853__$1 = (function (){var statearr_48863 = state_48853;
(statearr_48863[(8)] = inst_48741__$1);

return statearr_48863;
})();
if(inst_48746){
var statearr_48864_51312 = state_48853__$1;
(statearr_48864_51312[(1)] = (2));

} else {
var statearr_48867_51313 = state_48853__$1;
(statearr_48867_51313[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (24))){
var inst_48823 = (state_48853[(9)]);
var inst_48796 = (state_48853[(10)]);
var inst_48807 = (state_48853[(11)]);
var inst_48823__$1 = (inst_48796.cljs$core$IFn$_invoke$arity$1 ? inst_48796.cljs$core$IFn$_invoke$arity$1(inst_48807) : inst_48796.call(null,inst_48807));
var state_48853__$1 = (function (){var statearr_48871 = state_48853;
(statearr_48871[(9)] = inst_48823__$1);

return statearr_48871;
})();
if(cljs.core.truth_(inst_48823__$1)){
var statearr_48872_51314 = state_48853__$1;
(statearr_48872_51314[(1)] = (29));

} else {
var statearr_48873_51315 = state_48853__$1;
(statearr_48873_51315[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (4))){
var inst_48762 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
if(cljs.core.truth_(inst_48762)){
var statearr_48875_51316 = state_48853__$1;
(statearr_48875_51316[(1)] = (8));

} else {
var statearr_48876_51317 = state_48853__$1;
(statearr_48876_51317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (15))){
var inst_48790 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
if(cljs.core.truth_(inst_48790)){
var statearr_48878_51318 = state_48853__$1;
(statearr_48878_51318[(1)] = (19));

} else {
var statearr_48879_51319 = state_48853__$1;
(statearr_48879_51319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (21))){
var inst_48795 = (state_48853[(12)]);
var inst_48795__$1 = (state_48853[(2)]);
var inst_48796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48795__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48795__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48795__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48853__$1 = (function (){var statearr_48880 = state_48853;
(statearr_48880[(10)] = inst_48796);

(statearr_48880[(12)] = inst_48795__$1);

(statearr_48880[(13)] = inst_48797);

return statearr_48880;
})();
return cljs.core.async.ioc_alts_BANG_(state_48853__$1,(22),inst_48798);
} else {
if((state_val_48854 === (31))){
var inst_48832 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
if(cljs.core.truth_(inst_48832)){
var statearr_48885_51321 = state_48853__$1;
(statearr_48885_51321[(1)] = (32));

} else {
var statearr_48886_51322 = state_48853__$1;
(statearr_48886_51322[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (32))){
var inst_48806 = (state_48853[(14)]);
var state_48853__$1 = state_48853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48853__$1,(35),out,inst_48806);
} else {
if((state_val_48854 === (33))){
var inst_48795 = (state_48853[(12)]);
var inst_48771 = inst_48795;
var state_48853__$1 = (function (){var statearr_48888 = state_48853;
(statearr_48888[(7)] = inst_48771);

return statearr_48888;
})();
var statearr_48889_51323 = state_48853__$1;
(statearr_48889_51323[(2)] = null);

(statearr_48889_51323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (13))){
var inst_48771 = (state_48853[(7)]);
var inst_48779 = inst_48771.cljs$lang$protocol_mask$partition0$;
var inst_48780 = (inst_48779 & (64));
var inst_48781 = inst_48771.cljs$core$ISeq$;
var inst_48782 = (cljs.core.PROTOCOL_SENTINEL === inst_48781);
var inst_48783 = ((inst_48780) || (inst_48782));
var state_48853__$1 = state_48853;
if(cljs.core.truth_(inst_48783)){
var statearr_48895_51327 = state_48853__$1;
(statearr_48895_51327[(1)] = (16));

} else {
var statearr_48896_51330 = state_48853__$1;
(statearr_48896_51330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (22))){
var inst_48806 = (state_48853[(14)]);
var inst_48807 = (state_48853[(11)]);
var inst_48805 = (state_48853[(2)]);
var inst_48806__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48805,(0),null);
var inst_48807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48805,(1),null);
var inst_48810 = (inst_48806__$1 == null);
var inst_48811 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48807__$1,change);
var inst_48812 = ((inst_48810) || (inst_48811));
var state_48853__$1 = (function (){var statearr_48899 = state_48853;
(statearr_48899[(14)] = inst_48806__$1);

(statearr_48899[(11)] = inst_48807__$1);

return statearr_48899;
})();
if(cljs.core.truth_(inst_48812)){
var statearr_48901_51336 = state_48853__$1;
(statearr_48901_51336[(1)] = (23));

} else {
var statearr_48902_51337 = state_48853__$1;
(statearr_48902_51337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (36))){
var inst_48795 = (state_48853[(12)]);
var inst_48771 = inst_48795;
var state_48853__$1 = (function (){var statearr_48903 = state_48853;
(statearr_48903[(7)] = inst_48771);

return statearr_48903;
})();
var statearr_48904_51338 = state_48853__$1;
(statearr_48904_51338[(2)] = null);

(statearr_48904_51338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (29))){
var inst_48823 = (state_48853[(9)]);
var state_48853__$1 = state_48853;
var statearr_48907_51339 = state_48853__$1;
(statearr_48907_51339[(2)] = inst_48823);

(statearr_48907_51339[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (6))){
var state_48853__$1 = state_48853;
var statearr_48909_51340 = state_48853__$1;
(statearr_48909_51340[(2)] = false);

(statearr_48909_51340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (28))){
var inst_48819 = (state_48853[(2)]);
var inst_48820 = calc_state();
var inst_48771 = inst_48820;
var state_48853__$1 = (function (){var statearr_48911 = state_48853;
(statearr_48911[(15)] = inst_48819);

(statearr_48911[(7)] = inst_48771);

return statearr_48911;
})();
var statearr_48912_51341 = state_48853__$1;
(statearr_48912_51341[(2)] = null);

(statearr_48912_51341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (25))){
var inst_48846 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
var statearr_48913_51342 = state_48853__$1;
(statearr_48913_51342[(2)] = inst_48846);

(statearr_48913_51342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (34))){
var inst_48844 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
var statearr_48915_51344 = state_48853__$1;
(statearr_48915_51344[(2)] = inst_48844);

(statearr_48915_51344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (17))){
var state_48853__$1 = state_48853;
var statearr_48917_51345 = state_48853__$1;
(statearr_48917_51345[(2)] = false);

(statearr_48917_51345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (3))){
var state_48853__$1 = state_48853;
var statearr_48925_51346 = state_48853__$1;
(statearr_48925_51346[(2)] = false);

(statearr_48925_51346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (12))){
var inst_48848 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48853__$1,inst_48848);
} else {
if((state_val_48854 === (2))){
var inst_48741 = (state_48853[(8)]);
var inst_48751 = inst_48741.cljs$lang$protocol_mask$partition0$;
var inst_48752 = (inst_48751 & (64));
var inst_48753 = inst_48741.cljs$core$ISeq$;
var inst_48754 = (cljs.core.PROTOCOL_SENTINEL === inst_48753);
var inst_48755 = ((inst_48752) || (inst_48754));
var state_48853__$1 = state_48853;
if(cljs.core.truth_(inst_48755)){
var statearr_48927_51352 = state_48853__$1;
(statearr_48927_51352[(1)] = (5));

} else {
var statearr_48928_51353 = state_48853__$1;
(statearr_48928_51353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (23))){
var inst_48806 = (state_48853[(14)]);
var inst_48814 = (inst_48806 == null);
var state_48853__$1 = state_48853;
if(cljs.core.truth_(inst_48814)){
var statearr_48931_51354 = state_48853__$1;
(statearr_48931_51354[(1)] = (26));

} else {
var statearr_48932_51355 = state_48853__$1;
(statearr_48932_51355[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (35))){
var inst_48835 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
if(cljs.core.truth_(inst_48835)){
var statearr_48935_51357 = state_48853__$1;
(statearr_48935_51357[(1)] = (36));

} else {
var statearr_48936_51359 = state_48853__$1;
(statearr_48936_51359[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (19))){
var inst_48771 = (state_48853[(7)]);
var inst_48792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48771);
var state_48853__$1 = state_48853;
var statearr_48938_51360 = state_48853__$1;
(statearr_48938_51360[(2)] = inst_48792);

(statearr_48938_51360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (11))){
var inst_48771 = (state_48853[(7)]);
var inst_48775 = (inst_48771 == null);
var inst_48776 = cljs.core.not(inst_48775);
var state_48853__$1 = state_48853;
if(inst_48776){
var statearr_48939_51362 = state_48853__$1;
(statearr_48939_51362[(1)] = (13));

} else {
var statearr_48941_51366 = state_48853__$1;
(statearr_48941_51366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (9))){
var inst_48741 = (state_48853[(8)]);
var state_48853__$1 = state_48853;
var statearr_48943_51367 = state_48853__$1;
(statearr_48943_51367[(2)] = inst_48741);

(statearr_48943_51367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (5))){
var state_48853__$1 = state_48853;
var statearr_48946_51369 = state_48853__$1;
(statearr_48946_51369[(2)] = true);

(statearr_48946_51369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (14))){
var state_48853__$1 = state_48853;
var statearr_48947_51370 = state_48853__$1;
(statearr_48947_51370[(2)] = false);

(statearr_48947_51370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (26))){
var inst_48807 = (state_48853[(11)]);
var inst_48816 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48807);
var state_48853__$1 = state_48853;
var statearr_48949_51371 = state_48853__$1;
(statearr_48949_51371[(2)] = inst_48816);

(statearr_48949_51371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (16))){
var state_48853__$1 = state_48853;
var statearr_48950_51372 = state_48853__$1;
(statearr_48950_51372[(2)] = true);

(statearr_48950_51372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (38))){
var inst_48840 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
var statearr_48953_51373 = state_48853__$1;
(statearr_48953_51373[(2)] = inst_48840);

(statearr_48953_51373[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (30))){
var inst_48796 = (state_48853[(10)]);
var inst_48807 = (state_48853[(11)]);
var inst_48797 = (state_48853[(13)]);
var inst_48827 = cljs.core.empty_QMARK_(inst_48796);
var inst_48828 = (inst_48797.cljs$core$IFn$_invoke$arity$1 ? inst_48797.cljs$core$IFn$_invoke$arity$1(inst_48807) : inst_48797.call(null,inst_48807));
var inst_48829 = cljs.core.not(inst_48828);
var inst_48830 = ((inst_48827) && (inst_48829));
var state_48853__$1 = state_48853;
var statearr_48956_51374 = state_48853__$1;
(statearr_48956_51374[(2)] = inst_48830);

(statearr_48956_51374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (10))){
var inst_48741 = (state_48853[(8)]);
var inst_48767 = (state_48853[(2)]);
var inst_48768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48767,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48767,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48767,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48771 = inst_48741;
var state_48853__$1 = (function (){var statearr_48958 = state_48853;
(statearr_48958[(16)] = inst_48768);

(statearr_48958[(17)] = inst_48769);

(statearr_48958[(7)] = inst_48771);

(statearr_48958[(18)] = inst_48770);

return statearr_48958;
})();
var statearr_48959_51377 = state_48853__$1;
(statearr_48959_51377[(2)] = null);

(statearr_48959_51377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (18))){
var inst_48787 = (state_48853[(2)]);
var state_48853__$1 = state_48853;
var statearr_48962_51378 = state_48853__$1;
(statearr_48962_51378[(2)] = inst_48787);

(statearr_48962_51378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (37))){
var state_48853__$1 = state_48853;
var statearr_48965_51379 = state_48853__$1;
(statearr_48965_51379[(2)] = null);

(statearr_48965_51379[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48854 === (8))){
var inst_48741 = (state_48853[(8)]);
var inst_48764 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48741);
var state_48853__$1 = state_48853;
var statearr_48966_51380 = state_48853__$1;
(statearr_48966_51380[(2)] = inst_48764);

(statearr_48966_51380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45830__auto__ = null;
var cljs$core$async$mix_$_state_machine__45830__auto____0 = (function (){
var statearr_48967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48967[(0)] = cljs$core$async$mix_$_state_machine__45830__auto__);

(statearr_48967[(1)] = (1));

return statearr_48967;
});
var cljs$core$async$mix_$_state_machine__45830__auto____1 = (function (state_48853){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_48853);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e48971){var ex__45833__auto__ = e48971;
var statearr_48973_51381 = state_48853;
(statearr_48973_51381[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_48853[(4)]))){
var statearr_48975_51382 = state_48853;
(statearr_48975_51382[(1)] = cljs.core.first((state_48853[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51383 = state_48853;
state_48853 = G__51383;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45830__auto__ = function(state_48853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45830__auto____1.call(this,state_48853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45830__auto____0;
cljs$core$async$mix_$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45830__auto____1;
return cljs$core$async$mix_$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_48987 = f__46538__auto__();
(statearr_48987[(6)] = c__46537__auto___51305);

return statearr_48987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_51385 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_51385(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_51386 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_51386(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_51387 = (function() {
var G__51388 = null;
var G__51388__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__51388__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__51388 = function(p,v){
switch(arguments.length){
case 1:
return G__51388__1.call(this,p);
case 2:
return G__51388__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51388.cljs$core$IFn$_invoke$arity$1 = G__51388__1;
G__51388.cljs$core$IFn$_invoke$arity$2 = G__51388__2;
return G__51388;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49081 = arguments.length;
switch (G__49081) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51387(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51387(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49117 = arguments.length;
switch (G__49117) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49112_SHARP_){
if(cljs.core.truth_((p1__49112_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49112_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49112_SHARP_.call(null,topic)))){
return p1__49112_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49112_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49133 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49134){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49134 = meta49134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49135,meta49134__$1){
var self__ = this;
var _49135__$1 = this;
return (new cljs.core.async.t_cljs$core$async49133(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49134__$1));
}));

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49135){
var self__ = this;
var _49135__$1 = this;
return self__.meta49134;
}));

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49134","meta49134",-1759012928,null)], null);
}));

(cljs.core.async.t_cljs$core$async49133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49133");

(cljs.core.async.t_cljs$core$async49133.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49133.
 */
cljs.core.async.__GT_t_cljs$core$async49133 = (function cljs$core$async$__GT_t_cljs$core$async49133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49134){
return (new cljs.core.async.t_cljs$core$async49133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49134));
});

}

return (new cljs.core.async.t_cljs$core$async49133(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46537__auto___51400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_49241){
var state_val_49242 = (state_49241[(1)]);
if((state_val_49242 === (7))){
var inst_49236 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
var statearr_49249_51401 = state_49241__$1;
(statearr_49249_51401[(2)] = inst_49236);

(statearr_49249_51401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (20))){
var state_49241__$1 = state_49241;
var statearr_49250_51403 = state_49241__$1;
(statearr_49250_51403[(2)] = null);

(statearr_49250_51403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (1))){
var state_49241__$1 = state_49241;
var statearr_49251_51405 = state_49241__$1;
(statearr_49251_51405[(2)] = null);

(statearr_49251_51405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (24))){
var inst_49219 = (state_49241[(7)]);
var inst_49228 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49219);
var state_49241__$1 = state_49241;
var statearr_49257_51406 = state_49241__$1;
(statearr_49257_51406[(2)] = inst_49228);

(statearr_49257_51406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (4))){
var inst_49171 = (state_49241[(8)]);
var inst_49171__$1 = (state_49241[(2)]);
var inst_49172 = (inst_49171__$1 == null);
var state_49241__$1 = (function (){var statearr_49281 = state_49241;
(statearr_49281[(8)] = inst_49171__$1);

return statearr_49281;
})();
if(cljs.core.truth_(inst_49172)){
var statearr_49282_51407 = state_49241__$1;
(statearr_49282_51407[(1)] = (5));

} else {
var statearr_49283_51408 = state_49241__$1;
(statearr_49283_51408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (15))){
var inst_49213 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
var statearr_49284_51409 = state_49241__$1;
(statearr_49284_51409[(2)] = inst_49213);

(statearr_49284_51409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (21))){
var inst_49233 = (state_49241[(2)]);
var state_49241__$1 = (function (){var statearr_49285 = state_49241;
(statearr_49285[(9)] = inst_49233);

return statearr_49285;
})();
var statearr_49286_51410 = state_49241__$1;
(statearr_49286_51410[(2)] = null);

(statearr_49286_51410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (13))){
var inst_49195 = (state_49241[(10)]);
var inst_49197 = cljs.core.chunked_seq_QMARK_(inst_49195);
var state_49241__$1 = state_49241;
if(inst_49197){
var statearr_49287_51411 = state_49241__$1;
(statearr_49287_51411[(1)] = (16));

} else {
var statearr_49288_51412 = state_49241__$1;
(statearr_49288_51412[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (22))){
var inst_49225 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
if(cljs.core.truth_(inst_49225)){
var statearr_49289_51414 = state_49241__$1;
(statearr_49289_51414[(1)] = (23));

} else {
var statearr_49292_51415 = state_49241__$1;
(statearr_49292_51415[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (6))){
var inst_49221 = (state_49241[(11)]);
var inst_49219 = (state_49241[(7)]);
var inst_49171 = (state_49241[(8)]);
var inst_49219__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49171) : topic_fn.call(null,inst_49171));
var inst_49220 = cljs.core.deref(mults);
var inst_49221__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49220,inst_49219__$1);
var state_49241__$1 = (function (){var statearr_49299 = state_49241;
(statearr_49299[(11)] = inst_49221__$1);

(statearr_49299[(7)] = inst_49219__$1);

return statearr_49299;
})();
if(cljs.core.truth_(inst_49221__$1)){
var statearr_49301_51416 = state_49241__$1;
(statearr_49301_51416[(1)] = (19));

} else {
var statearr_49303_51417 = state_49241__$1;
(statearr_49303_51417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (25))){
var inst_49230 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
var statearr_49305_51422 = state_49241__$1;
(statearr_49305_51422[(2)] = inst_49230);

(statearr_49305_51422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (17))){
var inst_49195 = (state_49241[(10)]);
var inst_49204 = cljs.core.first(inst_49195);
var inst_49205 = cljs.core.async.muxch_STAR_(inst_49204);
var inst_49206 = cljs.core.async.close_BANG_(inst_49205);
var inst_49207 = cljs.core.next(inst_49195);
var inst_49181 = inst_49207;
var inst_49182 = null;
var inst_49183 = (0);
var inst_49184 = (0);
var state_49241__$1 = (function (){var statearr_49310 = state_49241;
(statearr_49310[(12)] = inst_49184);

(statearr_49310[(13)] = inst_49182);

(statearr_49310[(14)] = inst_49183);

(statearr_49310[(15)] = inst_49206);

(statearr_49310[(16)] = inst_49181);

return statearr_49310;
})();
var statearr_49311_51425 = state_49241__$1;
(statearr_49311_51425[(2)] = null);

(statearr_49311_51425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (3))){
var inst_49238 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49241__$1,inst_49238);
} else {
if((state_val_49242 === (12))){
var inst_49215 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
var statearr_49312_51426 = state_49241__$1;
(statearr_49312_51426[(2)] = inst_49215);

(statearr_49312_51426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (2))){
var state_49241__$1 = state_49241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49241__$1,(4),ch);
} else {
if((state_val_49242 === (23))){
var state_49241__$1 = state_49241;
var statearr_49316_51428 = state_49241__$1;
(statearr_49316_51428[(2)] = null);

(statearr_49316_51428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (19))){
var inst_49221 = (state_49241[(11)]);
var inst_49171 = (state_49241[(8)]);
var inst_49223 = cljs.core.async.muxch_STAR_(inst_49221);
var state_49241__$1 = state_49241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49241__$1,(22),inst_49223,inst_49171);
} else {
if((state_val_49242 === (11))){
var inst_49195 = (state_49241[(10)]);
var inst_49181 = (state_49241[(16)]);
var inst_49195__$1 = cljs.core.seq(inst_49181);
var state_49241__$1 = (function (){var statearr_49319 = state_49241;
(statearr_49319[(10)] = inst_49195__$1);

return statearr_49319;
})();
if(inst_49195__$1){
var statearr_49320_51430 = state_49241__$1;
(statearr_49320_51430[(1)] = (13));

} else {
var statearr_49322_51431 = state_49241__$1;
(statearr_49322_51431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (9))){
var inst_49217 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
var statearr_49324_51436 = state_49241__$1;
(statearr_49324_51436[(2)] = inst_49217);

(statearr_49324_51436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (5))){
var inst_49178 = cljs.core.deref(mults);
var inst_49179 = cljs.core.vals(inst_49178);
var inst_49180 = cljs.core.seq(inst_49179);
var inst_49181 = inst_49180;
var inst_49182 = null;
var inst_49183 = (0);
var inst_49184 = (0);
var state_49241__$1 = (function (){var statearr_49325 = state_49241;
(statearr_49325[(12)] = inst_49184);

(statearr_49325[(13)] = inst_49182);

(statearr_49325[(14)] = inst_49183);

(statearr_49325[(16)] = inst_49181);

return statearr_49325;
})();
var statearr_49326_51437 = state_49241__$1;
(statearr_49326_51437[(2)] = null);

(statearr_49326_51437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (14))){
var state_49241__$1 = state_49241;
var statearr_49330_51438 = state_49241__$1;
(statearr_49330_51438[(2)] = null);

(statearr_49330_51438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (16))){
var inst_49195 = (state_49241[(10)]);
var inst_49199 = cljs.core.chunk_first(inst_49195);
var inst_49200 = cljs.core.chunk_rest(inst_49195);
var inst_49201 = cljs.core.count(inst_49199);
var inst_49181 = inst_49200;
var inst_49182 = inst_49199;
var inst_49183 = inst_49201;
var inst_49184 = (0);
var state_49241__$1 = (function (){var statearr_49333 = state_49241;
(statearr_49333[(12)] = inst_49184);

(statearr_49333[(13)] = inst_49182);

(statearr_49333[(14)] = inst_49183);

(statearr_49333[(16)] = inst_49181);

return statearr_49333;
})();
var statearr_49338_51442 = state_49241__$1;
(statearr_49338_51442[(2)] = null);

(statearr_49338_51442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (10))){
var inst_49184 = (state_49241[(12)]);
var inst_49182 = (state_49241[(13)]);
var inst_49183 = (state_49241[(14)]);
var inst_49181 = (state_49241[(16)]);
var inst_49189 = cljs.core._nth(inst_49182,inst_49184);
var inst_49190 = cljs.core.async.muxch_STAR_(inst_49189);
var inst_49191 = cljs.core.async.close_BANG_(inst_49190);
var inst_49192 = (inst_49184 + (1));
var tmp49327 = inst_49182;
var tmp49328 = inst_49183;
var tmp49329 = inst_49181;
var inst_49181__$1 = tmp49329;
var inst_49182__$1 = tmp49327;
var inst_49183__$1 = tmp49328;
var inst_49184__$1 = inst_49192;
var state_49241__$1 = (function (){var statearr_49347 = state_49241;
(statearr_49347[(17)] = inst_49191);

(statearr_49347[(12)] = inst_49184__$1);

(statearr_49347[(13)] = inst_49182__$1);

(statearr_49347[(14)] = inst_49183__$1);

(statearr_49347[(16)] = inst_49181__$1);

return statearr_49347;
})();
var statearr_49348_51443 = state_49241__$1;
(statearr_49348_51443[(2)] = null);

(statearr_49348_51443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (18))){
var inst_49210 = (state_49241[(2)]);
var state_49241__$1 = state_49241;
var statearr_49349_51444 = state_49241__$1;
(statearr_49349_51444[(2)] = inst_49210);

(statearr_49349_51444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49242 === (8))){
var inst_49184 = (state_49241[(12)]);
var inst_49183 = (state_49241[(14)]);
var inst_49186 = (inst_49184 < inst_49183);
var inst_49187 = inst_49186;
var state_49241__$1 = state_49241;
if(cljs.core.truth_(inst_49187)){
var statearr_49350_51445 = state_49241__$1;
(statearr_49350_51445[(1)] = (10));

} else {
var statearr_49351_51446 = state_49241__$1;
(statearr_49351_51446[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_49354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49354[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_49354[(1)] = (1));

return statearr_49354;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_49241){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_49241);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e49355){var ex__45833__auto__ = e49355;
var statearr_49356_51447 = state_49241;
(statearr_49356_51447[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_49241[(4)]))){
var statearr_49357_51448 = state_49241;
(statearr_49357_51448[(1)] = cljs.core.first((state_49241[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51449 = state_49241;
state_49241 = G__51449;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_49241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_49241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_49361 = f__46538__auto__();
(statearr_49361[(6)] = c__46537__auto___51400);

return statearr_49361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49364 = arguments.length;
switch (G__49364) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49386 = arguments.length;
switch (G__49386) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49395 = arguments.length;
switch (G__49395) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46537__auto___51456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_49492){
var state_val_49493 = (state_49492[(1)]);
if((state_val_49493 === (7))){
var state_49492__$1 = state_49492;
var statearr_49498_51457 = state_49492__$1;
(statearr_49498_51457[(2)] = null);

(statearr_49498_51457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (1))){
var state_49492__$1 = state_49492;
var statearr_49499_51458 = state_49492__$1;
(statearr_49499_51458[(2)] = null);

(statearr_49499_51458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (4))){
var inst_49416 = (state_49492[(7)]);
var inst_49414 = (state_49492[(8)]);
var inst_49422 = (inst_49416 < inst_49414);
var state_49492__$1 = state_49492;
if(cljs.core.truth_(inst_49422)){
var statearr_49500_51459 = state_49492__$1;
(statearr_49500_51459[(1)] = (6));

} else {
var statearr_49502_51460 = state_49492__$1;
(statearr_49502_51460[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (15))){
var inst_49475 = (state_49492[(9)]);
var inst_49480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49475);
var state_49492__$1 = state_49492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49492__$1,(17),out,inst_49480);
} else {
if((state_val_49493 === (13))){
var inst_49475 = (state_49492[(9)]);
var inst_49475__$1 = (state_49492[(2)]);
var inst_49476 = cljs.core.some(cljs.core.nil_QMARK_,inst_49475__$1);
var state_49492__$1 = (function (){var statearr_49507 = state_49492;
(statearr_49507[(9)] = inst_49475__$1);

return statearr_49507;
})();
if(cljs.core.truth_(inst_49476)){
var statearr_49509_51461 = state_49492__$1;
(statearr_49509_51461[(1)] = (14));

} else {
var statearr_49510_51462 = state_49492__$1;
(statearr_49510_51462[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (6))){
var state_49492__$1 = state_49492;
var statearr_49511_51463 = state_49492__$1;
(statearr_49511_51463[(2)] = null);

(statearr_49511_51463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (17))){
var inst_49482 = (state_49492[(2)]);
var state_49492__$1 = (function (){var statearr_49529 = state_49492;
(statearr_49529[(10)] = inst_49482);

return statearr_49529;
})();
var statearr_49530_51465 = state_49492__$1;
(statearr_49530_51465[(2)] = null);

(statearr_49530_51465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (3))){
var inst_49487 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49492__$1,inst_49487);
} else {
if((state_val_49493 === (12))){
var _ = (function (){var statearr_49533 = state_49492;
(statearr_49533[(4)] = cljs.core.rest((state_49492[(4)])));

return statearr_49533;
})();
var state_49492__$1 = state_49492;
var ex49524 = (state_49492__$1[(2)]);
var statearr_49538_51466 = state_49492__$1;
(statearr_49538_51466[(5)] = ex49524);


if((ex49524 instanceof Object)){
var statearr_49541_51467 = state_49492__$1;
(statearr_49541_51467[(1)] = (11));

(statearr_49541_51467[(5)] = null);

} else {
throw ex49524;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (2))){
var inst_49413 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49414 = cnt;
var inst_49416 = (0);
var state_49492__$1 = (function (){var statearr_49547 = state_49492;
(statearr_49547[(11)] = inst_49413);

(statearr_49547[(7)] = inst_49416);

(statearr_49547[(8)] = inst_49414);

return statearr_49547;
})();
var statearr_49549_51470 = state_49492__$1;
(statearr_49549_51470[(2)] = null);

(statearr_49549_51470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (11))){
var inst_49449 = (state_49492[(2)]);
var inst_49451 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49492__$1 = (function (){var statearr_49551 = state_49492;
(statearr_49551[(12)] = inst_49449);

return statearr_49551;
})();
var statearr_49552_51471 = state_49492__$1;
(statearr_49552_51471[(2)] = inst_49451);

(statearr_49552_51471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (9))){
var inst_49416 = (state_49492[(7)]);
var _ = (function (){var statearr_49557 = state_49492;
(statearr_49557[(4)] = cljs.core.cons((12),(state_49492[(4)])));

return statearr_49557;
})();
var inst_49459 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49416) : chs__$1.call(null,inst_49416));
var inst_49460 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49416) : done.call(null,inst_49416));
var inst_49461 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49459,inst_49460);
var ___$1 = (function (){var statearr_49559 = state_49492;
(statearr_49559[(4)] = cljs.core.rest((state_49492[(4)])));

return statearr_49559;
})();
var state_49492__$1 = state_49492;
var statearr_49560_51473 = state_49492__$1;
(statearr_49560_51473[(2)] = inst_49461);

(statearr_49560_51473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (5))){
var inst_49471 = (state_49492[(2)]);
var state_49492__$1 = (function (){var statearr_49566 = state_49492;
(statearr_49566[(13)] = inst_49471);

return statearr_49566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49492__$1,(13),dchan);
} else {
if((state_val_49493 === (14))){
var inst_49478 = cljs.core.async.close_BANG_(out);
var state_49492__$1 = state_49492;
var statearr_49573_51474 = state_49492__$1;
(statearr_49573_51474[(2)] = inst_49478);

(statearr_49573_51474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (16))){
var inst_49485 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49576_51475 = state_49492__$1;
(statearr_49576_51475[(2)] = inst_49485);

(statearr_49576_51475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (10))){
var inst_49416 = (state_49492[(7)]);
var inst_49464 = (state_49492[(2)]);
var inst_49465 = (inst_49416 + (1));
var inst_49416__$1 = inst_49465;
var state_49492__$1 = (function (){var statearr_49577 = state_49492;
(statearr_49577[(7)] = inst_49416__$1);

(statearr_49577[(14)] = inst_49464);

return statearr_49577;
})();
var statearr_49581_51478 = state_49492__$1;
(statearr_49581_51478[(2)] = null);

(statearr_49581_51478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (8))){
var inst_49469 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49587_51479 = state_49492__$1;
(statearr_49587_51479[(2)] = inst_49469);

(statearr_49587_51479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_49591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49591[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_49591[(1)] = (1));

return statearr_49591;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_49492){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_49492);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e49592){var ex__45833__auto__ = e49592;
var statearr_49593_51481 = state_49492;
(statearr_49593_51481[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_49492[(4)]))){
var statearr_49594_51485 = state_49492;
(statearr_49594_51485[(1)] = cljs.core.first((state_49492[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51486 = state_49492;
state_49492 = G__51486;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_49492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_49492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_49595 = f__46538__auto__();
(statearr_49595[(6)] = c__46537__auto___51456);

return statearr_49595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49602 = arguments.length;
switch (G__49602) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46537__auto___51488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_49641){
var state_val_49642 = (state_49641[(1)]);
if((state_val_49642 === (7))){
var inst_49619 = (state_49641[(7)]);
var inst_49618 = (state_49641[(8)]);
var inst_49618__$1 = (state_49641[(2)]);
var inst_49619__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49618__$1,(0),null);
var inst_49620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49618__$1,(1),null);
var inst_49621 = (inst_49619__$1 == null);
var state_49641__$1 = (function (){var statearr_49644 = state_49641;
(statearr_49644[(7)] = inst_49619__$1);

(statearr_49644[(8)] = inst_49618__$1);

(statearr_49644[(9)] = inst_49620);

return statearr_49644;
})();
if(cljs.core.truth_(inst_49621)){
var statearr_49645_51501 = state_49641__$1;
(statearr_49645_51501[(1)] = (8));

} else {
var statearr_49646_51505 = state_49641__$1;
(statearr_49646_51505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (1))){
var inst_49607 = cljs.core.vec(chs);
var inst_49608 = inst_49607;
var state_49641__$1 = (function (){var statearr_49647 = state_49641;
(statearr_49647[(10)] = inst_49608);

return statearr_49647;
})();
var statearr_49648_51506 = state_49641__$1;
(statearr_49648_51506[(2)] = null);

(statearr_49648_51506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (4))){
var inst_49608 = (state_49641[(10)]);
var state_49641__$1 = state_49641;
return cljs.core.async.ioc_alts_BANG_(state_49641__$1,(7),inst_49608);
} else {
if((state_val_49642 === (6))){
var inst_49636 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
var statearr_49650_51514 = state_49641__$1;
(statearr_49650_51514[(2)] = inst_49636);

(statearr_49650_51514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (3))){
var inst_49638 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49641__$1,inst_49638);
} else {
if((state_val_49642 === (2))){
var inst_49608 = (state_49641[(10)]);
var inst_49610 = cljs.core.count(inst_49608);
var inst_49611 = (inst_49610 > (0));
var state_49641__$1 = state_49641;
if(cljs.core.truth_(inst_49611)){
var statearr_49654_51515 = state_49641__$1;
(statearr_49654_51515[(1)] = (4));

} else {
var statearr_49656_51516 = state_49641__$1;
(statearr_49656_51516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (11))){
var inst_49608 = (state_49641[(10)]);
var inst_49629 = (state_49641[(2)]);
var tmp49652 = inst_49608;
var inst_49608__$1 = tmp49652;
var state_49641__$1 = (function (){var statearr_49659 = state_49641;
(statearr_49659[(11)] = inst_49629);

(statearr_49659[(10)] = inst_49608__$1);

return statearr_49659;
})();
var statearr_49660_51518 = state_49641__$1;
(statearr_49660_51518[(2)] = null);

(statearr_49660_51518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (9))){
var inst_49619 = (state_49641[(7)]);
var state_49641__$1 = state_49641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49641__$1,(11),out,inst_49619);
} else {
if((state_val_49642 === (5))){
var inst_49634 = cljs.core.async.close_BANG_(out);
var state_49641__$1 = state_49641;
var statearr_49662_51519 = state_49641__$1;
(statearr_49662_51519[(2)] = inst_49634);

(statearr_49662_51519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (10))){
var inst_49632 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
var statearr_49667_51520 = state_49641__$1;
(statearr_49667_51520[(2)] = inst_49632);

(statearr_49667_51520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (8))){
var inst_49619 = (state_49641[(7)]);
var inst_49618 = (state_49641[(8)]);
var inst_49620 = (state_49641[(9)]);
var inst_49608 = (state_49641[(10)]);
var inst_49624 = (function (){var cs = inst_49608;
var vec__49614 = inst_49618;
var v = inst_49619;
var c = inst_49620;
return (function (p1__49597_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49597_SHARP_);
});
})();
var inst_49625 = cljs.core.filterv(inst_49624,inst_49608);
var inst_49608__$1 = inst_49625;
var state_49641__$1 = (function (){var statearr_49671 = state_49641;
(statearr_49671[(10)] = inst_49608__$1);

return statearr_49671;
})();
var statearr_49672_51528 = state_49641__$1;
(statearr_49672_51528[(2)] = null);

(statearr_49672_51528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_49678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49678[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_49678[(1)] = (1));

return statearr_49678;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_49641){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_49641);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e49679){var ex__45833__auto__ = e49679;
var statearr_49681_51531 = state_49641;
(statearr_49681_51531[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_49641[(4)]))){
var statearr_49684_51532 = state_49641;
(statearr_49684_51532[(1)] = cljs.core.first((state_49641[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51533 = state_49641;
state_49641 = G__51533;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_49641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_49641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_49685 = f__46538__auto__();
(statearr_49685[(6)] = c__46537__auto___51488);

return statearr_49685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49689 = arguments.length;
switch (G__49689) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46537__auto___51543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_49717){
var state_val_49718 = (state_49717[(1)]);
if((state_val_49718 === (7))){
var inst_49699 = (state_49717[(7)]);
var inst_49699__$1 = (state_49717[(2)]);
var inst_49700 = (inst_49699__$1 == null);
var inst_49701 = cljs.core.not(inst_49700);
var state_49717__$1 = (function (){var statearr_49721 = state_49717;
(statearr_49721[(7)] = inst_49699__$1);

return statearr_49721;
})();
if(inst_49701){
var statearr_49724_51544 = state_49717__$1;
(statearr_49724_51544[(1)] = (8));

} else {
var statearr_49725_51545 = state_49717__$1;
(statearr_49725_51545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (1))){
var inst_49694 = (0);
var state_49717__$1 = (function (){var statearr_49726 = state_49717;
(statearr_49726[(8)] = inst_49694);

return statearr_49726;
})();
var statearr_49728_51546 = state_49717__$1;
(statearr_49728_51546[(2)] = null);

(statearr_49728_51546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (4))){
var state_49717__$1 = state_49717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49717__$1,(7),ch);
} else {
if((state_val_49718 === (6))){
var inst_49712 = (state_49717[(2)]);
var state_49717__$1 = state_49717;
var statearr_49729_51547 = state_49717__$1;
(statearr_49729_51547[(2)] = inst_49712);

(statearr_49729_51547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (3))){
var inst_49714 = (state_49717[(2)]);
var inst_49715 = cljs.core.async.close_BANG_(out);
var state_49717__$1 = (function (){var statearr_49730 = state_49717;
(statearr_49730[(9)] = inst_49714);

return statearr_49730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49717__$1,inst_49715);
} else {
if((state_val_49718 === (2))){
var inst_49694 = (state_49717[(8)]);
var inst_49696 = (inst_49694 < n);
var state_49717__$1 = state_49717;
if(cljs.core.truth_(inst_49696)){
var statearr_49731_51553 = state_49717__$1;
(statearr_49731_51553[(1)] = (4));

} else {
var statearr_49732_51554 = state_49717__$1;
(statearr_49732_51554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (11))){
var inst_49694 = (state_49717[(8)]);
var inst_49704 = (state_49717[(2)]);
var inst_49705 = (inst_49694 + (1));
var inst_49694__$1 = inst_49705;
var state_49717__$1 = (function (){var statearr_49735 = state_49717;
(statearr_49735[(8)] = inst_49694__$1);

(statearr_49735[(10)] = inst_49704);

return statearr_49735;
})();
var statearr_49736_51555 = state_49717__$1;
(statearr_49736_51555[(2)] = null);

(statearr_49736_51555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (9))){
var state_49717__$1 = state_49717;
var statearr_49738_51556 = state_49717__$1;
(statearr_49738_51556[(2)] = null);

(statearr_49738_51556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (5))){
var state_49717__$1 = state_49717;
var statearr_49740_51557 = state_49717__$1;
(statearr_49740_51557[(2)] = null);

(statearr_49740_51557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (10))){
var inst_49709 = (state_49717[(2)]);
var state_49717__$1 = state_49717;
var statearr_49747_51558 = state_49717__$1;
(statearr_49747_51558[(2)] = inst_49709);

(statearr_49747_51558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (8))){
var inst_49699 = (state_49717[(7)]);
var state_49717__$1 = state_49717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49717__$1,(11),out,inst_49699);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_49751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49751[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_49751[(1)] = (1));

return statearr_49751;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_49717){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_49717);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e49755){var ex__45833__auto__ = e49755;
var statearr_49756_51564 = state_49717;
(statearr_49756_51564[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_49717[(4)]))){
var statearr_49757_51565 = state_49717;
(statearr_49757_51565[(1)] = cljs.core.first((state_49717[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51569 = state_49717;
state_49717 = G__51569;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_49717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_49717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_49762 = f__46538__auto__();
(statearr_49762[(6)] = c__46537__auto___51543);

return statearr_49762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49769 = (function (f,ch,meta49770){
this.f = f;
this.ch = ch;
this.meta49770 = meta49770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49771,meta49770__$1){
var self__ = this;
var _49771__$1 = this;
return (new cljs.core.async.t_cljs$core$async49769(self__.f,self__.ch,meta49770__$1));
}));

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49771){
var self__ = this;
var _49771__$1 = this;
return self__.meta49770;
}));

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49777 = (function (f,ch,meta49770,_,fn1,meta49778){
this.f = f;
this.ch = ch;
this.meta49770 = meta49770;
this._ = _;
this.fn1 = fn1;
this.meta49778 = meta49778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49779,meta49778__$1){
var self__ = this;
var _49779__$1 = this;
return (new cljs.core.async.t_cljs$core$async49777(self__.f,self__.ch,self__.meta49770,self__._,self__.fn1,meta49778__$1));
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49779){
var self__ = this;
var _49779__$1 = this;
return self__.meta49778;
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49766_SHARP_){
var G__49798 = (((p1__49766_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49766_SHARP_) : self__.f.call(null,p1__49766_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49798) : f1.call(null,G__49798));
});
}));

(cljs.core.async.t_cljs$core$async49777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49770","meta49770",-1709591022,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49769","cljs.core.async/t_cljs$core$async49769",-647051982,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49778","meta49778",-558171381,null)], null);
}));

(cljs.core.async.t_cljs$core$async49777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49777");

(cljs.core.async.t_cljs$core$async49777.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49777.
 */
cljs.core.async.__GT_t_cljs$core$async49777 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49777(f__$1,ch__$1,meta49770__$1,___$2,fn1__$1,meta49778){
return (new cljs.core.async.t_cljs$core$async49777(f__$1,ch__$1,meta49770__$1,___$2,fn1__$1,meta49778));
});

}

return (new cljs.core.async.t_cljs$core$async49777(self__.f,self__.ch,self__.meta49770,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49814 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49814) : self__.f.call(null,G__49814));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49770","meta49770",-1709591022,null)], null);
}));

(cljs.core.async.t_cljs$core$async49769.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49769");

(cljs.core.async.t_cljs$core$async49769.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49769");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49769.
 */
cljs.core.async.__GT_t_cljs$core$async49769 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49769(f__$1,ch__$1,meta49770){
return (new cljs.core.async.t_cljs$core$async49769(f__$1,ch__$1,meta49770));
});

}

return (new cljs.core.async.t_cljs$core$async49769(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49825 = (function (f,ch,meta49826){
this.f = f;
this.ch = ch;
this.meta49826 = meta49826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49827,meta49826__$1){
var self__ = this;
var _49827__$1 = this;
return (new cljs.core.async.t_cljs$core$async49825(self__.f,self__.ch,meta49826__$1));
}));

(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49827){
var self__ = this;
var _49827__$1 = this;
return self__.meta49826;
}));

(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49826","meta49826",2010030546,null)], null);
}));

(cljs.core.async.t_cljs$core$async49825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49825");

(cljs.core.async.t_cljs$core$async49825.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49825.
 */
cljs.core.async.__GT_t_cljs$core$async49825 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49825(f__$1,ch__$1,meta49826){
return (new cljs.core.async.t_cljs$core$async49825(f__$1,ch__$1,meta49826));
});

}

return (new cljs.core.async.t_cljs$core$async49825(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49852 = (function (p,ch,meta49853){
this.p = p;
this.ch = ch;
this.meta49853 = meta49853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49854,meta49853__$1){
var self__ = this;
var _49854__$1 = this;
return (new cljs.core.async.t_cljs$core$async49852(self__.p,self__.ch,meta49853__$1));
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49854){
var self__ = this;
var _49854__$1 = this;
return self__.meta49853;
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49853","meta49853",1934364236,null)], null);
}));

(cljs.core.async.t_cljs$core$async49852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49852");

(cljs.core.async.t_cljs$core$async49852.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49852.
 */
cljs.core.async.__GT_t_cljs$core$async49852 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49852(p__$1,ch__$1,meta49853){
return (new cljs.core.async.t_cljs$core$async49852(p__$1,ch__$1,meta49853));
});

}

return (new cljs.core.async.t_cljs$core$async49852(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49886 = arguments.length;
switch (G__49886) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46537__auto___51645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_49931){
var state_val_49932 = (state_49931[(1)]);
if((state_val_49932 === (7))){
var inst_49925 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49934_51646 = state_49931__$1;
(statearr_49934_51646[(2)] = inst_49925);

(statearr_49934_51646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (1))){
var state_49931__$1 = state_49931;
var statearr_49935_51648 = state_49931__$1;
(statearr_49935_51648[(2)] = null);

(statearr_49935_51648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (4))){
var inst_49904 = (state_49931[(7)]);
var inst_49904__$1 = (state_49931[(2)]);
var inst_49905 = (inst_49904__$1 == null);
var state_49931__$1 = (function (){var statearr_49938 = state_49931;
(statearr_49938[(7)] = inst_49904__$1);

return statearr_49938;
})();
if(cljs.core.truth_(inst_49905)){
var statearr_49939_51653 = state_49931__$1;
(statearr_49939_51653[(1)] = (5));

} else {
var statearr_49940_51654 = state_49931__$1;
(statearr_49940_51654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (6))){
var inst_49904 = (state_49931[(7)]);
var inst_49916 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49904) : p.call(null,inst_49904));
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49916)){
var statearr_49941_51660 = state_49931__$1;
(statearr_49941_51660[(1)] = (8));

} else {
var statearr_49942_51661 = state_49931__$1;
(statearr_49942_51661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (3))){
var inst_49927 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49931__$1,inst_49927);
} else {
if((state_val_49932 === (2))){
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49931__$1,(4),ch);
} else {
if((state_val_49932 === (11))){
var inst_49919 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49951_51669 = state_49931__$1;
(statearr_49951_51669[(2)] = inst_49919);

(statearr_49951_51669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (9))){
var state_49931__$1 = state_49931;
var statearr_49952_51670 = state_49931__$1;
(statearr_49952_51670[(2)] = null);

(statearr_49952_51670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (5))){
var inst_49907 = cljs.core.async.close_BANG_(out);
var state_49931__$1 = state_49931;
var statearr_49959_51676 = state_49931__$1;
(statearr_49959_51676[(2)] = inst_49907);

(statearr_49959_51676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (10))){
var inst_49922 = (state_49931[(2)]);
var state_49931__$1 = (function (){var statearr_49963 = state_49931;
(statearr_49963[(8)] = inst_49922);

return statearr_49963;
})();
var statearr_49964_51685 = state_49931__$1;
(statearr_49964_51685[(2)] = null);

(statearr_49964_51685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (8))){
var inst_49904 = (state_49931[(7)]);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49931__$1,(11),out,inst_49904);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_49979 = [null,null,null,null,null,null,null,null,null];
(statearr_49979[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_49979[(1)] = (1));

return statearr_49979;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_49931){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_49931);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e49983){var ex__45833__auto__ = e49983;
var statearr_49984_51694 = state_49931;
(statearr_49984_51694[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_49931[(4)]))){
var statearr_49985_51695 = state_49931;
(statearr_49985_51695[(1)] = cljs.core.first((state_49931[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51696 = state_49931;
state_49931 = G__51696;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_49931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_49931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_49989 = f__46538__auto__();
(statearr_49989[(6)] = c__46537__auto___51645);

return statearr_49989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50005 = arguments.length;
switch (G__50005) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_50092){
var state_val_50093 = (state_50092[(1)]);
if((state_val_50093 === (7))){
var inst_50088 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50101_51703 = state_50092__$1;
(statearr_50101_51703[(2)] = inst_50088);

(statearr_50101_51703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (20))){
var inst_50056 = (state_50092[(7)]);
var inst_50069 = (state_50092[(2)]);
var inst_50070 = cljs.core.next(inst_50056);
var inst_50039 = inst_50070;
var inst_50040 = null;
var inst_50041 = (0);
var inst_50042 = (0);
var state_50092__$1 = (function (){var statearr_50105 = state_50092;
(statearr_50105[(8)] = inst_50069);

(statearr_50105[(9)] = inst_50039);

(statearr_50105[(10)] = inst_50042);

(statearr_50105[(11)] = inst_50041);

(statearr_50105[(12)] = inst_50040);

return statearr_50105;
})();
var statearr_50110_51716 = state_50092__$1;
(statearr_50110_51716[(2)] = null);

(statearr_50110_51716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (1))){
var state_50092__$1 = state_50092;
var statearr_50111_51717 = state_50092__$1;
(statearr_50111_51717[(2)] = null);

(statearr_50111_51717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (4))){
var inst_50028 = (state_50092[(13)]);
var inst_50028__$1 = (state_50092[(2)]);
var inst_50029 = (inst_50028__$1 == null);
var state_50092__$1 = (function (){var statearr_50118 = state_50092;
(statearr_50118[(13)] = inst_50028__$1);

return statearr_50118;
})();
if(cljs.core.truth_(inst_50029)){
var statearr_50120_51719 = state_50092__$1;
(statearr_50120_51719[(1)] = (5));

} else {
var statearr_50126_51721 = state_50092__$1;
(statearr_50126_51721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (15))){
var state_50092__$1 = state_50092;
var statearr_50137_51725 = state_50092__$1;
(statearr_50137_51725[(2)] = null);

(statearr_50137_51725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (21))){
var state_50092__$1 = state_50092;
var statearr_50142_51731 = state_50092__$1;
(statearr_50142_51731[(2)] = null);

(statearr_50142_51731[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (13))){
var inst_50039 = (state_50092[(9)]);
var inst_50042 = (state_50092[(10)]);
var inst_50041 = (state_50092[(11)]);
var inst_50040 = (state_50092[(12)]);
var inst_50049 = (state_50092[(2)]);
var inst_50050 = (inst_50042 + (1));
var tmp50130 = inst_50039;
var tmp50131 = inst_50041;
var tmp50132 = inst_50040;
var inst_50039__$1 = tmp50130;
var inst_50040__$1 = tmp50132;
var inst_50041__$1 = tmp50131;
var inst_50042__$1 = inst_50050;
var state_50092__$1 = (function (){var statearr_50147 = state_50092;
(statearr_50147[(9)] = inst_50039__$1);

(statearr_50147[(10)] = inst_50042__$1);

(statearr_50147[(11)] = inst_50041__$1);

(statearr_50147[(12)] = inst_50040__$1);

(statearr_50147[(14)] = inst_50049);

return statearr_50147;
})();
var statearr_50149_51750 = state_50092__$1;
(statearr_50149_51750[(2)] = null);

(statearr_50149_51750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (22))){
var state_50092__$1 = state_50092;
var statearr_50154_51752 = state_50092__$1;
(statearr_50154_51752[(2)] = null);

(statearr_50154_51752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (6))){
var inst_50028 = (state_50092[(13)]);
var inst_50037 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50028) : f.call(null,inst_50028));
var inst_50038 = cljs.core.seq(inst_50037);
var inst_50039 = inst_50038;
var inst_50040 = null;
var inst_50041 = (0);
var inst_50042 = (0);
var state_50092__$1 = (function (){var statearr_50159 = state_50092;
(statearr_50159[(9)] = inst_50039);

(statearr_50159[(10)] = inst_50042);

(statearr_50159[(11)] = inst_50041);

(statearr_50159[(12)] = inst_50040);

return statearr_50159;
})();
var statearr_50161_51753 = state_50092__$1;
(statearr_50161_51753[(2)] = null);

(statearr_50161_51753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (17))){
var inst_50056 = (state_50092[(7)]);
var inst_50062 = cljs.core.chunk_first(inst_50056);
var inst_50063 = cljs.core.chunk_rest(inst_50056);
var inst_50064 = cljs.core.count(inst_50062);
var inst_50039 = inst_50063;
var inst_50040 = inst_50062;
var inst_50041 = inst_50064;
var inst_50042 = (0);
var state_50092__$1 = (function (){var statearr_50168 = state_50092;
(statearr_50168[(9)] = inst_50039);

(statearr_50168[(10)] = inst_50042);

(statearr_50168[(11)] = inst_50041);

(statearr_50168[(12)] = inst_50040);

return statearr_50168;
})();
var statearr_50169_51754 = state_50092__$1;
(statearr_50169_51754[(2)] = null);

(statearr_50169_51754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (3))){
var inst_50090 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50092__$1,inst_50090);
} else {
if((state_val_50093 === (12))){
var inst_50078 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50173_51755 = state_50092__$1;
(statearr_50173_51755[(2)] = inst_50078);

(statearr_50173_51755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (2))){
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50092__$1,(4),in$);
} else {
if((state_val_50093 === (23))){
var inst_50086 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50181_51763 = state_50092__$1;
(statearr_50181_51763[(2)] = inst_50086);

(statearr_50181_51763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (19))){
var inst_50073 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50185_51765 = state_50092__$1;
(statearr_50185_51765[(2)] = inst_50073);

(statearr_50185_51765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (11))){
var inst_50039 = (state_50092[(9)]);
var inst_50056 = (state_50092[(7)]);
var inst_50056__$1 = cljs.core.seq(inst_50039);
var state_50092__$1 = (function (){var statearr_50190 = state_50092;
(statearr_50190[(7)] = inst_50056__$1);

return statearr_50190;
})();
if(inst_50056__$1){
var statearr_50194_51766 = state_50092__$1;
(statearr_50194_51766[(1)] = (14));

} else {
var statearr_50195_51767 = state_50092__$1;
(statearr_50195_51767[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (9))){
var inst_50080 = (state_50092[(2)]);
var inst_50081 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50092__$1 = (function (){var statearr_50196 = state_50092;
(statearr_50196[(15)] = inst_50080);

return statearr_50196;
})();
if(cljs.core.truth_(inst_50081)){
var statearr_50197_51768 = state_50092__$1;
(statearr_50197_51768[(1)] = (21));

} else {
var statearr_50198_51769 = state_50092__$1;
(statearr_50198_51769[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (5))){
var inst_50031 = cljs.core.async.close_BANG_(out);
var state_50092__$1 = state_50092;
var statearr_50206_51770 = state_50092__$1;
(statearr_50206_51770[(2)] = inst_50031);

(statearr_50206_51770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (14))){
var inst_50056 = (state_50092[(7)]);
var inst_50059 = cljs.core.chunked_seq_QMARK_(inst_50056);
var state_50092__$1 = state_50092;
if(inst_50059){
var statearr_50209_51771 = state_50092__$1;
(statearr_50209_51771[(1)] = (17));

} else {
var statearr_50211_51772 = state_50092__$1;
(statearr_50211_51772[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (16))){
var inst_50076 = (state_50092[(2)]);
var state_50092__$1 = state_50092;
var statearr_50214_51775 = state_50092__$1;
(statearr_50214_51775[(2)] = inst_50076);

(statearr_50214_51775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50093 === (10))){
var inst_50042 = (state_50092[(10)]);
var inst_50040 = (state_50092[(12)]);
var inst_50047 = cljs.core._nth(inst_50040,inst_50042);
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50092__$1,(13),out,inst_50047);
} else {
if((state_val_50093 === (18))){
var inst_50056 = (state_50092[(7)]);
var inst_50067 = cljs.core.first(inst_50056);
var state_50092__$1 = state_50092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50092__$1,(20),out,inst_50067);
} else {
if((state_val_50093 === (8))){
var inst_50042 = (state_50092[(10)]);
var inst_50041 = (state_50092[(11)]);
var inst_50044 = (inst_50042 < inst_50041);
var inst_50045 = inst_50044;
var state_50092__$1 = state_50092;
if(cljs.core.truth_(inst_50045)){
var statearr_50221_51777 = state_50092__$1;
(statearr_50221_51777[(1)] = (10));

} else {
var statearr_50223_51778 = state_50092__$1;
(statearr_50223_51778[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45830__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45830__auto____0 = (function (){
var statearr_50228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50228[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45830__auto__);

(statearr_50228[(1)] = (1));

return statearr_50228;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45830__auto____1 = (function (state_50092){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_50092);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e50231){var ex__45833__auto__ = e50231;
var statearr_50233_51780 = state_50092;
(statearr_50233_51780[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_50092[(4)]))){
var statearr_50234_51781 = state_50092;
(statearr_50234_51781[(1)] = cljs.core.first((state_50092[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51785 = state_50092;
state_50092 = G__51785;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45830__auto__ = function(state_50092){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45830__auto____1.call(this,state_50092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45830__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45830__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_50246 = f__46538__auto__();
(statearr_50246[(6)] = c__46537__auto__);

return statearr_50246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));

return c__46537__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50257 = arguments.length;
switch (G__50257) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50275 = arguments.length;
switch (G__50275) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50296 = arguments.length;
switch (G__50296) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46537__auto___51797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_50331){
var state_val_50333 = (state_50331[(1)]);
if((state_val_50333 === (7))){
var inst_50326 = (state_50331[(2)]);
var state_50331__$1 = state_50331;
var statearr_50339_51799 = state_50331__$1;
(statearr_50339_51799[(2)] = inst_50326);

(statearr_50339_51799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50333 === (1))){
var inst_50305 = null;
var state_50331__$1 = (function (){var statearr_50345 = state_50331;
(statearr_50345[(7)] = inst_50305);

return statearr_50345;
})();
var statearr_50346_51800 = state_50331__$1;
(statearr_50346_51800[(2)] = null);

(statearr_50346_51800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50333 === (4))){
var inst_50310 = (state_50331[(8)]);
var inst_50310__$1 = (state_50331[(2)]);
var inst_50311 = (inst_50310__$1 == null);
var inst_50312 = cljs.core.not(inst_50311);
var state_50331__$1 = (function (){var statearr_50351 = state_50331;
(statearr_50351[(8)] = inst_50310__$1);

return statearr_50351;
})();
if(inst_50312){
var statearr_50352_51801 = state_50331__$1;
(statearr_50352_51801[(1)] = (5));

} else {
var statearr_50353_51802 = state_50331__$1;
(statearr_50353_51802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50333 === (6))){
var state_50331__$1 = state_50331;
var statearr_50354_51803 = state_50331__$1;
(statearr_50354_51803[(2)] = null);

(statearr_50354_51803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50333 === (3))){
var inst_50328 = (state_50331[(2)]);
var inst_50329 = cljs.core.async.close_BANG_(out);
var state_50331__$1 = (function (){var statearr_50357 = state_50331;
(statearr_50357[(9)] = inst_50328);

return statearr_50357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50331__$1,inst_50329);
} else {
if((state_val_50333 === (2))){
var state_50331__$1 = state_50331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50331__$1,(4),ch);
} else {
if((state_val_50333 === (11))){
var inst_50310 = (state_50331[(8)]);
var inst_50319 = (state_50331[(2)]);
var inst_50305 = inst_50310;
var state_50331__$1 = (function (){var statearr_50362 = state_50331;
(statearr_50362[(10)] = inst_50319);

(statearr_50362[(7)] = inst_50305);

return statearr_50362;
})();
var statearr_50363_51809 = state_50331__$1;
(statearr_50363_51809[(2)] = null);

(statearr_50363_51809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50333 === (9))){
var inst_50310 = (state_50331[(8)]);
var state_50331__$1 = state_50331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50331__$1,(11),out,inst_50310);
} else {
if((state_val_50333 === (5))){
var inst_50310 = (state_50331[(8)]);
var inst_50305 = (state_50331[(7)]);
var inst_50314 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50310,inst_50305);
var state_50331__$1 = state_50331;
if(inst_50314){
var statearr_50370_51814 = state_50331__$1;
(statearr_50370_51814[(1)] = (8));

} else {
var statearr_50375_51815 = state_50331__$1;
(statearr_50375_51815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50333 === (10))){
var inst_50323 = (state_50331[(2)]);
var state_50331__$1 = state_50331;
var statearr_50376_51816 = state_50331__$1;
(statearr_50376_51816[(2)] = inst_50323);

(statearr_50376_51816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50333 === (8))){
var inst_50305 = (state_50331[(7)]);
var tmp50366 = inst_50305;
var inst_50305__$1 = tmp50366;
var state_50331__$1 = (function (){var statearr_50379 = state_50331;
(statearr_50379[(7)] = inst_50305__$1);

return statearr_50379;
})();
var statearr_50380_51818 = state_50331__$1;
(statearr_50380_51818[(2)] = null);

(statearr_50380_51818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_50381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50381[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_50381[(1)] = (1));

return statearr_50381;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_50331){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_50331);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e50382){var ex__45833__auto__ = e50382;
var statearr_50383_51820 = state_50331;
(statearr_50383_51820[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_50331[(4)]))){
var statearr_50385_51823 = state_50331;
(statearr_50385_51823[(1)] = cljs.core.first((state_50331[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51825 = state_50331;
state_50331 = G__51825;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_50331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_50331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_50392 = f__46538__auto__();
(statearr_50392[(6)] = c__46537__auto___51797);

return statearr_50392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50398 = arguments.length;
switch (G__50398) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46537__auto___51832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_50442){
var state_val_50443 = (state_50442[(1)]);
if((state_val_50443 === (7))){
var inst_50438 = (state_50442[(2)]);
var state_50442__$1 = state_50442;
var statearr_50444_51834 = state_50442__$1;
(statearr_50444_51834[(2)] = inst_50438);

(statearr_50444_51834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (1))){
var inst_50402 = (new Array(n));
var inst_50404 = inst_50402;
var inst_50405 = (0);
var state_50442__$1 = (function (){var statearr_50445 = state_50442;
(statearr_50445[(7)] = inst_50404);

(statearr_50445[(8)] = inst_50405);

return statearr_50445;
})();
var statearr_50446_51835 = state_50442__$1;
(statearr_50446_51835[(2)] = null);

(statearr_50446_51835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (4))){
var inst_50410 = (state_50442[(9)]);
var inst_50410__$1 = (state_50442[(2)]);
var inst_50411 = (inst_50410__$1 == null);
var inst_50412 = cljs.core.not(inst_50411);
var state_50442__$1 = (function (){var statearr_50449 = state_50442;
(statearr_50449[(9)] = inst_50410__$1);

return statearr_50449;
})();
if(inst_50412){
var statearr_50450_51838 = state_50442__$1;
(statearr_50450_51838[(1)] = (5));

} else {
var statearr_50451_51839 = state_50442__$1;
(statearr_50451_51839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (15))){
var inst_50432 = (state_50442[(2)]);
var state_50442__$1 = state_50442;
var statearr_50454_51840 = state_50442__$1;
(statearr_50454_51840[(2)] = inst_50432);

(statearr_50454_51840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (13))){
var state_50442__$1 = state_50442;
var statearr_50456_51841 = state_50442__$1;
(statearr_50456_51841[(2)] = null);

(statearr_50456_51841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (6))){
var inst_50405 = (state_50442[(8)]);
var inst_50428 = (inst_50405 > (0));
var state_50442__$1 = state_50442;
if(cljs.core.truth_(inst_50428)){
var statearr_50457_51842 = state_50442__$1;
(statearr_50457_51842[(1)] = (12));

} else {
var statearr_50458_51843 = state_50442__$1;
(statearr_50458_51843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (3))){
var inst_50440 = (state_50442[(2)]);
var state_50442__$1 = state_50442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50442__$1,inst_50440);
} else {
if((state_val_50443 === (12))){
var inst_50404 = (state_50442[(7)]);
var inst_50430 = cljs.core.vec(inst_50404);
var state_50442__$1 = state_50442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50442__$1,(15),out,inst_50430);
} else {
if((state_val_50443 === (2))){
var state_50442__$1 = state_50442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50442__$1,(4),ch);
} else {
if((state_val_50443 === (11))){
var inst_50422 = (state_50442[(2)]);
var inst_50423 = (new Array(n));
var inst_50404 = inst_50423;
var inst_50405 = (0);
var state_50442__$1 = (function (){var statearr_50461 = state_50442;
(statearr_50461[(7)] = inst_50404);

(statearr_50461[(8)] = inst_50405);

(statearr_50461[(10)] = inst_50422);

return statearr_50461;
})();
var statearr_50462_51844 = state_50442__$1;
(statearr_50462_51844[(2)] = null);

(statearr_50462_51844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (9))){
var inst_50404 = (state_50442[(7)]);
var inst_50420 = cljs.core.vec(inst_50404);
var state_50442__$1 = state_50442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50442__$1,(11),out,inst_50420);
} else {
if((state_val_50443 === (5))){
var inst_50415 = (state_50442[(11)]);
var inst_50410 = (state_50442[(9)]);
var inst_50404 = (state_50442[(7)]);
var inst_50405 = (state_50442[(8)]);
var inst_50414 = (inst_50404[inst_50405] = inst_50410);
var inst_50415__$1 = (inst_50405 + (1));
var inst_50416 = (inst_50415__$1 < n);
var state_50442__$1 = (function (){var statearr_50465 = state_50442;
(statearr_50465[(11)] = inst_50415__$1);

(statearr_50465[(12)] = inst_50414);

return statearr_50465;
})();
if(cljs.core.truth_(inst_50416)){
var statearr_50467_51851 = state_50442__$1;
(statearr_50467_51851[(1)] = (8));

} else {
var statearr_50468_51852 = state_50442__$1;
(statearr_50468_51852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (14))){
var inst_50435 = (state_50442[(2)]);
var inst_50436 = cljs.core.async.close_BANG_(out);
var state_50442__$1 = (function (){var statearr_50470 = state_50442;
(statearr_50470[(13)] = inst_50435);

return statearr_50470;
})();
var statearr_50471_51854 = state_50442__$1;
(statearr_50471_51854[(2)] = inst_50436);

(statearr_50471_51854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (10))){
var inst_50426 = (state_50442[(2)]);
var state_50442__$1 = state_50442;
var statearr_50472_51855 = state_50442__$1;
(statearr_50472_51855[(2)] = inst_50426);

(statearr_50472_51855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (8))){
var inst_50415 = (state_50442[(11)]);
var inst_50404 = (state_50442[(7)]);
var tmp50469 = inst_50404;
var inst_50404__$1 = tmp50469;
var inst_50405 = inst_50415;
var state_50442__$1 = (function (){var statearr_50473 = state_50442;
(statearr_50473[(7)] = inst_50404__$1);

(statearr_50473[(8)] = inst_50405);

return statearr_50473;
})();
var statearr_50474_51856 = state_50442__$1;
(statearr_50474_51856[(2)] = null);

(statearr_50474_51856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_50483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50483[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_50483[(1)] = (1));

return statearr_50483;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_50442){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_50442);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e50488){var ex__45833__auto__ = e50488;
var statearr_50490_51857 = state_50442;
(statearr_50490_51857[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_50442[(4)]))){
var statearr_50491_51858 = state_50442;
(statearr_50491_51858[(1)] = cljs.core.first((state_50442[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51859 = state_50442;
state_50442 = G__51859;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_50442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_50442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_50494 = f__46538__auto__();
(statearr_50494[(6)] = c__46537__auto___51832);

return statearr_50494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50498 = arguments.length;
switch (G__50498) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46537__auto___51867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46538__auto__ = (function (){var switch__45829__auto__ = (function (state_50548){
var state_val_50549 = (state_50548[(1)]);
if((state_val_50549 === (7))){
var inst_50544 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50553_51870 = state_50548__$1;
(statearr_50553_51870[(2)] = inst_50544);

(statearr_50553_51870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (1))){
var inst_50506 = [];
var inst_50507 = inst_50506;
var inst_50508 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50548__$1 = (function (){var statearr_50554 = state_50548;
(statearr_50554[(7)] = inst_50507);

(statearr_50554[(8)] = inst_50508);

return statearr_50554;
})();
var statearr_50555_51872 = state_50548__$1;
(statearr_50555_51872[(2)] = null);

(statearr_50555_51872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (4))){
var inst_50511 = (state_50548[(9)]);
var inst_50511__$1 = (state_50548[(2)]);
var inst_50512 = (inst_50511__$1 == null);
var inst_50513 = cljs.core.not(inst_50512);
var state_50548__$1 = (function (){var statearr_50556 = state_50548;
(statearr_50556[(9)] = inst_50511__$1);

return statearr_50556;
})();
if(inst_50513){
var statearr_50557_51874 = state_50548__$1;
(statearr_50557_51874[(1)] = (5));

} else {
var statearr_50558_51876 = state_50548__$1;
(statearr_50558_51876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (15))){
var inst_50538 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50559_51877 = state_50548__$1;
(statearr_50559_51877[(2)] = inst_50538);

(statearr_50559_51877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (13))){
var state_50548__$1 = state_50548;
var statearr_50561_51878 = state_50548__$1;
(statearr_50561_51878[(2)] = null);

(statearr_50561_51878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (6))){
var inst_50507 = (state_50548[(7)]);
var inst_50533 = inst_50507.length;
var inst_50534 = (inst_50533 > (0));
var state_50548__$1 = state_50548;
if(cljs.core.truth_(inst_50534)){
var statearr_50566_51880 = state_50548__$1;
(statearr_50566_51880[(1)] = (12));

} else {
var statearr_50567_51881 = state_50548__$1;
(statearr_50567_51881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (3))){
var inst_50546 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50548__$1,inst_50546);
} else {
if((state_val_50549 === (12))){
var inst_50507 = (state_50548[(7)]);
var inst_50536 = cljs.core.vec(inst_50507);
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50548__$1,(15),out,inst_50536);
} else {
if((state_val_50549 === (2))){
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50548__$1,(4),ch);
} else {
if((state_val_50549 === (11))){
var inst_50511 = (state_50548[(9)]);
var inst_50515 = (state_50548[(10)]);
var inst_50525 = (state_50548[(2)]);
var inst_50527 = [];
var inst_50528 = inst_50527.push(inst_50511);
var inst_50507 = inst_50527;
var inst_50508 = inst_50515;
var state_50548__$1 = (function (){var statearr_50569 = state_50548;
(statearr_50569[(11)] = inst_50528);

(statearr_50569[(12)] = inst_50525);

(statearr_50569[(7)] = inst_50507);

(statearr_50569[(8)] = inst_50508);

return statearr_50569;
})();
var statearr_50570_51887 = state_50548__$1;
(statearr_50570_51887[(2)] = null);

(statearr_50570_51887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (9))){
var inst_50507 = (state_50548[(7)]);
var inst_50523 = cljs.core.vec(inst_50507);
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50548__$1,(11),out,inst_50523);
} else {
if((state_val_50549 === (5))){
var inst_50511 = (state_50548[(9)]);
var inst_50515 = (state_50548[(10)]);
var inst_50508 = (state_50548[(8)]);
var inst_50515__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50511) : f.call(null,inst_50511));
var inst_50516 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50515__$1,inst_50508);
var inst_50517 = cljs.core.keyword_identical_QMARK_(inst_50508,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50518 = ((inst_50516) || (inst_50517));
var state_50548__$1 = (function (){var statearr_50572 = state_50548;
(statearr_50572[(10)] = inst_50515__$1);

return statearr_50572;
})();
if(cljs.core.truth_(inst_50518)){
var statearr_50573_51888 = state_50548__$1;
(statearr_50573_51888[(1)] = (8));

} else {
var statearr_50574_51889 = state_50548__$1;
(statearr_50574_51889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (14))){
var inst_50541 = (state_50548[(2)]);
var inst_50542 = cljs.core.async.close_BANG_(out);
var state_50548__$1 = (function (){var statearr_50577 = state_50548;
(statearr_50577[(13)] = inst_50541);

return statearr_50577;
})();
var statearr_50578_51890 = state_50548__$1;
(statearr_50578_51890[(2)] = inst_50542);

(statearr_50578_51890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (10))){
var inst_50531 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50579_51894 = state_50548__$1;
(statearr_50579_51894[(2)] = inst_50531);

(statearr_50579_51894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (8))){
var inst_50511 = (state_50548[(9)]);
var inst_50515 = (state_50548[(10)]);
var inst_50507 = (state_50548[(7)]);
var inst_50520 = inst_50507.push(inst_50511);
var tmp50576 = inst_50507;
var inst_50507__$1 = tmp50576;
var inst_50508 = inst_50515;
var state_50548__$1 = (function (){var statearr_50583 = state_50548;
(statearr_50583[(14)] = inst_50520);

(statearr_50583[(7)] = inst_50507__$1);

(statearr_50583[(8)] = inst_50508);

return statearr_50583;
})();
var statearr_50584_51903 = state_50548__$1;
(statearr_50584_51903[(2)] = null);

(statearr_50584_51903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45830__auto__ = null;
var cljs$core$async$state_machine__45830__auto____0 = (function (){
var statearr_50585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50585[(0)] = cljs$core$async$state_machine__45830__auto__);

(statearr_50585[(1)] = (1));

return statearr_50585;
});
var cljs$core$async$state_machine__45830__auto____1 = (function (state_50548){
while(true){
var ret_value__45831__auto__ = (function (){try{while(true){
var result__45832__auto__ = switch__45829__auto__(state_50548);
if(cljs.core.keyword_identical_QMARK_(result__45832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45832__auto__;
}
break;
}
}catch (e50590){var ex__45833__auto__ = e50590;
var statearr_50591_51910 = state_50548;
(statearr_50591_51910[(2)] = ex__45833__auto__);


if(cljs.core.seq((state_50548[(4)]))){
var statearr_50595_51913 = state_50548;
(statearr_50595_51913[(1)] = cljs.core.first((state_50548[(4)])));

} else {
throw ex__45833__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51914 = state_50548;
state_50548 = G__51914;
continue;
} else {
return ret_value__45831__auto__;
}
break;
}
});
cljs$core$async$state_machine__45830__auto__ = function(state_50548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45830__auto____1.call(this,state_50548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45830__auto____0;
cljs$core$async$state_machine__45830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45830__auto____1;
return cljs$core$async$state_machine__45830__auto__;
})()
})();
var state__46539__auto__ = (function (){var statearr_50607 = f__46538__auto__();
(statearr_50607[(6)] = c__46537__auto___51867);

return statearr_50607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46539__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
