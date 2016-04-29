// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17240_17254 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17241_17255 = null;
var count__17242_17256 = (0);
var i__17243_17257 = (0);
while(true){
if((i__17243_17257 < count__17242_17256)){
var f_17258 = cljs.core._nth.call(null,chunk__17241_17255,i__17243_17257);
cljs.core.println.call(null,"  ",f_17258);

var G__17259 = seq__17240_17254;
var G__17260 = chunk__17241_17255;
var G__17261 = count__17242_17256;
var G__17262 = (i__17243_17257 + (1));
seq__17240_17254 = G__17259;
chunk__17241_17255 = G__17260;
count__17242_17256 = G__17261;
i__17243_17257 = G__17262;
continue;
} else {
var temp__4425__auto___17263 = cljs.core.seq.call(null,seq__17240_17254);
if(temp__4425__auto___17263){
var seq__17240_17264__$1 = temp__4425__auto___17263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17240_17264__$1)){
var c__7007__auto___17265 = cljs.core.chunk_first.call(null,seq__17240_17264__$1);
var G__17266 = cljs.core.chunk_rest.call(null,seq__17240_17264__$1);
var G__17267 = c__7007__auto___17265;
var G__17268 = cljs.core.count.call(null,c__7007__auto___17265);
var G__17269 = (0);
seq__17240_17254 = G__17266;
chunk__17241_17255 = G__17267;
count__17242_17256 = G__17268;
i__17243_17257 = G__17269;
continue;
} else {
var f_17270 = cljs.core.first.call(null,seq__17240_17264__$1);
cljs.core.println.call(null,"  ",f_17270);

var G__17271 = cljs.core.next.call(null,seq__17240_17264__$1);
var G__17272 = null;
var G__17273 = (0);
var G__17274 = (0);
seq__17240_17254 = G__17271;
chunk__17241_17255 = G__17272;
count__17242_17256 = G__17273;
i__17243_17257 = G__17274;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17275 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6196__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17275);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17275)))?cljs.core.second.call(null,arglists_17275):arglists_17275));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17244 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17245 = null;
var count__17246 = (0);
var i__17247 = (0);
while(true){
if((i__17247 < count__17246)){
var vec__17248 = cljs.core._nth.call(null,chunk__17245,i__17247);
var name = cljs.core.nth.call(null,vec__17248,(0),null);
var map__17249 = cljs.core.nth.call(null,vec__17248,(1),null);
var map__17249__$1 = ((((!((map__17249 == null)))?((((map__17249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17249):map__17249);
var doc = cljs.core.get.call(null,map__17249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17249__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17276 = seq__17244;
var G__17277 = chunk__17245;
var G__17278 = count__17246;
var G__17279 = (i__17247 + (1));
seq__17244 = G__17276;
chunk__17245 = G__17277;
count__17246 = G__17278;
i__17247 = G__17279;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17244);
if(temp__4425__auto__){
var seq__17244__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17244__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__17244__$1);
var G__17280 = cljs.core.chunk_rest.call(null,seq__17244__$1);
var G__17281 = c__7007__auto__;
var G__17282 = cljs.core.count.call(null,c__7007__auto__);
var G__17283 = (0);
seq__17244 = G__17280;
chunk__17245 = G__17281;
count__17246 = G__17282;
i__17247 = G__17283;
continue;
} else {
var vec__17251 = cljs.core.first.call(null,seq__17244__$1);
var name = cljs.core.nth.call(null,vec__17251,(0),null);
var map__17252 = cljs.core.nth.call(null,vec__17251,(1),null);
var map__17252__$1 = ((((!((map__17252 == null)))?((((map__17252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17252):map__17252);
var doc = cljs.core.get.call(null,map__17252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17252__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17284 = cljs.core.next.call(null,seq__17244__$1);
var G__17285 = null;
var G__17286 = (0);
var G__17287 = (0);
seq__17244 = G__17284;
chunk__17245 = G__17285;
count__17246 = G__17286;
i__17247 = G__17287;
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
}
});
