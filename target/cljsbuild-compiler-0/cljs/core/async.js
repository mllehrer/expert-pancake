// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13639 = [];
var len__7266__auto___13645 = arguments.length;
var i__7267__auto___13646 = (0);
while(true){
if((i__7267__auto___13646 < len__7266__auto___13645)){
args13639.push((arguments[i__7267__auto___13646]));

var G__13647 = (i__7267__auto___13646 + (1));
i__7267__auto___13646 = G__13647;
continue;
} else {
}
break;
}

var G__13641 = args13639.length;
switch (G__13641) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13639.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13642 = (function (f,blockable,meta13643){
this.f = f;
this.blockable = blockable;
this.meta13643 = meta13643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13644,meta13643__$1){
var self__ = this;
var _13644__$1 = this;
return (new cljs.core.async.t_cljs$core$async13642(self__.f,self__.blockable,meta13643__$1));
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13644){
var self__ = this;
var _13644__$1 = this;
return self__.meta13643;
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13643","meta13643",504758662,null)], null);
});

cljs.core.async.t_cljs$core$async13642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13642";

cljs.core.async.t_cljs$core$async13642.cljs$lang$ctorPrWriter = (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async13642");
});

cljs.core.async.__GT_t_cljs$core$async13642 = (function cljs$core$async$__GT_t_cljs$core$async13642(f__$1,blockable__$1,meta13643){
return (new cljs.core.async.t_cljs$core$async13642(f__$1,blockable__$1,meta13643));
});

}

return (new cljs.core.async.t_cljs$core$async13642(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args13651 = [];
var len__7266__auto___13654 = arguments.length;
var i__7267__auto___13655 = (0);
while(true){
if((i__7267__auto___13655 < len__7266__auto___13654)){
args13651.push((arguments[i__7267__auto___13655]));

var G__13656 = (i__7267__auto___13655 + (1));
i__7267__auto___13655 = G__13656;
continue;
} else {
}
break;
}

var G__13653 = args13651.length;
switch (G__13653) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13651.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13658 = [];
var len__7266__auto___13661 = arguments.length;
var i__7267__auto___13662 = (0);
while(true){
if((i__7267__auto___13662 < len__7266__auto___13661)){
args13658.push((arguments[i__7267__auto___13662]));

var G__13663 = (i__7267__auto___13662 + (1));
i__7267__auto___13662 = G__13663;
continue;
} else {
}
break;
}

var G__13660 = args13658.length;
switch (G__13660) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13658.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args13665 = [];
var len__7266__auto___13668 = arguments.length;
var i__7267__auto___13669 = (0);
while(true){
if((i__7267__auto___13669 < len__7266__auto___13668)){
args13665.push((arguments[i__7267__auto___13669]));

var G__13670 = (i__7267__auto___13669 + (1));
i__7267__auto___13669 = G__13670;
continue;
} else {
}
break;
}

var G__13667 = args13665.length;
switch (G__13667) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13665.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13672 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13672);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13672,ret){
return (function (){
return fn1.call(null,val_13672);
});})(val_13672,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13673 = [];
var len__7266__auto___13676 = arguments.length;
var i__7267__auto___13677 = (0);
while(true){
if((i__7267__auto___13677 < len__7266__auto___13676)){
args13673.push((arguments[i__7267__auto___13677]));

var G__13678 = (i__7267__auto___13677 + (1));
i__7267__auto___13677 = G__13678;
continue;
} else {
}
break;
}

var G__13675 = args13673.length;
switch (G__13675) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13673.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7111__auto___13680 = n;
var x_13681 = (0);
while(true){
if((x_13681 < n__7111__auto___13680)){
(a[x_13681] = (0));

var G__13682 = (x_13681 + (1));
x_13681 = G__13682;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13683 = (i + (1));
i = G__13683;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13687 = (function (alt_flag,flag,meta13688){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13688 = meta13688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13689,meta13688__$1){
var self__ = this;
var _13689__$1 = this;
return (new cljs.core.async.t_cljs$core$async13687(self__.alt_flag,self__.flag,meta13688__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13689){
var self__ = this;
var _13689__$1 = this;
return self__.meta13688;
});})(flag))
;

cljs.core.async.t_cljs$core$async13687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13687.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13688","meta13688",1459360903,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13687";

cljs.core.async.t_cljs$core$async13687.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async13687");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13687 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13687(alt_flag__$1,flag__$1,meta13688){
return (new cljs.core.async.t_cljs$core$async13687(alt_flag__$1,flag__$1,meta13688));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13687(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13693 = (function (alt_handler,flag,cb,meta13694){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13694 = meta13694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13695,meta13694__$1){
var self__ = this;
var _13695__$1 = this;
return (new cljs.core.async.t_cljs$core$async13693(self__.alt_handler,self__.flag,self__.cb,meta13694__$1));
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13695){
var self__ = this;
var _13695__$1 = this;
return self__.meta13694;
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13694","meta13694",197047879,null)], null);
});

cljs.core.async.t_cljs$core$async13693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13693";

cljs.core.async.t_cljs$core$async13693.cljs$lang$ctorPrWriter = (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async13693");
});

cljs.core.async.__GT_t_cljs$core$async13693 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13693(alt_handler__$1,flag__$1,cb__$1,meta13694){
return (new cljs.core.async.t_cljs$core$async13693(alt_handler__$1,flag__$1,cb__$1,meta13694));
});

}

return (new cljs.core.async.t_cljs$core$async13693(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13696_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13696_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13697_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13697_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6196__auto__ = wport;
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13698 = (i + (1));
i = G__13698;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6196__auto__ = ret;
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__6184__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6184__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6184__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__7273__auto__ = [];
var len__7266__auto___13704 = arguments.length;
var i__7267__auto___13705 = (0);
while(true){
if((i__7267__auto___13705 < len__7266__auto___13704)){
args__7273__auto__.push((arguments[i__7267__auto___13705]));

var G__13706 = (i__7267__auto___13705 + (1));
i__7267__auto___13705 = G__13706;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13701){
var map__13702 = p__13701;
var map__13702__$1 = ((((!((map__13702 == null)))?((((map__13702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13702):map__13702);
var opts = map__13702__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13699){
var G__13700 = cljs.core.first.call(null,seq13699);
var seq13699__$1 = cljs.core.next.call(null,seq13699);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13700,seq13699__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args13707 = [];
var len__7266__auto___13757 = arguments.length;
var i__7267__auto___13758 = (0);
while(true){
if((i__7267__auto___13758 < len__7266__auto___13757)){
args13707.push((arguments[i__7267__auto___13758]));

var G__13759 = (i__7267__auto___13758 + (1));
i__7267__auto___13758 = G__13759;
continue;
} else {
}
break;
}

var G__13709 = args13707.length;
switch (G__13709) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13707.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13594__auto___13761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___13761){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___13761){
return (function (state_13733){
var state_val_13734 = (state_13733[(1)]);
if((state_val_13734 === (7))){
var inst_13729 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
var statearr_13735_13762 = state_13733__$1;
(statearr_13735_13762[(2)] = inst_13729);

(statearr_13735_13762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (1))){
var state_13733__$1 = state_13733;
var statearr_13736_13763 = state_13733__$1;
(statearr_13736_13763[(2)] = null);

(statearr_13736_13763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (4))){
var inst_13712 = (state_13733[(7)]);
var inst_13712__$1 = (state_13733[(2)]);
var inst_13713 = (inst_13712__$1 == null);
var state_13733__$1 = (function (){var statearr_13737 = state_13733;
(statearr_13737[(7)] = inst_13712__$1);

return statearr_13737;
})();
if(cljs.core.truth_(inst_13713)){
var statearr_13738_13764 = state_13733__$1;
(statearr_13738_13764[(1)] = (5));

} else {
var statearr_13739_13765 = state_13733__$1;
(statearr_13739_13765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (13))){
var state_13733__$1 = state_13733;
var statearr_13740_13766 = state_13733__$1;
(statearr_13740_13766[(2)] = null);

(statearr_13740_13766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (6))){
var inst_13712 = (state_13733[(7)]);
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13733__$1,(11),to,inst_13712);
} else {
if((state_val_13734 === (3))){
var inst_13731 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13733__$1,inst_13731);
} else {
if((state_val_13734 === (12))){
var state_13733__$1 = state_13733;
var statearr_13741_13767 = state_13733__$1;
(statearr_13741_13767[(2)] = null);

(statearr_13741_13767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (2))){
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13733__$1,(4),from);
} else {
if((state_val_13734 === (11))){
var inst_13722 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
if(cljs.core.truth_(inst_13722)){
var statearr_13742_13768 = state_13733__$1;
(statearr_13742_13768[(1)] = (12));

} else {
var statearr_13743_13769 = state_13733__$1;
(statearr_13743_13769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (9))){
var state_13733__$1 = state_13733;
var statearr_13744_13770 = state_13733__$1;
(statearr_13744_13770[(2)] = null);

(statearr_13744_13770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (5))){
var state_13733__$1 = state_13733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13745_13771 = state_13733__$1;
(statearr_13745_13771[(1)] = (8));

} else {
var statearr_13746_13772 = state_13733__$1;
(statearr_13746_13772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (14))){
var inst_13727 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
var statearr_13747_13773 = state_13733__$1;
(statearr_13747_13773[(2)] = inst_13727);

(statearr_13747_13773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (10))){
var inst_13719 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
var statearr_13748_13774 = state_13733__$1;
(statearr_13748_13774[(2)] = inst_13719);

(statearr_13748_13774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13734 === (8))){
var inst_13716 = cljs.core.async.close_BANG_.call(null,to);
var state_13733__$1 = state_13733;
var statearr_13749_13775 = state_13733__$1;
(statearr_13749_13775[(2)] = inst_13716);

(statearr_13749_13775[(1)] = (10));


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
});})(c__13594__auto___13761))
;
return ((function (switch__13482__auto__,c__13594__auto___13761){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_13753 = [null,null,null,null,null,null,null,null];
(statearr_13753[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_13753[(1)] = (1));

return statearr_13753;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_13733){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_13733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e13754){if((e13754 instanceof Object)){
var ex__13486__auto__ = e13754;
var statearr_13755_13776 = state_13733;
(statearr_13755_13776[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13777 = state_13733;
state_13733 = G__13777;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_13733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_13733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___13761))
})();
var state__13596__auto__ = (function (){var statearr_13756 = f__13595__auto__.call(null);
(statearr_13756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___13761);

return statearr_13756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___13761))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13961){
var vec__13962 = p__13961;
var v = cljs.core.nth.call(null,vec__13962,(0),null);
var p = cljs.core.nth.call(null,vec__13962,(1),null);
var job = vec__13962;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13594__auto___14144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___14144,res,vec__13962,v,p,job,jobs,results){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___14144,res,vec__13962,v,p,job,jobs,results){
return (function (state_13967){
var state_val_13968 = (state_13967[(1)]);
if((state_val_13968 === (1))){
var state_13967__$1 = state_13967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13967__$1,(2),res,v);
} else {
if((state_val_13968 === (2))){
var inst_13964 = (state_13967[(2)]);
var inst_13965 = cljs.core.async.close_BANG_.call(null,res);
var state_13967__$1 = (function (){var statearr_13969 = state_13967;
(statearr_13969[(7)] = inst_13964);

return statearr_13969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13967__$1,inst_13965);
} else {
return null;
}
}
});})(c__13594__auto___14144,res,vec__13962,v,p,job,jobs,results))
;
return ((function (switch__13482__auto__,c__13594__auto___14144,res,vec__13962,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0 = (function (){
var statearr_13973 = [null,null,null,null,null,null,null,null];
(statearr_13973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__);

(statearr_13973[(1)] = (1));

return statearr_13973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1 = (function (state_13967){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_13967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e13974){if((e13974 instanceof Object)){
var ex__13486__auto__ = e13974;
var statearr_13975_14145 = state_13967;
(statearr_13975_14145[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14146 = state_13967;
state_13967 = G__14146;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = function(state_13967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1.call(this,state_13967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___14144,res,vec__13962,v,p,job,jobs,results))
})();
var state__13596__auto__ = (function (){var statearr_13976 = f__13595__auto__.call(null);
(statearr_13976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___14144);

return statearr_13976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___14144,res,vec__13962,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13977){
var vec__13978 = p__13977;
var v = cljs.core.nth.call(null,vec__13978,(0),null);
var p = cljs.core.nth.call(null,vec__13978,(1),null);
var job = vec__13978;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7111__auto___14147 = n;
var __14148 = (0);
while(true){
if((__14148 < n__7111__auto___14147)){
var G__13979_14149 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13979_14149) {
case "compute":
var c__13594__auto___14151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14148,c__13594__auto___14151,G__13979_14149,n__7111__auto___14147,jobs,results,process,async){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (__14148,c__13594__auto___14151,G__13979_14149,n__7111__auto___14147,jobs,results,process,async){
return (function (state_13992){
var state_val_13993 = (state_13992[(1)]);
if((state_val_13993 === (1))){
var state_13992__$1 = state_13992;
var statearr_13994_14152 = state_13992__$1;
(statearr_13994_14152[(2)] = null);

(statearr_13994_14152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (2))){
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13992__$1,(4),jobs);
} else {
if((state_val_13993 === (3))){
var inst_13990 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13992__$1,inst_13990);
} else {
if((state_val_13993 === (4))){
var inst_13982 = (state_13992[(2)]);
var inst_13983 = process.call(null,inst_13982);
var state_13992__$1 = state_13992;
if(cljs.core.truth_(inst_13983)){
var statearr_13995_14153 = state_13992__$1;
(statearr_13995_14153[(1)] = (5));

} else {
var statearr_13996_14154 = state_13992__$1;
(statearr_13996_14154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (5))){
var state_13992__$1 = state_13992;
var statearr_13997_14155 = state_13992__$1;
(statearr_13997_14155[(2)] = null);

(statearr_13997_14155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (6))){
var state_13992__$1 = state_13992;
var statearr_13998_14156 = state_13992__$1;
(statearr_13998_14156[(2)] = null);

(statearr_13998_14156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (7))){
var inst_13988 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
var statearr_13999_14157 = state_13992__$1;
(statearr_13999_14157[(2)] = inst_13988);

(statearr_13999_14157[(1)] = (3));


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
});})(__14148,c__13594__auto___14151,G__13979_14149,n__7111__auto___14147,jobs,results,process,async))
;
return ((function (__14148,switch__13482__auto__,c__13594__auto___14151,G__13979_14149,n__7111__auto___14147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0 = (function (){
var statearr_14003 = [null,null,null,null,null,null,null];
(statearr_14003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__);

(statearr_14003[(1)] = (1));

return statearr_14003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1 = (function (state_13992){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_13992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14004){if((e14004 instanceof Object)){
var ex__13486__auto__ = e14004;
var statearr_14005_14158 = state_13992;
(statearr_14005_14158[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14159 = state_13992;
state_13992 = G__14159;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = function(state_13992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1.call(this,state_13992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__;
})()
;})(__14148,switch__13482__auto__,c__13594__auto___14151,G__13979_14149,n__7111__auto___14147,jobs,results,process,async))
})();
var state__13596__auto__ = (function (){var statearr_14006 = f__13595__auto__.call(null);
(statearr_14006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___14151);

return statearr_14006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(__14148,c__13594__auto___14151,G__13979_14149,n__7111__auto___14147,jobs,results,process,async))
);


break;
case "async":
var c__13594__auto___14160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14148,c__13594__auto___14160,G__13979_14149,n__7111__auto___14147,jobs,results,process,async){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (__14148,c__13594__auto___14160,G__13979_14149,n__7111__auto___14147,jobs,results,process,async){
return (function (state_14019){
var state_val_14020 = (state_14019[(1)]);
if((state_val_14020 === (1))){
var state_14019__$1 = state_14019;
var statearr_14021_14161 = state_14019__$1;
(statearr_14021_14161[(2)] = null);

(statearr_14021_14161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (2))){
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14019__$1,(4),jobs);
} else {
if((state_val_14020 === (3))){
var inst_14017 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14019__$1,inst_14017);
} else {
if((state_val_14020 === (4))){
var inst_14009 = (state_14019[(2)]);
var inst_14010 = async.call(null,inst_14009);
var state_14019__$1 = state_14019;
if(cljs.core.truth_(inst_14010)){
var statearr_14022_14162 = state_14019__$1;
(statearr_14022_14162[(1)] = (5));

} else {
var statearr_14023_14163 = state_14019__$1;
(statearr_14023_14163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (5))){
var state_14019__$1 = state_14019;
var statearr_14024_14164 = state_14019__$1;
(statearr_14024_14164[(2)] = null);

(statearr_14024_14164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (6))){
var state_14019__$1 = state_14019;
var statearr_14025_14165 = state_14019__$1;
(statearr_14025_14165[(2)] = null);

(statearr_14025_14165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14020 === (7))){
var inst_14015 = (state_14019[(2)]);
var state_14019__$1 = state_14019;
var statearr_14026_14166 = state_14019__$1;
(statearr_14026_14166[(2)] = inst_14015);

(statearr_14026_14166[(1)] = (3));


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
});})(__14148,c__13594__auto___14160,G__13979_14149,n__7111__auto___14147,jobs,results,process,async))
;
return ((function (__14148,switch__13482__auto__,c__13594__auto___14160,G__13979_14149,n__7111__auto___14147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0 = (function (){
var statearr_14030 = [null,null,null,null,null,null,null];
(statearr_14030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__);

(statearr_14030[(1)] = (1));

return statearr_14030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1 = (function (state_14019){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_14019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14031){if((e14031 instanceof Object)){
var ex__13486__auto__ = e14031;
var statearr_14032_14167 = state_14019;
(statearr_14032_14167[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14168 = state_14019;
state_14019 = G__14168;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = function(state_14019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1.call(this,state_14019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__;
})()
;})(__14148,switch__13482__auto__,c__13594__auto___14160,G__13979_14149,n__7111__auto___14147,jobs,results,process,async))
})();
var state__13596__auto__ = (function (){var statearr_14033 = f__13595__auto__.call(null);
(statearr_14033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___14160);

return statearr_14033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(__14148,c__13594__auto___14160,G__13979_14149,n__7111__auto___14147,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14169 = (__14148 + (1));
__14148 = G__14169;
continue;
} else {
}
break;
}

var c__13594__auto___14170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___14170,jobs,results,process,async){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___14170,jobs,results,process,async){
return (function (state_14055){
var state_val_14056 = (state_14055[(1)]);
if((state_val_14056 === (1))){
var state_14055__$1 = state_14055;
var statearr_14057_14171 = state_14055__$1;
(statearr_14057_14171[(2)] = null);

(statearr_14057_14171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (2))){
var state_14055__$1 = state_14055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14055__$1,(4),from);
} else {
if((state_val_14056 === (3))){
var inst_14053 = (state_14055[(2)]);
var state_14055__$1 = state_14055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14055__$1,inst_14053);
} else {
if((state_val_14056 === (4))){
var inst_14036 = (state_14055[(7)]);
var inst_14036__$1 = (state_14055[(2)]);
var inst_14037 = (inst_14036__$1 == null);
var state_14055__$1 = (function (){var statearr_14058 = state_14055;
(statearr_14058[(7)] = inst_14036__$1);

return statearr_14058;
})();
if(cljs.core.truth_(inst_14037)){
var statearr_14059_14172 = state_14055__$1;
(statearr_14059_14172[(1)] = (5));

} else {
var statearr_14060_14173 = state_14055__$1;
(statearr_14060_14173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (5))){
var inst_14039 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14055__$1 = state_14055;
var statearr_14061_14174 = state_14055__$1;
(statearr_14061_14174[(2)] = inst_14039);

(statearr_14061_14174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (6))){
var inst_14041 = (state_14055[(8)]);
var inst_14036 = (state_14055[(7)]);
var inst_14041__$1 = cljs.core.async.chan.call(null,(1));
var inst_14042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14043 = [inst_14036,inst_14041__$1];
var inst_14044 = (new cljs.core.PersistentVector(null,2,(5),inst_14042,inst_14043,null));
var state_14055__$1 = (function (){var statearr_14062 = state_14055;
(statearr_14062[(8)] = inst_14041__$1);

return statearr_14062;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14055__$1,(8),jobs,inst_14044);
} else {
if((state_val_14056 === (7))){
var inst_14051 = (state_14055[(2)]);
var state_14055__$1 = state_14055;
var statearr_14063_14175 = state_14055__$1;
(statearr_14063_14175[(2)] = inst_14051);

(statearr_14063_14175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (8))){
var inst_14041 = (state_14055[(8)]);
var inst_14046 = (state_14055[(2)]);
var state_14055__$1 = (function (){var statearr_14064 = state_14055;
(statearr_14064[(9)] = inst_14046);

return statearr_14064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14055__$1,(9),results,inst_14041);
} else {
if((state_val_14056 === (9))){
var inst_14048 = (state_14055[(2)]);
var state_14055__$1 = (function (){var statearr_14065 = state_14055;
(statearr_14065[(10)] = inst_14048);

return statearr_14065;
})();
var statearr_14066_14176 = state_14055__$1;
(statearr_14066_14176[(2)] = null);

(statearr_14066_14176[(1)] = (2));


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
});})(c__13594__auto___14170,jobs,results,process,async))
;
return ((function (switch__13482__auto__,c__13594__auto___14170,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0 = (function (){
var statearr_14070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__);

(statearr_14070[(1)] = (1));

return statearr_14070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1 = (function (state_14055){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_14055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14071){if((e14071 instanceof Object)){
var ex__13486__auto__ = e14071;
var statearr_14072_14177 = state_14055;
(statearr_14072_14177[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14178 = state_14055;
state_14055 = G__14178;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = function(state_14055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1.call(this,state_14055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___14170,jobs,results,process,async))
})();
var state__13596__auto__ = (function (){var statearr_14073 = f__13595__auto__.call(null);
(statearr_14073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___14170);

return statearr_14073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___14170,jobs,results,process,async))
);


var c__13594__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto__,jobs,results,process,async){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto__,jobs,results,process,async){
return (function (state_14111){
var state_val_14112 = (state_14111[(1)]);
if((state_val_14112 === (7))){
var inst_14107 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
var statearr_14113_14179 = state_14111__$1;
(statearr_14113_14179[(2)] = inst_14107);

(statearr_14113_14179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (20))){
var state_14111__$1 = state_14111;
var statearr_14114_14180 = state_14111__$1;
(statearr_14114_14180[(2)] = null);

(statearr_14114_14180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (1))){
var state_14111__$1 = state_14111;
var statearr_14115_14181 = state_14111__$1;
(statearr_14115_14181[(2)] = null);

(statearr_14115_14181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (4))){
var inst_14076 = (state_14111[(7)]);
var inst_14076__$1 = (state_14111[(2)]);
var inst_14077 = (inst_14076__$1 == null);
var state_14111__$1 = (function (){var statearr_14116 = state_14111;
(statearr_14116[(7)] = inst_14076__$1);

return statearr_14116;
})();
if(cljs.core.truth_(inst_14077)){
var statearr_14117_14182 = state_14111__$1;
(statearr_14117_14182[(1)] = (5));

} else {
var statearr_14118_14183 = state_14111__$1;
(statearr_14118_14183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (15))){
var inst_14089 = (state_14111[(8)]);
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14111__$1,(18),to,inst_14089);
} else {
if((state_val_14112 === (21))){
var inst_14102 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
var statearr_14119_14184 = state_14111__$1;
(statearr_14119_14184[(2)] = inst_14102);

(statearr_14119_14184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (13))){
var inst_14104 = (state_14111[(2)]);
var state_14111__$1 = (function (){var statearr_14120 = state_14111;
(statearr_14120[(9)] = inst_14104);

return statearr_14120;
})();
var statearr_14121_14185 = state_14111__$1;
(statearr_14121_14185[(2)] = null);

(statearr_14121_14185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (6))){
var inst_14076 = (state_14111[(7)]);
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14111__$1,(11),inst_14076);
} else {
if((state_val_14112 === (17))){
var inst_14097 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
if(cljs.core.truth_(inst_14097)){
var statearr_14122_14186 = state_14111__$1;
(statearr_14122_14186[(1)] = (19));

} else {
var statearr_14123_14187 = state_14111__$1;
(statearr_14123_14187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (3))){
var inst_14109 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14111__$1,inst_14109);
} else {
if((state_val_14112 === (12))){
var inst_14086 = (state_14111[(10)]);
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14111__$1,(14),inst_14086);
} else {
if((state_val_14112 === (2))){
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14111__$1,(4),results);
} else {
if((state_val_14112 === (19))){
var state_14111__$1 = state_14111;
var statearr_14124_14188 = state_14111__$1;
(statearr_14124_14188[(2)] = null);

(statearr_14124_14188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (11))){
var inst_14086 = (state_14111[(2)]);
var state_14111__$1 = (function (){var statearr_14125 = state_14111;
(statearr_14125[(10)] = inst_14086);

return statearr_14125;
})();
var statearr_14126_14189 = state_14111__$1;
(statearr_14126_14189[(2)] = null);

(statearr_14126_14189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (9))){
var state_14111__$1 = state_14111;
var statearr_14127_14190 = state_14111__$1;
(statearr_14127_14190[(2)] = null);

(statearr_14127_14190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (5))){
var state_14111__$1 = state_14111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14128_14191 = state_14111__$1;
(statearr_14128_14191[(1)] = (8));

} else {
var statearr_14129_14192 = state_14111__$1;
(statearr_14129_14192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (14))){
var inst_14091 = (state_14111[(11)]);
var inst_14089 = (state_14111[(8)]);
var inst_14089__$1 = (state_14111[(2)]);
var inst_14090 = (inst_14089__$1 == null);
var inst_14091__$1 = cljs.core.not.call(null,inst_14090);
var state_14111__$1 = (function (){var statearr_14130 = state_14111;
(statearr_14130[(11)] = inst_14091__$1);

(statearr_14130[(8)] = inst_14089__$1);

return statearr_14130;
})();
if(inst_14091__$1){
var statearr_14131_14193 = state_14111__$1;
(statearr_14131_14193[(1)] = (15));

} else {
var statearr_14132_14194 = state_14111__$1;
(statearr_14132_14194[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (16))){
var inst_14091 = (state_14111[(11)]);
var state_14111__$1 = state_14111;
var statearr_14133_14195 = state_14111__$1;
(statearr_14133_14195[(2)] = inst_14091);

(statearr_14133_14195[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (10))){
var inst_14083 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
var statearr_14134_14196 = state_14111__$1;
(statearr_14134_14196[(2)] = inst_14083);

(statearr_14134_14196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (18))){
var inst_14094 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
var statearr_14135_14197 = state_14111__$1;
(statearr_14135_14197[(2)] = inst_14094);

(statearr_14135_14197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (8))){
var inst_14080 = cljs.core.async.close_BANG_.call(null,to);
var state_14111__$1 = state_14111;
var statearr_14136_14198 = state_14111__$1;
(statearr_14136_14198[(2)] = inst_14080);

(statearr_14136_14198[(1)] = (10));


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
});})(c__13594__auto__,jobs,results,process,async))
;
return ((function (switch__13482__auto__,c__13594__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0 = (function (){
var statearr_14140 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__);

(statearr_14140[(1)] = (1));

return statearr_14140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1 = (function (state_14111){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_14111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14141){if((e14141 instanceof Object)){
var ex__13486__auto__ = e14141;
var statearr_14142_14199 = state_14111;
(statearr_14142_14199[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14200 = state_14111;
state_14111 = G__14200;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__ = function(state_14111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1.call(this,state_14111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13483__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto__,jobs,results,process,async))
})();
var state__13596__auto__ = (function (){var statearr_14143 = f__13595__auto__.call(null);
(statearr_14143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto__);

return statearr_14143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto__,jobs,results,process,async))
);

return c__13594__auto__;
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
var args14201 = [];
var len__7266__auto___14204 = arguments.length;
var i__7267__auto___14205 = (0);
while(true){
if((i__7267__auto___14205 < len__7266__auto___14204)){
args14201.push((arguments[i__7267__auto___14205]));

var G__14206 = (i__7267__auto___14205 + (1));
i__7267__auto___14205 = G__14206;
continue;
} else {
}
break;
}

var G__14203 = args14201.length;
switch (G__14203) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14201.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args14208 = [];
var len__7266__auto___14211 = arguments.length;
var i__7267__auto___14212 = (0);
while(true){
if((i__7267__auto___14212 < len__7266__auto___14211)){
args14208.push((arguments[i__7267__auto___14212]));

var G__14213 = (i__7267__auto___14212 + (1));
i__7267__auto___14212 = G__14213;
continue;
} else {
}
break;
}

var G__14210 = args14208.length;
switch (G__14210) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14208.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args14215 = [];
var len__7266__auto___14268 = arguments.length;
var i__7267__auto___14269 = (0);
while(true){
if((i__7267__auto___14269 < len__7266__auto___14268)){
args14215.push((arguments[i__7267__auto___14269]));

var G__14270 = (i__7267__auto___14269 + (1));
i__7267__auto___14269 = G__14270;
continue;
} else {
}
break;
}

var G__14217 = args14215.length;
switch (G__14217) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14215.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13594__auto___14272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___14272,tc,fc){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___14272,tc,fc){
return (function (state_14243){
var state_val_14244 = (state_14243[(1)]);
if((state_val_14244 === (7))){
var inst_14239 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
var statearr_14245_14273 = state_14243__$1;
(statearr_14245_14273[(2)] = inst_14239);

(statearr_14245_14273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (1))){
var state_14243__$1 = state_14243;
var statearr_14246_14274 = state_14243__$1;
(statearr_14246_14274[(2)] = null);

(statearr_14246_14274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (4))){
var inst_14220 = (state_14243[(7)]);
var inst_14220__$1 = (state_14243[(2)]);
var inst_14221 = (inst_14220__$1 == null);
var state_14243__$1 = (function (){var statearr_14247 = state_14243;
(statearr_14247[(7)] = inst_14220__$1);

return statearr_14247;
})();
if(cljs.core.truth_(inst_14221)){
var statearr_14248_14275 = state_14243__$1;
(statearr_14248_14275[(1)] = (5));

} else {
var statearr_14249_14276 = state_14243__$1;
(statearr_14249_14276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (13))){
var state_14243__$1 = state_14243;
var statearr_14250_14277 = state_14243__$1;
(statearr_14250_14277[(2)] = null);

(statearr_14250_14277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (6))){
var inst_14220 = (state_14243[(7)]);
var inst_14226 = p.call(null,inst_14220);
var state_14243__$1 = state_14243;
if(cljs.core.truth_(inst_14226)){
var statearr_14251_14278 = state_14243__$1;
(statearr_14251_14278[(1)] = (9));

} else {
var statearr_14252_14279 = state_14243__$1;
(statearr_14252_14279[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (3))){
var inst_14241 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14243__$1,inst_14241);
} else {
if((state_val_14244 === (12))){
var state_14243__$1 = state_14243;
var statearr_14253_14280 = state_14243__$1;
(statearr_14253_14280[(2)] = null);

(statearr_14253_14280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (2))){
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14243__$1,(4),ch);
} else {
if((state_val_14244 === (11))){
var inst_14220 = (state_14243[(7)]);
var inst_14230 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14243__$1,(8),inst_14230,inst_14220);
} else {
if((state_val_14244 === (9))){
var state_14243__$1 = state_14243;
var statearr_14254_14281 = state_14243__$1;
(statearr_14254_14281[(2)] = tc);

(statearr_14254_14281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (5))){
var inst_14223 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14224 = cljs.core.async.close_BANG_.call(null,fc);
var state_14243__$1 = (function (){var statearr_14255 = state_14243;
(statearr_14255[(8)] = inst_14223);

return statearr_14255;
})();
var statearr_14256_14282 = state_14243__$1;
(statearr_14256_14282[(2)] = inst_14224);

(statearr_14256_14282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (14))){
var inst_14237 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
var statearr_14257_14283 = state_14243__$1;
(statearr_14257_14283[(2)] = inst_14237);

(statearr_14257_14283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (10))){
var state_14243__$1 = state_14243;
var statearr_14258_14284 = state_14243__$1;
(statearr_14258_14284[(2)] = fc);

(statearr_14258_14284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14244 === (8))){
var inst_14232 = (state_14243[(2)]);
var state_14243__$1 = state_14243;
if(cljs.core.truth_(inst_14232)){
var statearr_14259_14285 = state_14243__$1;
(statearr_14259_14285[(1)] = (12));

} else {
var statearr_14260_14286 = state_14243__$1;
(statearr_14260_14286[(1)] = (13));

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
});})(c__13594__auto___14272,tc,fc))
;
return ((function (switch__13482__auto__,c__13594__auto___14272,tc,fc){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_14264 = [null,null,null,null,null,null,null,null,null];
(statearr_14264[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_14264[(1)] = (1));

return statearr_14264;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_14243){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_14243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14265){if((e14265 instanceof Object)){
var ex__13486__auto__ = e14265;
var statearr_14266_14287 = state_14243;
(statearr_14266_14287[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14288 = state_14243;
state_14243 = G__14288;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_14243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_14243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___14272,tc,fc))
})();
var state__13596__auto__ = (function (){var statearr_14267 = f__13595__auto__.call(null);
(statearr_14267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___14272);

return statearr_14267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___14272,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13594__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto__){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto__){
return (function (state_14352){
var state_val_14353 = (state_14352[(1)]);
if((state_val_14353 === (7))){
var inst_14348 = (state_14352[(2)]);
var state_14352__$1 = state_14352;
var statearr_14354_14375 = state_14352__$1;
(statearr_14354_14375[(2)] = inst_14348);

(statearr_14354_14375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (1))){
var inst_14332 = init;
var state_14352__$1 = (function (){var statearr_14355 = state_14352;
(statearr_14355[(7)] = inst_14332);

return statearr_14355;
})();
var statearr_14356_14376 = state_14352__$1;
(statearr_14356_14376[(2)] = null);

(statearr_14356_14376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (4))){
var inst_14335 = (state_14352[(8)]);
var inst_14335__$1 = (state_14352[(2)]);
var inst_14336 = (inst_14335__$1 == null);
var state_14352__$1 = (function (){var statearr_14357 = state_14352;
(statearr_14357[(8)] = inst_14335__$1);

return statearr_14357;
})();
if(cljs.core.truth_(inst_14336)){
var statearr_14358_14377 = state_14352__$1;
(statearr_14358_14377[(1)] = (5));

} else {
var statearr_14359_14378 = state_14352__$1;
(statearr_14359_14378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (6))){
var inst_14332 = (state_14352[(7)]);
var inst_14339 = (state_14352[(9)]);
var inst_14335 = (state_14352[(8)]);
var inst_14339__$1 = f.call(null,inst_14332,inst_14335);
var inst_14340 = cljs.core.reduced_QMARK_.call(null,inst_14339__$1);
var state_14352__$1 = (function (){var statearr_14360 = state_14352;
(statearr_14360[(9)] = inst_14339__$1);

return statearr_14360;
})();
if(inst_14340){
var statearr_14361_14379 = state_14352__$1;
(statearr_14361_14379[(1)] = (8));

} else {
var statearr_14362_14380 = state_14352__$1;
(statearr_14362_14380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (3))){
var inst_14350 = (state_14352[(2)]);
var state_14352__$1 = state_14352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14352__$1,inst_14350);
} else {
if((state_val_14353 === (2))){
var state_14352__$1 = state_14352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14352__$1,(4),ch);
} else {
if((state_val_14353 === (9))){
var inst_14339 = (state_14352[(9)]);
var inst_14332 = inst_14339;
var state_14352__$1 = (function (){var statearr_14363 = state_14352;
(statearr_14363[(7)] = inst_14332);

return statearr_14363;
})();
var statearr_14364_14381 = state_14352__$1;
(statearr_14364_14381[(2)] = null);

(statearr_14364_14381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (5))){
var inst_14332 = (state_14352[(7)]);
var state_14352__$1 = state_14352;
var statearr_14365_14382 = state_14352__$1;
(statearr_14365_14382[(2)] = inst_14332);

(statearr_14365_14382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (10))){
var inst_14346 = (state_14352[(2)]);
var state_14352__$1 = state_14352;
var statearr_14366_14383 = state_14352__$1;
(statearr_14366_14383[(2)] = inst_14346);

(statearr_14366_14383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14353 === (8))){
var inst_14339 = (state_14352[(9)]);
var inst_14342 = cljs.core.deref.call(null,inst_14339);
var state_14352__$1 = state_14352;
var statearr_14367_14384 = state_14352__$1;
(statearr_14367_14384[(2)] = inst_14342);

(statearr_14367_14384[(1)] = (10));


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
});})(c__13594__auto__))
;
return ((function (switch__13482__auto__,c__13594__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13483__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13483__auto____0 = (function (){
var statearr_14371 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14371[(0)] = cljs$core$async$reduce_$_state_machine__13483__auto__);

(statearr_14371[(1)] = (1));

return statearr_14371;
});
var cljs$core$async$reduce_$_state_machine__13483__auto____1 = (function (state_14352){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_14352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14372){if((e14372 instanceof Object)){
var ex__13486__auto__ = e14372;
var statearr_14373_14385 = state_14352;
(statearr_14373_14385[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14386 = state_14352;
state_14352 = G__14386;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13483__auto__ = function(state_14352){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13483__auto____1.call(this,state_14352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13483__auto____0;
cljs$core$async$reduce_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13483__auto____1;
return cljs$core$async$reduce_$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto__))
})();
var state__13596__auto__ = (function (){var statearr_14374 = f__13595__auto__.call(null);
(statearr_14374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto__);

return statearr_14374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto__))
);

return c__13594__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14387 = [];
var len__7266__auto___14439 = arguments.length;
var i__7267__auto___14440 = (0);
while(true){
if((i__7267__auto___14440 < len__7266__auto___14439)){
args14387.push((arguments[i__7267__auto___14440]));

var G__14441 = (i__7267__auto___14440 + (1));
i__7267__auto___14440 = G__14441;
continue;
} else {
}
break;
}

var G__14389 = args14387.length;
switch (G__14389) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14387.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13594__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto__){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto__){
return (function (state_14414){
var state_val_14415 = (state_14414[(1)]);
if((state_val_14415 === (7))){
var inst_14396 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14416_14443 = state_14414__$1;
(statearr_14416_14443[(2)] = inst_14396);

(statearr_14416_14443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (1))){
var inst_14390 = cljs.core.seq.call(null,coll);
var inst_14391 = inst_14390;
var state_14414__$1 = (function (){var statearr_14417 = state_14414;
(statearr_14417[(7)] = inst_14391);

return statearr_14417;
})();
var statearr_14418_14444 = state_14414__$1;
(statearr_14418_14444[(2)] = null);

(statearr_14418_14444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (4))){
var inst_14391 = (state_14414[(7)]);
var inst_14394 = cljs.core.first.call(null,inst_14391);
var state_14414__$1 = state_14414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14414__$1,(7),ch,inst_14394);
} else {
if((state_val_14415 === (13))){
var inst_14408 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14419_14445 = state_14414__$1;
(statearr_14419_14445[(2)] = inst_14408);

(statearr_14419_14445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (6))){
var inst_14399 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
if(cljs.core.truth_(inst_14399)){
var statearr_14420_14446 = state_14414__$1;
(statearr_14420_14446[(1)] = (8));

} else {
var statearr_14421_14447 = state_14414__$1;
(statearr_14421_14447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (3))){
var inst_14412 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14414__$1,inst_14412);
} else {
if((state_val_14415 === (12))){
var state_14414__$1 = state_14414;
var statearr_14422_14448 = state_14414__$1;
(statearr_14422_14448[(2)] = null);

(statearr_14422_14448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (2))){
var inst_14391 = (state_14414[(7)]);
var state_14414__$1 = state_14414;
if(cljs.core.truth_(inst_14391)){
var statearr_14423_14449 = state_14414__$1;
(statearr_14423_14449[(1)] = (4));

} else {
var statearr_14424_14450 = state_14414__$1;
(statearr_14424_14450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (11))){
var inst_14405 = cljs.core.async.close_BANG_.call(null,ch);
var state_14414__$1 = state_14414;
var statearr_14425_14451 = state_14414__$1;
(statearr_14425_14451[(2)] = inst_14405);

(statearr_14425_14451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (9))){
var state_14414__$1 = state_14414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14426_14452 = state_14414__$1;
(statearr_14426_14452[(1)] = (11));

} else {
var statearr_14427_14453 = state_14414__$1;
(statearr_14427_14453[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (5))){
var inst_14391 = (state_14414[(7)]);
var state_14414__$1 = state_14414;
var statearr_14428_14454 = state_14414__$1;
(statearr_14428_14454[(2)] = inst_14391);

(statearr_14428_14454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (10))){
var inst_14410 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14429_14455 = state_14414__$1;
(statearr_14429_14455[(2)] = inst_14410);

(statearr_14429_14455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (8))){
var inst_14391 = (state_14414[(7)]);
var inst_14401 = cljs.core.next.call(null,inst_14391);
var inst_14391__$1 = inst_14401;
var state_14414__$1 = (function (){var statearr_14430 = state_14414;
(statearr_14430[(7)] = inst_14391__$1);

return statearr_14430;
})();
var statearr_14431_14456 = state_14414__$1;
(statearr_14431_14456[(2)] = null);

(statearr_14431_14456[(1)] = (2));


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
});})(c__13594__auto__))
;
return ((function (switch__13482__auto__,c__13594__auto__){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_14435 = [null,null,null,null,null,null,null,null];
(statearr_14435[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_14435[(1)] = (1));

return statearr_14435;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_14414){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_14414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14436){if((e14436 instanceof Object)){
var ex__13486__auto__ = e14436;
var statearr_14437_14457 = state_14414;
(statearr_14437_14457[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14458 = state_14414;
state_14414 = G__14458;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_14414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_14414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto__))
})();
var state__13596__auto__ = (function (){var statearr_14438 = f__13595__auto__.call(null);
(statearr_14438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto__);

return statearr_14438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto__))
);

return c__13594__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6859__auto__ = (((_ == null))?null:_);
var m__6860__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,_);
} else {
var m__6860__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6860__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m,ch);
} else {
var m__6860__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m);
} else {
var m__6860__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14680 = (function (mult,ch,cs,meta14681){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14681 = meta14681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14682,meta14681__$1){
var self__ = this;
var _14682__$1 = this;
return (new cljs.core.async.t_cljs$core$async14680(self__.mult,self__.ch,self__.cs,meta14681__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14682){
var self__ = this;
var _14682__$1 = this;
return self__.meta14681;
});})(cs))
;

cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14680.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14680.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14681","meta14681",-144141841,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14680";

cljs.core.async.t_cljs$core$async14680.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async14680");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14680 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14680(mult__$1,ch__$1,cs__$1,meta14681){
return (new cljs.core.async.t_cljs$core$async14680(mult__$1,ch__$1,cs__$1,meta14681));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14680(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13594__auto___14901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___14901,cs,m,dchan,dctr,done){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___14901,cs,m,dchan,dctr,done){
return (function (state_14813){
var state_val_14814 = (state_14813[(1)]);
if((state_val_14814 === (7))){
var inst_14809 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14815_14902 = state_14813__$1;
(statearr_14815_14902[(2)] = inst_14809);

(statearr_14815_14902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (20))){
var inst_14714 = (state_14813[(7)]);
var inst_14724 = cljs.core.first.call(null,inst_14714);
var inst_14725 = cljs.core.nth.call(null,inst_14724,(0),null);
var inst_14726 = cljs.core.nth.call(null,inst_14724,(1),null);
var state_14813__$1 = (function (){var statearr_14816 = state_14813;
(statearr_14816[(8)] = inst_14725);

return statearr_14816;
})();
if(cljs.core.truth_(inst_14726)){
var statearr_14817_14903 = state_14813__$1;
(statearr_14817_14903[(1)] = (22));

} else {
var statearr_14818_14904 = state_14813__$1;
(statearr_14818_14904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (27))){
var inst_14761 = (state_14813[(9)]);
var inst_14685 = (state_14813[(10)]);
var inst_14756 = (state_14813[(11)]);
var inst_14754 = (state_14813[(12)]);
var inst_14761__$1 = cljs.core._nth.call(null,inst_14754,inst_14756);
var inst_14762 = cljs.core.async.put_BANG_.call(null,inst_14761__$1,inst_14685,done);
var state_14813__$1 = (function (){var statearr_14819 = state_14813;
(statearr_14819[(9)] = inst_14761__$1);

return statearr_14819;
})();
if(cljs.core.truth_(inst_14762)){
var statearr_14820_14905 = state_14813__$1;
(statearr_14820_14905[(1)] = (30));

} else {
var statearr_14821_14906 = state_14813__$1;
(statearr_14821_14906[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (1))){
var state_14813__$1 = state_14813;
var statearr_14822_14907 = state_14813__$1;
(statearr_14822_14907[(2)] = null);

(statearr_14822_14907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (24))){
var inst_14714 = (state_14813[(7)]);
var inst_14731 = (state_14813[(2)]);
var inst_14732 = cljs.core.next.call(null,inst_14714);
var inst_14694 = inst_14732;
var inst_14695 = null;
var inst_14696 = (0);
var inst_14697 = (0);
var state_14813__$1 = (function (){var statearr_14823 = state_14813;
(statearr_14823[(13)] = inst_14697);

(statearr_14823[(14)] = inst_14696);

(statearr_14823[(15)] = inst_14695);

(statearr_14823[(16)] = inst_14731);

(statearr_14823[(17)] = inst_14694);

return statearr_14823;
})();
var statearr_14824_14908 = state_14813__$1;
(statearr_14824_14908[(2)] = null);

(statearr_14824_14908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (39))){
var state_14813__$1 = state_14813;
var statearr_14828_14909 = state_14813__$1;
(statearr_14828_14909[(2)] = null);

(statearr_14828_14909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (4))){
var inst_14685 = (state_14813[(10)]);
var inst_14685__$1 = (state_14813[(2)]);
var inst_14686 = (inst_14685__$1 == null);
var state_14813__$1 = (function (){var statearr_14829 = state_14813;
(statearr_14829[(10)] = inst_14685__$1);

return statearr_14829;
})();
if(cljs.core.truth_(inst_14686)){
var statearr_14830_14910 = state_14813__$1;
(statearr_14830_14910[(1)] = (5));

} else {
var statearr_14831_14911 = state_14813__$1;
(statearr_14831_14911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (15))){
var inst_14697 = (state_14813[(13)]);
var inst_14696 = (state_14813[(14)]);
var inst_14695 = (state_14813[(15)]);
var inst_14694 = (state_14813[(17)]);
var inst_14710 = (state_14813[(2)]);
var inst_14711 = (inst_14697 + (1));
var tmp14825 = inst_14696;
var tmp14826 = inst_14695;
var tmp14827 = inst_14694;
var inst_14694__$1 = tmp14827;
var inst_14695__$1 = tmp14826;
var inst_14696__$1 = tmp14825;
var inst_14697__$1 = inst_14711;
var state_14813__$1 = (function (){var statearr_14832 = state_14813;
(statearr_14832[(13)] = inst_14697__$1);

(statearr_14832[(14)] = inst_14696__$1);

(statearr_14832[(15)] = inst_14695__$1);

(statearr_14832[(18)] = inst_14710);

(statearr_14832[(17)] = inst_14694__$1);

return statearr_14832;
})();
var statearr_14833_14912 = state_14813__$1;
(statearr_14833_14912[(2)] = null);

(statearr_14833_14912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (21))){
var inst_14735 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14837_14913 = state_14813__$1;
(statearr_14837_14913[(2)] = inst_14735);

(statearr_14837_14913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (31))){
var inst_14761 = (state_14813[(9)]);
var inst_14765 = done.call(null,null);
var inst_14766 = cljs.core.async.untap_STAR_.call(null,m,inst_14761);
var state_14813__$1 = (function (){var statearr_14838 = state_14813;
(statearr_14838[(19)] = inst_14765);

return statearr_14838;
})();
var statearr_14839_14914 = state_14813__$1;
(statearr_14839_14914[(2)] = inst_14766);

(statearr_14839_14914[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (32))){
var inst_14756 = (state_14813[(11)]);
var inst_14755 = (state_14813[(20)]);
var inst_14754 = (state_14813[(12)]);
var inst_14753 = (state_14813[(21)]);
var inst_14768 = (state_14813[(2)]);
var inst_14769 = (inst_14756 + (1));
var tmp14834 = inst_14755;
var tmp14835 = inst_14754;
var tmp14836 = inst_14753;
var inst_14753__$1 = tmp14836;
var inst_14754__$1 = tmp14835;
var inst_14755__$1 = tmp14834;
var inst_14756__$1 = inst_14769;
var state_14813__$1 = (function (){var statearr_14840 = state_14813;
(statearr_14840[(11)] = inst_14756__$1);

(statearr_14840[(20)] = inst_14755__$1);

(statearr_14840[(12)] = inst_14754__$1);

(statearr_14840[(21)] = inst_14753__$1);

(statearr_14840[(22)] = inst_14768);

return statearr_14840;
})();
var statearr_14841_14915 = state_14813__$1;
(statearr_14841_14915[(2)] = null);

(statearr_14841_14915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (40))){
var inst_14781 = (state_14813[(23)]);
var inst_14785 = done.call(null,null);
var inst_14786 = cljs.core.async.untap_STAR_.call(null,m,inst_14781);
var state_14813__$1 = (function (){var statearr_14842 = state_14813;
(statearr_14842[(24)] = inst_14785);

return statearr_14842;
})();
var statearr_14843_14916 = state_14813__$1;
(statearr_14843_14916[(2)] = inst_14786);

(statearr_14843_14916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (33))){
var inst_14772 = (state_14813[(25)]);
var inst_14774 = cljs.core.chunked_seq_QMARK_.call(null,inst_14772);
var state_14813__$1 = state_14813;
if(inst_14774){
var statearr_14844_14917 = state_14813__$1;
(statearr_14844_14917[(1)] = (36));

} else {
var statearr_14845_14918 = state_14813__$1;
(statearr_14845_14918[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (13))){
var inst_14704 = (state_14813[(26)]);
var inst_14707 = cljs.core.async.close_BANG_.call(null,inst_14704);
var state_14813__$1 = state_14813;
var statearr_14846_14919 = state_14813__$1;
(statearr_14846_14919[(2)] = inst_14707);

(statearr_14846_14919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (22))){
var inst_14725 = (state_14813[(8)]);
var inst_14728 = cljs.core.async.close_BANG_.call(null,inst_14725);
var state_14813__$1 = state_14813;
var statearr_14847_14920 = state_14813__$1;
(statearr_14847_14920[(2)] = inst_14728);

(statearr_14847_14920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (36))){
var inst_14772 = (state_14813[(25)]);
var inst_14776 = cljs.core.chunk_first.call(null,inst_14772);
var inst_14777 = cljs.core.chunk_rest.call(null,inst_14772);
var inst_14778 = cljs.core.count.call(null,inst_14776);
var inst_14753 = inst_14777;
var inst_14754 = inst_14776;
var inst_14755 = inst_14778;
var inst_14756 = (0);
var state_14813__$1 = (function (){var statearr_14848 = state_14813;
(statearr_14848[(11)] = inst_14756);

(statearr_14848[(20)] = inst_14755);

(statearr_14848[(12)] = inst_14754);

(statearr_14848[(21)] = inst_14753);

return statearr_14848;
})();
var statearr_14849_14921 = state_14813__$1;
(statearr_14849_14921[(2)] = null);

(statearr_14849_14921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (41))){
var inst_14772 = (state_14813[(25)]);
var inst_14788 = (state_14813[(2)]);
var inst_14789 = cljs.core.next.call(null,inst_14772);
var inst_14753 = inst_14789;
var inst_14754 = null;
var inst_14755 = (0);
var inst_14756 = (0);
var state_14813__$1 = (function (){var statearr_14850 = state_14813;
(statearr_14850[(11)] = inst_14756);

(statearr_14850[(20)] = inst_14755);

(statearr_14850[(12)] = inst_14754);

(statearr_14850[(21)] = inst_14753);

(statearr_14850[(27)] = inst_14788);

return statearr_14850;
})();
var statearr_14851_14922 = state_14813__$1;
(statearr_14851_14922[(2)] = null);

(statearr_14851_14922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (43))){
var state_14813__$1 = state_14813;
var statearr_14852_14923 = state_14813__$1;
(statearr_14852_14923[(2)] = null);

(statearr_14852_14923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (29))){
var inst_14797 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14853_14924 = state_14813__$1;
(statearr_14853_14924[(2)] = inst_14797);

(statearr_14853_14924[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (44))){
var inst_14806 = (state_14813[(2)]);
var state_14813__$1 = (function (){var statearr_14854 = state_14813;
(statearr_14854[(28)] = inst_14806);

return statearr_14854;
})();
var statearr_14855_14925 = state_14813__$1;
(statearr_14855_14925[(2)] = null);

(statearr_14855_14925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (6))){
var inst_14745 = (state_14813[(29)]);
var inst_14744 = cljs.core.deref.call(null,cs);
var inst_14745__$1 = cljs.core.keys.call(null,inst_14744);
var inst_14746 = cljs.core.count.call(null,inst_14745__$1);
var inst_14747 = cljs.core.reset_BANG_.call(null,dctr,inst_14746);
var inst_14752 = cljs.core.seq.call(null,inst_14745__$1);
var inst_14753 = inst_14752;
var inst_14754 = null;
var inst_14755 = (0);
var inst_14756 = (0);
var state_14813__$1 = (function (){var statearr_14856 = state_14813;
(statearr_14856[(30)] = inst_14747);

(statearr_14856[(29)] = inst_14745__$1);

(statearr_14856[(11)] = inst_14756);

(statearr_14856[(20)] = inst_14755);

(statearr_14856[(12)] = inst_14754);

(statearr_14856[(21)] = inst_14753);

return statearr_14856;
})();
var statearr_14857_14926 = state_14813__$1;
(statearr_14857_14926[(2)] = null);

(statearr_14857_14926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (28))){
var inst_14772 = (state_14813[(25)]);
var inst_14753 = (state_14813[(21)]);
var inst_14772__$1 = cljs.core.seq.call(null,inst_14753);
var state_14813__$1 = (function (){var statearr_14858 = state_14813;
(statearr_14858[(25)] = inst_14772__$1);

return statearr_14858;
})();
if(inst_14772__$1){
var statearr_14859_14927 = state_14813__$1;
(statearr_14859_14927[(1)] = (33));

} else {
var statearr_14860_14928 = state_14813__$1;
(statearr_14860_14928[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (25))){
var inst_14756 = (state_14813[(11)]);
var inst_14755 = (state_14813[(20)]);
var inst_14758 = (inst_14756 < inst_14755);
var inst_14759 = inst_14758;
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14759)){
var statearr_14861_14929 = state_14813__$1;
(statearr_14861_14929[(1)] = (27));

} else {
var statearr_14862_14930 = state_14813__$1;
(statearr_14862_14930[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (34))){
var state_14813__$1 = state_14813;
var statearr_14863_14931 = state_14813__$1;
(statearr_14863_14931[(2)] = null);

(statearr_14863_14931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (17))){
var state_14813__$1 = state_14813;
var statearr_14864_14932 = state_14813__$1;
(statearr_14864_14932[(2)] = null);

(statearr_14864_14932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (3))){
var inst_14811 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14813__$1,inst_14811);
} else {
if((state_val_14814 === (12))){
var inst_14740 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14865_14933 = state_14813__$1;
(statearr_14865_14933[(2)] = inst_14740);

(statearr_14865_14933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (2))){
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(4),ch);
} else {
if((state_val_14814 === (23))){
var state_14813__$1 = state_14813;
var statearr_14866_14934 = state_14813__$1;
(statearr_14866_14934[(2)] = null);

(statearr_14866_14934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (35))){
var inst_14795 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14867_14935 = state_14813__$1;
(statearr_14867_14935[(2)] = inst_14795);

(statearr_14867_14935[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (19))){
var inst_14714 = (state_14813[(7)]);
var inst_14718 = cljs.core.chunk_first.call(null,inst_14714);
var inst_14719 = cljs.core.chunk_rest.call(null,inst_14714);
var inst_14720 = cljs.core.count.call(null,inst_14718);
var inst_14694 = inst_14719;
var inst_14695 = inst_14718;
var inst_14696 = inst_14720;
var inst_14697 = (0);
var state_14813__$1 = (function (){var statearr_14868 = state_14813;
(statearr_14868[(13)] = inst_14697);

(statearr_14868[(14)] = inst_14696);

(statearr_14868[(15)] = inst_14695);

(statearr_14868[(17)] = inst_14694);

return statearr_14868;
})();
var statearr_14869_14936 = state_14813__$1;
(statearr_14869_14936[(2)] = null);

(statearr_14869_14936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (11))){
var inst_14714 = (state_14813[(7)]);
var inst_14694 = (state_14813[(17)]);
var inst_14714__$1 = cljs.core.seq.call(null,inst_14694);
var state_14813__$1 = (function (){var statearr_14870 = state_14813;
(statearr_14870[(7)] = inst_14714__$1);

return statearr_14870;
})();
if(inst_14714__$1){
var statearr_14871_14937 = state_14813__$1;
(statearr_14871_14937[(1)] = (16));

} else {
var statearr_14872_14938 = state_14813__$1;
(statearr_14872_14938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (9))){
var inst_14742 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14873_14939 = state_14813__$1;
(statearr_14873_14939[(2)] = inst_14742);

(statearr_14873_14939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (5))){
var inst_14692 = cljs.core.deref.call(null,cs);
var inst_14693 = cljs.core.seq.call(null,inst_14692);
var inst_14694 = inst_14693;
var inst_14695 = null;
var inst_14696 = (0);
var inst_14697 = (0);
var state_14813__$1 = (function (){var statearr_14874 = state_14813;
(statearr_14874[(13)] = inst_14697);

(statearr_14874[(14)] = inst_14696);

(statearr_14874[(15)] = inst_14695);

(statearr_14874[(17)] = inst_14694);

return statearr_14874;
})();
var statearr_14875_14940 = state_14813__$1;
(statearr_14875_14940[(2)] = null);

(statearr_14875_14940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (14))){
var state_14813__$1 = state_14813;
var statearr_14876_14941 = state_14813__$1;
(statearr_14876_14941[(2)] = null);

(statearr_14876_14941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (45))){
var inst_14803 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14877_14942 = state_14813__$1;
(statearr_14877_14942[(2)] = inst_14803);

(statearr_14877_14942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (26))){
var inst_14745 = (state_14813[(29)]);
var inst_14799 = (state_14813[(2)]);
var inst_14800 = cljs.core.seq.call(null,inst_14745);
var state_14813__$1 = (function (){var statearr_14878 = state_14813;
(statearr_14878[(31)] = inst_14799);

return statearr_14878;
})();
if(inst_14800){
var statearr_14879_14943 = state_14813__$1;
(statearr_14879_14943[(1)] = (42));

} else {
var statearr_14880_14944 = state_14813__$1;
(statearr_14880_14944[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (16))){
var inst_14714 = (state_14813[(7)]);
var inst_14716 = cljs.core.chunked_seq_QMARK_.call(null,inst_14714);
var state_14813__$1 = state_14813;
if(inst_14716){
var statearr_14881_14945 = state_14813__$1;
(statearr_14881_14945[(1)] = (19));

} else {
var statearr_14882_14946 = state_14813__$1;
(statearr_14882_14946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (38))){
var inst_14792 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14883_14947 = state_14813__$1;
(statearr_14883_14947[(2)] = inst_14792);

(statearr_14883_14947[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (30))){
var state_14813__$1 = state_14813;
var statearr_14884_14948 = state_14813__$1;
(statearr_14884_14948[(2)] = null);

(statearr_14884_14948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (10))){
var inst_14697 = (state_14813[(13)]);
var inst_14695 = (state_14813[(15)]);
var inst_14703 = cljs.core._nth.call(null,inst_14695,inst_14697);
var inst_14704 = cljs.core.nth.call(null,inst_14703,(0),null);
var inst_14705 = cljs.core.nth.call(null,inst_14703,(1),null);
var state_14813__$1 = (function (){var statearr_14885 = state_14813;
(statearr_14885[(26)] = inst_14704);

return statearr_14885;
})();
if(cljs.core.truth_(inst_14705)){
var statearr_14886_14949 = state_14813__$1;
(statearr_14886_14949[(1)] = (13));

} else {
var statearr_14887_14950 = state_14813__$1;
(statearr_14887_14950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (18))){
var inst_14738 = (state_14813[(2)]);
var state_14813__$1 = state_14813;
var statearr_14888_14951 = state_14813__$1;
(statearr_14888_14951[(2)] = inst_14738);

(statearr_14888_14951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (42))){
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(45),dchan);
} else {
if((state_val_14814 === (37))){
var inst_14772 = (state_14813[(25)]);
var inst_14781 = (state_14813[(23)]);
var inst_14685 = (state_14813[(10)]);
var inst_14781__$1 = cljs.core.first.call(null,inst_14772);
var inst_14782 = cljs.core.async.put_BANG_.call(null,inst_14781__$1,inst_14685,done);
var state_14813__$1 = (function (){var statearr_14889 = state_14813;
(statearr_14889[(23)] = inst_14781__$1);

return statearr_14889;
})();
if(cljs.core.truth_(inst_14782)){
var statearr_14890_14952 = state_14813__$1;
(statearr_14890_14952[(1)] = (39));

} else {
var statearr_14891_14953 = state_14813__$1;
(statearr_14891_14953[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14814 === (8))){
var inst_14697 = (state_14813[(13)]);
var inst_14696 = (state_14813[(14)]);
var inst_14699 = (inst_14697 < inst_14696);
var inst_14700 = inst_14699;
var state_14813__$1 = state_14813;
if(cljs.core.truth_(inst_14700)){
var statearr_14892_14954 = state_14813__$1;
(statearr_14892_14954[(1)] = (10));

} else {
var statearr_14893_14955 = state_14813__$1;
(statearr_14893_14955[(1)] = (11));

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
});})(c__13594__auto___14901,cs,m,dchan,dctr,done))
;
return ((function (switch__13482__auto__,c__13594__auto___14901,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13483__auto__ = null;
var cljs$core$async$mult_$_state_machine__13483__auto____0 = (function (){
var statearr_14897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14897[(0)] = cljs$core$async$mult_$_state_machine__13483__auto__);

(statearr_14897[(1)] = (1));

return statearr_14897;
});
var cljs$core$async$mult_$_state_machine__13483__auto____1 = (function (state_14813){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_14813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e14898){if((e14898 instanceof Object)){
var ex__13486__auto__ = e14898;
var statearr_14899_14956 = state_14813;
(statearr_14899_14956[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14957 = state_14813;
state_14813 = G__14957;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13483__auto__ = function(state_14813){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13483__auto____1.call(this,state_14813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13483__auto____0;
cljs$core$async$mult_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13483__auto____1;
return cljs$core$async$mult_$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___14901,cs,m,dchan,dctr,done))
})();
var state__13596__auto__ = (function (){var statearr_14900 = f__13595__auto__.call(null);
(statearr_14900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___14901);

return statearr_14900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___14901,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14958 = [];
var len__7266__auto___14961 = arguments.length;
var i__7267__auto___14962 = (0);
while(true){
if((i__7267__auto___14962 < len__7266__auto___14961)){
args14958.push((arguments[i__7267__auto___14962]));

var G__14963 = (i__7267__auto___14962 + (1));
i__7267__auto___14962 = G__14963;
continue;
} else {
}
break;
}

var G__14960 = args14958.length;
switch (G__14960) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14958.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m,ch);
} else {
var m__6860__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m,ch);
} else {
var m__6860__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m);
} else {
var m__6860__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m,state_map);
} else {
var m__6860__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6859__auto__ = (((m == null))?null:m);
var m__6860__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,m,mode);
} else {
var m__6860__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7273__auto__ = [];
var len__7266__auto___14975 = arguments.length;
var i__7267__auto___14976 = (0);
while(true){
if((i__7267__auto___14976 < len__7266__auto___14975)){
args__7273__auto__.push((arguments[i__7267__auto___14976]));

var G__14977 = (i__7267__auto___14976 + (1));
i__7267__auto___14976 = G__14977;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((3) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7274__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14969){
var map__14970 = p__14969;
var map__14970__$1 = ((((!((map__14970 == null)))?((((map__14970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14970):map__14970);
var opts = map__14970__$1;
var statearr_14972_14978 = state;
(statearr_14972_14978[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__14970,map__14970__$1,opts){
return (function (val){
var statearr_14973_14979 = state;
(statearr_14973_14979[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14970,map__14970__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14974_14980 = state;
(statearr_14974_14980[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14965){
var G__14966 = cljs.core.first.call(null,seq14965);
var seq14965__$1 = cljs.core.next.call(null,seq14965);
var G__14967 = cljs.core.first.call(null,seq14965__$1);
var seq14965__$2 = cljs.core.next.call(null,seq14965__$1);
var G__14968 = cljs.core.first.call(null,seq14965__$2);
var seq14965__$3 = cljs.core.next.call(null,seq14965__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14966,G__14967,G__14968,seq14965__$3);
});
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15144 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15145){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15145 = meta15145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15146,meta15145__$1){
var self__ = this;
var _15146__$1 = this;
return (new cljs.core.async.t_cljs$core$async15144(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15145__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15146){
var self__ = this;
var _15146__$1 = this;
return self__.meta15145;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15145","meta15145",-1991998382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15144";

cljs.core.async.t_cljs$core$async15144.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async15144");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15144 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15144(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15145){
return (new cljs.core.async.t_cljs$core$async15144(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15145));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15144(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13594__auto___15307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___15307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___15307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15244){
var state_val_15245 = (state_15244[(1)]);
if((state_val_15245 === (7))){
var inst_15162 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
var statearr_15246_15308 = state_15244__$1;
(statearr_15246_15308[(2)] = inst_15162);

(statearr_15246_15308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (20))){
var inst_15174 = (state_15244[(7)]);
var state_15244__$1 = state_15244;
var statearr_15247_15309 = state_15244__$1;
(statearr_15247_15309[(2)] = inst_15174);

(statearr_15247_15309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (27))){
var state_15244__$1 = state_15244;
var statearr_15248_15310 = state_15244__$1;
(statearr_15248_15310[(2)] = null);

(statearr_15248_15310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (1))){
var inst_15150 = (state_15244[(8)]);
var inst_15150__$1 = calc_state.call(null);
var inst_15152 = (inst_15150__$1 == null);
var inst_15153 = cljs.core.not.call(null,inst_15152);
var state_15244__$1 = (function (){var statearr_15249 = state_15244;
(statearr_15249[(8)] = inst_15150__$1);

return statearr_15249;
})();
if(inst_15153){
var statearr_15250_15311 = state_15244__$1;
(statearr_15250_15311[(1)] = (2));

} else {
var statearr_15251_15312 = state_15244__$1;
(statearr_15251_15312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (24))){
var inst_15218 = (state_15244[(9)]);
var inst_15204 = (state_15244[(10)]);
var inst_15197 = (state_15244[(11)]);
var inst_15218__$1 = inst_15197.call(null,inst_15204);
var state_15244__$1 = (function (){var statearr_15252 = state_15244;
(statearr_15252[(9)] = inst_15218__$1);

return statearr_15252;
})();
if(cljs.core.truth_(inst_15218__$1)){
var statearr_15253_15313 = state_15244__$1;
(statearr_15253_15313[(1)] = (29));

} else {
var statearr_15254_15314 = state_15244__$1;
(statearr_15254_15314[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (4))){
var inst_15165 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
if(cljs.core.truth_(inst_15165)){
var statearr_15255_15315 = state_15244__$1;
(statearr_15255_15315[(1)] = (8));

} else {
var statearr_15256_15316 = state_15244__$1;
(statearr_15256_15316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (15))){
var inst_15191 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
if(cljs.core.truth_(inst_15191)){
var statearr_15257_15317 = state_15244__$1;
(statearr_15257_15317[(1)] = (19));

} else {
var statearr_15258_15318 = state_15244__$1;
(statearr_15258_15318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (21))){
var inst_15196 = (state_15244[(12)]);
var inst_15196__$1 = (state_15244[(2)]);
var inst_15197 = cljs.core.get.call(null,inst_15196__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15198 = cljs.core.get.call(null,inst_15196__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15199 = cljs.core.get.call(null,inst_15196__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15244__$1 = (function (){var statearr_15259 = state_15244;
(statearr_15259[(13)] = inst_15198);

(statearr_15259[(12)] = inst_15196__$1);

(statearr_15259[(11)] = inst_15197);

return statearr_15259;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15244__$1,(22),inst_15199);
} else {
if((state_val_15245 === (31))){
var inst_15226 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
if(cljs.core.truth_(inst_15226)){
var statearr_15260_15319 = state_15244__$1;
(statearr_15260_15319[(1)] = (32));

} else {
var statearr_15261_15320 = state_15244__$1;
(statearr_15261_15320[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (32))){
var inst_15203 = (state_15244[(14)]);
var state_15244__$1 = state_15244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15244__$1,(35),out,inst_15203);
} else {
if((state_val_15245 === (33))){
var inst_15196 = (state_15244[(12)]);
var inst_15174 = inst_15196;
var state_15244__$1 = (function (){var statearr_15262 = state_15244;
(statearr_15262[(7)] = inst_15174);

return statearr_15262;
})();
var statearr_15263_15321 = state_15244__$1;
(statearr_15263_15321[(2)] = null);

(statearr_15263_15321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (13))){
var inst_15174 = (state_15244[(7)]);
var inst_15181 = inst_15174.cljs$lang$protocol_mask$partition0$;
var inst_15182 = (inst_15181 & (64));
var inst_15183 = inst_15174.cljs$core$ISeq$;
var inst_15184 = (inst_15182) || (inst_15183);
var state_15244__$1 = state_15244;
if(cljs.core.truth_(inst_15184)){
var statearr_15264_15322 = state_15244__$1;
(statearr_15264_15322[(1)] = (16));

} else {
var statearr_15265_15323 = state_15244__$1;
(statearr_15265_15323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (22))){
var inst_15203 = (state_15244[(14)]);
var inst_15204 = (state_15244[(10)]);
var inst_15202 = (state_15244[(2)]);
var inst_15203__$1 = cljs.core.nth.call(null,inst_15202,(0),null);
var inst_15204__$1 = cljs.core.nth.call(null,inst_15202,(1),null);
var inst_15205 = (inst_15203__$1 == null);
var inst_15206 = cljs.core._EQ_.call(null,inst_15204__$1,change);
var inst_15207 = (inst_15205) || (inst_15206);
var state_15244__$1 = (function (){var statearr_15266 = state_15244;
(statearr_15266[(14)] = inst_15203__$1);

(statearr_15266[(10)] = inst_15204__$1);

return statearr_15266;
})();
if(cljs.core.truth_(inst_15207)){
var statearr_15267_15324 = state_15244__$1;
(statearr_15267_15324[(1)] = (23));

} else {
var statearr_15268_15325 = state_15244__$1;
(statearr_15268_15325[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (36))){
var inst_15196 = (state_15244[(12)]);
var inst_15174 = inst_15196;
var state_15244__$1 = (function (){var statearr_15269 = state_15244;
(statearr_15269[(7)] = inst_15174);

return statearr_15269;
})();
var statearr_15270_15326 = state_15244__$1;
(statearr_15270_15326[(2)] = null);

(statearr_15270_15326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (29))){
var inst_15218 = (state_15244[(9)]);
var state_15244__$1 = state_15244;
var statearr_15271_15327 = state_15244__$1;
(statearr_15271_15327[(2)] = inst_15218);

(statearr_15271_15327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (6))){
var state_15244__$1 = state_15244;
var statearr_15272_15328 = state_15244__$1;
(statearr_15272_15328[(2)] = false);

(statearr_15272_15328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (28))){
var inst_15214 = (state_15244[(2)]);
var inst_15215 = calc_state.call(null);
var inst_15174 = inst_15215;
var state_15244__$1 = (function (){var statearr_15273 = state_15244;
(statearr_15273[(7)] = inst_15174);

(statearr_15273[(15)] = inst_15214);

return statearr_15273;
})();
var statearr_15274_15329 = state_15244__$1;
(statearr_15274_15329[(2)] = null);

(statearr_15274_15329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (25))){
var inst_15240 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
var statearr_15275_15330 = state_15244__$1;
(statearr_15275_15330[(2)] = inst_15240);

(statearr_15275_15330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (34))){
var inst_15238 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
var statearr_15276_15331 = state_15244__$1;
(statearr_15276_15331[(2)] = inst_15238);

(statearr_15276_15331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (17))){
var state_15244__$1 = state_15244;
var statearr_15277_15332 = state_15244__$1;
(statearr_15277_15332[(2)] = false);

(statearr_15277_15332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (3))){
var state_15244__$1 = state_15244;
var statearr_15278_15333 = state_15244__$1;
(statearr_15278_15333[(2)] = false);

(statearr_15278_15333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (12))){
var inst_15242 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15244__$1,inst_15242);
} else {
if((state_val_15245 === (2))){
var inst_15150 = (state_15244[(8)]);
var inst_15155 = inst_15150.cljs$lang$protocol_mask$partition0$;
var inst_15156 = (inst_15155 & (64));
var inst_15157 = inst_15150.cljs$core$ISeq$;
var inst_15158 = (inst_15156) || (inst_15157);
var state_15244__$1 = state_15244;
if(cljs.core.truth_(inst_15158)){
var statearr_15279_15334 = state_15244__$1;
(statearr_15279_15334[(1)] = (5));

} else {
var statearr_15280_15335 = state_15244__$1;
(statearr_15280_15335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (23))){
var inst_15203 = (state_15244[(14)]);
var inst_15209 = (inst_15203 == null);
var state_15244__$1 = state_15244;
if(cljs.core.truth_(inst_15209)){
var statearr_15281_15336 = state_15244__$1;
(statearr_15281_15336[(1)] = (26));

} else {
var statearr_15282_15337 = state_15244__$1;
(statearr_15282_15337[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (35))){
var inst_15229 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
if(cljs.core.truth_(inst_15229)){
var statearr_15283_15338 = state_15244__$1;
(statearr_15283_15338[(1)] = (36));

} else {
var statearr_15284_15339 = state_15244__$1;
(statearr_15284_15339[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (19))){
var inst_15174 = (state_15244[(7)]);
var inst_15193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15174);
var state_15244__$1 = state_15244;
var statearr_15285_15340 = state_15244__$1;
(statearr_15285_15340[(2)] = inst_15193);

(statearr_15285_15340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (11))){
var inst_15174 = (state_15244[(7)]);
var inst_15178 = (inst_15174 == null);
var inst_15179 = cljs.core.not.call(null,inst_15178);
var state_15244__$1 = state_15244;
if(inst_15179){
var statearr_15286_15341 = state_15244__$1;
(statearr_15286_15341[(1)] = (13));

} else {
var statearr_15287_15342 = state_15244__$1;
(statearr_15287_15342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (9))){
var inst_15150 = (state_15244[(8)]);
var state_15244__$1 = state_15244;
var statearr_15288_15343 = state_15244__$1;
(statearr_15288_15343[(2)] = inst_15150);

(statearr_15288_15343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (5))){
var state_15244__$1 = state_15244;
var statearr_15289_15344 = state_15244__$1;
(statearr_15289_15344[(2)] = true);

(statearr_15289_15344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (14))){
var state_15244__$1 = state_15244;
var statearr_15290_15345 = state_15244__$1;
(statearr_15290_15345[(2)] = false);

(statearr_15290_15345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (26))){
var inst_15204 = (state_15244[(10)]);
var inst_15211 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15204);
var state_15244__$1 = state_15244;
var statearr_15291_15346 = state_15244__$1;
(statearr_15291_15346[(2)] = inst_15211);

(statearr_15291_15346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (16))){
var state_15244__$1 = state_15244;
var statearr_15292_15347 = state_15244__$1;
(statearr_15292_15347[(2)] = true);

(statearr_15292_15347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (38))){
var inst_15234 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
var statearr_15293_15348 = state_15244__$1;
(statearr_15293_15348[(2)] = inst_15234);

(statearr_15293_15348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (30))){
var inst_15198 = (state_15244[(13)]);
var inst_15204 = (state_15244[(10)]);
var inst_15197 = (state_15244[(11)]);
var inst_15221 = cljs.core.empty_QMARK_.call(null,inst_15197);
var inst_15222 = inst_15198.call(null,inst_15204);
var inst_15223 = cljs.core.not.call(null,inst_15222);
var inst_15224 = (inst_15221) && (inst_15223);
var state_15244__$1 = state_15244;
var statearr_15294_15349 = state_15244__$1;
(statearr_15294_15349[(2)] = inst_15224);

(statearr_15294_15349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (10))){
var inst_15150 = (state_15244[(8)]);
var inst_15170 = (state_15244[(2)]);
var inst_15171 = cljs.core.get.call(null,inst_15170,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15172 = cljs.core.get.call(null,inst_15170,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15173 = cljs.core.get.call(null,inst_15170,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15174 = inst_15150;
var state_15244__$1 = (function (){var statearr_15295 = state_15244;
(statearr_15295[(16)] = inst_15171);

(statearr_15295[(17)] = inst_15173);

(statearr_15295[(7)] = inst_15174);

(statearr_15295[(18)] = inst_15172);

return statearr_15295;
})();
var statearr_15296_15350 = state_15244__$1;
(statearr_15296_15350[(2)] = null);

(statearr_15296_15350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (18))){
var inst_15188 = (state_15244[(2)]);
var state_15244__$1 = state_15244;
var statearr_15297_15351 = state_15244__$1;
(statearr_15297_15351[(2)] = inst_15188);

(statearr_15297_15351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (37))){
var state_15244__$1 = state_15244;
var statearr_15298_15352 = state_15244__$1;
(statearr_15298_15352[(2)] = null);

(statearr_15298_15352[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (8))){
var inst_15150 = (state_15244[(8)]);
var inst_15167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15150);
var state_15244__$1 = state_15244;
var statearr_15299_15353 = state_15244__$1;
(statearr_15299_15353[(2)] = inst_15167);

(statearr_15299_15353[(1)] = (10));


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
});})(c__13594__auto___15307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13482__auto__,c__13594__auto___15307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13483__auto__ = null;
var cljs$core$async$mix_$_state_machine__13483__auto____0 = (function (){
var statearr_15303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15303[(0)] = cljs$core$async$mix_$_state_machine__13483__auto__);

(statearr_15303[(1)] = (1));

return statearr_15303;
});
var cljs$core$async$mix_$_state_machine__13483__auto____1 = (function (state_15244){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_15244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e15304){if((e15304 instanceof Object)){
var ex__13486__auto__ = e15304;
var statearr_15305_15354 = state_15244;
(statearr_15305_15354[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15355 = state_15244;
state_15244 = G__15355;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13483__auto__ = function(state_15244){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13483__auto____1.call(this,state_15244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13483__auto____0;
cljs$core$async$mix_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13483__auto____1;
return cljs$core$async$mix_$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___15307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13596__auto__ = (function (){var statearr_15306 = f__13595__auto__.call(null);
(statearr_15306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___15307);

return statearr_15306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___15307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6859__auto__ = (((p == null))?null:p);
var m__6860__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6860__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6859__auto__ = (((p == null))?null:p);
var m__6860__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,p,v,ch);
} else {
var m__6860__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15356 = [];
var len__7266__auto___15359 = arguments.length;
var i__7267__auto___15360 = (0);
while(true){
if((i__7267__auto___15360 < len__7266__auto___15359)){
args15356.push((arguments[i__7267__auto___15360]));

var G__15361 = (i__7267__auto___15360 + (1));
i__7267__auto___15360 = G__15361;
continue;
} else {
}
break;
}

var G__15358 = args15356.length;
switch (G__15358) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15356.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6859__auto__ = (((p == null))?null:p);
var m__6860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,p);
} else {
var m__6860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6859__auto__ = (((p == null))?null:p);
var m__6860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,p,v);
} else {
var m__6860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args15364 = [];
var len__7266__auto___15489 = arguments.length;
var i__7267__auto___15490 = (0);
while(true){
if((i__7267__auto___15490 < len__7266__auto___15489)){
args15364.push((arguments[i__7267__auto___15490]));

var G__15491 = (i__7267__auto___15490 + (1));
i__7267__auto___15490 = G__15491;
continue;
} else {
}
break;
}

var G__15366 = args15364.length;
switch (G__15366) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15364.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6196__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6196__auto__,mults){
return (function (p1__15363_SHARP_){
if(cljs.core.truth_(p1__15363_SHARP_.call(null,topic))){
return p1__15363_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6196__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15367 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15368){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15368 = meta15368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15369,meta15368__$1){
var self__ = this;
var _15369__$1 = this;
return (new cljs.core.async.t_cljs$core$async15367(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15368__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15369){
var self__ = this;
var _15369__$1 = this;
return self__.meta15368;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15368","meta15368",1264559104,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15367";

cljs.core.async.t_cljs$core$async15367.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async15367");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15367 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15367(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15368){
return (new cljs.core.async.t_cljs$core$async15367(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15368));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15367(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13594__auto___15493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___15493,mults,ensure_mult,p){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___15493,mults,ensure_mult,p){
return (function (state_15441){
var state_val_15442 = (state_15441[(1)]);
if((state_val_15442 === (7))){
var inst_15437 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15443_15494 = state_15441__$1;
(statearr_15443_15494[(2)] = inst_15437);

(statearr_15443_15494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (20))){
var state_15441__$1 = state_15441;
var statearr_15444_15495 = state_15441__$1;
(statearr_15444_15495[(2)] = null);

(statearr_15444_15495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (1))){
var state_15441__$1 = state_15441;
var statearr_15445_15496 = state_15441__$1;
(statearr_15445_15496[(2)] = null);

(statearr_15445_15496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (24))){
var inst_15420 = (state_15441[(7)]);
var inst_15429 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15420);
var state_15441__$1 = state_15441;
var statearr_15446_15497 = state_15441__$1;
(statearr_15446_15497[(2)] = inst_15429);

(statearr_15446_15497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (4))){
var inst_15372 = (state_15441[(8)]);
var inst_15372__$1 = (state_15441[(2)]);
var inst_15373 = (inst_15372__$1 == null);
var state_15441__$1 = (function (){var statearr_15447 = state_15441;
(statearr_15447[(8)] = inst_15372__$1);

return statearr_15447;
})();
if(cljs.core.truth_(inst_15373)){
var statearr_15448_15498 = state_15441__$1;
(statearr_15448_15498[(1)] = (5));

} else {
var statearr_15449_15499 = state_15441__$1;
(statearr_15449_15499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (15))){
var inst_15414 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15450_15500 = state_15441__$1;
(statearr_15450_15500[(2)] = inst_15414);

(statearr_15450_15500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (21))){
var inst_15434 = (state_15441[(2)]);
var state_15441__$1 = (function (){var statearr_15451 = state_15441;
(statearr_15451[(9)] = inst_15434);

return statearr_15451;
})();
var statearr_15452_15501 = state_15441__$1;
(statearr_15452_15501[(2)] = null);

(statearr_15452_15501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (13))){
var inst_15396 = (state_15441[(10)]);
var inst_15398 = cljs.core.chunked_seq_QMARK_.call(null,inst_15396);
var state_15441__$1 = state_15441;
if(inst_15398){
var statearr_15453_15502 = state_15441__$1;
(statearr_15453_15502[(1)] = (16));

} else {
var statearr_15454_15503 = state_15441__$1;
(statearr_15454_15503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (22))){
var inst_15426 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
if(cljs.core.truth_(inst_15426)){
var statearr_15455_15504 = state_15441__$1;
(statearr_15455_15504[(1)] = (23));

} else {
var statearr_15456_15505 = state_15441__$1;
(statearr_15456_15505[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (6))){
var inst_15372 = (state_15441[(8)]);
var inst_15422 = (state_15441[(11)]);
var inst_15420 = (state_15441[(7)]);
var inst_15420__$1 = topic_fn.call(null,inst_15372);
var inst_15421 = cljs.core.deref.call(null,mults);
var inst_15422__$1 = cljs.core.get.call(null,inst_15421,inst_15420__$1);
var state_15441__$1 = (function (){var statearr_15457 = state_15441;
(statearr_15457[(11)] = inst_15422__$1);

(statearr_15457[(7)] = inst_15420__$1);

return statearr_15457;
})();
if(cljs.core.truth_(inst_15422__$1)){
var statearr_15458_15506 = state_15441__$1;
(statearr_15458_15506[(1)] = (19));

} else {
var statearr_15459_15507 = state_15441__$1;
(statearr_15459_15507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (25))){
var inst_15431 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15460_15508 = state_15441__$1;
(statearr_15460_15508[(2)] = inst_15431);

(statearr_15460_15508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (17))){
var inst_15396 = (state_15441[(10)]);
var inst_15405 = cljs.core.first.call(null,inst_15396);
var inst_15406 = cljs.core.async.muxch_STAR_.call(null,inst_15405);
var inst_15407 = cljs.core.async.close_BANG_.call(null,inst_15406);
var inst_15408 = cljs.core.next.call(null,inst_15396);
var inst_15382 = inst_15408;
var inst_15383 = null;
var inst_15384 = (0);
var inst_15385 = (0);
var state_15441__$1 = (function (){var statearr_15461 = state_15441;
(statearr_15461[(12)] = inst_15407);

(statearr_15461[(13)] = inst_15383);

(statearr_15461[(14)] = inst_15385);

(statearr_15461[(15)] = inst_15382);

(statearr_15461[(16)] = inst_15384);

return statearr_15461;
})();
var statearr_15462_15509 = state_15441__$1;
(statearr_15462_15509[(2)] = null);

(statearr_15462_15509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (3))){
var inst_15439 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15441__$1,inst_15439);
} else {
if((state_val_15442 === (12))){
var inst_15416 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15463_15510 = state_15441__$1;
(statearr_15463_15510[(2)] = inst_15416);

(statearr_15463_15510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (2))){
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15441__$1,(4),ch);
} else {
if((state_val_15442 === (23))){
var state_15441__$1 = state_15441;
var statearr_15464_15511 = state_15441__$1;
(statearr_15464_15511[(2)] = null);

(statearr_15464_15511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (19))){
var inst_15372 = (state_15441[(8)]);
var inst_15422 = (state_15441[(11)]);
var inst_15424 = cljs.core.async.muxch_STAR_.call(null,inst_15422);
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15441__$1,(22),inst_15424,inst_15372);
} else {
if((state_val_15442 === (11))){
var inst_15396 = (state_15441[(10)]);
var inst_15382 = (state_15441[(15)]);
var inst_15396__$1 = cljs.core.seq.call(null,inst_15382);
var state_15441__$1 = (function (){var statearr_15465 = state_15441;
(statearr_15465[(10)] = inst_15396__$1);

return statearr_15465;
})();
if(inst_15396__$1){
var statearr_15466_15512 = state_15441__$1;
(statearr_15466_15512[(1)] = (13));

} else {
var statearr_15467_15513 = state_15441__$1;
(statearr_15467_15513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (9))){
var inst_15418 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15468_15514 = state_15441__$1;
(statearr_15468_15514[(2)] = inst_15418);

(statearr_15468_15514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (5))){
var inst_15379 = cljs.core.deref.call(null,mults);
var inst_15380 = cljs.core.vals.call(null,inst_15379);
var inst_15381 = cljs.core.seq.call(null,inst_15380);
var inst_15382 = inst_15381;
var inst_15383 = null;
var inst_15384 = (0);
var inst_15385 = (0);
var state_15441__$1 = (function (){var statearr_15469 = state_15441;
(statearr_15469[(13)] = inst_15383);

(statearr_15469[(14)] = inst_15385);

(statearr_15469[(15)] = inst_15382);

(statearr_15469[(16)] = inst_15384);

return statearr_15469;
})();
var statearr_15470_15515 = state_15441__$1;
(statearr_15470_15515[(2)] = null);

(statearr_15470_15515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (14))){
var state_15441__$1 = state_15441;
var statearr_15474_15516 = state_15441__$1;
(statearr_15474_15516[(2)] = null);

(statearr_15474_15516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (16))){
var inst_15396 = (state_15441[(10)]);
var inst_15400 = cljs.core.chunk_first.call(null,inst_15396);
var inst_15401 = cljs.core.chunk_rest.call(null,inst_15396);
var inst_15402 = cljs.core.count.call(null,inst_15400);
var inst_15382 = inst_15401;
var inst_15383 = inst_15400;
var inst_15384 = inst_15402;
var inst_15385 = (0);
var state_15441__$1 = (function (){var statearr_15475 = state_15441;
(statearr_15475[(13)] = inst_15383);

(statearr_15475[(14)] = inst_15385);

(statearr_15475[(15)] = inst_15382);

(statearr_15475[(16)] = inst_15384);

return statearr_15475;
})();
var statearr_15476_15517 = state_15441__$1;
(statearr_15476_15517[(2)] = null);

(statearr_15476_15517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (10))){
var inst_15383 = (state_15441[(13)]);
var inst_15385 = (state_15441[(14)]);
var inst_15382 = (state_15441[(15)]);
var inst_15384 = (state_15441[(16)]);
var inst_15390 = cljs.core._nth.call(null,inst_15383,inst_15385);
var inst_15391 = cljs.core.async.muxch_STAR_.call(null,inst_15390);
var inst_15392 = cljs.core.async.close_BANG_.call(null,inst_15391);
var inst_15393 = (inst_15385 + (1));
var tmp15471 = inst_15383;
var tmp15472 = inst_15382;
var tmp15473 = inst_15384;
var inst_15382__$1 = tmp15472;
var inst_15383__$1 = tmp15471;
var inst_15384__$1 = tmp15473;
var inst_15385__$1 = inst_15393;
var state_15441__$1 = (function (){var statearr_15477 = state_15441;
(statearr_15477[(17)] = inst_15392);

(statearr_15477[(13)] = inst_15383__$1);

(statearr_15477[(14)] = inst_15385__$1);

(statearr_15477[(15)] = inst_15382__$1);

(statearr_15477[(16)] = inst_15384__$1);

return statearr_15477;
})();
var statearr_15478_15518 = state_15441__$1;
(statearr_15478_15518[(2)] = null);

(statearr_15478_15518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (18))){
var inst_15411 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15479_15519 = state_15441__$1;
(statearr_15479_15519[(2)] = inst_15411);

(statearr_15479_15519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (8))){
var inst_15385 = (state_15441[(14)]);
var inst_15384 = (state_15441[(16)]);
var inst_15387 = (inst_15385 < inst_15384);
var inst_15388 = inst_15387;
var state_15441__$1 = state_15441;
if(cljs.core.truth_(inst_15388)){
var statearr_15480_15520 = state_15441__$1;
(statearr_15480_15520[(1)] = (10));

} else {
var statearr_15481_15521 = state_15441__$1;
(statearr_15481_15521[(1)] = (11));

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
});})(c__13594__auto___15493,mults,ensure_mult,p))
;
return ((function (switch__13482__auto__,c__13594__auto___15493,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_15485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15485[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_15485[(1)] = (1));

return statearr_15485;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_15441){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_15441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e15486){if((e15486 instanceof Object)){
var ex__13486__auto__ = e15486;
var statearr_15487_15522 = state_15441;
(statearr_15487_15522[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15523 = state_15441;
state_15441 = G__15523;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_15441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_15441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___15493,mults,ensure_mult,p))
})();
var state__13596__auto__ = (function (){var statearr_15488 = f__13595__auto__.call(null);
(statearr_15488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___15493);

return statearr_15488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___15493,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15524 = [];
var len__7266__auto___15527 = arguments.length;
var i__7267__auto___15528 = (0);
while(true){
if((i__7267__auto___15528 < len__7266__auto___15527)){
args15524.push((arguments[i__7267__auto___15528]));

var G__15529 = (i__7267__auto___15528 + (1));
i__7267__auto___15528 = G__15529;
continue;
} else {
}
break;
}

var G__15526 = args15524.length;
switch (G__15526) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15524.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15531 = [];
var len__7266__auto___15534 = arguments.length;
var i__7267__auto___15535 = (0);
while(true){
if((i__7267__auto___15535 < len__7266__auto___15534)){
args15531.push((arguments[i__7267__auto___15535]));

var G__15536 = (i__7267__auto___15535 + (1));
i__7267__auto___15535 = G__15536;
continue;
} else {
}
break;
}

var G__15533 = args15531.length;
switch (G__15533) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15531.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args15538 = [];
var len__7266__auto___15609 = arguments.length;
var i__7267__auto___15610 = (0);
while(true){
if((i__7267__auto___15610 < len__7266__auto___15609)){
args15538.push((arguments[i__7267__auto___15610]));

var G__15611 = (i__7267__auto___15610 + (1));
i__7267__auto___15610 = G__15611;
continue;
} else {
}
break;
}

var G__15540 = args15538.length;
switch (G__15540) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15538.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__13594__auto___15613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___15613,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___15613,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15579){
var state_val_15580 = (state_15579[(1)]);
if((state_val_15580 === (7))){
var state_15579__$1 = state_15579;
var statearr_15581_15614 = state_15579__$1;
(statearr_15581_15614[(2)] = null);

(statearr_15581_15614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (1))){
var state_15579__$1 = state_15579;
var statearr_15582_15615 = state_15579__$1;
(statearr_15582_15615[(2)] = null);

(statearr_15582_15615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (4))){
var inst_15543 = (state_15579[(7)]);
var inst_15545 = (inst_15543 < cnt);
var state_15579__$1 = state_15579;
if(cljs.core.truth_(inst_15545)){
var statearr_15583_15616 = state_15579__$1;
(statearr_15583_15616[(1)] = (6));

} else {
var statearr_15584_15617 = state_15579__$1;
(statearr_15584_15617[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (15))){
var inst_15575 = (state_15579[(2)]);
var state_15579__$1 = state_15579;
var statearr_15585_15618 = state_15579__$1;
(statearr_15585_15618[(2)] = inst_15575);

(statearr_15585_15618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (13))){
var inst_15568 = cljs.core.async.close_BANG_.call(null,out);
var state_15579__$1 = state_15579;
var statearr_15586_15619 = state_15579__$1;
(statearr_15586_15619[(2)] = inst_15568);

(statearr_15586_15619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (6))){
var state_15579__$1 = state_15579;
var statearr_15587_15620 = state_15579__$1;
(statearr_15587_15620[(2)] = null);

(statearr_15587_15620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (3))){
var inst_15577 = (state_15579[(2)]);
var state_15579__$1 = state_15579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15579__$1,inst_15577);
} else {
if((state_val_15580 === (12))){
var inst_15565 = (state_15579[(8)]);
var inst_15565__$1 = (state_15579[(2)]);
var inst_15566 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15565__$1);
var state_15579__$1 = (function (){var statearr_15588 = state_15579;
(statearr_15588[(8)] = inst_15565__$1);

return statearr_15588;
})();
if(cljs.core.truth_(inst_15566)){
var statearr_15589_15621 = state_15579__$1;
(statearr_15589_15621[(1)] = (13));

} else {
var statearr_15590_15622 = state_15579__$1;
(statearr_15590_15622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (2))){
var inst_15542 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15543 = (0);
var state_15579__$1 = (function (){var statearr_15591 = state_15579;
(statearr_15591[(9)] = inst_15542);

(statearr_15591[(7)] = inst_15543);

return statearr_15591;
})();
var statearr_15592_15623 = state_15579__$1;
(statearr_15592_15623[(2)] = null);

(statearr_15592_15623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (11))){
var inst_15543 = (state_15579[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15579,(10),Object,null,(9));
var inst_15552 = chs__$1.call(null,inst_15543);
var inst_15553 = done.call(null,inst_15543);
var inst_15554 = cljs.core.async.take_BANG_.call(null,inst_15552,inst_15553);
var state_15579__$1 = state_15579;
var statearr_15593_15624 = state_15579__$1;
(statearr_15593_15624[(2)] = inst_15554);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (9))){
var inst_15543 = (state_15579[(7)]);
var inst_15556 = (state_15579[(2)]);
var inst_15557 = (inst_15543 + (1));
var inst_15543__$1 = inst_15557;
var state_15579__$1 = (function (){var statearr_15594 = state_15579;
(statearr_15594[(10)] = inst_15556);

(statearr_15594[(7)] = inst_15543__$1);

return statearr_15594;
})();
var statearr_15595_15625 = state_15579__$1;
(statearr_15595_15625[(2)] = null);

(statearr_15595_15625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (5))){
var inst_15563 = (state_15579[(2)]);
var state_15579__$1 = (function (){var statearr_15596 = state_15579;
(statearr_15596[(11)] = inst_15563);

return statearr_15596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15579__$1,(12),dchan);
} else {
if((state_val_15580 === (14))){
var inst_15565 = (state_15579[(8)]);
var inst_15570 = cljs.core.apply.call(null,f,inst_15565);
var state_15579__$1 = state_15579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15579__$1,(16),out,inst_15570);
} else {
if((state_val_15580 === (16))){
var inst_15572 = (state_15579[(2)]);
var state_15579__$1 = (function (){var statearr_15597 = state_15579;
(statearr_15597[(12)] = inst_15572);

return statearr_15597;
})();
var statearr_15598_15626 = state_15579__$1;
(statearr_15598_15626[(2)] = null);

(statearr_15598_15626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (10))){
var inst_15547 = (state_15579[(2)]);
var inst_15548 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15579__$1 = (function (){var statearr_15599 = state_15579;
(statearr_15599[(13)] = inst_15547);

return statearr_15599;
})();
var statearr_15600_15627 = state_15579__$1;
(statearr_15600_15627[(2)] = inst_15548);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15580 === (8))){
var inst_15561 = (state_15579[(2)]);
var state_15579__$1 = state_15579;
var statearr_15601_15628 = state_15579__$1;
(statearr_15601_15628[(2)] = inst_15561);

(statearr_15601_15628[(1)] = (5));


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
});})(c__13594__auto___15613,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13482__auto__,c__13594__auto___15613,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_15605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15605[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_15605[(1)] = (1));

return statearr_15605;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_15579){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_15579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e15606){if((e15606 instanceof Object)){
var ex__13486__auto__ = e15606;
var statearr_15607_15629 = state_15579;
(statearr_15607_15629[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15630 = state_15579;
state_15579 = G__15630;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_15579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_15579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___15613,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13596__auto__ = (function (){var statearr_15608 = f__13595__auto__.call(null);
(statearr_15608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___15613);

return statearr_15608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___15613,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15632 = [];
var len__7266__auto___15688 = arguments.length;
var i__7267__auto___15689 = (0);
while(true){
if((i__7267__auto___15689 < len__7266__auto___15688)){
args15632.push((arguments[i__7267__auto___15689]));

var G__15690 = (i__7267__auto___15689 + (1));
i__7267__auto___15689 = G__15690;
continue;
} else {
}
break;
}

var G__15634 = args15632.length;
switch (G__15634) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15632.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13594__auto___15692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___15692,out){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___15692,out){
return (function (state_15664){
var state_val_15665 = (state_15664[(1)]);
if((state_val_15665 === (7))){
var inst_15644 = (state_15664[(7)]);
var inst_15643 = (state_15664[(8)]);
var inst_15643__$1 = (state_15664[(2)]);
var inst_15644__$1 = cljs.core.nth.call(null,inst_15643__$1,(0),null);
var inst_15645 = cljs.core.nth.call(null,inst_15643__$1,(1),null);
var inst_15646 = (inst_15644__$1 == null);
var state_15664__$1 = (function (){var statearr_15666 = state_15664;
(statearr_15666[(7)] = inst_15644__$1);

(statearr_15666[(9)] = inst_15645);

(statearr_15666[(8)] = inst_15643__$1);

return statearr_15666;
})();
if(cljs.core.truth_(inst_15646)){
var statearr_15667_15693 = state_15664__$1;
(statearr_15667_15693[(1)] = (8));

} else {
var statearr_15668_15694 = state_15664__$1;
(statearr_15668_15694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (1))){
var inst_15635 = cljs.core.vec.call(null,chs);
var inst_15636 = inst_15635;
var state_15664__$1 = (function (){var statearr_15669 = state_15664;
(statearr_15669[(10)] = inst_15636);

return statearr_15669;
})();
var statearr_15670_15695 = state_15664__$1;
(statearr_15670_15695[(2)] = null);

(statearr_15670_15695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (4))){
var inst_15636 = (state_15664[(10)]);
var state_15664__$1 = state_15664;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15664__$1,(7),inst_15636);
} else {
if((state_val_15665 === (6))){
var inst_15660 = (state_15664[(2)]);
var state_15664__$1 = state_15664;
var statearr_15671_15696 = state_15664__$1;
(statearr_15671_15696[(2)] = inst_15660);

(statearr_15671_15696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (3))){
var inst_15662 = (state_15664[(2)]);
var state_15664__$1 = state_15664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15664__$1,inst_15662);
} else {
if((state_val_15665 === (2))){
var inst_15636 = (state_15664[(10)]);
var inst_15638 = cljs.core.count.call(null,inst_15636);
var inst_15639 = (inst_15638 > (0));
var state_15664__$1 = state_15664;
if(cljs.core.truth_(inst_15639)){
var statearr_15673_15697 = state_15664__$1;
(statearr_15673_15697[(1)] = (4));

} else {
var statearr_15674_15698 = state_15664__$1;
(statearr_15674_15698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (11))){
var inst_15636 = (state_15664[(10)]);
var inst_15653 = (state_15664[(2)]);
var tmp15672 = inst_15636;
var inst_15636__$1 = tmp15672;
var state_15664__$1 = (function (){var statearr_15675 = state_15664;
(statearr_15675[(11)] = inst_15653);

(statearr_15675[(10)] = inst_15636__$1);

return statearr_15675;
})();
var statearr_15676_15699 = state_15664__$1;
(statearr_15676_15699[(2)] = null);

(statearr_15676_15699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (9))){
var inst_15644 = (state_15664[(7)]);
var state_15664__$1 = state_15664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15664__$1,(11),out,inst_15644);
} else {
if((state_val_15665 === (5))){
var inst_15658 = cljs.core.async.close_BANG_.call(null,out);
var state_15664__$1 = state_15664;
var statearr_15677_15700 = state_15664__$1;
(statearr_15677_15700[(2)] = inst_15658);

(statearr_15677_15700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (10))){
var inst_15656 = (state_15664[(2)]);
var state_15664__$1 = state_15664;
var statearr_15678_15701 = state_15664__$1;
(statearr_15678_15701[(2)] = inst_15656);

(statearr_15678_15701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (8))){
var inst_15644 = (state_15664[(7)]);
var inst_15645 = (state_15664[(9)]);
var inst_15643 = (state_15664[(8)]);
var inst_15636 = (state_15664[(10)]);
var inst_15648 = (function (){var cs = inst_15636;
var vec__15641 = inst_15643;
var v = inst_15644;
var c = inst_15645;
return ((function (cs,vec__15641,v,c,inst_15644,inst_15645,inst_15643,inst_15636,state_val_15665,c__13594__auto___15692,out){
return (function (p1__15631_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15631_SHARP_);
});
;})(cs,vec__15641,v,c,inst_15644,inst_15645,inst_15643,inst_15636,state_val_15665,c__13594__auto___15692,out))
})();
var inst_15649 = cljs.core.filterv.call(null,inst_15648,inst_15636);
var inst_15636__$1 = inst_15649;
var state_15664__$1 = (function (){var statearr_15679 = state_15664;
(statearr_15679[(10)] = inst_15636__$1);

return statearr_15679;
})();
var statearr_15680_15702 = state_15664__$1;
(statearr_15680_15702[(2)] = null);

(statearr_15680_15702[(1)] = (2));


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
});})(c__13594__auto___15692,out))
;
return ((function (switch__13482__auto__,c__13594__auto___15692,out){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_15684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15684[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_15684[(1)] = (1));

return statearr_15684;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_15664){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_15664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e15685){if((e15685 instanceof Object)){
var ex__13486__auto__ = e15685;
var statearr_15686_15703 = state_15664;
(statearr_15686_15703[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15704 = state_15664;
state_15664 = G__15704;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_15664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_15664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___15692,out))
})();
var state__13596__auto__ = (function (){var statearr_15687 = f__13595__auto__.call(null);
(statearr_15687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___15692);

return statearr_15687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___15692,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15705 = [];
var len__7266__auto___15754 = arguments.length;
var i__7267__auto___15755 = (0);
while(true){
if((i__7267__auto___15755 < len__7266__auto___15754)){
args15705.push((arguments[i__7267__auto___15755]));

var G__15756 = (i__7267__auto___15755 + (1));
i__7267__auto___15755 = G__15756;
continue;
} else {
}
break;
}

var G__15707 = args15705.length;
switch (G__15707) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15705.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13594__auto___15758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___15758,out){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___15758,out){
return (function (state_15731){
var state_val_15732 = (state_15731[(1)]);
if((state_val_15732 === (7))){
var inst_15713 = (state_15731[(7)]);
var inst_15713__$1 = (state_15731[(2)]);
var inst_15714 = (inst_15713__$1 == null);
var inst_15715 = cljs.core.not.call(null,inst_15714);
var state_15731__$1 = (function (){var statearr_15733 = state_15731;
(statearr_15733[(7)] = inst_15713__$1);

return statearr_15733;
})();
if(inst_15715){
var statearr_15734_15759 = state_15731__$1;
(statearr_15734_15759[(1)] = (8));

} else {
var statearr_15735_15760 = state_15731__$1;
(statearr_15735_15760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (1))){
var inst_15708 = (0);
var state_15731__$1 = (function (){var statearr_15736 = state_15731;
(statearr_15736[(8)] = inst_15708);

return statearr_15736;
})();
var statearr_15737_15761 = state_15731__$1;
(statearr_15737_15761[(2)] = null);

(statearr_15737_15761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (4))){
var state_15731__$1 = state_15731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15731__$1,(7),ch);
} else {
if((state_val_15732 === (6))){
var inst_15726 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
var statearr_15738_15762 = state_15731__$1;
(statearr_15738_15762[(2)] = inst_15726);

(statearr_15738_15762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (3))){
var inst_15728 = (state_15731[(2)]);
var inst_15729 = cljs.core.async.close_BANG_.call(null,out);
var state_15731__$1 = (function (){var statearr_15739 = state_15731;
(statearr_15739[(9)] = inst_15728);

return statearr_15739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15731__$1,inst_15729);
} else {
if((state_val_15732 === (2))){
var inst_15708 = (state_15731[(8)]);
var inst_15710 = (inst_15708 < n);
var state_15731__$1 = state_15731;
if(cljs.core.truth_(inst_15710)){
var statearr_15740_15763 = state_15731__$1;
(statearr_15740_15763[(1)] = (4));

} else {
var statearr_15741_15764 = state_15731__$1;
(statearr_15741_15764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (11))){
var inst_15708 = (state_15731[(8)]);
var inst_15718 = (state_15731[(2)]);
var inst_15719 = (inst_15708 + (1));
var inst_15708__$1 = inst_15719;
var state_15731__$1 = (function (){var statearr_15742 = state_15731;
(statearr_15742[(8)] = inst_15708__$1);

(statearr_15742[(10)] = inst_15718);

return statearr_15742;
})();
var statearr_15743_15765 = state_15731__$1;
(statearr_15743_15765[(2)] = null);

(statearr_15743_15765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (9))){
var state_15731__$1 = state_15731;
var statearr_15744_15766 = state_15731__$1;
(statearr_15744_15766[(2)] = null);

(statearr_15744_15766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (5))){
var state_15731__$1 = state_15731;
var statearr_15745_15767 = state_15731__$1;
(statearr_15745_15767[(2)] = null);

(statearr_15745_15767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (10))){
var inst_15723 = (state_15731[(2)]);
var state_15731__$1 = state_15731;
var statearr_15746_15768 = state_15731__$1;
(statearr_15746_15768[(2)] = inst_15723);

(statearr_15746_15768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (8))){
var inst_15713 = (state_15731[(7)]);
var state_15731__$1 = state_15731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15731__$1,(11),out,inst_15713);
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
});})(c__13594__auto___15758,out))
;
return ((function (switch__13482__auto__,c__13594__auto___15758,out){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_15750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15750[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_15750[(1)] = (1));

return statearr_15750;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_15731){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_15731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e15751){if((e15751 instanceof Object)){
var ex__13486__auto__ = e15751;
var statearr_15752_15769 = state_15731;
(statearr_15752_15769[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15770 = state_15731;
state_15731 = G__15770;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_15731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_15731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___15758,out))
})();
var state__13596__auto__ = (function (){var statearr_15753 = f__13595__auto__.call(null);
(statearr_15753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___15758);

return statearr_15753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___15758,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15778 = (function (map_LT_,f,ch,meta15779){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15779 = meta15779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15780,meta15779__$1){
var self__ = this;
var _15780__$1 = this;
return (new cljs.core.async.t_cljs$core$async15778(self__.map_LT_,self__.f,self__.ch,meta15779__$1));
});

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15780){
var self__ = this;
var _15780__$1 = this;
return self__.meta15779;
});

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15781 = (function (map_LT_,f,ch,meta15779,_,fn1,meta15782){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15779 = meta15779;
this._ = _;
this.fn1 = fn1;
this.meta15782 = meta15782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15783,meta15782__$1){
var self__ = this;
var _15783__$1 = this;
return (new cljs.core.async.t_cljs$core$async15781(self__.map_LT_,self__.f,self__.ch,self__.meta15779,self__._,self__.fn1,meta15782__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15783){
var self__ = this;
var _15783__$1 = this;
return self__.meta15782;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15771_SHARP_){
return f1.call(null,(((p1__15771_SHARP_ == null))?null:self__.f.call(null,p1__15771_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15781.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15779","meta15779",-1905634859,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15778","cljs.core.async/t_cljs$core$async15778",-1564367202,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15782","meta15782",84640461,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15781";

cljs.core.async.t_cljs$core$async15781.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async15781");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15781 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15781(map_LT___$1,f__$1,ch__$1,meta15779__$1,___$2,fn1__$1,meta15782){
return (new cljs.core.async.t_cljs$core$async15781(map_LT___$1,f__$1,ch__$1,meta15779__$1,___$2,fn1__$1,meta15782));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15781(self__.map_LT_,self__.f,self__.ch,self__.meta15779,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6184__auto__ = ret;
if(cljs.core.truth_(and__6184__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6184__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15779","meta15779",-1905634859,null)], null);
});

cljs.core.async.t_cljs$core$async15778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15778";

cljs.core.async.t_cljs$core$async15778.cljs$lang$ctorPrWriter = (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async15778");
});

cljs.core.async.__GT_t_cljs$core$async15778 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15778(map_LT___$1,f__$1,ch__$1,meta15779){
return (new cljs.core.async.t_cljs$core$async15778(map_LT___$1,f__$1,ch__$1,meta15779));
});

}

return (new cljs.core.async.t_cljs$core$async15778(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15787 = (function (map_GT_,f,ch,meta15788){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15788 = meta15788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15789,meta15788__$1){
var self__ = this;
var _15789__$1 = this;
return (new cljs.core.async.t_cljs$core$async15787(self__.map_GT_,self__.f,self__.ch,meta15788__$1));
});

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15789){
var self__ = this;
var _15789__$1 = this;
return self__.meta15788;
});

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15788","meta15788",-1760640880,null)], null);
});

cljs.core.async.t_cljs$core$async15787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15787";

cljs.core.async.t_cljs$core$async15787.cljs$lang$ctorPrWriter = (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async15787");
});

cljs.core.async.__GT_t_cljs$core$async15787 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15787(map_GT___$1,f__$1,ch__$1,meta15788){
return (new cljs.core.async.t_cljs$core$async15787(map_GT___$1,f__$1,ch__$1,meta15788));
});

}

return (new cljs.core.async.t_cljs$core$async15787(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15793 = (function (filter_GT_,p,ch,meta15794){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15794 = meta15794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15795,meta15794__$1){
var self__ = this;
var _15795__$1 = this;
return (new cljs.core.async.t_cljs$core$async15793(self__.filter_GT_,self__.p,self__.ch,meta15794__$1));
});

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15795){
var self__ = this;
var _15795__$1 = this;
return self__.meta15794;
});

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15794","meta15794",2126617283,null)], null);
});

cljs.core.async.t_cljs$core$async15793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15793";

cljs.core.async.t_cljs$core$async15793.cljs$lang$ctorPrWriter = (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"cljs.core.async/t_cljs$core$async15793");
});

cljs.core.async.__GT_t_cljs$core$async15793 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15793(filter_GT___$1,p__$1,ch__$1,meta15794){
return (new cljs.core.async.t_cljs$core$async15793(filter_GT___$1,p__$1,ch__$1,meta15794));
});

}

return (new cljs.core.async.t_cljs$core$async15793(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15796 = [];
var len__7266__auto___15840 = arguments.length;
var i__7267__auto___15841 = (0);
while(true){
if((i__7267__auto___15841 < len__7266__auto___15840)){
args15796.push((arguments[i__7267__auto___15841]));

var G__15842 = (i__7267__auto___15841 + (1));
i__7267__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var G__15798 = args15796.length;
switch (G__15798) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15796.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13594__auto___15844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___15844,out){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___15844,out){
return (function (state_15819){
var state_val_15820 = (state_15819[(1)]);
if((state_val_15820 === (7))){
var inst_15815 = (state_15819[(2)]);
var state_15819__$1 = state_15819;
var statearr_15821_15845 = state_15819__$1;
(statearr_15821_15845[(2)] = inst_15815);

(statearr_15821_15845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (1))){
var state_15819__$1 = state_15819;
var statearr_15822_15846 = state_15819__$1;
(statearr_15822_15846[(2)] = null);

(statearr_15822_15846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (4))){
var inst_15801 = (state_15819[(7)]);
var inst_15801__$1 = (state_15819[(2)]);
var inst_15802 = (inst_15801__$1 == null);
var state_15819__$1 = (function (){var statearr_15823 = state_15819;
(statearr_15823[(7)] = inst_15801__$1);

return statearr_15823;
})();
if(cljs.core.truth_(inst_15802)){
var statearr_15824_15847 = state_15819__$1;
(statearr_15824_15847[(1)] = (5));

} else {
var statearr_15825_15848 = state_15819__$1;
(statearr_15825_15848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (6))){
var inst_15801 = (state_15819[(7)]);
var inst_15806 = p.call(null,inst_15801);
var state_15819__$1 = state_15819;
if(cljs.core.truth_(inst_15806)){
var statearr_15826_15849 = state_15819__$1;
(statearr_15826_15849[(1)] = (8));

} else {
var statearr_15827_15850 = state_15819__$1;
(statearr_15827_15850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (3))){
var inst_15817 = (state_15819[(2)]);
var state_15819__$1 = state_15819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15819__$1,inst_15817);
} else {
if((state_val_15820 === (2))){
var state_15819__$1 = state_15819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15819__$1,(4),ch);
} else {
if((state_val_15820 === (11))){
var inst_15809 = (state_15819[(2)]);
var state_15819__$1 = state_15819;
var statearr_15828_15851 = state_15819__$1;
(statearr_15828_15851[(2)] = inst_15809);

(statearr_15828_15851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (9))){
var state_15819__$1 = state_15819;
var statearr_15829_15852 = state_15819__$1;
(statearr_15829_15852[(2)] = null);

(statearr_15829_15852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (5))){
var inst_15804 = cljs.core.async.close_BANG_.call(null,out);
var state_15819__$1 = state_15819;
var statearr_15830_15853 = state_15819__$1;
(statearr_15830_15853[(2)] = inst_15804);

(statearr_15830_15853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (10))){
var inst_15812 = (state_15819[(2)]);
var state_15819__$1 = (function (){var statearr_15831 = state_15819;
(statearr_15831[(8)] = inst_15812);

return statearr_15831;
})();
var statearr_15832_15854 = state_15819__$1;
(statearr_15832_15854[(2)] = null);

(statearr_15832_15854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15820 === (8))){
var inst_15801 = (state_15819[(7)]);
var state_15819__$1 = state_15819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15819__$1,(11),out,inst_15801);
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
});})(c__13594__auto___15844,out))
;
return ((function (switch__13482__auto__,c__13594__auto___15844,out){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_15836 = [null,null,null,null,null,null,null,null,null];
(statearr_15836[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_15836[(1)] = (1));

return statearr_15836;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_15819){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_15819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e15837){if((e15837 instanceof Object)){
var ex__13486__auto__ = e15837;
var statearr_15838_15855 = state_15819;
(statearr_15838_15855[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15856 = state_15819;
state_15819 = G__15856;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_15819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_15819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___15844,out))
})();
var state__13596__auto__ = (function (){var statearr_15839 = f__13595__auto__.call(null);
(statearr_15839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___15844);

return statearr_15839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___15844,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15857 = [];
var len__7266__auto___15860 = arguments.length;
var i__7267__auto___15861 = (0);
while(true){
if((i__7267__auto___15861 < len__7266__auto___15860)){
args15857.push((arguments[i__7267__auto___15861]));

var G__15862 = (i__7267__auto___15861 + (1));
i__7267__auto___15861 = G__15862;
continue;
} else {
}
break;
}

var G__15859 = args15857.length;
switch (G__15859) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15857.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13594__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto__){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto__){
return (function (state_16029){
var state_val_16030 = (state_16029[(1)]);
if((state_val_16030 === (7))){
var inst_16025 = (state_16029[(2)]);
var state_16029__$1 = state_16029;
var statearr_16031_16072 = state_16029__$1;
(statearr_16031_16072[(2)] = inst_16025);

(statearr_16031_16072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (20))){
var inst_15995 = (state_16029[(7)]);
var inst_16006 = (state_16029[(2)]);
var inst_16007 = cljs.core.next.call(null,inst_15995);
var inst_15981 = inst_16007;
var inst_15982 = null;
var inst_15983 = (0);
var inst_15984 = (0);
var state_16029__$1 = (function (){var statearr_16032 = state_16029;
(statearr_16032[(8)] = inst_15984);

(statearr_16032[(9)] = inst_15983);

(statearr_16032[(10)] = inst_15981);

(statearr_16032[(11)] = inst_16006);

(statearr_16032[(12)] = inst_15982);

return statearr_16032;
})();
var statearr_16033_16073 = state_16029__$1;
(statearr_16033_16073[(2)] = null);

(statearr_16033_16073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (1))){
var state_16029__$1 = state_16029;
var statearr_16034_16074 = state_16029__$1;
(statearr_16034_16074[(2)] = null);

(statearr_16034_16074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (4))){
var inst_15970 = (state_16029[(13)]);
var inst_15970__$1 = (state_16029[(2)]);
var inst_15971 = (inst_15970__$1 == null);
var state_16029__$1 = (function (){var statearr_16035 = state_16029;
(statearr_16035[(13)] = inst_15970__$1);

return statearr_16035;
})();
if(cljs.core.truth_(inst_15971)){
var statearr_16036_16075 = state_16029__$1;
(statearr_16036_16075[(1)] = (5));

} else {
var statearr_16037_16076 = state_16029__$1;
(statearr_16037_16076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (15))){
var state_16029__$1 = state_16029;
var statearr_16041_16077 = state_16029__$1;
(statearr_16041_16077[(2)] = null);

(statearr_16041_16077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (21))){
var state_16029__$1 = state_16029;
var statearr_16042_16078 = state_16029__$1;
(statearr_16042_16078[(2)] = null);

(statearr_16042_16078[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (13))){
var inst_15984 = (state_16029[(8)]);
var inst_15983 = (state_16029[(9)]);
var inst_15981 = (state_16029[(10)]);
var inst_15982 = (state_16029[(12)]);
var inst_15991 = (state_16029[(2)]);
var inst_15992 = (inst_15984 + (1));
var tmp16038 = inst_15983;
var tmp16039 = inst_15981;
var tmp16040 = inst_15982;
var inst_15981__$1 = tmp16039;
var inst_15982__$1 = tmp16040;
var inst_15983__$1 = tmp16038;
var inst_15984__$1 = inst_15992;
var state_16029__$1 = (function (){var statearr_16043 = state_16029;
(statearr_16043[(14)] = inst_15991);

(statearr_16043[(8)] = inst_15984__$1);

(statearr_16043[(9)] = inst_15983__$1);

(statearr_16043[(10)] = inst_15981__$1);

(statearr_16043[(12)] = inst_15982__$1);

return statearr_16043;
})();
var statearr_16044_16079 = state_16029__$1;
(statearr_16044_16079[(2)] = null);

(statearr_16044_16079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (22))){
var state_16029__$1 = state_16029;
var statearr_16045_16080 = state_16029__$1;
(statearr_16045_16080[(2)] = null);

(statearr_16045_16080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (6))){
var inst_15970 = (state_16029[(13)]);
var inst_15979 = f.call(null,inst_15970);
var inst_15980 = cljs.core.seq.call(null,inst_15979);
var inst_15981 = inst_15980;
var inst_15982 = null;
var inst_15983 = (0);
var inst_15984 = (0);
var state_16029__$1 = (function (){var statearr_16046 = state_16029;
(statearr_16046[(8)] = inst_15984);

(statearr_16046[(9)] = inst_15983);

(statearr_16046[(10)] = inst_15981);

(statearr_16046[(12)] = inst_15982);

return statearr_16046;
})();
var statearr_16047_16081 = state_16029__$1;
(statearr_16047_16081[(2)] = null);

(statearr_16047_16081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (17))){
var inst_15995 = (state_16029[(7)]);
var inst_15999 = cljs.core.chunk_first.call(null,inst_15995);
var inst_16000 = cljs.core.chunk_rest.call(null,inst_15995);
var inst_16001 = cljs.core.count.call(null,inst_15999);
var inst_15981 = inst_16000;
var inst_15982 = inst_15999;
var inst_15983 = inst_16001;
var inst_15984 = (0);
var state_16029__$1 = (function (){var statearr_16048 = state_16029;
(statearr_16048[(8)] = inst_15984);

(statearr_16048[(9)] = inst_15983);

(statearr_16048[(10)] = inst_15981);

(statearr_16048[(12)] = inst_15982);

return statearr_16048;
})();
var statearr_16049_16082 = state_16029__$1;
(statearr_16049_16082[(2)] = null);

(statearr_16049_16082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (3))){
var inst_16027 = (state_16029[(2)]);
var state_16029__$1 = state_16029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16029__$1,inst_16027);
} else {
if((state_val_16030 === (12))){
var inst_16015 = (state_16029[(2)]);
var state_16029__$1 = state_16029;
var statearr_16050_16083 = state_16029__$1;
(statearr_16050_16083[(2)] = inst_16015);

(statearr_16050_16083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (2))){
var state_16029__$1 = state_16029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16029__$1,(4),in$);
} else {
if((state_val_16030 === (23))){
var inst_16023 = (state_16029[(2)]);
var state_16029__$1 = state_16029;
var statearr_16051_16084 = state_16029__$1;
(statearr_16051_16084[(2)] = inst_16023);

(statearr_16051_16084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (19))){
var inst_16010 = (state_16029[(2)]);
var state_16029__$1 = state_16029;
var statearr_16052_16085 = state_16029__$1;
(statearr_16052_16085[(2)] = inst_16010);

(statearr_16052_16085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (11))){
var inst_15981 = (state_16029[(10)]);
var inst_15995 = (state_16029[(7)]);
var inst_15995__$1 = cljs.core.seq.call(null,inst_15981);
var state_16029__$1 = (function (){var statearr_16053 = state_16029;
(statearr_16053[(7)] = inst_15995__$1);

return statearr_16053;
})();
if(inst_15995__$1){
var statearr_16054_16086 = state_16029__$1;
(statearr_16054_16086[(1)] = (14));

} else {
var statearr_16055_16087 = state_16029__$1;
(statearr_16055_16087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (9))){
var inst_16017 = (state_16029[(2)]);
var inst_16018 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16029__$1 = (function (){var statearr_16056 = state_16029;
(statearr_16056[(15)] = inst_16017);

return statearr_16056;
})();
if(cljs.core.truth_(inst_16018)){
var statearr_16057_16088 = state_16029__$1;
(statearr_16057_16088[(1)] = (21));

} else {
var statearr_16058_16089 = state_16029__$1;
(statearr_16058_16089[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (5))){
var inst_15973 = cljs.core.async.close_BANG_.call(null,out);
var state_16029__$1 = state_16029;
var statearr_16059_16090 = state_16029__$1;
(statearr_16059_16090[(2)] = inst_15973);

(statearr_16059_16090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (14))){
var inst_15995 = (state_16029[(7)]);
var inst_15997 = cljs.core.chunked_seq_QMARK_.call(null,inst_15995);
var state_16029__$1 = state_16029;
if(inst_15997){
var statearr_16060_16091 = state_16029__$1;
(statearr_16060_16091[(1)] = (17));

} else {
var statearr_16061_16092 = state_16029__$1;
(statearr_16061_16092[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (16))){
var inst_16013 = (state_16029[(2)]);
var state_16029__$1 = state_16029;
var statearr_16062_16093 = state_16029__$1;
(statearr_16062_16093[(2)] = inst_16013);

(statearr_16062_16093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16030 === (10))){
var inst_15984 = (state_16029[(8)]);
var inst_15982 = (state_16029[(12)]);
var inst_15989 = cljs.core._nth.call(null,inst_15982,inst_15984);
var state_16029__$1 = state_16029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16029__$1,(13),out,inst_15989);
} else {
if((state_val_16030 === (18))){
var inst_15995 = (state_16029[(7)]);
var inst_16004 = cljs.core.first.call(null,inst_15995);
var state_16029__$1 = state_16029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16029__$1,(20),out,inst_16004);
} else {
if((state_val_16030 === (8))){
var inst_15984 = (state_16029[(8)]);
var inst_15983 = (state_16029[(9)]);
var inst_15986 = (inst_15984 < inst_15983);
var inst_15987 = inst_15986;
var state_16029__$1 = state_16029;
if(cljs.core.truth_(inst_15987)){
var statearr_16063_16094 = state_16029__$1;
(statearr_16063_16094[(1)] = (10));

} else {
var statearr_16064_16095 = state_16029__$1;
(statearr_16064_16095[(1)] = (11));

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
});})(c__13594__auto__))
;
return ((function (switch__13482__auto__,c__13594__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13483__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13483__auto____0 = (function (){
var statearr_16068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16068[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13483__auto__);

(statearr_16068[(1)] = (1));

return statearr_16068;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13483__auto____1 = (function (state_16029){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_16029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e16069){if((e16069 instanceof Object)){
var ex__13486__auto__ = e16069;
var statearr_16070_16096 = state_16029;
(statearr_16070_16096[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16097 = state_16029;
state_16029 = G__16097;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13483__auto__ = function(state_16029){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13483__auto____1.call(this,state_16029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13483__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13483__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto__))
})();
var state__13596__auto__ = (function (){var statearr_16071 = f__13595__auto__.call(null);
(statearr_16071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto__);

return statearr_16071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto__))
);

return c__13594__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16098 = [];
var len__7266__auto___16101 = arguments.length;
var i__7267__auto___16102 = (0);
while(true){
if((i__7267__auto___16102 < len__7266__auto___16101)){
args16098.push((arguments[i__7267__auto___16102]));

var G__16103 = (i__7267__auto___16102 + (1));
i__7267__auto___16102 = G__16103;
continue;
} else {
}
break;
}

var G__16100 = args16098.length;
switch (G__16100) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16098.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16105 = [];
var len__7266__auto___16108 = arguments.length;
var i__7267__auto___16109 = (0);
while(true){
if((i__7267__auto___16109 < len__7266__auto___16108)){
args16105.push((arguments[i__7267__auto___16109]));

var G__16110 = (i__7267__auto___16109 + (1));
i__7267__auto___16109 = G__16110;
continue;
} else {
}
break;
}

var G__16107 = args16105.length;
switch (G__16107) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16105.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16112 = [];
var len__7266__auto___16163 = arguments.length;
var i__7267__auto___16164 = (0);
while(true){
if((i__7267__auto___16164 < len__7266__auto___16163)){
args16112.push((arguments[i__7267__auto___16164]));

var G__16165 = (i__7267__auto___16164 + (1));
i__7267__auto___16164 = G__16165;
continue;
} else {
}
break;
}

var G__16114 = args16112.length;
switch (G__16114) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16112.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13594__auto___16167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___16167,out){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___16167,out){
return (function (state_16138){
var state_val_16139 = (state_16138[(1)]);
if((state_val_16139 === (7))){
var inst_16133 = (state_16138[(2)]);
var state_16138__$1 = state_16138;
var statearr_16140_16168 = state_16138__$1;
(statearr_16140_16168[(2)] = inst_16133);

(statearr_16140_16168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (1))){
var inst_16115 = null;
var state_16138__$1 = (function (){var statearr_16141 = state_16138;
(statearr_16141[(7)] = inst_16115);

return statearr_16141;
})();
var statearr_16142_16169 = state_16138__$1;
(statearr_16142_16169[(2)] = null);

(statearr_16142_16169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (4))){
var inst_16118 = (state_16138[(8)]);
var inst_16118__$1 = (state_16138[(2)]);
var inst_16119 = (inst_16118__$1 == null);
var inst_16120 = cljs.core.not.call(null,inst_16119);
var state_16138__$1 = (function (){var statearr_16143 = state_16138;
(statearr_16143[(8)] = inst_16118__$1);

return statearr_16143;
})();
if(inst_16120){
var statearr_16144_16170 = state_16138__$1;
(statearr_16144_16170[(1)] = (5));

} else {
var statearr_16145_16171 = state_16138__$1;
(statearr_16145_16171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (6))){
var state_16138__$1 = state_16138;
var statearr_16146_16172 = state_16138__$1;
(statearr_16146_16172[(2)] = null);

(statearr_16146_16172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (3))){
var inst_16135 = (state_16138[(2)]);
var inst_16136 = cljs.core.async.close_BANG_.call(null,out);
var state_16138__$1 = (function (){var statearr_16147 = state_16138;
(statearr_16147[(9)] = inst_16135);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16138__$1,inst_16136);
} else {
if((state_val_16139 === (2))){
var state_16138__$1 = state_16138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16138__$1,(4),ch);
} else {
if((state_val_16139 === (11))){
var inst_16118 = (state_16138[(8)]);
var inst_16127 = (state_16138[(2)]);
var inst_16115 = inst_16118;
var state_16138__$1 = (function (){var statearr_16148 = state_16138;
(statearr_16148[(7)] = inst_16115);

(statearr_16148[(10)] = inst_16127);

return statearr_16148;
})();
var statearr_16149_16173 = state_16138__$1;
(statearr_16149_16173[(2)] = null);

(statearr_16149_16173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (9))){
var inst_16118 = (state_16138[(8)]);
var state_16138__$1 = state_16138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16138__$1,(11),out,inst_16118);
} else {
if((state_val_16139 === (5))){
var inst_16118 = (state_16138[(8)]);
var inst_16115 = (state_16138[(7)]);
var inst_16122 = cljs.core._EQ_.call(null,inst_16118,inst_16115);
var state_16138__$1 = state_16138;
if(inst_16122){
var statearr_16151_16174 = state_16138__$1;
(statearr_16151_16174[(1)] = (8));

} else {
var statearr_16152_16175 = state_16138__$1;
(statearr_16152_16175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (10))){
var inst_16130 = (state_16138[(2)]);
var state_16138__$1 = state_16138;
var statearr_16153_16176 = state_16138__$1;
(statearr_16153_16176[(2)] = inst_16130);

(statearr_16153_16176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (8))){
var inst_16115 = (state_16138[(7)]);
var tmp16150 = inst_16115;
var inst_16115__$1 = tmp16150;
var state_16138__$1 = (function (){var statearr_16154 = state_16138;
(statearr_16154[(7)] = inst_16115__$1);

return statearr_16154;
})();
var statearr_16155_16177 = state_16138__$1;
(statearr_16155_16177[(2)] = null);

(statearr_16155_16177[(1)] = (2));


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
});})(c__13594__auto___16167,out))
;
return ((function (switch__13482__auto__,c__13594__auto___16167,out){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_16159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16159[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_16159[(1)] = (1));

return statearr_16159;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_16138){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_16138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e16160){if((e16160 instanceof Object)){
var ex__13486__auto__ = e16160;
var statearr_16161_16178 = state_16138;
(statearr_16161_16178[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16179 = state_16138;
state_16138 = G__16179;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_16138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_16138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___16167,out))
})();
var state__13596__auto__ = (function (){var statearr_16162 = f__13595__auto__.call(null);
(statearr_16162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___16167);

return statearr_16162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___16167,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16180 = [];
var len__7266__auto___16250 = arguments.length;
var i__7267__auto___16251 = (0);
while(true){
if((i__7267__auto___16251 < len__7266__auto___16250)){
args16180.push((arguments[i__7267__auto___16251]));

var G__16252 = (i__7267__auto___16251 + (1));
i__7267__auto___16251 = G__16252;
continue;
} else {
}
break;
}

var G__16182 = args16180.length;
switch (G__16182) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16180.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13594__auto___16254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___16254,out){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___16254,out){
return (function (state_16220){
var state_val_16221 = (state_16220[(1)]);
if((state_val_16221 === (7))){
var inst_16216 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
var statearr_16222_16255 = state_16220__$1;
(statearr_16222_16255[(2)] = inst_16216);

(statearr_16222_16255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (1))){
var inst_16183 = (new Array(n));
var inst_16184 = inst_16183;
var inst_16185 = (0);
var state_16220__$1 = (function (){var statearr_16223 = state_16220;
(statearr_16223[(7)] = inst_16184);

(statearr_16223[(8)] = inst_16185);

return statearr_16223;
})();
var statearr_16224_16256 = state_16220__$1;
(statearr_16224_16256[(2)] = null);

(statearr_16224_16256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (4))){
var inst_16188 = (state_16220[(9)]);
var inst_16188__$1 = (state_16220[(2)]);
var inst_16189 = (inst_16188__$1 == null);
var inst_16190 = cljs.core.not.call(null,inst_16189);
var state_16220__$1 = (function (){var statearr_16225 = state_16220;
(statearr_16225[(9)] = inst_16188__$1);

return statearr_16225;
})();
if(inst_16190){
var statearr_16226_16257 = state_16220__$1;
(statearr_16226_16257[(1)] = (5));

} else {
var statearr_16227_16258 = state_16220__$1;
(statearr_16227_16258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (15))){
var inst_16210 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
var statearr_16228_16259 = state_16220__$1;
(statearr_16228_16259[(2)] = inst_16210);

(statearr_16228_16259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (13))){
var state_16220__$1 = state_16220;
var statearr_16229_16260 = state_16220__$1;
(statearr_16229_16260[(2)] = null);

(statearr_16229_16260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (6))){
var inst_16185 = (state_16220[(8)]);
var inst_16206 = (inst_16185 > (0));
var state_16220__$1 = state_16220;
if(cljs.core.truth_(inst_16206)){
var statearr_16230_16261 = state_16220__$1;
(statearr_16230_16261[(1)] = (12));

} else {
var statearr_16231_16262 = state_16220__$1;
(statearr_16231_16262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (3))){
var inst_16218 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16220__$1,inst_16218);
} else {
if((state_val_16221 === (12))){
var inst_16184 = (state_16220[(7)]);
var inst_16208 = cljs.core.vec.call(null,inst_16184);
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16220__$1,(15),out,inst_16208);
} else {
if((state_val_16221 === (2))){
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16220__$1,(4),ch);
} else {
if((state_val_16221 === (11))){
var inst_16200 = (state_16220[(2)]);
var inst_16201 = (new Array(n));
var inst_16184 = inst_16201;
var inst_16185 = (0);
var state_16220__$1 = (function (){var statearr_16232 = state_16220;
(statearr_16232[(10)] = inst_16200);

(statearr_16232[(7)] = inst_16184);

(statearr_16232[(8)] = inst_16185);

return statearr_16232;
})();
var statearr_16233_16263 = state_16220__$1;
(statearr_16233_16263[(2)] = null);

(statearr_16233_16263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (9))){
var inst_16184 = (state_16220[(7)]);
var inst_16198 = cljs.core.vec.call(null,inst_16184);
var state_16220__$1 = state_16220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16220__$1,(11),out,inst_16198);
} else {
if((state_val_16221 === (5))){
var inst_16193 = (state_16220[(11)]);
var inst_16188 = (state_16220[(9)]);
var inst_16184 = (state_16220[(7)]);
var inst_16185 = (state_16220[(8)]);
var inst_16192 = (inst_16184[inst_16185] = inst_16188);
var inst_16193__$1 = (inst_16185 + (1));
var inst_16194 = (inst_16193__$1 < n);
var state_16220__$1 = (function (){var statearr_16234 = state_16220;
(statearr_16234[(11)] = inst_16193__$1);

(statearr_16234[(12)] = inst_16192);

return statearr_16234;
})();
if(cljs.core.truth_(inst_16194)){
var statearr_16235_16264 = state_16220__$1;
(statearr_16235_16264[(1)] = (8));

} else {
var statearr_16236_16265 = state_16220__$1;
(statearr_16236_16265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (14))){
var inst_16213 = (state_16220[(2)]);
var inst_16214 = cljs.core.async.close_BANG_.call(null,out);
var state_16220__$1 = (function (){var statearr_16238 = state_16220;
(statearr_16238[(13)] = inst_16213);

return statearr_16238;
})();
var statearr_16239_16266 = state_16220__$1;
(statearr_16239_16266[(2)] = inst_16214);

(statearr_16239_16266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (10))){
var inst_16204 = (state_16220[(2)]);
var state_16220__$1 = state_16220;
var statearr_16240_16267 = state_16220__$1;
(statearr_16240_16267[(2)] = inst_16204);

(statearr_16240_16267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16221 === (8))){
var inst_16193 = (state_16220[(11)]);
var inst_16184 = (state_16220[(7)]);
var tmp16237 = inst_16184;
var inst_16184__$1 = tmp16237;
var inst_16185 = inst_16193;
var state_16220__$1 = (function (){var statearr_16241 = state_16220;
(statearr_16241[(7)] = inst_16184__$1);

(statearr_16241[(8)] = inst_16185);

return statearr_16241;
})();
var statearr_16242_16268 = state_16220__$1;
(statearr_16242_16268[(2)] = null);

(statearr_16242_16268[(1)] = (2));


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
});})(c__13594__auto___16254,out))
;
return ((function (switch__13482__auto__,c__13594__auto___16254,out){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_16246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16246[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_16246[(1)] = (1));

return statearr_16246;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_16220){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_16220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e16247){if((e16247 instanceof Object)){
var ex__13486__auto__ = e16247;
var statearr_16248_16269 = state_16220;
(statearr_16248_16269[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16270 = state_16220;
state_16220 = G__16270;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_16220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_16220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___16254,out))
})();
var state__13596__auto__ = (function (){var statearr_16249 = f__13595__auto__.call(null);
(statearr_16249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___16254);

return statearr_16249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___16254,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16271 = [];
var len__7266__auto___16345 = arguments.length;
var i__7267__auto___16346 = (0);
while(true){
if((i__7267__auto___16346 < len__7266__auto___16345)){
args16271.push((arguments[i__7267__auto___16346]));

var G__16347 = (i__7267__auto___16346 + (1));
i__7267__auto___16346 = G__16347;
continue;
} else {
}
break;
}

var G__16273 = args16271.length;
switch (G__16273) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16271.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13594__auto___16349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___16349,out){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___16349,out){
return (function (state_16315){
var state_val_16316 = (state_16315[(1)]);
if((state_val_16316 === (7))){
var inst_16311 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16317_16350 = state_16315__$1;
(statearr_16317_16350[(2)] = inst_16311);

(statearr_16317_16350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (1))){
var inst_16274 = [];
var inst_16275 = inst_16274;
var inst_16276 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16315__$1 = (function (){var statearr_16318 = state_16315;
(statearr_16318[(7)] = inst_16276);

(statearr_16318[(8)] = inst_16275);

return statearr_16318;
})();
var statearr_16319_16351 = state_16315__$1;
(statearr_16319_16351[(2)] = null);

(statearr_16319_16351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (4))){
var inst_16279 = (state_16315[(9)]);
var inst_16279__$1 = (state_16315[(2)]);
var inst_16280 = (inst_16279__$1 == null);
var inst_16281 = cljs.core.not.call(null,inst_16280);
var state_16315__$1 = (function (){var statearr_16320 = state_16315;
(statearr_16320[(9)] = inst_16279__$1);

return statearr_16320;
})();
if(inst_16281){
var statearr_16321_16352 = state_16315__$1;
(statearr_16321_16352[(1)] = (5));

} else {
var statearr_16322_16353 = state_16315__$1;
(statearr_16322_16353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (15))){
var inst_16305 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16323_16354 = state_16315__$1;
(statearr_16323_16354[(2)] = inst_16305);

(statearr_16323_16354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (13))){
var state_16315__$1 = state_16315;
var statearr_16324_16355 = state_16315__$1;
(statearr_16324_16355[(2)] = null);

(statearr_16324_16355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (6))){
var inst_16275 = (state_16315[(8)]);
var inst_16300 = inst_16275.length;
var inst_16301 = (inst_16300 > (0));
var state_16315__$1 = state_16315;
if(cljs.core.truth_(inst_16301)){
var statearr_16325_16356 = state_16315__$1;
(statearr_16325_16356[(1)] = (12));

} else {
var statearr_16326_16357 = state_16315__$1;
(statearr_16326_16357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (3))){
var inst_16313 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16315__$1,inst_16313);
} else {
if((state_val_16316 === (12))){
var inst_16275 = (state_16315[(8)]);
var inst_16303 = cljs.core.vec.call(null,inst_16275);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16315__$1,(15),out,inst_16303);
} else {
if((state_val_16316 === (2))){
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16315__$1,(4),ch);
} else {
if((state_val_16316 === (11))){
var inst_16283 = (state_16315[(10)]);
var inst_16279 = (state_16315[(9)]);
var inst_16293 = (state_16315[(2)]);
var inst_16294 = [];
var inst_16295 = inst_16294.push(inst_16279);
var inst_16275 = inst_16294;
var inst_16276 = inst_16283;
var state_16315__$1 = (function (){var statearr_16327 = state_16315;
(statearr_16327[(7)] = inst_16276);

(statearr_16327[(8)] = inst_16275);

(statearr_16327[(11)] = inst_16293);

(statearr_16327[(12)] = inst_16295);

return statearr_16327;
})();
var statearr_16328_16358 = state_16315__$1;
(statearr_16328_16358[(2)] = null);

(statearr_16328_16358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (9))){
var inst_16275 = (state_16315[(8)]);
var inst_16291 = cljs.core.vec.call(null,inst_16275);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16315__$1,(11),out,inst_16291);
} else {
if((state_val_16316 === (5))){
var inst_16283 = (state_16315[(10)]);
var inst_16279 = (state_16315[(9)]);
var inst_16276 = (state_16315[(7)]);
var inst_16283__$1 = f.call(null,inst_16279);
var inst_16284 = cljs.core._EQ_.call(null,inst_16283__$1,inst_16276);
var inst_16285 = cljs.core.keyword_identical_QMARK_.call(null,inst_16276,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16286 = (inst_16284) || (inst_16285);
var state_16315__$1 = (function (){var statearr_16329 = state_16315;
(statearr_16329[(10)] = inst_16283__$1);

return statearr_16329;
})();
if(cljs.core.truth_(inst_16286)){
var statearr_16330_16359 = state_16315__$1;
(statearr_16330_16359[(1)] = (8));

} else {
var statearr_16331_16360 = state_16315__$1;
(statearr_16331_16360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (14))){
var inst_16308 = (state_16315[(2)]);
var inst_16309 = cljs.core.async.close_BANG_.call(null,out);
var state_16315__$1 = (function (){var statearr_16333 = state_16315;
(statearr_16333[(13)] = inst_16308);

return statearr_16333;
})();
var statearr_16334_16361 = state_16315__$1;
(statearr_16334_16361[(2)] = inst_16309);

(statearr_16334_16361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (10))){
var inst_16298 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16335_16362 = state_16315__$1;
(statearr_16335_16362[(2)] = inst_16298);

(statearr_16335_16362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (8))){
var inst_16283 = (state_16315[(10)]);
var inst_16279 = (state_16315[(9)]);
var inst_16275 = (state_16315[(8)]);
var inst_16288 = inst_16275.push(inst_16279);
var tmp16332 = inst_16275;
var inst_16275__$1 = tmp16332;
var inst_16276 = inst_16283;
var state_16315__$1 = (function (){var statearr_16336 = state_16315;
(statearr_16336[(14)] = inst_16288);

(statearr_16336[(7)] = inst_16276);

(statearr_16336[(8)] = inst_16275__$1);

return statearr_16336;
})();
var statearr_16337_16363 = state_16315__$1;
(statearr_16337_16363[(2)] = null);

(statearr_16337_16363[(1)] = (2));


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
});})(c__13594__auto___16349,out))
;
return ((function (switch__13482__auto__,c__13594__auto___16349,out){
return (function() {
var cljs$core$async$state_machine__13483__auto__ = null;
var cljs$core$async$state_machine__13483__auto____0 = (function (){
var statearr_16341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16341[(0)] = cljs$core$async$state_machine__13483__auto__);

(statearr_16341[(1)] = (1));

return statearr_16341;
});
var cljs$core$async$state_machine__13483__auto____1 = (function (state_16315){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_16315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e16342){if((e16342 instanceof Object)){
var ex__13486__auto__ = e16342;
var statearr_16343_16364 = state_16315;
(statearr_16343_16364[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16365 = state_16315;
state_16315 = G__16365;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs$core$async$state_machine__13483__auto__ = function(state_16315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13483__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13483__auto____1.call(this,state_16315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13483__auto____0;
cljs$core$async$state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13483__auto____1;
return cljs$core$async$state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___16349,out))
})();
var state__13596__auto__ = (function (){var statearr_16344 = f__13595__auto__.call(null);
(statearr_16344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___16349);

return statearr_16344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___16349,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
