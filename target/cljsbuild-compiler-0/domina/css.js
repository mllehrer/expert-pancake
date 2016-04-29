// Compiled by ClojureScript 1.8.51 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args12076 = [];
var len__7266__auto___12082 = arguments.length;
var i__7267__auto___12083 = (0);
while(true){
if((i__7267__auto___12083 < len__7266__auto___12082)){
args12076.push((arguments[i__7267__auto___12083]));

var G__12084 = (i__7267__auto___12083 + (1));
i__7267__auto___12083 = G__12084;
continue;
} else {
}
break;
}

var G__12078 = args12076.length;
switch (G__12078) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12076.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css12079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css12079 = (function (base,expr,meta12080){
this.base = base;
this.expr = expr;
this.meta12080 = meta12080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css12079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12081,meta12080__$1){
var self__ = this;
var _12081__$1 = this;
return (new domina.css.t_domina$css12079(self__.base,self__.expr,meta12080__$1));
});

domina.css.t_domina$css12079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12081){
var self__ = this;
var _12081__$1 = this;
return self__.meta12080;
});

domina.css.t_domina$css12079.prototype.domina$DomContent$ = true;

domina.css.t_domina$css12079.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__12074_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__12074_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t_domina$css12079.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__12075_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__12075_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t_domina$css12079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta12080","meta12080",-1435794505,null)], null);
});

domina.css.t_domina$css12079.cljs$lang$type = true;

domina.css.t_domina$css12079.cljs$lang$ctorStr = "domina.css/t_domina$css12079";

domina.css.t_domina$css12079.cljs$lang$ctorPrWriter = (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"domina.css/t_domina$css12079");
});

domina.css.__GT_t_domina$css12079 = (function domina$css$__GT_t_domina$css12079(base__$1,expr__$1,meta12080){
return (new domina.css.t_domina$css12079(base__$1,expr__$1,meta12080));
});

}

return (new domina.css.t_domina$css12079(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;
