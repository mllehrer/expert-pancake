// Compiled by ClojureScript 1.8.51 {}
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('domina.css');
goog.require('goog.Timer');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('enfocus.enlive.syntax');







/**
 * @interface
 */
enfocus.core.ISelector = function(){};

/**
 * takes root node and returns a domina node list
 */
enfocus.core.select = (function enfocus$core$select(var_args){
var args17766 = [];
var len__7266__auto___17769 = arguments.length;
var i__7267__auto___17770 = (0);
while(true){
if((i__7267__auto___17770 < len__7266__auto___17769)){
args17766.push((arguments[i__7267__auto___17770]));

var G__17771 = (i__7267__auto___17770 + (1));
i__7267__auto___17770 = G__17771;
continue;
} else {
}
break;
}

var G__17768 = args17766.length;
switch (G__17768) {
case 1:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17766.length)].join('')));

}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$1 == null)))){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__6859__auto__ = (((this$ == null))?null:this$);
var m__6860__auto__ = (enfocus.core.select[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,this$);
} else {
var m__6860__auto____$1 = (enfocus.core.select["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$2 = (function (this$,root){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$2 == null)))){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__6859__auto__ = (((this$ == null))?null:this$);
var m__6860__auto__ = (enfocus.core.select[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,this$,root);
} else {
var m__6860__auto____$1 = (enfocus.core.select["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,this$,root);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$3 = (function (this$,root,id_mask){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$3 == null)))){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__6859__auto__ = (((this$ == null))?null:this$);
var m__6860__auto__ = (enfocus.core.select[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,this$,root,id_mask);
} else {
var m__6860__auto____$1 = (enfocus.core.select["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,this$,root,id_mask);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
enfocus.core.ITransform = function(){};

/**
 * takes a set of nodes and performs a transform on them
 */
enfocus.core.apply_transform = (function enfocus$core$apply_transform(var_args){
var args17773 = [];
var len__7266__auto___17776 = arguments.length;
var i__7267__auto___17777 = (0);
while(true){
if((i__7267__auto___17777 < len__7266__auto___17776)){
args17773.push((arguments[i__7267__auto___17777]));

var G__17778 = (i__7267__auto___17777 + (1));
i__7267__auto___17777 = G__17778;
continue;
} else {
}
break;
}

var G__17775 = args17773.length;
switch (G__17775) {
case 2:
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17773.length)].join('')));

}
});

enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2 = (function (this$,nodes){
if((!((this$ == null))) && (!((this$.enfocus$core$ITransform$apply_transform$arity$2 == null)))){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__6859__auto__ = (((this$ == null))?null:this$);
var m__6860__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,this$,nodes);
} else {
var m__6860__auto____$1 = (enfocus.core.apply_transform["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,this$,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
}
});

enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3 = (function (this$,nodes,callback){
if((!((this$ == null))) && (!((this$.enfocus$core$ITransform$apply_transform$arity$3 == null)))){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__6859__auto__ = (((this$ == null))?null:this$);
var m__6860__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,this$,nodes,callback);
} else {
var m__6860__auto____$1 = (enfocus.core.apply_transform["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,this$,nodes,callback);
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
}
});

enfocus.core.apply_transform.cljs$lang$maxFixedArity = 3;

enfocus.core.debug = false;
enfocus.core.log_debug = (function enfocus$core$log_debug(mesg){
if(cljs.core.truth_((function (){var and__6184__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__6184__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__6184__auto__;
}
})())){
return console.log(mesg);
} else {
return null;
}
});
enfocus.core.setTimeout = (function enfocus$core$setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function enfocus$core$node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function enfocus$core$nodelist_QMARK_(tst){
return (tst instanceof NodeList);
});
/**
 * coverts a nodelist, node into a collection
 */
enfocus.core.nodes__GT_coll = (function enfocus$core$nodes__GT_coll(nl){
if((nl === window)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else {
return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function enfocus$core$flatten_nodes_coll(values){

return cljs.core.mapcat.call(null,(function (p1__17780_SHARP_){
if(typeof p1__17780_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__17780_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__17780_SHARP_);

}
}),values);
});
/**
 * Sets property name to a value on a element and	Returns the original object
 */
enfocus.core.style_set = (function enfocus$core$style_set(obj,values){
var seq__17787_17793 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__17788_17794 = null;
var count__17789_17795 = (0);
var i__17790_17796 = (0);
while(true){
if((i__17790_17796 < count__17789_17795)){
var vec__17791_17797 = cljs.core._nth.call(null,chunk__17788_17794,i__17790_17796);
var attr_17798 = cljs.core.nth.call(null,vec__17791_17797,(0),null);
var value_17799 = cljs.core.nth.call(null,vec__17791_17797,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_17798),value_17799);

var G__17800 = seq__17787_17793;
var G__17801 = chunk__17788_17794;
var G__17802 = count__17789_17795;
var G__17803 = (i__17790_17796 + (1));
seq__17787_17793 = G__17800;
chunk__17788_17794 = G__17801;
count__17789_17795 = G__17802;
i__17790_17796 = G__17803;
continue;
} else {
var temp__4425__auto___17804 = cljs.core.seq.call(null,seq__17787_17793);
if(temp__4425__auto___17804){
var seq__17787_17805__$1 = temp__4425__auto___17804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17787_17805__$1)){
var c__7007__auto___17806 = cljs.core.chunk_first.call(null,seq__17787_17805__$1);
var G__17807 = cljs.core.chunk_rest.call(null,seq__17787_17805__$1);
var G__17808 = c__7007__auto___17806;
var G__17809 = cljs.core.count.call(null,c__7007__auto___17806);
var G__17810 = (0);
seq__17787_17793 = G__17807;
chunk__17788_17794 = G__17808;
count__17789_17795 = G__17809;
i__17790_17796 = G__17810;
continue;
} else {
var vec__17792_17811 = cljs.core.first.call(null,seq__17787_17805__$1);
var attr_17812 = cljs.core.nth.call(null,vec__17792_17811,(0),null);
var value_17813 = cljs.core.nth.call(null,vec__17792_17811,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_17812),value_17813);

var G__17814 = cljs.core.next.call(null,seq__17787_17805__$1);
var G__17815 = null;
var G__17816 = (0);
var G__17817 = (0);
seq__17787_17793 = G__17814;
chunk__17788_17794 = G__17815;
count__17789_17795 = G__17816;
i__17790_17796 = G__17817;
continue;
}
} else {
}
}
break;
}

return obj;
});
/**
 * removes the property value from an elements style obj.
 */
enfocus.core.style_remove = (function enfocus$core$style_remove(obj,values){
var seq__17822 = cljs.core.seq.call(null,values);
var chunk__17823 = null;
var count__17824 = (0);
var i__17825 = (0);
while(true){
if((i__17825 < count__17824)){
var attr = cljs.core._nth.call(null,chunk__17823,i__17825);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__17826 = seq__17822;
var G__17827 = chunk__17823;
var G__17828 = count__17824;
var G__17829 = (i__17825 + (1));
seq__17822 = G__17826;
chunk__17823 = G__17827;
count__17824 = G__17828;
i__17825 = G__17829;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17822);
if(temp__4425__auto__){
var seq__17822__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17822__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__17822__$1);
var G__17830 = cljs.core.chunk_rest.call(null,seq__17822__$1);
var G__17831 = c__7007__auto__;
var G__17832 = cljs.core.count.call(null,c__7007__auto__);
var G__17833 = (0);
seq__17822 = G__17830;
chunk__17823 = G__17831;
count__17824 = G__17832;
i__17825 = G__17833;
continue;
} else {
var attr = cljs.core.first.call(null,seq__17822__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__17834 = cljs.core.next.call(null,seq__17822__$1);
var G__17835 = null;
var G__17836 = (0);
var G__17837 = (0);
seq__17822 = G__17834;
chunk__17823 = G__17835;
count__17824 = G__17836;
i__17825 = G__17837;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function enfocus$core$get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function enfocus$core$get_mills(){
return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function enfocus$core$pix_round(step){
if((step < (0))){
return Math.floor(step);
} else {
return Math.ceil(step);
}
});
enfocus.core.add_map_attrs = (function enfocus$core$add_map_attrs(var_args){
var args17838 = [];
var len__7266__auto___17847 = arguments.length;
var i__7267__auto___17848 = (0);
while(true){
if((i__7267__auto___17848 < len__7266__auto___17847)){
args17838.push((arguments[i__7267__auto___17848]));

var G__17849 = (i__7267__auto___17848 + (1));
i__7267__auto___17848 = G__17849;
continue;
} else {
}
break;
}

var G__17840 = args17838.length;
switch (G__17840) {
case 2:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17838.length)].join('')));

}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_.call(null,ats)){
var seq__17841_17851 = cljs.core.seq.call(null,ats);
var chunk__17842_17852 = null;
var count__17843_17853 = (0);
var i__17844_17854 = (0);
while(true){
if((i__17844_17854 < count__17843_17853)){
var vec__17845_17855 = cljs.core._nth.call(null,chunk__17842_17852,i__17844_17854);
var k_17856 = cljs.core.nth.call(null,vec__17845_17855,(0),null);
var v_17857 = cljs.core.nth.call(null,vec__17845_17855,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_17856,v_17857);

var G__17858 = seq__17841_17851;
var G__17859 = chunk__17842_17852;
var G__17860 = count__17843_17853;
var G__17861 = (i__17844_17854 + (1));
seq__17841_17851 = G__17858;
chunk__17842_17852 = G__17859;
count__17843_17853 = G__17860;
i__17844_17854 = G__17861;
continue;
} else {
var temp__4425__auto___17862 = cljs.core.seq.call(null,seq__17841_17851);
if(temp__4425__auto___17862){
var seq__17841_17863__$1 = temp__4425__auto___17862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17841_17863__$1)){
var c__7007__auto___17864 = cljs.core.chunk_first.call(null,seq__17841_17863__$1);
var G__17865 = cljs.core.chunk_rest.call(null,seq__17841_17863__$1);
var G__17866 = c__7007__auto___17864;
var G__17867 = cljs.core.count.call(null,c__7007__auto___17864);
var G__17868 = (0);
seq__17841_17851 = G__17865;
chunk__17842_17852 = G__17866;
count__17843_17853 = G__17867;
i__17844_17854 = G__17868;
continue;
} else {
var vec__17846_17869 = cljs.core.first.call(null,seq__17841_17863__$1);
var k_17870 = cljs.core.nth.call(null,vec__17846_17869,(0),null);
var v_17871 = cljs.core.nth.call(null,vec__17846_17869,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_17870,v_17871);

var G__17872 = cljs.core.next.call(null,seq__17841_17863__$1);
var G__17873 = null;
var G__17874 = (0);
var G__17875 = (0);
seq__17841_17851 = G__17872;
chunk__17842_17852 = G__17873;
count__17843_17853 = G__17874;
i__17844_17854 = G__17875;
continue;
}
} else {
}
}
break;
}

return elem;
} else {
return null;
}
} else {
return null;
}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});

enfocus.core.add_map_attrs.cljs$lang$maxFixedArity = 3;
/**
 * this is incremented everytime a remote template is loaded and decremented when
 * it is added to the dom cache
 */
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,(0));
/**
 * cache for the remote templates
 */
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
 * Add a hidden div to hold the dom as we are transforming it this has to be done
 * because css selectors do not work unless we have it in the main dom
 */
enfocus.core.create_hidden_dom = (function enfocus$core$create_hidden_dom(child){
var div = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core._EQ_.call(null,child.nodeType,(11))){
goog.dom.appendChild(div,child);
} else {
enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));

var seq__17880_17884 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__17881_17885 = null;
var count__17882_17886 = (0);
var i__17883_17887 = (0);
while(true){
if((i__17883_17887 < count__17882_17886)){
var node_17888 = cljs.core._nth.call(null,chunk__17881_17885,i__17883_17887);
goog.dom.appendChild(div,node_17888);

var G__17889 = seq__17880_17884;
var G__17890 = chunk__17881_17885;
var G__17891 = count__17882_17886;
var G__17892 = (i__17883_17887 + (1));
seq__17880_17884 = G__17889;
chunk__17881_17885 = G__17890;
count__17882_17886 = G__17891;
i__17883_17887 = G__17892;
continue;
} else {
var temp__4425__auto___17893 = cljs.core.seq.call(null,seq__17880_17884);
if(temp__4425__auto___17893){
var seq__17880_17894__$1 = temp__4425__auto___17893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17880_17894__$1)){
var c__7007__auto___17895 = cljs.core.chunk_first.call(null,seq__17880_17894__$1);
var G__17896 = cljs.core.chunk_rest.call(null,seq__17880_17894__$1);
var G__17897 = c__7007__auto___17895;
var G__17898 = cljs.core.count.call(null,c__7007__auto___17895);
var G__17899 = (0);
seq__17880_17884 = G__17896;
chunk__17881_17885 = G__17897;
count__17882_17886 = G__17898;
i__17883_17887 = G__17899;
continue;
} else {
var node_17900 = cljs.core.first.call(null,seq__17880_17894__$1);
goog.dom.appendChild(div,node_17900);

var G__17901 = cljs.core.next.call(null,seq__17880_17894__$1);
var G__17902 = null;
var G__17903 = (0);
var G__17904 = (0);
seq__17880_17884 = G__17901;
chunk__17881_17885 = G__17902;
count__17882_17886 = G__17903;
i__17883_17887 = G__17904;
continue;
}
} else {
}
}
break;
}
}

goog.dom.appendChild(goog.dom.getDocument().documentElement,div);

return div;
});
/**
 * removes the hidden div and returns the children
 */
enfocus.core.remove_node_return_child = (function enfocus$core$remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
goog.dom.append(frag,child);

goog.dom.removeNode(div);

return frag;
});
enfocus.core.last_element_child = (function enfocus$core$last_element_child(node){

return goog.dom.getLastElementChild(node);
});
/**
 * replaces all the ids in a string html fragement/template with a generated
 * symbol appended on to a existing id this is done to make sure we don't have
 * id colisions during the transformation process
 */
enfocus.core.replace_ids = (function enfocus$core$replace_ids(var_args){
var args17905 = [];
var len__7266__auto___17908 = arguments.length;
var i__7267__auto___17909 = (0);
while(true){
if((i__7267__auto___17909 < len__7266__auto___17908)){
args17905.push((arguments[i__7267__auto___17909]));

var G__17910 = (i__7267__auto___17909 + (1));
i__7267__auto___17909 = G__17910;
continue;
} else {
}
break;
}

var G__17907 = args17905.length;
switch (G__17907) {
case 1:
return enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17905.length)].join('')));

}
});

enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$1 = (function (text){
return enfocus.core.replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});

enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2 = (function (id_mask,text){
var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,((function (re){
return (function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
});})(re))
)], null);
});

enfocus.core.replace_ids.cljs$lang$maxFixedArity = 2;
/**
 * before adding the dom back into the live dom we reset the masked ids to orig vals
 */
enfocus.core.reset_ids = (function enfocus$core$reset_ids(sym,nod){
var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__17912_SHARP_){
var id = p1__17912_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__17912_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
 * loads a remote file into the cache, and masks the ids to avoid collisions
 */
enfocus.core.load_remote_dom = (function enfocus$core$load_remote_dom(uri,dom_key,id_mask){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__17914 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__17914,(0),null);
var txt = cljs.core.nth.call(null,vec__17914,(1),null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){
callback.call(null,req);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function enfocus$core$html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));

var seq__17919_17923 = cljs.core.seq.call(null,dfa);
var chunk__17920_17924 = null;
var count__17921_17925 = (0);
var i__17922_17926 = (0);
while(true){
if((i__17922_17926 < count__17921_17925)){
var df_17927 = cljs.core._nth.call(null,chunk__17920_17924,i__17922_17926);
goog.dom.append(frag,df_17927);

var G__17928 = seq__17919_17923;
var G__17929 = chunk__17920_17924;
var G__17930 = count__17921_17925;
var G__17931 = (i__17922_17926 + (1));
seq__17919_17923 = G__17928;
chunk__17920_17924 = G__17929;
count__17921_17925 = G__17930;
i__17922_17926 = G__17931;
continue;
} else {
var temp__4425__auto___17932 = cljs.core.seq.call(null,seq__17919_17923);
if(temp__4425__auto___17932){
var seq__17919_17933__$1 = temp__4425__auto___17932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17919_17933__$1)){
var c__7007__auto___17934 = cljs.core.chunk_first.call(null,seq__17919_17933__$1);
var G__17935 = cljs.core.chunk_rest.call(null,seq__17919_17933__$1);
var G__17936 = c__7007__auto___17934;
var G__17937 = cljs.core.count.call(null,c__7007__auto___17934);
var G__17938 = (0);
seq__17919_17923 = G__17935;
chunk__17920_17924 = G__17936;
count__17921_17925 = G__17937;
i__17922_17926 = G__17938;
continue;
} else {
var df_17939 = cljs.core.first.call(null,seq__17919_17933__$1);
goog.dom.append(frag,df_17939);

var G__17940 = cljs.core.next.call(null,seq__17919_17933__$1);
var G__17941 = null;
var G__17942 = (0);
var G__17943 = (0);
seq__17919_17923 = G__17940;
chunk__17920_17924 = G__17941;
count__17921_17925 = G__17942;
i__17922_17926 = G__17943;
continue;
}
} else {
}
}
break;
}

return frag;
});
/**
 * returns and dom from the cache and symbol used to scope the ids
 */
enfocus.core.get_cached_dom = (function enfocus$core$get_cached_dom(uri){
var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else {
return null;
}
});
/**
 * returns the cached snippet or creates one and adds it to the cache if needed
 */
enfocus.core.get_cached_snippet = (function enfocus$core$get_cached_snippet(uri,sel){
var sel_str = enfocus.core.create_sel_str.call(null,sel);
var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else {
var vec__17946 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__17946,(0),null);
var tdom = cljs.core.nth.call(null,vec__17946,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17946,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__17944_SHARP_){
return p1__17944_SHARP_.outerHTML;
});})(vec__17946,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child.call(null,dom);

cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
 * wrapper function for extractors that maps the extraction to
 * all nodes returned by the selector
 */
enfocus.core.extr_multi_node = (function enfocus$core$extr_multi_node(var_args){
var args17947 = [];
var len__7266__auto___17954 = arguments.length;
var i__7267__auto___17955 = (0);
while(true){
if((i__7267__auto___17955 < len__7266__auto___17954)){
args17947.push((arguments[i__7267__auto___17955]));

var G__17956 = (i__7267__auto___17955 + (1));
i__7267__auto___17955 = G__17956;
continue;
} else {
}
break;
}

var G__17949 = args17947.length;
switch (G__17949) {
case 1:
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17947.length)].join('')));

}
});

enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1 = (function (func){
return enfocus.core.extr_multi_node.call(null,func,null);
});

enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$2 = (function (func,filt){
var trans = (function enfocus$core$trans(pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result = cljs.core.map.call(null,func,pnod_col);
var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);
if((cljs.core.count.call(null,result__$1) <= (1))){
return cljs.core.first.call(null,result__$1);
} else {
return result__$1;
}
});
if(typeof enfocus.core.t_enfocus$core17950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core17950 = (function (func,filt,trans,meta17951){
this.func = func;
this.filt = filt;
this.trans = trans;
this.meta17951 = meta17951;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core17950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_17952,meta17951__$1){
var self__ = this;
var _17952__$1 = this;
return (new enfocus.core.t_enfocus$core17950(self__.func,self__.filt,self__.trans,meta17951__$1));
});})(trans))
;

enfocus.core.t_enfocus$core17950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_17952){
var self__ = this;
var _17952__$1 = this;
return self__.meta17951;
});})(trans))
;

enfocus.core.t_enfocus$core17950.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t_enfocus$core17950.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17950.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17950.prototype.call = ((function (trans){
return (function() {
var G__17958 = null;
var G__17958__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__17958__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__17958 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17958__2.call(this,self__,nodes);
case 3:
return G__17958__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17958.cljs$core$IFn$_invoke$arity$2 = G__17958__2;
G__17958.cljs$core$IFn$_invoke$arity$3 = G__17958__3;
return G__17958;
})()
;})(trans))
;

enfocus.core.t_enfocus$core17950.prototype.apply = ((function (trans){
return (function (self__,args17953){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17953)));
});})(trans))
;

enfocus.core.t_enfocus$core17950.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17950.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17950.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"filt","filt",1809760609,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta17951","meta17951",-445336625,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core17950.cljs$lang$type = true;

enfocus.core.t_enfocus$core17950.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core17950";

enfocus.core.t_enfocus$core17950.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"enfocus.core/t_enfocus$core17950");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core17950 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core17950(func__$1,filt__$1,trans__$1,meta17951){
return (new enfocus.core.t_enfocus$core17950(func__$1,filt__$1,trans__$1,meta17951));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core17950(func,filt,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.extr_multi_node.cljs$lang$maxFixedArity = 2;
/**
 * Allows standard domina functions to be chainable
 */
enfocus.core.multi_node_chain = (function enfocus$core$multi_node_chain(var_args){
var args17960 = [];
var len__7266__auto___17971 = arguments.length;
var i__7267__auto___17972 = (0);
while(true){
if((i__7267__auto___17972 < len__7266__auto___17971)){
args17960.push((arguments[i__7267__auto___17972]));

var G__17973 = (i__7267__auto___17972 + (1));
i__7267__auto___17972 = G__17973;
continue;
} else {
}
break;
}

var G__17962 = args17960.length;
switch (G__17962) {
case 1:
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17960.length)].join('')));

}
});

enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1 = (function (func){
var trans = (function (nodes,chain){
var val = func.call(null,nodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t_enfocus$core17963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core17963 = (function (func,trans,meta17964){
this.func = func;
this.trans = trans;
this.meta17964 = meta17964;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core17963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_17965,meta17964__$1){
var self__ = this;
var _17965__$1 = this;
return (new enfocus.core.t_enfocus$core17963(self__.func,self__.trans,meta17964__$1));
});})(trans))
;

enfocus.core.t_enfocus$core17963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_17965){
var self__ = this;
var _17965__$1 = this;
return self__.meta17964;
});})(trans))
;

enfocus.core.t_enfocus$core17963.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t_enfocus$core17963.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17963.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17963.prototype.call = ((function (trans){
return (function() {
var G__17975 = null;
var G__17975__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__17975__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__17975 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17975__2.call(this,self__,nodes);
case 3:
return G__17975__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17975.cljs$core$IFn$_invoke$arity$2 = G__17975__2;
G__17975.cljs$core$IFn$_invoke$arity$3 = G__17975__3;
return G__17975;
})()
;})(trans))
;

enfocus.core.t_enfocus$core17963.prototype.apply = ((function (trans){
return (function (self__,args17966){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17966)));
});})(trans))
;

enfocus.core.t_enfocus$core17963.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17963.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17963.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta17964","meta17964",509530127,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core17963.cljs$lang$type = true;

enfocus.core.t_enfocus$core17963.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core17963";

enfocus.core.t_enfocus$core17963.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"enfocus.core/t_enfocus$core17963");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core17963 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core17963(func__$1,trans__$1,meta17964){
return (new enfocus.core.t_enfocus$core17963(func__$1,trans__$1,meta17964));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core17963(func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__17959_SHARP_){
return domina.nodes.call(null,p1__17959_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t_enfocus$core17967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core17967 = (function (values,func,trans,meta17968){
this.values = values;
this.func = func;
this.trans = trans;
this.meta17968 = meta17968;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core17967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_17969,meta17968__$1){
var self__ = this;
var _17969__$1 = this;
return (new enfocus.core.t_enfocus$core17967(self__.values,self__.func,self__.trans,meta17968__$1));
});})(trans))
;

enfocus.core.t_enfocus$core17967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_17969){
var self__ = this;
var _17969__$1 = this;
return self__.meta17968;
});})(trans))
;

enfocus.core.t_enfocus$core17967.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t_enfocus$core17967.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17967.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17967.prototype.call = ((function (trans){
return (function() {
var G__17976 = null;
var G__17976__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__17976__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__17976 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17976__2.call(this,self__,nodes);
case 3:
return G__17976__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17976.cljs$core$IFn$_invoke$arity$2 = G__17976__2;
G__17976.cljs$core$IFn$_invoke$arity$3 = G__17976__3;
return G__17976;
})()
;})(trans))
;

enfocus.core.t_enfocus$core17967.prototype.apply = ((function (trans){
return (function (self__,args17970){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17970)));
});})(trans))
;

enfocus.core.t_enfocus$core17967.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17967.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17967.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta17968","meta17968",187076458,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core17967.cljs$lang$type = true;

enfocus.core.t_enfocus$core17967.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core17967";

enfocus.core.t_enfocus$core17967.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"enfocus.core/t_enfocus$core17967");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core17967 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core17967(values__$1,func__$1,trans__$1,meta17968){
return (new enfocus.core.t_enfocus$core17967(values__$1,func__$1,trans__$1,meta17968));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core17967(values,func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$lang$maxFixedArity = 2;
/**
 * Replaces the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.content = (function enfocus$core$content(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17980 = arguments.length;
var i__7267__auto___17981 = (0);
while(true){
if((i__7267__auto___17981 < len__7266__auto___17980)){
args__7273__auto__.push((arguments[i__7267__auto___17981]));

var G__17982 = (i__7267__auto___17981 + (1));
i__7267__auto___17981 = G__17982;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__17977_SHARP_,p2__17978_SHARP_){
domina.destroy_children_BANG_.call(null,p1__17977_SHARP_);

return domina.append_BANG_.call(null,p1__17977_SHARP_,p2__17978_SHARP_);
}));
});

enfocus.core.content.cljs$lang$maxFixedArity = (0);

enfocus.core.content.cljs$lang$applyTo = (function (seq17979){
return enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17979));
});
/**
 * Replaces the content of the element with the dom structure represented by the html string passed
 */
enfocus.core.html_content = (function enfocus$core$html_content(txt){
return enfocus.core.multi_node_chain.call(null,(function (p1__17983_SHARP_){
return domina.set_html_BANG_.call(null,p1__17983_SHARP_,txt);
}));
});
/**
 * Assocs attributes and values on the selected element.
 */
enfocus.core.set_attr = (function enfocus$core$set_attr(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17992 = arguments.length;
var i__7267__auto___17993 = (0);
while(true){
if((i__7267__auto___17993 < len__7266__auto___17992)){
args__7273__auto__.push((arguments[i__7267__auto___17993]));

var G__17994 = (i__7267__auto___17993 + (1));
i__7267__auto___17993 = G__17994;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__17984_SHARP_){
var seq__17986 = cljs.core.seq.call(null,pairs);
var chunk__17987 = null;
var count__17988 = (0);
var i__17989 = (0);
while(true){
if((i__17989 < count__17988)){
var vec__17990 = cljs.core._nth.call(null,chunk__17987,i__17989);
var name = cljs.core.nth.call(null,vec__17990,(0),null);
var value = cljs.core.nth.call(null,vec__17990,(1),null);
domina.set_attr_BANG_.call(null,p1__17984_SHARP_,name,value);

var G__17995 = seq__17986;
var G__17996 = chunk__17987;
var G__17997 = count__17988;
var G__17998 = (i__17989 + (1));
seq__17986 = G__17995;
chunk__17987 = G__17996;
count__17988 = G__17997;
i__17989 = G__17998;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17986);
if(temp__4425__auto__){
var seq__17986__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17986__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__17986__$1);
var G__17999 = cljs.core.chunk_rest.call(null,seq__17986__$1);
var G__18000 = c__7007__auto__;
var G__18001 = cljs.core.count.call(null,c__7007__auto__);
var G__18002 = (0);
seq__17986 = G__17999;
chunk__17987 = G__18000;
count__17988 = G__18001;
i__17989 = G__18002;
continue;
} else {
var vec__17991 = cljs.core.first.call(null,seq__17986__$1);
var name = cljs.core.nth.call(null,vec__17991,(0),null);
var value = cljs.core.nth.call(null,vec__17991,(1),null);
domina.set_attr_BANG_.call(null,p1__17984_SHARP_,name,value);

var G__18003 = cljs.core.next.call(null,seq__17986__$1);
var G__18004 = null;
var G__18005 = (0);
var G__18006 = (0);
seq__17986 = G__18003;
chunk__17987 = G__18004;
count__17988 = G__18005;
i__17989 = G__18006;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.set_attr.cljs$lang$maxFixedArity = (0);

enfocus.core.set_attr.cljs$lang$applyTo = (function (seq17985){
return enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17985));
});
/**
 * Dissocs attributes on the selected element.
 */
enfocus.core.remove_attr = (function enfocus$core$remove_attr(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18013 = arguments.length;
var i__7267__auto___18014 = (0);
while(true){
if((i__7267__auto___18014 < len__7266__auto___18013)){
args__7273__auto__.push((arguments[i__7267__auto___18014]));

var G__18015 = (i__7267__auto___18014 + (1));
i__7267__auto___18014 = G__18015;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__18007_SHARP_){
var seq__18009 = cljs.core.seq.call(null,values);
var chunk__18010 = null;
var count__18011 = (0);
var i__18012 = (0);
while(true){
if((i__18012 < count__18011)){
var name = cljs.core._nth.call(null,chunk__18010,i__18012);
domina.remove_attr_BANG_.call(null,p1__18007_SHARP_,name);

var G__18016 = seq__18009;
var G__18017 = chunk__18010;
var G__18018 = count__18011;
var G__18019 = (i__18012 + (1));
seq__18009 = G__18016;
chunk__18010 = G__18017;
count__18011 = G__18018;
i__18012 = G__18019;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18009);
if(temp__4425__auto__){
var seq__18009__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18009__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18009__$1);
var G__18020 = cljs.core.chunk_rest.call(null,seq__18009__$1);
var G__18021 = c__7007__auto__;
var G__18022 = cljs.core.count.call(null,c__7007__auto__);
var G__18023 = (0);
seq__18009 = G__18020;
chunk__18010 = G__18021;
count__18011 = G__18022;
i__18012 = G__18023;
continue;
} else {
var name = cljs.core.first.call(null,seq__18009__$1);
domina.remove_attr_BANG_.call(null,p1__18007_SHARP_,name);

var G__18024 = cljs.core.next.call(null,seq__18009__$1);
var G__18025 = null;
var G__18026 = (0);
var G__18027 = (0);
seq__18009 = G__18024;
chunk__18010 = G__18025;
count__18011 = G__18026;
i__18012 = G__18027;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.remove_attr.cljs$lang$maxFixedArity = (0);

enfocus.core.remove_attr.cljs$lang$applyTo = (function (seq18008){
return enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18008));
});
enfocus.core.set_prop = (function enfocus$core$set_prop(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18031 = arguments.length;
var i__7267__auto___18032 = (0);
while(true){
if((i__7267__auto___18032 < len__7266__auto___18031)){
args__7273__auto__.push((arguments[i__7267__auto___18032]));

var G__18033 = (i__7267__auto___18032 + (1));
i__7267__auto___18032 = G__18033;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic = (function (forms){
return (function (node){
var h = cljs.core.mapcat.call(null,(function (p__18029){
var vec__18030 = p__18029;
var n = cljs.core.nth.call(null,vec__18030,(0),null);
var v = cljs.core.nth.call(null,vec__18030,(1),null);
var x__7030__auto__ = cljs.core.name.call(null,n);
return cljs.core._conj.call(null,(function (){var x__7030__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7030__auto____$1);
})(),x__7030__auto__);
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
});

enfocus.core.set_prop.cljs$lang$maxFixedArity = (0);

enfocus.core.set_prop.cljs$lang$applyTo = (function (seq18028){
return enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18028));
});
/**
 * returns true if the element has a given class
 */
enfocus.core.has_class = (function enfocus$core$has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
 * Adds the specified classes to the selected element.
 */
enfocus.core.add_class = (function enfocus$core$add_class(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18040 = arguments.length;
var i__7267__auto___18041 = (0);
while(true){
if((i__7267__auto___18041 < len__7266__auto___18040)){
args__7273__auto__.push((arguments[i__7267__auto___18041]));

var G__18042 = (i__7267__auto___18041 + (1));
i__7267__auto___18041 = G__18042;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__18034_SHARP_){
var seq__18036 = cljs.core.seq.call(null,values);
var chunk__18037 = null;
var count__18038 = (0);
var i__18039 = (0);
while(true){
if((i__18039 < count__18038)){
var val = cljs.core._nth.call(null,chunk__18037,i__18039);
domina.add_class_BANG_.call(null,p1__18034_SHARP_,val);

var G__18043 = seq__18036;
var G__18044 = chunk__18037;
var G__18045 = count__18038;
var G__18046 = (i__18039 + (1));
seq__18036 = G__18043;
chunk__18037 = G__18044;
count__18038 = G__18045;
i__18039 = G__18046;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18036);
if(temp__4425__auto__){
var seq__18036__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18036__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18036__$1);
var G__18047 = cljs.core.chunk_rest.call(null,seq__18036__$1);
var G__18048 = c__7007__auto__;
var G__18049 = cljs.core.count.call(null,c__7007__auto__);
var G__18050 = (0);
seq__18036 = G__18047;
chunk__18037 = G__18048;
count__18038 = G__18049;
i__18039 = G__18050;
continue;
} else {
var val = cljs.core.first.call(null,seq__18036__$1);
domina.add_class_BANG_.call(null,p1__18034_SHARP_,val);

var G__18051 = cljs.core.next.call(null,seq__18036__$1);
var G__18052 = null;
var G__18053 = (0);
var G__18054 = (0);
seq__18036 = G__18051;
chunk__18037 = G__18052;
count__18038 = G__18053;
i__18039 = G__18054;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.add_class.cljs$lang$maxFixedArity = (0);

enfocus.core.add_class.cljs$lang$applyTo = (function (seq18035){
return enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18035));
});
/**
 * Removes the specified classes from the selected element.
 */
enfocus.core.remove_class = (function enfocus$core$remove_class(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18061 = arguments.length;
var i__7267__auto___18062 = (0);
while(true){
if((i__7267__auto___18062 < len__7266__auto___18061)){
args__7273__auto__.push((arguments[i__7267__auto___18062]));

var G__18063 = (i__7267__auto___18062 + (1));
i__7267__auto___18062 = G__18063;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__18055_SHARP_){
var seq__18057 = cljs.core.seq.call(null,values);
var chunk__18058 = null;
var count__18059 = (0);
var i__18060 = (0);
while(true){
if((i__18060 < count__18059)){
var val = cljs.core._nth.call(null,chunk__18058,i__18060);
domina.remove_class_BANG_.call(null,p1__18055_SHARP_,val);

var G__18064 = seq__18057;
var G__18065 = chunk__18058;
var G__18066 = count__18059;
var G__18067 = (i__18060 + (1));
seq__18057 = G__18064;
chunk__18058 = G__18065;
count__18059 = G__18066;
i__18060 = G__18067;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18057);
if(temp__4425__auto__){
var seq__18057__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18057__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18057__$1);
var G__18068 = cljs.core.chunk_rest.call(null,seq__18057__$1);
var G__18069 = c__7007__auto__;
var G__18070 = cljs.core.count.call(null,c__7007__auto__);
var G__18071 = (0);
seq__18057 = G__18068;
chunk__18058 = G__18069;
count__18059 = G__18070;
i__18060 = G__18071;
continue;
} else {
var val = cljs.core.first.call(null,seq__18057__$1);
domina.remove_class_BANG_.call(null,p1__18055_SHARP_,val);

var G__18072 = cljs.core.next.call(null,seq__18057__$1);
var G__18073 = null;
var G__18074 = (0);
var G__18075 = (0);
seq__18057 = G__18072;
chunk__18058 = G__18073;
count__18059 = G__18074;
i__18060 = G__18075;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.remove_class.cljs$lang$maxFixedArity = (0);

enfocus.core.remove_class.cljs$lang$applyTo = (function (seq18056){
return enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18056));
});
/**
 * Sets the specified classes on the selected element
 */
enfocus.core.set_class = (function enfocus$core$set_class(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18078 = arguments.length;
var i__7267__auto___18079 = (0);
while(true){
if((i__7267__auto___18079 < len__7266__auto___18078)){
args__7273__auto__.push((arguments[i__7267__auto___18079]));

var G__18080 = (i__7267__auto___18079 + (1));
i__7267__auto___18079 = G__18080;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__18076_SHARP_){
return domina.set_classes_BANG_.call(null,p1__18076_SHARP_,values);
}));
});

enfocus.core.set_class.cljs$lang$maxFixedArity = (0);

enfocus.core.set_class.cljs$lang$applyTo = (function (seq18077){
return enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18077));
});
enfocus.core.do__GT_ = (function enfocus$core$do__GT_(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18086 = arguments.length;
var i__7267__auto___18087 = (0);
while(true){
if((i__7267__auto___18087 < len__7266__auto___18086)){
args__7273__auto__.push((arguments[i__7267__auto___18087]));

var G__18088 = (i__7267__auto___18087 + (1));
i__7267__auto___18087 = G__18088;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (forms){

return (function (pnod){
var seq__18082 = cljs.core.seq.call(null,forms);
var chunk__18083 = null;
var count__18084 = (0);
var i__18085 = (0);
while(true){
if((i__18085 < count__18084)){
var fun = cljs.core._nth.call(null,chunk__18083,i__18085);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__18089 = seq__18082;
var G__18090 = chunk__18083;
var G__18091 = count__18084;
var G__18092 = (i__18085 + (1));
seq__18082 = G__18089;
chunk__18083 = G__18090;
count__18084 = G__18091;
i__18085 = G__18092;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18082);
if(temp__4425__auto__){
var seq__18082__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18082__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18082__$1);
var G__18093 = cljs.core.chunk_rest.call(null,seq__18082__$1);
var G__18094 = c__7007__auto__;
var G__18095 = cljs.core.count.call(null,c__7007__auto__);
var G__18096 = (0);
seq__18082 = G__18093;
chunk__18083 = G__18094;
count__18084 = G__18095;
i__18085 = G__18096;
continue;
} else {
var fun = cljs.core.first.call(null,seq__18082__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__18097 = cljs.core.next.call(null,seq__18082__$1);
var G__18098 = null;
var G__18099 = (0);
var G__18100 = (0);
seq__18082 = G__18097;
chunk__18083 = G__18098;
count__18084 = G__18099;
i__18085 = G__18100;
continue;
}
} else {
return null;
}
}
break;
}
});
});

enfocus.core.do__GT_.cljs$lang$maxFixedArity = (0);

enfocus.core.do__GT_.cljs$lang$applyTo = (function (seq18081){
return enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18081));
});
/**
 * Appends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.append = (function enfocus$core$append(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18104 = arguments.length;
var i__7267__auto___18105 = (0);
while(true){
if((i__7267__auto___18105 < len__7266__auto___18104)){
args__7273__auto__.push((arguments[i__7267__auto___18105]));

var G__18106 = (i__7267__auto___18105 + (1));
i__7267__auto___18105 = G__18106;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__18101_SHARP_,p2__18102_SHARP_){
return domina.append_BANG_.call(null,p1__18101_SHARP_,p2__18102_SHARP_);
}));
});

enfocus.core.append.cljs$lang$maxFixedArity = (0);

enfocus.core.append.cljs$lang$applyTo = (function (seq18103){
return enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18103));
});
/**
 * Prepends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.prepend = (function enfocus$core$prepend(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18110 = arguments.length;
var i__7267__auto___18111 = (0);
while(true){
if((i__7267__auto___18111 < len__7266__auto___18110)){
args__7273__auto__.push((arguments[i__7267__auto___18111]));

var G__18112 = (i__7267__auto___18111 + (1));
i__7267__auto___18111 = G__18112;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__18107_SHARP_,p2__18108_SHARP_){
return domina.prepend_BANG_.call(null,p1__18107_SHARP_,p2__18108_SHARP_);
}));
});

enfocus.core.prepend.cljs$lang$maxFixedArity = (0);

enfocus.core.prepend.cljs$lang$applyTo = (function (seq18109){
return enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18109));
});
/**
 * inserts the content before the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.before = (function enfocus$core$before(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18116 = arguments.length;
var i__7267__auto___18117 = (0);
while(true){
if((i__7267__auto___18117 < len__7266__auto___18116)){
args__7273__auto__.push((arguments[i__7267__auto___18117]));

var G__18118 = (i__7267__auto___18117 + (1));
i__7267__auto___18117 = G__18118;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__18113_SHARP_,p2__18114_SHARP_){
return domina.insert_before_BANG_.call(null,p1__18113_SHARP_,p2__18114_SHARP_);
}));
});

enfocus.core.before.cljs$lang$maxFixedArity = (0);

enfocus.core.before.cljs$lang$applyTo = (function (seq18115){
return enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18115));
});
/**
 * inserts the content after the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.after = (function enfocus$core$after(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18122 = arguments.length;
var i__7267__auto___18123 = (0);
while(true){
if((i__7267__auto___18123 < len__7266__auto___18122)){
args__7273__auto__.push((arguments[i__7267__auto___18123]));

var G__18124 = (i__7267__auto___18123 + (1));
i__7267__auto___18123 = G__18124;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__18119_SHARP_,p2__18120_SHARP_){
return domina.insert_after_BANG_.call(null,p1__18119_SHARP_,p2__18120_SHARP_);
}));
});

enfocus.core.after.cljs$lang$maxFixedArity = (0);

enfocus.core.after.cljs$lang$applyTo = (function (seq18121){
return enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18121));
});
/**
 * substitutes the content for the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.substitute = (function enfocus$core$substitute(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18128 = arguments.length;
var i__7267__auto___18129 = (0);
while(true){
if((i__7267__auto___18129 < len__7266__auto___18128)){
args__7273__auto__.push((arguments[i__7267__auto___18129]));

var G__18130 = (i__7267__auto___18129 + (1));
i__7267__auto___18129 = G__18130;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__18125_SHARP_,p2__18126_SHARP_){
return domina.swap_content_BANG_.call(null,p1__18125_SHARP_,p2__18126_SHARP_);
}));
});

enfocus.core.substitute.cljs$lang$maxFixedArity = (0);

enfocus.core.substitute.cljs$lang$applyTo = (function (seq18127){
return enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18127));
});
/**
 * removes the selected nodes from the dom
 */
enfocus.core.remove_node = (function enfocus$core$remove_node(){
return enfocus.core.multi_node_chain.call(null,(function (p1__18131_SHARP_){
return domina.detach_BANG_.call(null,p1__18131_SHARP_);
}));
});
/**
 * wrap and element in a new element defined as :div {:class 'temp'}
 */
enfocus.core.wrap = (function enfocus$core$wrap(elm,mattr){
return (function (pnod){
var elem = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem,mattr);

enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));

return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
 * replaces a node with all its children
 */
enfocus.core.unwrap = (function enfocus$core$unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
goog.dom.append(frag,pnod.childNodes);

return goog.dom.replaceNode(frag,pnod);
});
});
/**
 * set a list of style elements from the selected nodes
 */
enfocus.core.set_style = (function enfocus$core$set_style(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18140 = arguments.length;
var i__7267__auto___18141 = (0);
while(true){
if((i__7267__auto___18141 < len__7266__auto___18140)){
args__7273__auto__.push((arguments[i__7267__auto___18141]));

var G__18142 = (i__7267__auto___18141 + (1));
i__7267__auto___18141 = G__18142;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__18132_SHARP_){
var seq__18134 = cljs.core.seq.call(null,pairs);
var chunk__18135 = null;
var count__18136 = (0);
var i__18137 = (0);
while(true){
if((i__18137 < count__18136)){
var vec__18138 = cljs.core._nth.call(null,chunk__18135,i__18137);
var name = cljs.core.nth.call(null,vec__18138,(0),null);
var value = cljs.core.nth.call(null,vec__18138,(1),null);
domina.set_style_BANG_.call(null,p1__18132_SHARP_,name,value);

var G__18143 = seq__18134;
var G__18144 = chunk__18135;
var G__18145 = count__18136;
var G__18146 = (i__18137 + (1));
seq__18134 = G__18143;
chunk__18135 = G__18144;
count__18136 = G__18145;
i__18137 = G__18146;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18134);
if(temp__4425__auto__){
var seq__18134__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18134__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18134__$1);
var G__18147 = cljs.core.chunk_rest.call(null,seq__18134__$1);
var G__18148 = c__7007__auto__;
var G__18149 = cljs.core.count.call(null,c__7007__auto__);
var G__18150 = (0);
seq__18134 = G__18147;
chunk__18135 = G__18148;
count__18136 = G__18149;
i__18137 = G__18150;
continue;
} else {
var vec__18139 = cljs.core.first.call(null,seq__18134__$1);
var name = cljs.core.nth.call(null,vec__18139,(0),null);
var value = cljs.core.nth.call(null,vec__18139,(1),null);
domina.set_style_BANG_.call(null,p1__18132_SHARP_,name,value);

var G__18151 = cljs.core.next.call(null,seq__18134__$1);
var G__18152 = null;
var G__18153 = (0);
var G__18154 = (0);
seq__18134 = G__18151;
chunk__18135 = G__18152;
count__18136 = G__18153;
i__18137 = G__18154;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.set_style.cljs$lang$maxFixedArity = (0);

enfocus.core.set_style.cljs$lang$applyTo = (function (seq18133){
return enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18133));
});
/**
 * remove a list style elements from the selected nodes. note: you can only remove styles that are inline
 */
enfocus.core.remove_style = (function enfocus$core$remove_style(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18156 = arguments.length;
var i__7267__auto___18157 = (0);
while(true){
if((i__7267__auto___18157 < len__7266__auto___18156)){
args__7273__auto__.push((arguments[i__7267__auto___18157]));

var G__18158 = (i__7267__auto___18157 + (1));
i__7267__auto___18157 = G__18158;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
});
});

enfocus.core.remove_style.cljs$lang$maxFixedArity = (0);

enfocus.core.remove_style.cljs$lang$applyTo = (function (seq18155){
return enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18155));
});
/**
 * calls the focus function on the selected node
 */
enfocus.core.focus = (function enfocus$core$focus(){
return (function (node){
return node.focus();
});
});
/**
 * calls the blur function on the selected node
 */
enfocus.core.blur = (function enfocus$core$blur(){
return (function (node){
return node.blur();
});
});
/**
 * addes key value pair of data to the selected nodes. Only use clojure data structures when setting
 */
enfocus.core.set_data = (function enfocus$core$set_data(ky,val){
return enfocus.core.multi_node_chain.call(null,(function (p1__18159_SHARP_){
return domina.set_data_BANG_.call(null,p1__18159_SHARP_,ky,val);
}));
});
/**
 * delays and action by a set timeout, note this is an async operations
 */
enfocus.core.delay = (function enfocus$core$delay(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18162 = arguments.length;
var i__7267__auto___18163 = (0);
while(true){
if((i__7267__auto___18163 < len__7266__auto___18162)){
args__7273__auto__.push((arguments[i__7267__auto___18163]));

var G__18164 = (i__7267__auto___18163 + (1));
i__7267__auto___18163 = G__18164;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic = (function (ttime,funcs){
return (function (pnod){
return enfocus.core.setTimeout.call(null,(function (){
return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
});

enfocus.core.delay.cljs$lang$maxFixedArity = (1);

enfocus.core.delay.cljs$lang$applyTo = (function (seq18160){
var G__18161 = cljs.core.first.call(null,seq18160);
var seq18160__$1 = cljs.core.next.call(null,seq18160);
return enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic(G__18161,seq18160__$1);
});
/**
 * replaces entries like the following ${var1} in attributes and text
 */
enfocus.core.replace_vars = (function enfocus$core$replace_vars(vars){
var rep_str = (function enfocus$core$replace_vars_$_rep_str(text){
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__18166_SHARP_,p2__18165_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__18165_SHARP_));
}));
});
return (function enfocus$core$replace_vars_$_rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__18191_18199 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__18192_18200 = null;
var count__18193_18201 = (0);
var i__18194_18202 = (0);
while(true){
if((i__18194_18202 < count__18193_18201)){
var idx_18203 = cljs.core._nth.call(null,chunk__18192_18200,i__18194_18202);
var attr_18204 = pnod.attributes.item(idx_18203);
if(cljs.core.truth_(attr_18204.specified)){
attr_18204.value = rep_str.call(null,attr_18204.value);
} else {
}

var G__18205 = seq__18191_18199;
var G__18206 = chunk__18192_18200;
var G__18207 = count__18193_18201;
var G__18208 = (i__18194_18202 + (1));
seq__18191_18199 = G__18205;
chunk__18192_18200 = G__18206;
count__18193_18201 = G__18207;
i__18194_18202 = G__18208;
continue;
} else {
var temp__4425__auto___18209 = cljs.core.seq.call(null,seq__18191_18199);
if(temp__4425__auto___18209){
var seq__18191_18210__$1 = temp__4425__auto___18209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18191_18210__$1)){
var c__7007__auto___18211 = cljs.core.chunk_first.call(null,seq__18191_18210__$1);
var G__18212 = cljs.core.chunk_rest.call(null,seq__18191_18210__$1);
var G__18213 = c__7007__auto___18211;
var G__18214 = cljs.core.count.call(null,c__7007__auto___18211);
var G__18215 = (0);
seq__18191_18199 = G__18212;
chunk__18192_18200 = G__18213;
count__18193_18201 = G__18214;
i__18194_18202 = G__18215;
continue;
} else {
var idx_18216 = cljs.core.first.call(null,seq__18191_18210__$1);
var attr_18217 = pnod.attributes.item(idx_18216);
if(cljs.core.truth_(attr_18217.specified)){
attr_18217.value = rep_str.call(null,attr_18217.value);
} else {
}

var G__18218 = cljs.core.next.call(null,seq__18191_18210__$1);
var G__18219 = null;
var G__18220 = (0);
var G__18221 = (0);
seq__18191_18199 = G__18218;
chunk__18192_18200 = G__18219;
count__18193_18201 = G__18220;
i__18194_18202 = G__18221;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core._EQ_.call(null,pnod.nodeType,(3))){
return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else {
var seq__18195 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__18196 = null;
var count__18197 = (0);
var i__18198 = (0);
while(true){
if((i__18198 < count__18197)){
var cnode = cljs.core._nth.call(null,chunk__18196,i__18198);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);

var G__18222 = seq__18195;
var G__18223 = chunk__18196;
var G__18224 = count__18197;
var G__18225 = (i__18198 + (1));
seq__18195 = G__18222;
chunk__18196 = G__18223;
count__18197 = G__18224;
i__18198 = G__18225;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18195);
if(temp__4425__auto__){
var seq__18195__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18195__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18195__$1);
var G__18226 = cljs.core.chunk_rest.call(null,seq__18195__$1);
var G__18227 = c__7007__auto__;
var G__18228 = cljs.core.count.call(null,c__7007__auto__);
var G__18229 = (0);
seq__18195 = G__18226;
chunk__18196 = G__18227;
count__18197 = G__18228;
i__18198 = G__18229;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__18195__$1);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);

var G__18230 = cljs.core.next.call(null,seq__18195__$1);
var G__18231 = null;
var G__18232 = (0);
var G__18233 = (0);
seq__18195 = G__18230;
chunk__18196 = G__18231;
count__18197 = G__18232;
i__18198 = G__18233;
continue;
}
} else {
return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function enfocus$core$exists_in_QMARK_(col_or_val,val){
if(cljs.core.coll_QMARK_.call(null,col_or_val)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([val], true),col_or_val);
} else {
return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
 * sets the value of a form input (text,select,checkbox,etc...)
 *   format (at node (set-form-input value))
 */
enfocus.core.set_form_input = (function enfocus$core$set_form_input(val){
return (function (el){
if((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio"))){
return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else {
var nval = (((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string')))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));
return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
 * sets the values of a form based on a map
 *   (set-form {:val1 'val' :val2 'val'})
 */
enfocus.core.set_form = (function enfocus$core$set_form(value_map){
return (function (form_node){
if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM")){
var seq__18238 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__18239 = null;
var count__18240 = (0);
var i__18241 = (0);
while(true){
if((i__18241 < count__18240)){
var idx = cljs.core._nth.call(null,chunk__18239,i__18241);
var el_18242 = (form_node.elements[idx]);
var ky_18243 = cljs.core.keyword.call(null,el_18242.name);
var val_18244 = ky_18243.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_18243)){
var val_18245__$1 = (cljs.core.truth_(val_18244)?val_18244:"");
enfocus.core.set_form_input.call(null,val_18245__$1).call(null,el_18242);
} else {
}

var G__18246 = seq__18238;
var G__18247 = chunk__18239;
var G__18248 = count__18240;
var G__18249 = (i__18241 + (1));
seq__18238 = G__18246;
chunk__18239 = G__18247;
count__18240 = G__18248;
i__18241 = G__18249;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18238);
if(temp__4425__auto__){
var seq__18238__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18238__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18238__$1);
var G__18250 = cljs.core.chunk_rest.call(null,seq__18238__$1);
var G__18251 = c__7007__auto__;
var G__18252 = cljs.core.count.call(null,c__7007__auto__);
var G__18253 = (0);
seq__18238 = G__18250;
chunk__18239 = G__18251;
count__18240 = G__18252;
i__18241 = G__18253;
continue;
} else {
var idx = cljs.core.first.call(null,seq__18238__$1);
var el_18254 = (form_node.elements[idx]);
var ky_18255 = cljs.core.keyword.call(null,el_18254.name);
var val_18256 = ky_18255.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_18255)){
var val_18257__$1 = (cljs.core.truth_(val_18256)?val_18256:"");
enfocus.core.set_form_input.call(null,val_18257__$1).call(null,el_18254);
} else {
}

var G__18258 = cljs.core.next.call(null,seq__18238__$1);
var G__18259 = null;
var G__18260 = (0);
var G__18261 = (0);
seq__18238 = G__18258;
chunk__18239 = G__18259;
count__18240 = G__18260;
i__18241 = G__18261;
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
});
/**
 * takes clojure data structure and emits a document element
 */
enfocus.core.html = (function enfocus$core$html(node_spec){
if(typeof node_spec === 'string'){
return document.createTextNode(node_spec);
} else {
if(cljs.core.vector_QMARK_.call(null,node_spec)){
var vec__18271 = node_spec;
var tag = cljs.core.nth.call(null,vec__18271,(0),null);
var vec__18272 = cljs.core.nthnext.call(null,vec__18271,(1));
var m = cljs.core.nth.call(null,vec__18272,(0),null);
var ms = cljs.core.nthnext.call(null,vec__18272,(1));
var more = vec__18272;
var vec__18273 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__18273,(0),null);
var segments = cljs.core.nthnext.call(null,vec__18273,(1));
var id = cljs.core.some.call(null,((function (vec__18271,tag,vec__18272,m,ms,more,vec__18273,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__18271,tag,vec__18272,m,ms,more,vec__18273,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__18271,tag,vec__18272,m,ms,more,vec__18273,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__18271,tag,vec__18272,m,ms,more,vec__18273,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,enfocus$core$html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__18274_18280 = cljs.core.seq.call(null,attrs__$2);
var chunk__18275_18281 = null;
var count__18276_18282 = (0);
var i__18277_18283 = (0);
while(true){
if((i__18277_18283 < count__18276_18282)){
var vec__18278_18284 = cljs.core._nth.call(null,chunk__18275_18281,i__18277_18283);
var key_18285 = cljs.core.nth.call(null,vec__18278_18284,(0),null);
var val_18286 = cljs.core.nth.call(null,vec__18278_18284,(1),null);
node.setAttribute(cljs.core.name.call(null,key_18285),val_18286);

var G__18287 = seq__18274_18280;
var G__18288 = chunk__18275_18281;
var G__18289 = count__18276_18282;
var G__18290 = (i__18277_18283 + (1));
seq__18274_18280 = G__18287;
chunk__18275_18281 = G__18288;
count__18276_18282 = G__18289;
i__18277_18283 = G__18290;
continue;
} else {
var temp__4425__auto___18291 = cljs.core.seq.call(null,seq__18274_18280);
if(temp__4425__auto___18291){
var seq__18274_18292__$1 = temp__4425__auto___18291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18274_18292__$1)){
var c__7007__auto___18293 = cljs.core.chunk_first.call(null,seq__18274_18292__$1);
var G__18294 = cljs.core.chunk_rest.call(null,seq__18274_18292__$1);
var G__18295 = c__7007__auto___18293;
var G__18296 = cljs.core.count.call(null,c__7007__auto___18293);
var G__18297 = (0);
seq__18274_18280 = G__18294;
chunk__18275_18281 = G__18295;
count__18276_18282 = G__18296;
i__18277_18283 = G__18297;
continue;
} else {
var vec__18279_18298 = cljs.core.first.call(null,seq__18274_18292__$1);
var key_18299 = cljs.core.nth.call(null,vec__18279_18298,(0),null);
var val_18300 = cljs.core.nth.call(null,vec__18279_18298,(1),null);
node.setAttribute(cljs.core.name.call(null,key_18299),val_18300);

var G__18301 = cljs.core.next.call(null,seq__18274_18292__$1);
var G__18302 = null;
var G__18303 = (0);
var G__18304 = (0);
seq__18274_18280 = G__18301;
chunk__18275_18281 = G__18302;
count__18276_18282 = G__18303;
i__18277_18283 = G__18304;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(content)){
return domina.append_BANG_.call(null,node,content);
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,node_spec)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,enfocus$core$html,node_spec));
} else {
return document.createTextNode([cljs.core.str(node_spec)].join(''));

}
}
}
});
/**
 * returns the attribute on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_attr = (function enfocus$core$get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
 * returns the text value of the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_text = (function enfocus$core$get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
 * returns the data on a selected node for a given key. If bubble is set will look at parent
 */
enfocus.core.get_data = (function enfocus$core$get_data(var_args){
var args18305 = [];
var len__7266__auto___18308 = arguments.length;
var i__7267__auto___18309 = (0);
while(true){
if((i__7267__auto___18309 < len__7266__auto___18308)){
args18305.push((arguments[i__7267__auto___18309]));

var G__18310 = (i__7267__auto___18309 + (1));
i__7267__auto___18309 = G__18310;
continue;
} else {
}
break;
}

var G__18307 = args18305.length;
switch (G__18307) {
case 1:
return enfocus.core.get_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18305.length)].join('')));

}
});

enfocus.core.get_data.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return enfocus.core.get_data.call(null,ky,false);
});

enfocus.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,node,ky,bubble);
}));
});

enfocus.core.get_data.cljs$lang$maxFixedArity = 2;
/**
 * returns the property on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_prop = (function enfocus$core$get_prop(prop){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
 * this function takes a map, key and value.  It will check if
 * the value exists and create a seq of values if one exits.
 */
enfocus.core.merge_form_val = (function enfocus$core$merge_form_val(form_map,ky,val){
var mval = form_map.call(null,ky);
if(cljs.core.truth_(val)){
if((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val))){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else {
if(cljs.core.coll_QMARK_.call(null,mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else {
if(cljs.core.truth_(mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.fromArray([mval,val], true));
} else {
return cljs.core.assoc.call(null,form_map,ky,val);

}
}
}
} else {
return form_map;
}
});
/**
 * returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
 */
enfocus.core.read_form_input = (function enfocus$core$read_form_input(){
var trans = (function (nodes,chain){
var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__18313_SHARP_,p2__18312_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__18312_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__18313_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__18313_SHARP_,vals);
} else {
return p1__18313_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);
if(cljs.core.empty_QMARK_.call(null,result)){
return null;
} else {
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first.call(null,nod_col).type)))){
return cljs.core.first.call(null,result);
} else {
return result;

}
}
});
if(typeof enfocus.core.t_enfocus$core18318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core18318 = (function (read_form_input,trans,meta18319){
this.read_form_input = read_form_input;
this.trans = trans;
this.meta18319 = meta18319;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core18318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_18320,meta18319__$1){
var self__ = this;
var _18320__$1 = this;
return (new enfocus.core.t_enfocus$core18318(self__.read_form_input,self__.trans,meta18319__$1));
});})(trans))
;

enfocus.core.t_enfocus$core18318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_18320){
var self__ = this;
var _18320__$1 = this;
return self__.meta18319;
});})(trans))
;

enfocus.core.t_enfocus$core18318.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t_enfocus$core18318.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core18318.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core18318.prototype.call = ((function (trans){
return (function() {
var G__18322 = null;
var G__18322__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__18322__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__18322 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__18322__2.call(this,self__,nodes);
case 3:
return G__18322__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18322.cljs$core$IFn$_invoke$arity$2 = G__18322__2;
G__18322.cljs$core$IFn$_invoke$arity$3 = G__18322__3;
return G__18322;
})()
;})(trans))
;

enfocus.core.t_enfocus$core18318.prototype.apply = ((function (trans){
return (function (self__,args18321){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18321)));
});})(trans))
;

enfocus.core.t_enfocus$core18318.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core18318.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core18318.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"read-form-input","read-form-input",1575979010,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"doc","doc",1913296891),"returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values."], null)),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta18319","meta18319",1912944186,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core18318.cljs$lang$type = true;

enfocus.core.t_enfocus$core18318.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core18318";

enfocus.core.t_enfocus$core18318.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__6802__auto__,writer__6803__auto__,opt__6804__auto__){
return cljs.core._write.call(null,writer__6803__auto__,"enfocus.core/t_enfocus$core18318");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core18318 = ((function (trans){
return (function enfocus$core$read_form_input_$___GT_t_enfocus$core18318(read_form_input__$1,trans__$1,meta18319){
return (new enfocus.core.t_enfocus$core18318(read_form_input__$1,trans__$1,meta18319));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core18318(enfocus$core$read_form_input,trans,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns a map of the form values tied to name of input fields.
 * {:name1 'value1' name2 #{'select1' 'select2'}}
 */
enfocus.core.read_form = (function enfocus$core$read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__18324_SHARP_,p2__18323_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__18323_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__18324_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__18323_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__18323_SHARP_)));
} else {
return p1__18324_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * filter allows you to apply function to futhur scope down what is returned by a selector
 */
enfocus.core.filter = (function enfocus$core$filter(tst,trans){
return enfocus.core.multi_node_chain.call(null,(function() {
var enfocus$core$filter_$_filt = null;
var enfocus$core$filter_$_filt__1 = (function (pnodes){
return enfocus$core$filter_$_filt.call(null,pnodes,null);
});
var enfocus$core$filter_$_filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res = cljs.core.filter.call(null,ttest,pnod_col);
if((chain == null)){
return enfocus.core.apply_transform.call(null,trans,res);
} else {
return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
enfocus$core$filter_$_filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$filter_$_filt__1.call(this,pnodes);
case 2:
return enfocus$core$filter_$_filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enfocus$core$filter_$_filt.cljs$core$IFn$_invoke$arity$1 = enfocus$core$filter_$_filt__1;
enfocus$core$filter_$_filt.cljs$core$IFn$_invoke$arity$2 = enfocus$core$filter_$_filt__2;
return enfocus$core$filter_$_filt;
})()
);
});
/**
 * registers a filter for a given keyword
 */
enfocus.core.register_filter = (function enfocus$core$register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
 * takes a list of options and returns the selected ones. 
 */
enfocus.core.selected_options = (function enfocus$core$selected_options(pnod){
return pnod.selected;
});
/**
 * takes a list of radio or checkboxes and returns the checked ones
 */
enfocus.core.checked_radio_checkbox = (function enfocus$core$checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function enfocus$core$match_QMARK_(selector){
return (function (node){
if(cljs.core.truth_((node["matches"]))){
return node.matches(selector);
} else {
if(cljs.core.truth_((node["matchesSelector"]))){
return node.matchesSelector(selector);
} else {
if(cljs.core.truth_((node["msMatchesSelector"]))){
return node.msMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["mozMatchesSelector"]))){
return node.mozMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["webkitMatchesSelector"]))){
return node.webkitMatchesSelector(selector);
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));

}
}
}
}
}
});
});
/**
 * converts keywords, symbols and strings used in the enlive selector
 * syntax to a string representing a standard css selector.  It also
 * applys id masking if mask provided
 */
enfocus.core.create_sel_str = (function enfocus$core$create_sel_str(var_args){
var args18326 = [];
var len__7266__auto___18329 = arguments.length;
var i__7267__auto___18330 = (0);
while(true){
if((i__7267__auto___18330 < len__7266__auto___18329)){
args18326.push((arguments[i__7267__auto___18330]));

var G__18331 = (i__7267__auto___18330 + (1));
i__7267__auto___18330 = G__18331;
continue;
} else {
}
break;
}

var G__18328 = args18326.length;
switch (G__18328) {
case 1:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18326.length)].join('')));

}
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.create_sel_str.call(null,"",css_sel);
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__18325_SHARP_){
if((p1__18325_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__18325_SHARP_);
} else {
if((p1__18325_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__18325_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__18325_SHARP_)){
return enfocus.core.create_sel_str.call(null,p1__18325_SHARP_);
} else {
if(typeof p1__18325_SHARP_ === 'string'){
return p1__18325_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else {
return null;
}
}
}
}
}),css_sel));
});

enfocus.core.create_sel_str.cljs$lang$maxFixedArity = 2;
/**
 * takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
 */
enfocus.core.css_select = (function enfocus$core$css_select(var_args){
var args18333 = [];
var len__7266__auto___18336 = arguments.length;
var i__7267__auto___18337 = (0);
while(true){
if((i__7267__auto___18337 < len__7266__auto___18336)){
args18333.push((arguments[i__7267__auto___18337]));

var G__18338 = (i__7267__auto___18337 + (1));
i__7267__auto___18337 = G__18338;
continue;
} else {
}
break;
}

var G__18335 = args18333.length;
switch (G__18335) {
case 1:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18333.length)].join('')));

}
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.css_select.call(null,"",document,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 = (function (dom_node,css_sel){
return enfocus.core.css_select.call(null,"",dom_node,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 = (function (id_mask_sym,dom_node,css_sel){
var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret = domina.css.sel.call(null,dom_node,sel);
return ret;
});

enfocus.core.css_select.cljs$lang$maxFixedArity = 3;
enfocus.core.nil_t = (function enfocus$core$nil_t(func){
var or__6196__auto__ = func;
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return enfocus.core.remove_node;
}
});
enfocus.core.i_at = (function enfocus$core$i_at(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18352 = arguments.length;
var i__7267__auto___18353 = (0);
while(true){
if((i__7267__auto___18353 < len__7266__auto___18352)){
args__7273__auto__.push((arguments[i__7267__auto___18353]));

var G__18354 = (i__7267__auto___18353 + (1));
i__7267__auto___18353 = G__18354;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((2) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((2)),(0),null)):null);
return enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7274__auto__);
});

enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic = (function (id_mask,node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var and__6184__auto__ = !((node == null));
if(and__6184__auto__){
if(!((node == null))){
if((false) || (node.enfocus$core$ISelector$)){
return true;
} else {
if((!node.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node);
}
} else {
return and__6184__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__18345 = ((sel_QMARK_)?(function (){var x__7030__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__7030__auto____$1 = cljs.core.conj.call(null,trans,node);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7030__auto____$1);
})(),x__7030__auto__);
})():(function (){var x__7030__auto__ = node;
return cljs.core._conj.call(null,(function (){var x__7030__auto____$1 = trans;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7030__auto____$1);
})(),x__7030__auto__);
})());
var node__$1 = cljs.core.nth.call(null,vec__18345,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__18345,(1),null);
var seq__18346 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__18347 = null;
var count__18348 = (0);
var i__18349 = (0);
while(true){
if((i__18349 < count__18348)){
var vec__18350 = cljs.core._nth.call(null,chunk__18347,i__18349);
var sel = cljs.core.nth.call(null,vec__18350,(0),null);
var t = cljs.core.nth.call(null,vec__18350,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__18355 = seq__18346;
var G__18356 = chunk__18347;
var G__18357 = count__18348;
var G__18358 = (i__18349 + (1));
seq__18346 = G__18355;
chunk__18347 = G__18356;
count__18348 = G__18357;
i__18349 = G__18358;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18346);
if(temp__4425__auto__){
var seq__18346__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18346__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__18346__$1);
var G__18359 = cljs.core.chunk_rest.call(null,seq__18346__$1);
var G__18360 = c__7007__auto__;
var G__18361 = cljs.core.count.call(null,c__7007__auto__);
var G__18362 = (0);
seq__18346 = G__18359;
chunk__18347 = G__18360;
count__18348 = G__18361;
i__18349 = G__18362;
continue;
} else {
var vec__18351 = cljs.core.first.call(null,seq__18346__$1);
var sel = cljs.core.nth.call(null,vec__18351,(0),null);
var t = cljs.core.nth.call(null,vec__18351,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__18363 = cljs.core.next.call(null,seq__18346__$1);
var G__18364 = null;
var G__18365 = (0);
var G__18366 = (0);
seq__18346 = G__18363;
chunk__18347 = G__18364;
count__18348 = G__18365;
i__18349 = G__18366;
continue;
}
} else {
return null;
}
}
break;
}
}
});

enfocus.core.i_at.cljs$lang$maxFixedArity = (2);

enfocus.core.i_at.cljs$lang$applyTo = (function (seq18340){
var G__18341 = cljs.core.first.call(null,seq18340);
var seq18340__$1 = cljs.core.next.call(null,seq18340);
var G__18342 = cljs.core.first.call(null,seq18340__$1);
var seq18340__$2 = cljs.core.next.call(null,seq18340__$1);
return enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic(G__18341,G__18342,seq18340__$2);
});
enfocus.core.at = (function enfocus$core$at(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18369 = arguments.length;
var i__7267__auto___18370 = (0);
while(true){
if((i__7267__auto___18370 < len__7266__auto___18369)){
args__7273__auto__.push((arguments[i__7267__auto___18370]));

var G__18371 = (i__7267__auto___18370 + (1));
i__7267__auto___18370 = G__18371;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
});

enfocus.core.at.cljs$lang$maxFixedArity = (1);

enfocus.core.at.cljs$lang$applyTo = (function (seq18367){
var G__18368 = cljs.core.first.call(null,seq18367);
var seq18367__$1 = cljs.core.next.call(null,seq18367);
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(G__18368,seq18367__$1);
});
enfocus.core.from = (function enfocus$core$from(var_args){
var args__7273__auto__ = [];
var len__7266__auto___18378 = arguments.length;
var i__7267__auto___18379 = (0);
while(true){
if((i__7267__auto___18379 < len__7266__auto___18378)){
args__7273__auto__.push((arguments[i__7267__auto___18379]));

var G__18380 = (i__7267__auto___18379 + (1));
i__7267__auto___18379 = G__18380;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = ((!((node == null)))?(((false) || (node.enfocus$core$ISelector$))?true:(((!node.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node):false)):cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node));
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__18375 = ((sel_QMARK_)?(function (){var x__7030__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__7030__auto____$1 = cljs.core.conj.call(null,trans,node);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7030__auto____$1);
})(),x__7030__auto__);
})():(function (){var x__7030__auto__ = node;
return cljs.core._conj.call(null,(function (){var x__7030__auto____$1 = trans;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7030__auto____$1);
})(),x__7030__auto__);
})());
var node__$1 = cljs.core.nth.call(null,vec__18375,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__18375,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__18375,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__18376){
var vec__18377 = p__18376;
var ky = cljs.core.nth.call(null,vec__18377,(0),null);
var sel = cljs.core.nth.call(null,vec__18377,(1),null);
var ext = cljs.core.nth.call(null,vec__18377,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__18375,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
});

enfocus.core.from.cljs$lang$maxFixedArity = (1);

enfocus.core.from.cljs$lang$applyTo = (function (seq18372){
var G__18373 = cljs.core.first.call(null,seq18372);
var seq18372__$1 = cljs.core.next.call(null,seq18372);
return enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic(G__18373,seq18372__$1);
});
enfocus.core.xpath = (function enfocus$core$xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_.call(null,id_mask)){
return domina.xpath.xpath.call(null,root,path);
} else {
var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));
var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));
return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function enfocus$core$this_node(root,id_mask){
return root;
});
if(cljs.core.truth_((typeof Text != 'undefined'))){
Text.prototype.domina$DomContent$ = true;

Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
var content__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});

Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
var content__$1 = this;
return content__$1;
});
} else {
}
(enfocus.core.ISelector["function"] = true);

(enfocus.core.select["function"] = (function() {
var G__18381 = null;
var G__18381__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__18381__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__18381__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__18381 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__18381__1.call(this,this$);
case 2:
return G__18381__2.call(this,this$,root);
case 3:
return G__18381__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18381.cljs$core$IFn$_invoke$arity$1 = G__18381__1;
G__18381.cljs$core$IFn$_invoke$arity$2 = G__18381__2;
G__18381.cljs$core$IFn$_invoke$arity$3 = G__18381__3;
return G__18381;
})()
);

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__18382 = null;
var G__18382__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__18382__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__18382__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__18382 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__18382__1.call(this,this$);
case 2:
return G__18382__2.call(this,this$,root);
case 3:
return G__18382__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18382.cljs$core$IFn$_invoke$arity$1 = G__18382__1;
G__18382.cljs$core$IFn$_invoke$arity$2 = G__18382__2;
G__18382.cljs$core$IFn$_invoke$arity$3 = G__18382__3;
return G__18382;
})()
);

(enfocus.core.ISelector["null"] = true);

(enfocus.core.select["null"] = (function() {
var G__18383 = null;
var G__18383__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__18383__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__18383__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__18383 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__18383__1.call(this,this$);
case 2:
return G__18383__2.call(this,this$,root);
case 3:
return G__18383__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18383.cljs$core$IFn$_invoke$arity$1 = G__18383__1;
G__18383.cljs$core$IFn$_invoke$arity$2 = G__18383__2;
G__18383.cljs$core$IFn$_invoke$arity$3 = G__18383__3;
return G__18383;
})()
);
(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__18384 = null;
var G__18384__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__18384__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__18384 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__18384__2.call(this,trans,nodes);
case 3:
return G__18384__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18384.cljs$core$IFn$_invoke$arity$2 = G__18384__2;
G__18384.cljs$core$IFn$_invoke$arity$3 = G__18384__3;
return G__18384;
})()
);

(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__18385 = null;
var G__18385__2 = (function (trans,nodes){
return nodes;
});
var G__18385__3 = (function (trans,nodes,chain){
return nodes;
});
G__18385 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__18385__2.call(this,trans,nodes);
case 3:
return G__18385__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18385.cljs$core$IFn$_invoke$arity$2 = G__18385__2;
G__18385.cljs$core$IFn$_invoke$arity$3 = G__18385__3;
return G__18385;
})()
);
