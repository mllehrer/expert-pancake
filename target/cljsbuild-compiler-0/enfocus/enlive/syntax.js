// Compiled by ClojureScript 1.8.51 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function enfocus$enlive$syntax$sel_to_str(input){
var item = cljs.core.first.call(null,input);
var rest = cljs.core.rest.call(null,input);
var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):enfocus$enlive$syntax$sel_to_str.call(null,rest));
if((item instanceof cljs.core.Keyword)){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__17528_SHARP_){
return cljs.core.conj.call(null,p1__17528_SHARP_,cljs.core.name.call(null,item));
});})(item,rest,end))
,end);
} else {
if(typeof item === 'string'){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__17529_SHARP_){
return cljs.core.conj.call(null,p1__17529_SHARP_,item);
});})(item,rest,end))
,end);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.reduce.call(null,((function (item,rest,end){
return (function (r1,it){
return cljs.core.concat.call(null,r1,cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__17530_SHARP_){
return cljs.core.conj.call(null,p1__17530_SHARP_,it);
});})(item,rest,end))
,end));
});})(item,rest,end))
,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,enfocus$enlive$syntax$sel_to_str.call(null,item)));
} else {
if(cljs.core.coll_QMARK_.call(null,item)){
var x1 = enfocus$enlive$syntax$sel_to_str.call(null,item);
var sub = cljs.core.map.call(null,((function (x1,item,rest,end){
return (function (p1__17531_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__17531_SHARP_);
});})(x1,item,rest,end))
,enfocus$enlive$syntax$sel_to_str.call(null,item));
var iter__6976__auto__ = ((function (x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__17538(s__17539){
return (new cljs.core.LazySeq(null,((function (x1,sub,item,rest,end){
return (function (){
var s__17539__$1 = s__17539;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17539__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var s = cljs.core.first.call(null,xs__4977__auto__);
var iterys__6972__auto__ = ((function (s__17539__$1,s,xs__4977__auto__,temp__4425__auto__,x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__17538_$_iter__17540(s__17541){
return (new cljs.core.LazySeq(null,((function (s__17539__$1,s,xs__4977__auto__,temp__4425__auto__,x1,sub,item,rest,end){
return (function (){
var s__17541__$1 = s__17541;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__17541__$1);
if(temp__4425__auto____$1){
var s__17541__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17541__$2)){
var c__6974__auto__ = cljs.core.chunk_first.call(null,s__17541__$2);
var size__6975__auto__ = cljs.core.count.call(null,c__6974__auto__);
var b__17543 = cljs.core.chunk_buffer.call(null,size__6975__auto__);
if((function (){var i__17542 = (0);
while(true){
if((i__17542 < size__6975__auto__)){
var e = cljs.core._nth.call(null,c__6974__auto__,i__17542);
cljs.core.chunk_append.call(null,b__17543,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
);

var G__17544 = (i__17542 + (1));
i__17542 = G__17544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17543),enfocus$enlive$syntax$sel_to_str_$_iter__17538_$_iter__17540.call(null,cljs.core.chunk_rest.call(null,s__17541__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17543),null);
}
} else {
var e = cljs.core.first.call(null,s__17541__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
,enfocus$enlive$syntax$sel_to_str_$_iter__17538_$_iter__17540.call(null,cljs.core.rest.call(null,s__17541__$2)));
}
} else {
return null;
}
break;
}
});})(s__17539__$1,s,xs__4977__auto__,temp__4425__auto__,x1,sub,item,rest,end))
,null,null));
});})(s__17539__$1,s,xs__4977__auto__,temp__4425__auto__,x1,sub,item,rest,end))
;
var fs__6973__auto__ = cljs.core.seq.call(null,iterys__6972__auto__.call(null,end));
if(fs__6973__auto__){
return cljs.core.concat.call(null,fs__6973__auto__,enfocus$enlive$syntax$sel_to_str_$_iter__17538.call(null,cljs.core.rest.call(null,s__17539__$1)));
} else {
var G__17545 = cljs.core.rest.call(null,s__17539__$1);
s__17539__$1 = G__17545;
continue;
}
} else {
return null;
}
break;
}
});})(x1,sub,item,rest,end))
,null,null));
});})(x1,sub,item,rest,end))
;
return iter__6976__auto__.call(null,sub);
} else {
return input;

}
}
}
}
});
enfocus.enlive.syntax.convert = (function enfocus$enlive$syntax$convert(sel){
if(typeof sel === 'string'){
return sel;
} else {
var temp__4423__auto__ = enfocus.enlive.syntax.sel_to_str.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var ors = temp__4423__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,",",ors))));
} else {
return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function enfocus$enlive$syntax$attr_pairs(op,elms){
var ts = (function (p__17548){
var vec__17549 = p__17548;
var x = cljs.core.nth.call(null,vec__17549,(0),null);
var y = cljs.core.nth.call(null,vec__17549,(1),null);
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,(2),elms)));
});
enfocus.enlive.syntax.attr_QMARK_ = (function enfocus$enlive$syntax$attr_QMARK_(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17552 = arguments.length;
var i__7267__auto___17553 = (0);
while(true){
if((i__7267__auto___17553 < len__7266__auto___17552)){
args__7273__auto__.push((arguments[i__7267__auto___17553]));

var G__17554 = (i__7267__auto___17553 + (1));
i__7267__auto___17553 = G__17554;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__17550_SHARP_){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,p1__17550_SHARP_)),cljs.core.str("]")].join('');
}),elms));
});

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$applyTo = (function (seq17551){
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17551));
});
enfocus.enlive.syntax.attr_EQ_ = (function enfocus$enlive$syntax$attr_EQ_(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17556 = arguments.length;
var i__7267__auto___17557 = (0);
while(true){
if((i__7267__auto___17557 < len__7266__auto___17556)){
args__7273__auto__.push((arguments[i__7267__auto___17557]));

var G__17558 = (i__7267__auto___17557 + (1));
i__7267__auto___17557 = G__17558;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
});

enfocus.enlive.syntax.attr_EQ_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_EQ_.cljs$lang$applyTo = (function (seq17555){
return enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17555));
});
enfocus.enlive.syntax.attr_has = (function enfocus$enlive$syntax$attr_has(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17561 = arguments.length;
var i__7267__auto___17562 = (0);
while(true){
if((i__7267__auto___17562 < len__7266__auto___17561)){
args__7273__auto__.push((arguments[i__7267__auto___17562]));

var G__17563 = (i__7267__auto___17562 + (1));
i__7267__auto___17562 = G__17563;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic = (function (x,vals){
var ts = (function (y){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
});

enfocus.enlive.syntax.attr_has.cljs$lang$maxFixedArity = (1);

enfocus.enlive.syntax.attr_has.cljs$lang$applyTo = (function (seq17559){
var G__17560 = cljs.core.first.call(null,seq17559);
var seq17559__$1 = cljs.core.next.call(null,seq17559);
return enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic(G__17560,seq17559__$1);
});
enfocus.enlive.syntax.attr_starts = (function enfocus$enlive$syntax$attr_starts(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17565 = arguments.length;
var i__7267__auto___17566 = (0);
while(true){
if((i__7267__auto___17566 < len__7266__auto___17565)){
args__7273__auto__.push((arguments[i__7267__auto___17566]));

var G__17567 = (i__7267__auto___17566 + (1));
i__7267__auto___17566 = G__17567;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
});

enfocus.enlive.syntax.attr_starts.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_starts.cljs$lang$applyTo = (function (seq17564){
return enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17564));
});
enfocus.enlive.syntax.attr_ends = (function enfocus$enlive$syntax$attr_ends(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17569 = arguments.length;
var i__7267__auto___17570 = (0);
while(true){
if((i__7267__auto___17570 < len__7266__auto___17569)){
args__7273__auto__.push((arguments[i__7267__auto___17570]));

var G__17571 = (i__7267__auto___17570 + (1));
i__7267__auto___17570 = G__17571;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
});

enfocus.enlive.syntax.attr_ends.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_ends.cljs$lang$applyTo = (function (seq17568){
return enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17568));
});
enfocus.enlive.syntax.attr_contains = (function enfocus$enlive$syntax$attr_contains(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17573 = arguments.length;
var i__7267__auto___17574 = (0);
while(true){
if((i__7267__auto___17574 < len__7266__auto___17573)){
args__7273__auto__.push((arguments[i__7267__auto___17574]));

var G__17575 = (i__7267__auto___17574 + (1));
i__7267__auto___17574 = G__17575;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
});

enfocus.enlive.syntax.attr_contains.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_contains.cljs$lang$applyTo = (function (seq17572){
return enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17572));
});
enfocus.enlive.syntax.attr_BAR__EQ_ = (function enfocus$enlive$syntax$attr_BAR__EQ_(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17577 = arguments.length;
var i__7267__auto___17578 = (0);
while(true){
if((i__7267__auto___17578 < len__7266__auto___17577)){
args__7273__auto__.push((arguments[i__7267__auto___17578]));

var G__17579 = (i__7267__auto___17578 + (1));
i__7267__auto___17578 = G__17579;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$applyTo = (function (seq17576){
return enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17576));
});
enfocus.enlive.syntax.nth_op = (function enfocus$enlive$syntax$nth_op(var_args){
var args17580 = [];
var len__7266__auto___17583 = arguments.length;
var i__7267__auto___17584 = (0);
while(true){
if((i__7267__auto___17584 < len__7266__auto___17583)){
args17580.push((arguments[i__7267__auto___17584]));

var G__17585 = (i__7267__auto___17584 + (1));
i__7267__auto___17584 = G__17585;
continue;
} else {
}
break;
}

var G__17582 = args17580.length;
switch (G__17582) {
case 2:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17580.length)].join('')));

}
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2 = (function (op,x){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3 = (function (op,x,y){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > (0)))?"+":null)),cljs.core.str(y)].join('');
});

enfocus.enlive.syntax.nth_op.cljs$lang$maxFixedArity = 3;
enfocus.enlive.syntax.nth_child = (function enfocus$enlive$syntax$nth_child(var_args){
var args17587 = [];
var len__7266__auto___17590 = arguments.length;
var i__7267__auto___17591 = (0);
while(true){
if((i__7267__auto___17591 < len__7266__auto___17590)){
args17587.push((arguments[i__7267__auto___17591]));

var G__17592 = (i__7267__auto___17591 + (1));
i__7267__auto___17591 = G__17592;
continue;
} else {
}
break;
}

var G__17589 = args17587.length;
switch (G__17589) {
case 1:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17587.length)].join('')));

}
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});

enfocus.enlive.syntax.nth_child.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.nth_last_child = (function enfocus$enlive$syntax$nth_last_child(var_args){
var args17594 = [];
var len__7266__auto___17597 = arguments.length;
var i__7267__auto___17598 = (0);
while(true){
if((i__7267__auto___17598 < len__7266__auto___17597)){
args17594.push((arguments[i__7267__auto___17598]));

var G__17599 = (i__7267__auto___17598 + (1));
i__7267__auto___17598 = G__17599;
continue;
} else {
}
break;
}

var G__17596 = args17594.length;
switch (G__17596) {
case 1:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17594.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});

enfocus.enlive.syntax.nth_last_child.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.nth_of_type = (function enfocus$enlive$syntax$nth_of_type(var_args){
var args17601 = [];
var len__7266__auto___17604 = arguments.length;
var i__7267__auto___17605 = (0);
while(true){
if((i__7267__auto___17605 < len__7266__auto___17604)){
args17601.push((arguments[i__7267__auto___17605]));

var G__17606 = (i__7267__auto___17605 + (1));
i__7267__auto___17605 = G__17606;
continue;
} else {
}
break;
}

var G__17603 = args17601.length;
switch (G__17603) {
case 1:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17601.length)].join('')));

}
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});

enfocus.enlive.syntax.nth_of_type.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.nth_last_of_type = (function enfocus$enlive$syntax$nth_last_of_type(var_args){
var args17608 = [];
var len__7266__auto___17611 = arguments.length;
var i__7267__auto___17612 = (0);
while(true){
if((i__7267__auto___17612 < len__7266__auto___17611)){
args17608.push((arguments[i__7267__auto___17612]));

var G__17613 = (i__7267__auto___17612 + (1));
i__7267__auto___17612 = G__17613;
continue;
} else {
}
break;
}

var G__17610 = args17608.length;
switch (G__17610) {
case 1:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17608.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$lang$maxFixedArity = 2;
enfocus.enlive.syntax.but = (function enfocus$enlive$syntax$but(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17616 = arguments.length;
var i__7267__auto___17617 = (0);
while(true){
if((i__7267__auto___17617 < len__7266__auto___17616)){
args__7273__auto__.push((arguments[i__7267__auto___17617]));

var G__17618 = (i__7267__auto___17617 + (1));
i__7267__auto___17617 = G__17618;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic = (function (sel){
return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert.call(null,sel)),cljs.core.str(")")].join('');
});

enfocus.enlive.syntax.but.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.but.cljs$lang$applyTo = (function (seq17615){
return enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17615));
});
