// Compiled by ClojureScript 1.8.51 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_11592 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_11593 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_11594 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_11594,opt_wrapper_11592,table_section_wrapper_11593,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_11592,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_11593,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_11593,cell_wrapper_11594,table_section_wrapper_11593,table_section_wrapper_11593]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__6184__auto__ = div.firstChild;
if(cljs.core.truth_(and__6184__auto__)){
return div.firstChild.childNodes;
} else {
return and__6184__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__11599 = cljs.core.seq.call(null,tbody);
var chunk__11600 = null;
var count__11601 = (0);
var i__11602 = (0);
while(true){
if((i__11602 < count__11601)){
var child = cljs.core._nth.call(null,chunk__11600,i__11602);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__11603 = seq__11599;
var G__11604 = chunk__11600;
var G__11605 = count__11601;
var G__11606 = (i__11602 + (1));
seq__11599 = G__11603;
chunk__11600 = G__11604;
count__11601 = G__11605;
i__11602 = G__11606;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11599);
if(temp__4425__auto__){
var seq__11599__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11599__$1)){
var c__7007__auto__ = cljs.core.chunk_first.call(null,seq__11599__$1);
var G__11607 = cljs.core.chunk_rest.call(null,seq__11599__$1);
var G__11608 = c__7007__auto__;
var G__11609 = cljs.core.count.call(null,c__7007__auto__);
var G__11610 = (0);
seq__11599 = G__11607;
chunk__11600 = G__11608;
count__11601 = G__11609;
i__11602 = G__11610;
continue;
} else {
var child = cljs.core.first.call(null,seq__11599__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__11611 = cljs.core.next.call(null,seq__11599__$1);
var G__11612 = null;
var G__11613 = (0);
var G__11614 = (0);
seq__11599 = G__11611;
chunk__11600 = G__11612;
count__11601 = G__11613;
i__11602 = G__11614;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__11616 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__11616,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__11616,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__11616,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__11617 = wrapper.lastChild;
var G__11618 = (level - (1));
wrapper = G__11617;
level = G__11618;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__6184__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__6184__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__6184__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__6859__auto__ = (((content == null))?null:content);
var m__6860__auto__ = (domina.nodes[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,content);
} else {
var m__6860__auto____$1 = (domina.nodes["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__6859__auto__ = (((nodeseq == null))?null:nodeseq);
var m__6860__auto__ = (domina.single_node[goog.typeOf(x__6859__auto__)]);
if(!((m__6860__auto__ == null))){
return m__6860__auto__.call(null,nodeseq);
} else {
var m__6860__auto____$1 = (domina.single_node["_"]);
if(!((m__6860__auto____$1 == null))){
return m__6860__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__7273__auto__ = [];
var len__7266__auto___11620 = arguments.length;
var i__7267__auto___11621 = (0);
while(true){
if((i__7267__auto___11621 < len__7266__auto___11620)){
args__7273__auto__.push((arguments[i__7267__auto___11621]));

var G__11622 = (i__7267__auto___11621 + (1));
i__7267__auto___11621 = G__11622;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__6184__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__6184__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__6184__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq11619){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11619));
});
domina.log = (function domina$log(var_args){
var args__7273__auto__ = [];
var len__7266__auto___11624 = arguments.length;
var i__7267__auto___11625 = (0);
while(true){
if((i__7267__auto___11625 < len__7266__auto___11624)){
args__7273__auto__.push((arguments[i__7267__auto___11625]));

var G__11626 = (i__7267__auto___11625 + (1));
i__7267__auto___11625 = G__11626;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq11623){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11623));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__7273__auto__ = [];
var len__7266__auto___11628 = arguments.length;
var i__7267__auto___11629 = (0);
while(true){
if((i__7267__auto___11629 < len__7266__auto___11628)){
args__7273__auto__.push((arguments[i__7267__auto___11629]));

var G__11630 = (i__7267__auto___11629 + (1));
i__7267__auto___11629 = G__11630;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((0) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__7274__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq11627){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11627));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__11631_SHARP_){
return p1__11631_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__11632_SHARP_,p2__11633_SHARP_){
return goog.dom.insertChildAt(p1__11632_SHARP_,p2__11633_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11635_SHARP_,p2__11634_SHARP_){
return goog.dom.insertSiblingBefore(p2__11634_SHARP_,p1__11635_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11637_SHARP_,p2__11636_SHARP_){
return goog.dom.insertSiblingAfter(p2__11636_SHARP_,p1__11637_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11639_SHARP_,p2__11638_SHARP_){
return goog.dom.replaceNode(p2__11638_SHARP_,p1__11639_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__7273__auto__ = [];
var len__7266__auto___11647 = arguments.length;
var i__7267__auto___11648 = (0);
while(true){
if((i__7267__auto___11648 < len__7266__auto___11647)){
args__7273__auto__.push((arguments[i__7267__auto___11648]));

var G__11649 = (i__7267__auto___11648 + (1));
i__7267__auto___11648 = G__11649;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((2) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7274__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__11643_11650 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11644_11651 = null;
var count__11645_11652 = (0);
var i__11646_11653 = (0);
while(true){
if((i__11646_11653 < count__11645_11652)){
var n_11654 = cljs.core._nth.call(null,chunk__11644_11651,i__11646_11653);
goog.style.setStyle(n_11654,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11655 = seq__11643_11650;
var G__11656 = chunk__11644_11651;
var G__11657 = count__11645_11652;
var G__11658 = (i__11646_11653 + (1));
seq__11643_11650 = G__11655;
chunk__11644_11651 = G__11656;
count__11645_11652 = G__11657;
i__11646_11653 = G__11658;
continue;
} else {
var temp__4425__auto___11659 = cljs.core.seq.call(null,seq__11643_11650);
if(temp__4425__auto___11659){
var seq__11643_11660__$1 = temp__4425__auto___11659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11643_11660__$1)){
var c__7007__auto___11661 = cljs.core.chunk_first.call(null,seq__11643_11660__$1);
var G__11662 = cljs.core.chunk_rest.call(null,seq__11643_11660__$1);
var G__11663 = c__7007__auto___11661;
var G__11664 = cljs.core.count.call(null,c__7007__auto___11661);
var G__11665 = (0);
seq__11643_11650 = G__11662;
chunk__11644_11651 = G__11663;
count__11645_11652 = G__11664;
i__11646_11653 = G__11665;
continue;
} else {
var n_11666 = cljs.core.first.call(null,seq__11643_11660__$1);
goog.style.setStyle(n_11666,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11667 = cljs.core.next.call(null,seq__11643_11660__$1);
var G__11668 = null;
var G__11669 = (0);
var G__11670 = (0);
seq__11643_11650 = G__11667;
chunk__11644_11651 = G__11668;
count__11645_11652 = G__11669;
i__11646_11653 = G__11670;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq11640){
var G__11641 = cljs.core.first.call(null,seq11640);
var seq11640__$1 = cljs.core.next.call(null,seq11640);
var G__11642 = cljs.core.first.call(null,seq11640__$1);
var seq11640__$2 = cljs.core.next.call(null,seq11640__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11641,G__11642,seq11640__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__7273__auto__ = [];
var len__7266__auto___11678 = arguments.length;
var i__7267__auto___11679 = (0);
while(true){
if((i__7267__auto___11679 < len__7266__auto___11678)){
args__7273__auto__.push((arguments[i__7267__auto___11679]));

var G__11680 = (i__7267__auto___11679 + (1));
i__7267__auto___11679 = G__11680;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((2) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7274__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__11674_11681 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11675_11682 = null;
var count__11676_11683 = (0);
var i__11677_11684 = (0);
while(true){
if((i__11677_11684 < count__11676_11683)){
var n_11685 = cljs.core._nth.call(null,chunk__11675_11682,i__11677_11684);
n_11685.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11686 = seq__11674_11681;
var G__11687 = chunk__11675_11682;
var G__11688 = count__11676_11683;
var G__11689 = (i__11677_11684 + (1));
seq__11674_11681 = G__11686;
chunk__11675_11682 = G__11687;
count__11676_11683 = G__11688;
i__11677_11684 = G__11689;
continue;
} else {
var temp__4425__auto___11690 = cljs.core.seq.call(null,seq__11674_11681);
if(temp__4425__auto___11690){
var seq__11674_11691__$1 = temp__4425__auto___11690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11674_11691__$1)){
var c__7007__auto___11692 = cljs.core.chunk_first.call(null,seq__11674_11691__$1);
var G__11693 = cljs.core.chunk_rest.call(null,seq__11674_11691__$1);
var G__11694 = c__7007__auto___11692;
var G__11695 = cljs.core.count.call(null,c__7007__auto___11692);
var G__11696 = (0);
seq__11674_11681 = G__11693;
chunk__11675_11682 = G__11694;
count__11676_11683 = G__11695;
i__11677_11684 = G__11696;
continue;
} else {
var n_11697 = cljs.core.first.call(null,seq__11674_11691__$1);
n_11697.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11698 = cljs.core.next.call(null,seq__11674_11691__$1);
var G__11699 = null;
var G__11700 = (0);
var G__11701 = (0);
seq__11674_11681 = G__11698;
chunk__11675_11682 = G__11699;
count__11676_11683 = G__11700;
i__11677_11684 = G__11701;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq11671){
var G__11672 = cljs.core.first.call(null,seq11671);
var seq11671__$1 = cljs.core.next.call(null,seq11671);
var G__11673 = cljs.core.first.call(null,seq11671__$1);
var seq11671__$2 = cljs.core.next.call(null,seq11671__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11672,G__11673,seq11671__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__11706_11710 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11707_11711 = null;
var count__11708_11712 = (0);
var i__11709_11713 = (0);
while(true){
if((i__11709_11713 < count__11708_11712)){
var n_11714 = cljs.core._nth.call(null,chunk__11707_11711,i__11709_11713);
n_11714.removeAttribute(cljs.core.name.call(null,name));

var G__11715 = seq__11706_11710;
var G__11716 = chunk__11707_11711;
var G__11717 = count__11708_11712;
var G__11718 = (i__11709_11713 + (1));
seq__11706_11710 = G__11715;
chunk__11707_11711 = G__11716;
count__11708_11712 = G__11717;
i__11709_11713 = G__11718;
continue;
} else {
var temp__4425__auto___11719 = cljs.core.seq.call(null,seq__11706_11710);
if(temp__4425__auto___11719){
var seq__11706_11720__$1 = temp__4425__auto___11719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11706_11720__$1)){
var c__7007__auto___11721 = cljs.core.chunk_first.call(null,seq__11706_11720__$1);
var G__11722 = cljs.core.chunk_rest.call(null,seq__11706_11720__$1);
var G__11723 = c__7007__auto___11721;
var G__11724 = cljs.core.count.call(null,c__7007__auto___11721);
var G__11725 = (0);
seq__11706_11710 = G__11722;
chunk__11707_11711 = G__11723;
count__11708_11712 = G__11724;
i__11709_11713 = G__11725;
continue;
} else {
var n_11726 = cljs.core.first.call(null,seq__11706_11720__$1);
n_11726.removeAttribute(cljs.core.name.call(null,name));

var G__11727 = cljs.core.next.call(null,seq__11706_11720__$1);
var G__11728 = null;
var G__11729 = (0);
var G__11730 = (0);
seq__11706_11710 = G__11727;
chunk__11707_11711 = G__11728;
count__11708_11712 = G__11729;
i__11709_11713 = G__11730;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__11732 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__11732,(0),null);
var v = cljs.core.nth.call(null,vec__11732,(1),null);
if(cljs.core.truth_((function (){var and__6184__auto__ = k;
if(cljs.core.truth_(and__6184__auto__)){
return v;
} else {
return and__6184__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__11733_SHARP_){
var attr = attrs__$1.item(p1__11733_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__11740_11746 = cljs.core.seq.call(null,styles);
var chunk__11741_11747 = null;
var count__11742_11748 = (0);
var i__11743_11749 = (0);
while(true){
if((i__11743_11749 < count__11742_11748)){
var vec__11744_11750 = cljs.core._nth.call(null,chunk__11741_11747,i__11743_11749);
var name_11751 = cljs.core.nth.call(null,vec__11744_11750,(0),null);
var value_11752 = cljs.core.nth.call(null,vec__11744_11750,(1),null);
domina.set_style_BANG_.call(null,content,name_11751,value_11752);

var G__11753 = seq__11740_11746;
var G__11754 = chunk__11741_11747;
var G__11755 = count__11742_11748;
var G__11756 = (i__11743_11749 + (1));
seq__11740_11746 = G__11753;
chunk__11741_11747 = G__11754;
count__11742_11748 = G__11755;
i__11743_11749 = G__11756;
continue;
} else {
var temp__4425__auto___11757 = cljs.core.seq.call(null,seq__11740_11746);
if(temp__4425__auto___11757){
var seq__11740_11758__$1 = temp__4425__auto___11757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11740_11758__$1)){
var c__7007__auto___11759 = cljs.core.chunk_first.call(null,seq__11740_11758__$1);
var G__11760 = cljs.core.chunk_rest.call(null,seq__11740_11758__$1);
var G__11761 = c__7007__auto___11759;
var G__11762 = cljs.core.count.call(null,c__7007__auto___11759);
var G__11763 = (0);
seq__11740_11746 = G__11760;
chunk__11741_11747 = G__11761;
count__11742_11748 = G__11762;
i__11743_11749 = G__11763;
continue;
} else {
var vec__11745_11764 = cljs.core.first.call(null,seq__11740_11758__$1);
var name_11765 = cljs.core.nth.call(null,vec__11745_11764,(0),null);
var value_11766 = cljs.core.nth.call(null,vec__11745_11764,(1),null);
domina.set_style_BANG_.call(null,content,name_11765,value_11766);

var G__11767 = cljs.core.next.call(null,seq__11740_11758__$1);
var G__11768 = null;
var G__11769 = (0);
var G__11770 = (0);
seq__11740_11746 = G__11767;
chunk__11741_11747 = G__11768;
count__11742_11748 = G__11769;
i__11743_11749 = G__11770;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__11777_11783 = cljs.core.seq.call(null,attrs);
var chunk__11778_11784 = null;
var count__11779_11785 = (0);
var i__11780_11786 = (0);
while(true){
if((i__11780_11786 < count__11779_11785)){
var vec__11781_11787 = cljs.core._nth.call(null,chunk__11778_11784,i__11780_11786);
var name_11788 = cljs.core.nth.call(null,vec__11781_11787,(0),null);
var value_11789 = cljs.core.nth.call(null,vec__11781_11787,(1),null);
domina.set_attr_BANG_.call(null,content,name_11788,value_11789);

var G__11790 = seq__11777_11783;
var G__11791 = chunk__11778_11784;
var G__11792 = count__11779_11785;
var G__11793 = (i__11780_11786 + (1));
seq__11777_11783 = G__11790;
chunk__11778_11784 = G__11791;
count__11779_11785 = G__11792;
i__11780_11786 = G__11793;
continue;
} else {
var temp__4425__auto___11794 = cljs.core.seq.call(null,seq__11777_11783);
if(temp__4425__auto___11794){
var seq__11777_11795__$1 = temp__4425__auto___11794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11777_11795__$1)){
var c__7007__auto___11796 = cljs.core.chunk_first.call(null,seq__11777_11795__$1);
var G__11797 = cljs.core.chunk_rest.call(null,seq__11777_11795__$1);
var G__11798 = c__7007__auto___11796;
var G__11799 = cljs.core.count.call(null,c__7007__auto___11796);
var G__11800 = (0);
seq__11777_11783 = G__11797;
chunk__11778_11784 = G__11798;
count__11779_11785 = G__11799;
i__11780_11786 = G__11800;
continue;
} else {
var vec__11782_11801 = cljs.core.first.call(null,seq__11777_11795__$1);
var name_11802 = cljs.core.nth.call(null,vec__11782_11801,(0),null);
var value_11803 = cljs.core.nth.call(null,vec__11782_11801,(1),null);
domina.set_attr_BANG_.call(null,content,name_11802,value_11803);

var G__11804 = cljs.core.next.call(null,seq__11777_11795__$1);
var G__11805 = null;
var G__11806 = (0);
var G__11807 = (0);
seq__11777_11783 = G__11804;
chunk__11778_11784 = G__11805;
count__11779_11785 = G__11806;
i__11780_11786 = G__11807;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__11812_11816 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11813_11817 = null;
var count__11814_11818 = (0);
var i__11815_11819 = (0);
while(true){
if((i__11815_11819 < count__11814_11818)){
var node_11820 = cljs.core._nth.call(null,chunk__11813_11817,i__11815_11819);
goog.dom.classes.add(node_11820,class$);

var G__11821 = seq__11812_11816;
var G__11822 = chunk__11813_11817;
var G__11823 = count__11814_11818;
var G__11824 = (i__11815_11819 + (1));
seq__11812_11816 = G__11821;
chunk__11813_11817 = G__11822;
count__11814_11818 = G__11823;
i__11815_11819 = G__11824;
continue;
} else {
var temp__4425__auto___11825 = cljs.core.seq.call(null,seq__11812_11816);
if(temp__4425__auto___11825){
var seq__11812_11826__$1 = temp__4425__auto___11825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11812_11826__$1)){
var c__7007__auto___11827 = cljs.core.chunk_first.call(null,seq__11812_11826__$1);
var G__11828 = cljs.core.chunk_rest.call(null,seq__11812_11826__$1);
var G__11829 = c__7007__auto___11827;
var G__11830 = cljs.core.count.call(null,c__7007__auto___11827);
var G__11831 = (0);
seq__11812_11816 = G__11828;
chunk__11813_11817 = G__11829;
count__11814_11818 = G__11830;
i__11815_11819 = G__11831;
continue;
} else {
var node_11832 = cljs.core.first.call(null,seq__11812_11826__$1);
goog.dom.classes.add(node_11832,class$);

var G__11833 = cljs.core.next.call(null,seq__11812_11826__$1);
var G__11834 = null;
var G__11835 = (0);
var G__11836 = (0);
seq__11812_11816 = G__11833;
chunk__11813_11817 = G__11834;
count__11814_11818 = G__11835;
i__11815_11819 = G__11836;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__11841_11845 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11842_11846 = null;
var count__11843_11847 = (0);
var i__11844_11848 = (0);
while(true){
if((i__11844_11848 < count__11843_11847)){
var node_11849 = cljs.core._nth.call(null,chunk__11842_11846,i__11844_11848);
goog.dom.classes.remove(node_11849,class$);

var G__11850 = seq__11841_11845;
var G__11851 = chunk__11842_11846;
var G__11852 = count__11843_11847;
var G__11853 = (i__11844_11848 + (1));
seq__11841_11845 = G__11850;
chunk__11842_11846 = G__11851;
count__11843_11847 = G__11852;
i__11844_11848 = G__11853;
continue;
} else {
var temp__4425__auto___11854 = cljs.core.seq.call(null,seq__11841_11845);
if(temp__4425__auto___11854){
var seq__11841_11855__$1 = temp__4425__auto___11854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11841_11855__$1)){
var c__7007__auto___11856 = cljs.core.chunk_first.call(null,seq__11841_11855__$1);
var G__11857 = cljs.core.chunk_rest.call(null,seq__11841_11855__$1);
var G__11858 = c__7007__auto___11856;
var G__11859 = cljs.core.count.call(null,c__7007__auto___11856);
var G__11860 = (0);
seq__11841_11845 = G__11857;
chunk__11842_11846 = G__11858;
count__11843_11847 = G__11859;
i__11844_11848 = G__11860;
continue;
} else {
var node_11861 = cljs.core.first.call(null,seq__11841_11855__$1);
goog.dom.classes.remove(node_11861,class$);

var G__11862 = cljs.core.next.call(null,seq__11841_11855__$1);
var G__11863 = null;
var G__11864 = (0);
var G__11865 = (0);
seq__11841_11845 = G__11862;
chunk__11842_11846 = G__11863;
count__11843_11847 = G__11864;
i__11844_11848 = G__11865;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__11870_11874 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11871_11875 = null;
var count__11872_11876 = (0);
var i__11873_11877 = (0);
while(true){
if((i__11873_11877 < count__11872_11876)){
var node_11878 = cljs.core._nth.call(null,chunk__11871_11875,i__11873_11877);
goog.dom.classes.toggle(node_11878,class$);

var G__11879 = seq__11870_11874;
var G__11880 = chunk__11871_11875;
var G__11881 = count__11872_11876;
var G__11882 = (i__11873_11877 + (1));
seq__11870_11874 = G__11879;
chunk__11871_11875 = G__11880;
count__11872_11876 = G__11881;
i__11873_11877 = G__11882;
continue;
} else {
var temp__4425__auto___11883 = cljs.core.seq.call(null,seq__11870_11874);
if(temp__4425__auto___11883){
var seq__11870_11884__$1 = temp__4425__auto___11883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11870_11884__$1)){
var c__7007__auto___11885 = cljs.core.chunk_first.call(null,seq__11870_11884__$1);
var G__11886 = cljs.core.chunk_rest.call(null,seq__11870_11884__$1);
var G__11887 = c__7007__auto___11885;
var G__11888 = cljs.core.count.call(null,c__7007__auto___11885);
var G__11889 = (0);
seq__11870_11874 = G__11886;
chunk__11871_11875 = G__11887;
count__11872_11876 = G__11888;
i__11873_11877 = G__11889;
continue;
} else {
var node_11890 = cljs.core.first.call(null,seq__11870_11884__$1);
goog.dom.classes.toggle(node_11890,class$);

var G__11891 = cljs.core.next.call(null,seq__11870_11884__$1);
var G__11892 = null;
var G__11893 = (0);
var G__11894 = (0);
seq__11870_11874 = G__11891;
chunk__11871_11875 = G__11892;
count__11872_11876 = G__11893;
i__11873_11877 = G__11894;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_11903__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__11899_11904 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11900_11905 = null;
var count__11901_11906 = (0);
var i__11902_11907 = (0);
while(true){
if((i__11902_11907 < count__11901_11906)){
var node_11908 = cljs.core._nth.call(null,chunk__11900_11905,i__11902_11907);
goog.dom.classes.set(node_11908,classes_11903__$1);

var G__11909 = seq__11899_11904;
var G__11910 = chunk__11900_11905;
var G__11911 = count__11901_11906;
var G__11912 = (i__11902_11907 + (1));
seq__11899_11904 = G__11909;
chunk__11900_11905 = G__11910;
count__11901_11906 = G__11911;
i__11902_11907 = G__11912;
continue;
} else {
var temp__4425__auto___11913 = cljs.core.seq.call(null,seq__11899_11904);
if(temp__4425__auto___11913){
var seq__11899_11914__$1 = temp__4425__auto___11913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11899_11914__$1)){
var c__7007__auto___11915 = cljs.core.chunk_first.call(null,seq__11899_11914__$1);
var G__11916 = cljs.core.chunk_rest.call(null,seq__11899_11914__$1);
var G__11917 = c__7007__auto___11915;
var G__11918 = cljs.core.count.call(null,c__7007__auto___11915);
var G__11919 = (0);
seq__11899_11904 = G__11916;
chunk__11900_11905 = G__11917;
count__11901_11906 = G__11918;
i__11902_11907 = G__11919;
continue;
} else {
var node_11920 = cljs.core.first.call(null,seq__11899_11914__$1);
goog.dom.classes.set(node_11920,classes_11903__$1);

var G__11921 = cljs.core.next.call(null,seq__11899_11914__$1);
var G__11922 = null;
var G__11923 = (0);
var G__11924 = (0);
seq__11899_11904 = G__11921;
chunk__11900_11905 = G__11922;
count__11901_11906 = G__11923;
i__11902_11907 = G__11924;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__11929_11933 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11930_11934 = null;
var count__11931_11935 = (0);
var i__11932_11936 = (0);
while(true){
if((i__11932_11936 < count__11931_11935)){
var node_11937 = cljs.core._nth.call(null,chunk__11930_11934,i__11932_11936);
goog.dom.setTextContent(node_11937,value);

var G__11938 = seq__11929_11933;
var G__11939 = chunk__11930_11934;
var G__11940 = count__11931_11935;
var G__11941 = (i__11932_11936 + (1));
seq__11929_11933 = G__11938;
chunk__11930_11934 = G__11939;
count__11931_11935 = G__11940;
i__11932_11936 = G__11941;
continue;
} else {
var temp__4425__auto___11942 = cljs.core.seq.call(null,seq__11929_11933);
if(temp__4425__auto___11942){
var seq__11929_11943__$1 = temp__4425__auto___11942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11929_11943__$1)){
var c__7007__auto___11944 = cljs.core.chunk_first.call(null,seq__11929_11943__$1);
var G__11945 = cljs.core.chunk_rest.call(null,seq__11929_11943__$1);
var G__11946 = c__7007__auto___11944;
var G__11947 = cljs.core.count.call(null,c__7007__auto___11944);
var G__11948 = (0);
seq__11929_11933 = G__11945;
chunk__11930_11934 = G__11946;
count__11931_11935 = G__11947;
i__11932_11936 = G__11948;
continue;
} else {
var node_11949 = cljs.core.first.call(null,seq__11929_11943__$1);
goog.dom.setTextContent(node_11949,value);

var G__11950 = cljs.core.next.call(null,seq__11929_11943__$1);
var G__11951 = null;
var G__11952 = (0);
var G__11953 = (0);
seq__11929_11933 = G__11950;
chunk__11930_11934 = G__11951;
count__11931_11935 = G__11952;
i__11932_11936 = G__11953;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__11958_11962 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11959_11963 = null;
var count__11960_11964 = (0);
var i__11961_11965 = (0);
while(true){
if((i__11961_11965 < count__11960_11964)){
var node_11966 = cljs.core._nth.call(null,chunk__11959_11963,i__11961_11965);
goog.dom.forms.setValue(node_11966,value);

var G__11967 = seq__11958_11962;
var G__11968 = chunk__11959_11963;
var G__11969 = count__11960_11964;
var G__11970 = (i__11961_11965 + (1));
seq__11958_11962 = G__11967;
chunk__11959_11963 = G__11968;
count__11960_11964 = G__11969;
i__11961_11965 = G__11970;
continue;
} else {
var temp__4425__auto___11971 = cljs.core.seq.call(null,seq__11958_11962);
if(temp__4425__auto___11971){
var seq__11958_11972__$1 = temp__4425__auto___11971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11958_11972__$1)){
var c__7007__auto___11973 = cljs.core.chunk_first.call(null,seq__11958_11972__$1);
var G__11974 = cljs.core.chunk_rest.call(null,seq__11958_11972__$1);
var G__11975 = c__7007__auto___11973;
var G__11976 = cljs.core.count.call(null,c__7007__auto___11973);
var G__11977 = (0);
seq__11958_11962 = G__11974;
chunk__11959_11963 = G__11975;
count__11960_11964 = G__11976;
i__11961_11965 = G__11977;
continue;
} else {
var node_11978 = cljs.core.first.call(null,seq__11958_11972__$1);
goog.dom.forms.setValue(node_11978,value);

var G__11979 = cljs.core.next.call(null,seq__11958_11972__$1);
var G__11980 = null;
var G__11981 = (0);
var G__11982 = (0);
seq__11958_11962 = G__11979;
chunk__11959_11963 = G__11980;
count__11960_11964 = G__11981;
i__11961_11965 = G__11982;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__6184__auto__ = allows_inner_html_QMARK_;
if(and__6184__auto__){
var and__6184__auto____$1 = (function (){var or__6196__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__6184__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__6184__auto____$1;
}
} else {
return and__6184__auto__;
}
})())){
var value_11993 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__11989_11994 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__11990_11995 = null;
var count__11991_11996 = (0);
var i__11992_11997 = (0);
while(true){
if((i__11992_11997 < count__11991_11996)){
var node_11998 = cljs.core._nth.call(null,chunk__11990_11995,i__11992_11997);
node_11998.innerHTML = value_11993;

var G__11999 = seq__11989_11994;
var G__12000 = chunk__11990_11995;
var G__12001 = count__11991_11996;
var G__12002 = (i__11992_11997 + (1));
seq__11989_11994 = G__11999;
chunk__11990_11995 = G__12000;
count__11991_11996 = G__12001;
i__11992_11997 = G__12002;
continue;
} else {
var temp__4425__auto___12003 = cljs.core.seq.call(null,seq__11989_11994);
if(temp__4425__auto___12003){
var seq__11989_12004__$1 = temp__4425__auto___12003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11989_12004__$1)){
var c__7007__auto___12005 = cljs.core.chunk_first.call(null,seq__11989_12004__$1);
var G__12006 = cljs.core.chunk_rest.call(null,seq__11989_12004__$1);
var G__12007 = c__7007__auto___12005;
var G__12008 = cljs.core.count.call(null,c__7007__auto___12005);
var G__12009 = (0);
seq__11989_11994 = G__12006;
chunk__11990_11995 = G__12007;
count__11991_11996 = G__12008;
i__11992_11997 = G__12009;
continue;
} else {
var node_12010 = cljs.core.first.call(null,seq__11989_12004__$1);
node_12010.innerHTML = value_11993;

var G__12011 = cljs.core.next.call(null,seq__11989_12004__$1);
var G__12012 = null;
var G__12013 = (0);
var G__12014 = (0);
seq__11989_11994 = G__12011;
chunk__11990_11995 = G__12012;
count__11991_11996 = G__12013;
i__11992_11997 = G__12014;
continue;
}
} else {
}
}
break;
}
}catch (e11988){if((e11988 instanceof Error)){
var e_12015 = e11988;
domina.replace_children_BANG_.call(null,content,value_11993);
} else {
throw e11988;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args12016 = [];
var len__7266__auto___12019 = arguments.length;
var i__7267__auto___12020 = (0);
while(true){
if((i__7267__auto___12020 < len__7266__auto___12019)){
args12016.push((arguments[i__7267__auto___12020]));

var G__12021 = (i__7267__auto___12020 + (1));
i__7267__auto___12020 = G__12021;
continue;
} else {
}
break;
}

var G__12018 = args12016.length;
switch (G__12018) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12016.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__6184__auto__ = bubble;
if(cljs.core.truth_(and__6184__auto__)){
return (value == null);
} else {
return and__6184__auto__;
}
})())){
var temp__4425__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__6196__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__12029_12033 = cljs.core.seq.call(null,children);
var chunk__12030_12034 = null;
var count__12031_12035 = (0);
var i__12032_12036 = (0);
while(true){
if((i__12032_12036 < count__12031_12035)){
var child_12037 = cljs.core._nth.call(null,chunk__12030_12034,i__12032_12036);
frag.appendChild(child_12037);

var G__12038 = seq__12029_12033;
var G__12039 = chunk__12030_12034;
var G__12040 = count__12031_12035;
var G__12041 = (i__12032_12036 + (1));
seq__12029_12033 = G__12038;
chunk__12030_12034 = G__12039;
count__12031_12035 = G__12040;
i__12032_12036 = G__12041;
continue;
} else {
var temp__4425__auto___12042 = cljs.core.seq.call(null,seq__12029_12033);
if(temp__4425__auto___12042){
var seq__12029_12043__$1 = temp__4425__auto___12042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12029_12043__$1)){
var c__7007__auto___12044 = cljs.core.chunk_first.call(null,seq__12029_12043__$1);
var G__12045 = cljs.core.chunk_rest.call(null,seq__12029_12043__$1);
var G__12046 = c__7007__auto___12044;
var G__12047 = cljs.core.count.call(null,c__7007__auto___12044);
var G__12048 = (0);
seq__12029_12033 = G__12045;
chunk__12030_12034 = G__12046;
count__12031_12035 = G__12047;
i__12032_12036 = G__12048;
continue;
} else {
var child_12049 = cljs.core.first.call(null,seq__12029_12043__$1);
frag.appendChild(child_12049);

var G__12050 = cljs.core.next.call(null,seq__12029_12043__$1);
var G__12051 = null;
var G__12052 = (0);
var G__12053 = (0);
seq__12029_12033 = G__12050;
chunk__12030_12034 = G__12051;
count__12031_12035 = G__12052;
i__12032_12036 = G__12053;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__12023_SHARP_,p2__12024_SHARP_){
return f.call(null,p1__12023_SHARP_,p2__12024_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args12054 = [];
var len__7266__auto___12057 = arguments.length;
var i__7267__auto___12058 = (0);
while(true){
if((i__7267__auto___12058 < len__7266__auto___12057)){
args12054.push((arguments[i__7267__auto___12058]));

var G__12059 = (i__7267__auto___12058 + (1));
i__7267__auto___12058 = G__12059;
continue;
} else {
}
break;
}

var G__12056 = args12054.length;
switch (G__12056) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12054.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args12061 = [];
var len__7266__auto___12064 = arguments.length;
var i__7267__auto___12065 = (0);
while(true){
if((i__7267__auto___12065 < len__7266__auto___12064)){
args12061.push((arguments[i__7267__auto___12065]));

var G__12066 = (i__7267__auto___12065 + (1));
i__7267__auto___12065 = G__12066;
continue;
} else {
}
break;
}

var G__12063 = args12061.length;
switch (G__12063) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12061.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__6184__auto__ = obj;
if(cljs.core.truth_(and__6184__auto__)){
var and__6184__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__6184__auto____$1){
return obj.length;
} else {
return and__6184__auto____$1;
}
} else {
return and__6184__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}
