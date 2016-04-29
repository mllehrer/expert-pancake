// Compiled by ClojureScript 1.8.51 {}
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('enfocus.core');
goog.require('goog.object');

enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
 * needed to support window :resize
 */
enfocus.events.get_vp_monitor = (function enfocus$events$get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor))){
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else {
cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function enfocus$events$gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = enfocus.events.mouse_enter_leave.call(null,func);
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else {
return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var seq__18460_18464 = cljs.core.seq.call(null,listeners);
var chunk__18461_18465 = null;
var count__18462_18466 = (0);
var i__18463_18467 = (0);
while(true){
if((i__18463_18467 < count__18462_18466)){
var obj_18468__$1 = cljs.core._nth.call(null,chunk__18461_18465,i__18463_18467);
var listener_18469 = obj_18468__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_18469.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_18469.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_18469);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_18469);
}
} else {
}

var G__18470 = seq__18460_18464;
var G__18471 = chunk__18461_18465;
var G__18472 = count__18462_18466;
var G__18473 = (i__18463_18467 + (1));
seq__18460_18464 = G__18470;
chunk__18461_18465 = G__18471;
count__18462_18466 = G__18472;
i__18463_18467 = G__18473;
continue;
} else {
var temp__4425__auto___18474 = cljs.core.seq.call(null,seq__18460_18464);
if(temp__4425__auto___18474){
var seq__18460_18475__$1 = temp__4425__auto___18474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18460_18475__$1)){
var c__7007__auto___18476 = cljs.core.chunk_first.call(null,seq__18460_18475__$1);
var G__18477 = cljs.core.chunk_rest.call(null,seq__18460_18475__$1);
var G__18478 = c__7007__auto___18476;
var G__18479 = cljs.core.count.call(null,c__7007__auto___18476);
var G__18480 = (0);
seq__18460_18464 = G__18477;
chunk__18461_18465 = G__18478;
count__18462_18466 = G__18479;
i__18463_18467 = G__18480;
continue;
} else {
var obj_18481__$1 = cljs.core.first.call(null,seq__18460_18475__$1);
var listener_18482 = obj_18481__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_18482.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_18482.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_18482);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_18482);
}
} else {
}

var G__18483 = cljs.core.next.call(null,seq__18460_18475__$1);
var G__18484 = null;
var G__18485 = (0);
var G__18486 = (0);
seq__18460_18464 = G__18483;
chunk__18461_18465 = G__18484;
count__18462_18466 = G__18485;
i__18463_18467 = G__18486;
continue;
}
} else {
}
}
break;
}

return listeners;
});})(obj))
;

return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303)),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890))], null);
/**
 * adding an event to the selected nodes
 */
enfocus.events.listen = (function enfocus$events$listen(event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),event)) && ((window === pnod))){
return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else {
if((wrapper == null)){
return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});
;})(wrapper))
});
/**
 * removing all listeners of a given event type from the selected nodes
 */
enfocus.events.remove_listeners = (function enfocus$events$remove_listeners(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18493 = arguments.length;
var i__7267__auto___18494 = (0);
while(true){
if((i__7267__auto___18494 < len__7266__auto___18493)){
args__7273__auto__.push((arguments[i__7267__auto___18494]));

var G__18495 = (i__7267__auto___18494 + (1));
i__7267__auto___18494 = G__18495;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic = (function (event_list){
var get_name = (function (p1__18487_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__18487_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__18487_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__18487_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__18489 = cljs.core.seq.call(null,event_list);
var chunk__18490 = null;
var count__18491 = (0);
var i__18492 = (0);
while(true){
if((i__18492 < count__18491)){
var ev = cljs.core._nth.call(null,chunk__18490,i__18492);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__18496 = seq__18489;
var G__18497 = chunk__18490;
var G__18498 = count__18491;
var G__18499 = (i__18492 + (1));
seq__18489 = G__18496;
chunk__18490 = G__18497;
count__18491 = G__18498;
i__18492 = G__18499;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18489);
if(temp__4425__auto__){
var seq__18489__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18489__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18489__$1);
var G__18500 = cljs.core.chunk_rest.call(null,seq__18489__$1);
var G__18501 = c__7007__auto__;
var G__18502 = cljs.core.count.call(null,c__7007__auto__);
var G__18503 = (0);
seq__18489 = G__18500;
chunk__18490 = G__18501;
count__18491 = G__18502;
i__18492 = G__18503;
continue;
} else {
var ev = cljs.core.first.call(null,seq__18489__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__18504 = cljs.core.next.call(null,seq__18489__$1);
var G__18505 = null;
var G__18506 = (0);
var G__18507 = (0);
seq__18489 = G__18504;
chunk__18490 = G__18505;
count__18491 = G__18506;
i__18492 = G__18507;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(get_name))
});

enfocus.events.remove_listeners.cljs$lang$maxFixedArity = (0);

enfocus.events.remove_listeners.cljs$lang$applyTo = (function (seq18488){
return enfocus.events.remove_listeners.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18488));
});
/**
 * removing a specific event from the selected nodes
 */
enfocus.events.unlisten = (function enfocus$events$unlisten(var_args){
var args18508 = [];
var len__7266__auto___18511 = arguments.length;
var i__7267__auto___18512 = (0);
while(true){
if((i__7267__auto___18512 < len__7266__auto___18511)){
args18508.push((arguments[i__7267__auto___18512]));

var G__18513 = (i__7267__auto___18512 + (1));
i__7267__auto___18512 = G__18513;
continue;
} else {
}
break;
}

var G__18510 = args18508.length;
switch (G__18510) {
case 1:
return enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18508.length)].join('')));

}
});

enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$1 = (function (event){
return enfocus.events.remove_listeners.call(null,event);
});

enfocus.events.unlisten.cljs$core$IFn$_invoke$arity$2 = (function (event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((wrapper == null)){
return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});
;})(wrapper))
});

enfocus.events.unlisten.cljs$lang$maxFixedArity = 2;
enfocus.events.get_node_chain = (function enfocus$events$get_node_chain(top,node){
if(((node == null)) || (cljs.core._EQ_.call(null,node,top))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.call(null,enfocus$events$get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function enfocus$events$create_event(cur,cur_event){
var event = goog.object.clone(cur_event);
event.currentTarget = cur;

return event;
});
enfocus.events.listen_live = (function enfocus$events$listen_live(event,selector,func){
return (function (node){
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__18515_SHARP_){
var seq__18520 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__18515_SHARP_.target));
var chunk__18521 = null;
var count__18522 = (0);
var i__18523 = (0);
while(true){
if((i__18523 < count__18522)){
var el = cljs.core._nth.call(null,chunk__18521,i__18523);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__18520,chunk__18521,count__18522,i__18523,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__18515_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__18515_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__18515_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__18520,chunk__18521,count__18522,i__18523,el))
));

var G__18524 = seq__18520;
var G__18525 = chunk__18521;
var G__18526 = count__18522;
var G__18527 = (i__18523 + (1));
seq__18520 = G__18524;
chunk__18521 = G__18525;
count__18522 = G__18526;
i__18523 = G__18527;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18520);
if(temp__4425__auto__){
var seq__18520__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18520__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18520__$1);
var G__18528 = cljs.core.chunk_rest.call(null,seq__18520__$1);
var G__18529 = c__7007__auto__;
var G__18530 = cljs.core.count.call(null,c__7007__auto__);
var G__18531 = (0);
seq__18520 = G__18528;
chunk__18521 = G__18529;
count__18522 = G__18530;
i__18523 = G__18531;
continue;
} else {
var el = cljs.core.first.call(null,seq__18520__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__18520,chunk__18521,count__18522,i__18523,el,seq__18520__$1,temp__4425__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__18515_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__18515_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__18515_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__18520,chunk__18521,count__18522,i__18523,el,seq__18520__$1,temp__4425__auto__))
));

var G__18532 = cljs.core.next.call(null,seq__18520__$1);
var G__18533 = null;
var G__18534 = (0);
var G__18535 = (0);
seq__18520 = G__18532;
chunk__18521 = G__18533;
count__18522 = G__18534;
i__18523 = G__18535;
continue;
}
} else {
return null;
}
}
break;
}
})));
});
});
/**
 * returns true if the node(child) is a child of parent
 */
enfocus.events.child_of_QMARK_ = (function enfocus$events$child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child)){
return false;
} else {
if((parent === child)){
return false;
} else {
if((child.parentNode === parent)){
return true;
} else {
var G__18536 = parent;
var G__18537 = child.parentNode;
parent = G__18536;
child = G__18537;
continue;

}
}
}
break;
}
});
/**
 * this is used to build cross browser versions of :mouseenter and :mouseleave events
 */
enfocus.events.mouse_enter_leave = (function enfocus$events$mouse_enter_leave(func){
return (function (e){
var re = e.relatedTarget;
var this$ = e.currentTarget;
if((!((re === this$))) && (cljs.core.not.call(null,enfocus.events.child_of_QMARK_.call(null,this$,re)))){
return func.call(null,e);
} else {
return null;
}
});
});
