// Compiled by ClojureScript 1.8.51 {}
goog.provide('enfocus.effects');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('enfocus.core');
goog.require('goog.fx');
goog.require('goog.fx.dom');
goog.require('goog.events');
goog.require('goog.style');
/**
 * wrapper function for effects, maps the effect to all nodes returned by the
 * selector and provides chaining and callback functionality
 */
enfocus.effects.chainable_effect = (function enfocus$effects$chainable_effect(func,callback){
var trans = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col));
var partial_cback = ((function (pnod_col,cnt){
return (function (){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if(cljs.core._EQ_.call(null,(0),cljs.core.deref.call(null,cnt))){
if(cljs.core.truth_(callback)){
enfocus.core.apply_transform.call(null,callback,pnodes);
} else {
}

if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,pnodes);
} else {
return null;
}
} else {
return null;
}
});})(pnod_col,cnt))
;
var seq__18395 = cljs.core.seq.call(null,pnod_col);
var chunk__18396 = null;
var count__18397 = (0);
var i__18398 = (0);
while(true){
if((i__18398 < count__18397)){
var pnod = cljs.core._nth.call(null,chunk__18396,i__18398);
func.call(null,pnod,partial_cback);

var G__18402 = seq__18395;
var G__18403 = chunk__18396;
var G__18404 = count__18397;
var G__18405 = (i__18398 + (1));
seq__18395 = G__18402;
chunk__18396 = G__18403;
count__18397 = G__18404;
i__18398 = G__18405;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18395);
if(temp__4425__auto__){
var seq__18395__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18395__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18395__$1);
var G__18406 = cljs.core.chunk_rest.call(null,seq__18395__$1);
var G__18407 = c__7007__auto__;
var G__18408 = cljs.core.count.call(null,c__7007__auto__);
var G__18409 = (0);
seq__18395 = G__18406;
chunk__18396 = G__18407;
count__18397 = G__18408;
i__18398 = G__18409;
continue;
} else {
var pnod = cljs.core.first.call(null,seq__18395__$1);
func.call(null,pnod,partial_cback);

var G__18410 = cljs.core.next.call(null,seq__18395__$1);
var G__18411 = null;
var G__18412 = (0);
var G__18413 = (0);
seq__18395 = G__18410;
chunk__18396 = G__18411;
count__18397 = G__18412;
i__18398 = G__18413;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof enfocus.effects.t_enfocus$effects18399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.effects.t_enfocus$effects18399 = (function (chainable_effect,func,callback,trans,meta18400){
this.chainable_effect = chainable_effect;
this.func = func;
this.callback = callback;
this.trans = trans;
this.meta18400 = meta18400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.effects.t_enfocus$effects18399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_18401,meta18400__$1){
var self__ = this;
var _18401__$1 = this;
return (new enfocus.effects.t_enfocus$effects18399(self__.chainable_effect,self__.func,self__.callback,self__.trans,meta18400__$1));
});})(trans))
;

enfocus.effects.t_enfocus$effects18399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_18401){
var self__ = this;
var _18401__$1 = this;
return self__.meta18400;
});})(trans))
;

enfocus.effects.t_enfocus$effects18399.prototype.enfocus$core$ITransform$ = true;

enfocus.effects.t_enfocus$effects18399.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.effects.t_enfocus$effects18399.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.effects.t_enfocus$effects18399.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"chainable-effect","chainable-effect",-2085024423,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"callback","callback",935395299,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"wrapper function for effects, maps the effect to all nodes returned by the\n   selector and provides chaining and callback functionality"], null)),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta18400","meta18400",-696566382,null)], null);
});})(trans))
;

enfocus.effects.t_enfocus$effects18399.cljs$lang$type = true;

enfocus.effects.t_enfocus$effects18399.cljs$lang$ctorStr = "enfocus.effects/t_enfocus$effects18399";

enfocus.effects.t_enfocus$effects18399.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"enfocus.effects/t_enfocus$effects18399");
});})(trans))
;

enfocus.effects.__GT_t_enfocus$effects18399 = ((function (trans){
return (function enfocus$effects$chainable_effect_$___GT_t_enfocus$effects18399(chainable_effect__$1,func__$1,callback__$1,trans__$1,meta18400){
return (new enfocus.effects.t_enfocus$effects18399(chainable_effect__$1,func__$1,callback__$1,trans__$1,meta18400));
});})(trans))
;

}

return (new enfocus.effects.t_enfocus$effects18399(enfocus$effects$chainable_effect,func,callback,trans,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * chains a series of effects and trasforms in sequences
 */
enfocus.effects.chain = (function enfocus$effects$chain(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18416 = arguments.length;
var i__7267__auto___18417 = (0);
while(true){
if((i__7267__auto___18417 < len__7266__auto___18416)){
args__7273__auto__.push((arguments[i__7267__auto___18417]));

var G__18418 = (i__7267__auto___18417 + (1));
i__7267__auto___18417 = G__18418;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return enfocus.effects.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

enfocus.effects.chain.cljs$core$IFn$_invoke$arity$variadic = (function (func,chains){
if(cljs.core.empty_QMARK_.call(null,chains)){
return (function (pnod){
return enfocus.core.apply_transform.call(null,func,pnod);
});
} else {
return (function (pnod){
return enfocus.core.apply_transform.call(null,func,pnod,cljs.core.apply.call(null,enfocus.effects.chain,chains));
});
}
});

enfocus.effects.chain.cljs$lang$maxFixedArity = (1);

enfocus.effects.chain.cljs$lang$applyTo = (function (seq18414){
var G__18415 = cljs.core.first.call(null,seq18414);
var seq18414__$1 = cljs.core.next.call(null,seq18414);
return enfocus.effects.chain.cljs$core$IFn$_invoke$arity$variadic(G__18415,seq18414__$1);
});
/**
 * fade the selected nodes over a set of steps
 */
enfocus.effects.fade_out = (function enfocus$effects$fade_out(var_args){
var args18419 = [];
var len__7266__auto___18422 = arguments.length;
var i__7267__auto___18423 = (0);
while(true){
if((i__7267__auto___18423 < len__7266__auto___18422)){
args18419.push((arguments[i__7267__auto___18423]));

var G__18424 = (i__7267__auto___18423 + (1));
i__7267__auto___18423 = G__18424;
continue;
} else {
}
break;
}

var G__18421 = args18419.length;
switch (G__18421) {
case 1:
return enfocus.effects.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.effects.fade_out.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.effects.fade_out.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18419.length)].join('')));

}
});

enfocus.effects.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (ttime){
return enfocus.effects.fade_out.call(null,ttime,null,null);
});

enfocus.effects.fade_out.cljs$core$IFn$_invoke$arity$2 = (function (ttime,callback){
return enfocus.effects.fade_out.call(null,ttime,callback,null);
});

enfocus.effects.fade_out.cljs$core$IFn$_invoke$arity$3 = (function (ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var anim = (new goog.fx.dom.FadeOut(pnod,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});

enfocus.effects.fade_out.cljs$lang$maxFixedArity = 3;
/**
 * fade the selected nodes over a set of steps
 */
enfocus.effects.fade_in = (function enfocus$effects$fade_in(var_args){
var args18426 = [];
var len__7266__auto___18429 = arguments.length;
var i__7267__auto___18430 = (0);
while(true){
if((i__7267__auto___18430 < len__7266__auto___18429)){
args18426.push((arguments[i__7267__auto___18430]));

var G__18431 = (i__7267__auto___18430 + (1));
i__7267__auto___18430 = G__18431;
continue;
} else {
}
break;
}

var G__18428 = args18426.length;
switch (G__18428) {
case 1:
return enfocus.effects.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.effects.fade_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.effects.fade_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18426.length)].join('')));

}
});

enfocus.effects.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (ttime){
return enfocus.effects.fade_in.call(null,ttime,null,null);
});

enfocus.effects.fade_in.cljs$core$IFn$_invoke$arity$2 = (function (ttime,callback){
return enfocus.effects.fade_in.call(null,ttime,callback,null);
});

enfocus.effects.fade_in.cljs$core$IFn$_invoke$arity$3 = (function (ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var anim = (new goog.fx.dom.FadeIn(pnod,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});

enfocus.effects.fade_in.cljs$lang$maxFixedArity = 3;
/**
 * resizes the selected elements to a width and height in px optional time series data
 */
enfocus.effects.resize = (function enfocus$effects$resize(var_args){
var args18433 = [];
var len__7266__auto___18436 = arguments.length;
var i__7267__auto___18437 = (0);
while(true){
if((i__7267__auto___18437 < len__7266__auto___18436)){
args18433.push((arguments[i__7267__auto___18437]));

var G__18438 = (i__7267__auto___18437 + (1));
i__7267__auto___18437 = G__18438;
continue;
} else {
}
break;
}

var G__18435 = args18433.length;
switch (G__18435) {
case 2:
return enfocus.effects.resize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.effects.resize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return enfocus.effects.resize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return enfocus.effects.resize.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18433.length)].join('')));

}
});

enfocus.effects.resize.cljs$core$IFn$_invoke$arity$2 = (function (wth,hgt){
return enfocus.effects.resize.call(null,wth,hgt,(0),null,null);
});

enfocus.effects.resize.cljs$core$IFn$_invoke$arity$3 = (function (wth,hgt,ttime){
return enfocus.effects.resize.call(null,wth,hgt,ttime,null,null);
});

enfocus.effects.resize.cljs$core$IFn$_invoke$arity$4 = (function (wth,hgt,ttime,callback){
return enfocus.effects.resize.call(null,wth,hgt,ttime,callback,null);
});

enfocus.effects.resize.cljs$core$IFn$_invoke$arity$5 = (function (wth,hgt,ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var csize = goog.style.getContentBoxSize(pnod);
var start = [csize.width,csize.height];
var wth__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curwidth","curwidth",1831107733),wth))?csize.width:wth);
var hgt__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curheight","curheight",-119931765),hgt))?csize.height:hgt);
var end = [wth__$1,hgt__$1];
var anim = (new goog.fx.dom.Resize(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});

enfocus.effects.resize.cljs$lang$maxFixedArity = 5;
/**
 * moves the selected elements to a x and y in px optional time series data 
 */
enfocus.effects.move = (function enfocus$effects$move(var_args){
var args18440 = [];
var len__7266__auto___18443 = arguments.length;
var i__7267__auto___18444 = (0);
while(true){
if((i__7267__auto___18444 < len__7266__auto___18443)){
args18440.push((arguments[i__7267__auto___18444]));

var G__18445 = (i__7267__auto___18444 + (1));
i__7267__auto___18444 = G__18445;
continue;
} else {
}
break;
}

var G__18442 = args18440.length;
switch (G__18442) {
case 2:
return enfocus.effects.move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.effects.move.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return enfocus.effects.move.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return enfocus.effects.move.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18440.length)].join('')));

}
});

enfocus.effects.move.cljs$core$IFn$_invoke$arity$2 = (function (xpos,ypos){
return enfocus.effects.move.call(null,xpos,ypos,(0),null,null);
});

enfocus.effects.move.cljs$core$IFn$_invoke$arity$3 = (function (xpos,ypos,ttime){
return enfocus.effects.move.call(null,xpos,ypos,ttime,null,null);
});

enfocus.effects.move.cljs$core$IFn$_invoke$arity$4 = (function (xpos,ypos,ttime,callback){
return enfocus.effects.move.call(null,xpos,ypos,ttime,callback,null);
});

enfocus.effects.move.cljs$core$IFn$_invoke$arity$5 = (function (xpos,ypos,ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var cpos = goog.style.getPosition(pnod);
var start = [cpos.x,cpos.y];
var xpos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curx","curx",-1922579418),xpos))?cpos.x:xpos);
var ypos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cury","cury",-230854218),ypos))?cpos.y:ypos);
var end = [xpos__$1,ypos__$1];
var anim = (new goog.fx.dom.Slide(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});

enfocus.effects.move.cljs$lang$maxFixedArity = 5;
/**
 * scrolls selected elements to a x and y in px optional time series data
 */
enfocus.effects.scroll = (function enfocus$effects$scroll(var_args){
var args18447 = [];
var len__7266__auto___18450 = arguments.length;
var i__7267__auto___18451 = (0);
while(true){
if((i__7267__auto___18451 < len__7266__auto___18450)){
args18447.push((arguments[i__7267__auto___18451]));

var G__18452 = (i__7267__auto___18451 + (1));
i__7267__auto___18451 = G__18452;
continue;
} else {
}
break;
}

var G__18449 = args18447.length;
switch (G__18449) {
case 2:
return enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18447.length)].join('')));

}
});

enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$2 = (function (xpos,ypos){
return enfocus.effects.scroll.call(null,xpos,ypos,(0),null,null);
});

enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$3 = (function (xpos,ypos,ttime){
return enfocus.effects.scroll.call(null,xpos,ypos,ttime,null,null);
});

enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$4 = (function (xpos,ypos,ttime,callback){
return enfocus.effects.scroll.call(null,xpos,ypos,ttime,callback,null);
});

enfocus.effects.scroll.cljs$core$IFn$_invoke$arity$5 = (function (xpos,ypos,ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var start = [pnod.scrollLeft,pnod.scrollTop];
var xpos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curx","curx",-1922579418),xpos))?pnod.scrollLeft:xpos);
var ypos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cury","cury",-230854218),ypos))?pnod.scrollTop:ypos);
var end = [xpos__$1,ypos__$1];
var anim = (new goog.fx.dom.Scroll(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});

enfocus.effects.scroll.cljs$lang$maxFixedArity = 5;
enfocus.effects.liner = (function enfocus$effects$liner(t){
return t;
});
enfocus.effects.ease_in_quad = (function enfocus$effects$ease_in_quad(t){
return (t * t);
});
enfocus.effects.ease_out_quad = (function enfocus$effects$ease_out_quad(t){
return ((-1) * (t * (t - (2))));
});
enfocus.effects.ease_in_out_quad = (function enfocus$effects$ease_in_out_quad(t){
var nt = (t * (2));
if((nt < (1))){
return ((.5 * nt) * nt);
} else {
return (-0.5 * (((nt - (1)) * (nt - (2))) - (1)));
}
});
enfocus.effects.ease_in_cubic = (function enfocus$effects$ease_in_cubic(t){
return ((t * t) * t);
});
enfocus.effects.ease_out_cubic = (function enfocus$effects$ease_out_cubic(t){
var nt = (t - (1));
return (((nt * nt) * nt) + (1));
});
enfocus.effects.ease_in_out_cubic = (function enfocus$effects$ease_in_out_cubic(t){
var nt = (t * (2));
if((nt < (1))){
return (((.5 * nt) * nt) * nt);
} else {
var mt = (nt - (2));
return (.5 * ((2) + ((mt * mt) * mt)));
}
});
enfocus.effects.ease_in_quart = (function enfocus$effects$ease_in_quart(t){
return (((t * t) * t) * t);
});
enfocus.effects.ease_out_quart = (function enfocus$effects$ease_out_quart(t){
var nt = (t - (1));
return ((-1) * ((((nt * nt) * nt) * nt) - (1)));
});
enfocus.effects.ease_in_out_quart = (function enfocus$effects$ease_in_out_quart(t){
var nt = (t * (2));
if((nt < (1))){
return ((((.5 * nt) * nt) * nt) * nt);
} else {
var mt = (nt - (2));
return (.5 * ((2) + (((mt * mt) * mt) * mt)));
}
});
enfocus.effects.ease_in_quint = (function enfocus$effects$ease_in_quint(t){
return (((t * t) * t) * t);
});
enfocus.effects.ease_out_quint = (function enfocus$effects$ease_out_quint(t){
var nt = (t - (1));
return ((((nt * nt) * nt) * nt) + (1));
});
enfocus.effects.ease_in_out_quint = (function enfocus$effects$ease_in_out_quint(t){
var nt = (t * (2));
if((nt < (1))){
return (((((.5 * nt) * nt) * nt) * nt) * nt);
} else {
var mt = (nt - (2));
return (.5 * ((2) + ((((mt * mt) * mt) * mt) * mt)));
}
});
enfocus.effects.sign_in = (function enfocus$effects$sign_in(t){
return (((-1) * Math.cos(((0.5 * Math.PI) * t))) + (1));
});
enfocus.effects.sign_out = (function enfocus$effects$sign_out(t){
return Math.sin(((t * Math.PI) * 0.5));
});
enfocus.effects.sign_in_out = (function enfocus$effects$sign_in_out(t){
return (-0.5 * (Math.cos((Math.PI * t)) - (1)));
});
enfocus.effects.expo_in = (function enfocus$effects$expo_in(t){
if(cljs.core._EQ_.call(null,t,(0))){
return (0);
} else {
return Math.pow((2),((10) * (t - (1))));
}
});
enfocus.effects.expo_out = (function enfocus$effects$expo_out(t){
if(cljs.core._EQ_.call(null,t,(0))){
return (1);
} else {
return (((-1) * Math.pow((2),((-10) * t))) + (1));
}
});
enfocus.effects.expo_in_out = (function enfocus$effects$expo_in_out(t){
if(cljs.core._EQ_.call(null,t,(0))){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return (1);
} else {
if((t < (1))){
return (0.5 * Math.pow((2),((10) * (t - (1)))));
} else {
return (0.5 * (((-1) * Math.pow((2),((-10) * (t - (1))))) + (2)));

}
}
}
});
enfocus.effects.circular_in = (function enfocus$effects$circular_in(t){
return ((-1) * (Math.sqrt(((1) - Math.pow(t,(2)))) - (1)));
});
enfocus.effects.circular_out = (function enfocus$effects$circular_out(t){
var nt = (t - (1));
return Math.sqrt(((1) - Math.pow(nt,(2))));
});
enfocus.effects.circular_in_out = (function enfocus$effects$circular_in_out(t){
var nt = (t * (2));
if((t < (1))){
return (-0.5 * (Math.sqrt(((1) - Math.pow(nt,(2)))) - (1)));
} else {
var mt = (nt - (2));
return (-0.5 * (Math.sqrt(((1) - Math.pow(nt,(2)))) + (1)));
}
});
