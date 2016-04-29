// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6184__auto__ = v;
if(cljs.core.truth_(and__6184__auto__)){
return (v > (0));
} else {
return and__6184__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__17338_SHARP_,p2__17337_SHARP_){
var vec__17340 = clojure.string.split.call(null,p2__17337_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__17340,(0),null);
var v = cljs.core.nth.call(null,vec__17340,(1),null);
return cljs.core.assoc.call(null,p1__17338_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__17341_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__17341_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__17342){
var vec__17344 = p__17342;
var k = cljs.core.nth.call(null,vec__17344,(0),null);
var v = cljs.core.nth.call(null,vec__17344,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__17345_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__17345_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6184__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6184__auto__){
var and__6184__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6184__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6184__auto____$1;
}
} else {
return and__6184__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__17346_SHARP_){
return cljs_http.client.decode_body.call(null,p1__17346_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17351 = arguments.length;
var i__7267__auto___17352 = (0);
while(true){
if((i__7267__auto___17352 < len__7266__auto___17351)){
args__7273__auto__.push((arguments[i__7267__auto___17352]));

var G__17353 = (i__7267__auto___17352 + (1));
i__7267__auto___17352 = G__17353;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17349){
var vec__17350 = p__17349;
var default_headers = cljs.core.nth.call(null,vec__17350,(0),null);
return ((function (vec__17350,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__6196__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__17350,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq17347){
var G__17348 = cljs.core.first.call(null,seq17347);
var seq17347__$1 = cljs.core.next.call(null,seq17347);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__17348,seq17347__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17358 = arguments.length;
var i__7267__auto___17359 = (0);
while(true){
if((i__7267__auto___17359 < len__7266__auto___17358)){
args__7273__auto__.push((arguments[i__7267__auto___17359]));

var G__17360 = (i__7267__auto___17359 + (1));
i__7267__auto___17359 = G__17360;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17356){
var vec__17357 = p__17356;
var accept = cljs.core.nth.call(null,vec__17357,(0),null);
return ((function (vec__17357,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__6196__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__17357,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq17354){
var G__17355 = cljs.core.first.call(null,seq17354);
var seq17354__$1 = cljs.core.next.call(null,seq17354);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__17355,seq17354__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17365 = arguments.length;
var i__7267__auto___17366 = (0);
while(true){
if((i__7267__auto___17366 < len__7266__auto___17365)){
args__7273__auto__.push((arguments[i__7267__auto___17366]));

var G__17367 = (i__7267__auto___17366 + (1));
i__7267__auto___17366 = G__17367;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17363){
var vec__17364 = p__17363;
var content_type = cljs.core.nth.call(null,vec__17364,(0),null);
return ((function (vec__17364,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__6196__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__17364,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq17361){
var G__17362 = cljs.core.first.call(null,seq17361);
var seq17361__$1 = cljs.core.next.call(null,seq17361);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__17362,seq17361__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__17370 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__17370__$1 = ((((!((map__17370 == null)))?((((map__17370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17370):map__17370);
var encoding = cljs.core.get.call(null,map__17370__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__17370__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__17376 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__17376__$1 = ((((!((map__17376 == null)))?((((map__17376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17376):map__17376);
var decoding = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__17376,map__17376__$1,decoding,decoding_opts){
return (function (p1__17372_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__17372_SHARP_,decoding,decoding_opts);
});})(map__17376,map__17376__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__17376,map__17376__$1,decoding,decoding_opts,transit_decode){
return (function (p1__17373_SHARP_){
return cljs_http.client.decode_body.call(null,p1__17373_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__17376,map__17376__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__17378_SHARP_){
return cljs_http.client.decode_body.call(null,p1__17378_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__17382){
var map__17383 = p__17382;
var map__17383__$1 = ((((!((map__17383 == null)))?((((map__17383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17383):map__17383);
var req = map__17383__$1;
var query_params = cljs.core.get.call(null,map__17383__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__17388){
var map__17389 = p__17388;
var map__17389__$1 = ((((!((map__17389 == null)))?((((map__17389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17389):map__17389);
var request = map__17389__$1;
var form_params = cljs.core.get.call(null,map__17389__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__17389__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__17389__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6184__auto__ = form_params;
if(cljs.core.truth_(and__6184__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6184__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__17397_17403 = cljs.core.seq.call(null,params);
var chunk__17398_17404 = null;
var count__17399_17405 = (0);
var i__17400_17406 = (0);
while(true){
if((i__17400_17406 < count__17399_17405)){
var vec__17401_17407 = cljs.core._nth.call(null,chunk__17398_17404,i__17400_17406);
var k_17408 = cljs.core.nth.call(null,vec__17401_17407,(0),null);
var v_17409 = cljs.core.nth.call(null,vec__17401_17407,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_17409)){
form_data.append(cljs.core.name.call(null,k_17408),cljs.core.first.call(null,v_17409),cljs.core.second.call(null,v_17409));
} else {
form_data.append(cljs.core.name.call(null,k_17408),v_17409);
}

var G__17410 = seq__17397_17403;
var G__17411 = chunk__17398_17404;
var G__17412 = count__17399_17405;
var G__17413 = (i__17400_17406 + (1));
seq__17397_17403 = G__17410;
chunk__17398_17404 = G__17411;
count__17399_17405 = G__17412;
i__17400_17406 = G__17413;
continue;
} else {
var temp__4425__auto___17414 = cljs.core.seq.call(null,seq__17397_17403);
if(temp__4425__auto___17414){
var seq__17397_17415__$1 = temp__4425__auto___17414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17397_17415__$1)){
var c__7007__auto___17416 = cljs.core.chunk_first.call(null,seq__17397_17415__$1);
var G__17417 = cljs.core.chunk_rest.call(null,seq__17397_17415__$1);
var G__17418 = c__7007__auto___17416;
var G__17419 = cljs.core.count.call(null,c__7007__auto___17416);
var G__17420 = (0);
seq__17397_17403 = G__17417;
chunk__17398_17404 = G__17418;
count__17399_17405 = G__17419;
i__17400_17406 = G__17420;
continue;
} else {
var vec__17402_17421 = cljs.core.first.call(null,seq__17397_17415__$1);
var k_17422 = cljs.core.nth.call(null,vec__17402_17421,(0),null);
var v_17423 = cljs.core.nth.call(null,vec__17402_17421,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_17423)){
form_data.append(cljs.core.name.call(null,k_17422),cljs.core.first.call(null,v_17423),cljs.core.second.call(null,v_17423));
} else {
form_data.append(cljs.core.name.call(null,k_17422),v_17423);
}

var G__17424 = cljs.core.next.call(null,seq__17397_17415__$1);
var G__17425 = null;
var G__17426 = (0);
var G__17427 = (0);
seq__17397_17403 = G__17424;
chunk__17398_17404 = G__17425;
count__17399_17405 = G__17426;
i__17400_17406 = G__17427;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__17431){
var map__17432 = p__17431;
var map__17432__$1 = ((((!((map__17432 == null)))?((((map__17432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17432):map__17432);
var request = map__17432__$1;
var multipart_params = cljs.core.get.call(null,map__17432__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__17432__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6184__auto__ = multipart_params;
if(cljs.core.truth_(and__6184__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6184__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__17434_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__17434_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__17439){
var map__17440 = p__17439;
var map__17440__$1 = ((((!((map__17440 == null)))?((((map__17440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17440):map__17440);
var req = map__17440__$1;
var query_params = cljs.core.get.call(null,map__17440__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__17440,map__17440__$1,req,query_params){
return (function (p1__17435_SHARP_){
return cljs.core.merge.call(null,p1__17435_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__17440,map__17440__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17446 = arguments.length;
var i__7267__auto___17447 = (0);
while(true){
if((i__7267__auto___17447 < len__7266__auto___17446)){
args__7273__auto__.push((arguments[i__7267__auto___17447]));

var G__17448 = (i__7267__auto___17447 + (1));
i__7267__auto___17447 = G__17448;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17444){
var vec__17445 = p__17444;
var credentials = cljs.core.nth.call(null,vec__17445,(0),null);
return ((function (vec__17445,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6196__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__17445,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq17442){
var G__17443 = cljs.core.first.call(null,seq17442);
var seq17442__$1 = cljs.core.next.call(null,seq17442);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__17443,seq17442__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17453 = arguments.length;
var i__7267__auto___17454 = (0);
while(true){
if((i__7267__auto___17454 < len__7266__auto___17453)){
args__7273__auto__.push((arguments[i__7267__auto___17454]));

var G__17455 = (i__7267__auto___17454 + (1));
i__7267__auto___17454 = G__17455;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17451){
var vec__17452 = p__17451;
var req = cljs.core.nth.call(null,vec__17452,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq17449){
var G__17450 = cljs.core.first.call(null,seq17449);
var seq17449__$1 = cljs.core.next.call(null,seq17449);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__17450,seq17449__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17460 = arguments.length;
var i__7267__auto___17461 = (0);
while(true){
if((i__7267__auto___17461 < len__7266__auto___17460)){
args__7273__auto__.push((arguments[i__7267__auto___17461]));

var G__17462 = (i__7267__auto___17461 + (1));
i__7267__auto___17461 = G__17462;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17458){
var vec__17459 = p__17458;
var req = cljs.core.nth.call(null,vec__17459,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq17456){
var G__17457 = cljs.core.first.call(null,seq17456);
var seq17456__$1 = cljs.core.next.call(null,seq17456);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__17457,seq17456__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17467 = arguments.length;
var i__7267__auto___17468 = (0);
while(true){
if((i__7267__auto___17468 < len__7266__auto___17467)){
args__7273__auto__.push((arguments[i__7267__auto___17468]));

var G__17469 = (i__7267__auto___17468 + (1));
i__7267__auto___17468 = G__17469;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17465){
var vec__17466 = p__17465;
var req = cljs.core.nth.call(null,vec__17466,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq17463){
var G__17464 = cljs.core.first.call(null,seq17463);
var seq17463__$1 = cljs.core.next.call(null,seq17463);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__17464,seq17463__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17474 = arguments.length;
var i__7267__auto___17475 = (0);
while(true){
if((i__7267__auto___17475 < len__7266__auto___17474)){
args__7273__auto__.push((arguments[i__7267__auto___17475]));

var G__17476 = (i__7267__auto___17475 + (1));
i__7267__auto___17475 = G__17476;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17472){
var vec__17473 = p__17472;
var req = cljs.core.nth.call(null,vec__17473,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq17470){
var G__17471 = cljs.core.first.call(null,seq17470);
var seq17470__$1 = cljs.core.next.call(null,seq17470);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__17471,seq17470__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17481 = arguments.length;
var i__7267__auto___17482 = (0);
while(true){
if((i__7267__auto___17482 < len__7266__auto___17481)){
args__7273__auto__.push((arguments[i__7267__auto___17482]));

var G__17483 = (i__7267__auto___17482 + (1));
i__7267__auto___17482 = G__17483;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17479){
var vec__17480 = p__17479;
var req = cljs.core.nth.call(null,vec__17480,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq17477){
var G__17478 = cljs.core.first.call(null,seq17477);
var seq17477__$1 = cljs.core.next.call(null,seq17477);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__17478,seq17477__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17488 = arguments.length;
var i__7267__auto___17489 = (0);
while(true){
if((i__7267__auto___17489 < len__7266__auto___17488)){
args__7273__auto__.push((arguments[i__7267__auto___17489]));

var G__17490 = (i__7267__auto___17489 + (1));
i__7267__auto___17489 = G__17490;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17486){
var vec__17487 = p__17486;
var req = cljs.core.nth.call(null,vec__17487,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq17484){
var G__17485 = cljs.core.first.call(null,seq17484);
var seq17484__$1 = cljs.core.next.call(null,seq17484);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__17485,seq17484__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17495 = arguments.length;
var i__7267__auto___17496 = (0);
while(true){
if((i__7267__auto___17496 < len__7266__auto___17495)){
args__7273__auto__.push((arguments[i__7267__auto___17496]));

var G__17497 = (i__7267__auto___17496 + (1));
i__7267__auto___17496 = G__17497;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17493){
var vec__17494 = p__17493;
var req = cljs.core.nth.call(null,vec__17494,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq17491){
var G__17492 = cljs.core.first.call(null,seq17491);
var seq17491__$1 = cljs.core.next.call(null,seq17491);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__17492,seq17491__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17502 = arguments.length;
var i__7267__auto___17503 = (0);
while(true){
if((i__7267__auto___17503 < len__7266__auto___17502)){
args__7273__auto__.push((arguments[i__7267__auto___17503]));

var G__17504 = (i__7267__auto___17503 + (1));
i__7267__auto___17503 = G__17504;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17500){
var vec__17501 = p__17500;
var req = cljs.core.nth.call(null,vec__17501,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq17498){
var G__17499 = cljs.core.first.call(null,seq17498);
var seq17498__$1 = cljs.core.next.call(null,seq17498);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__17499,seq17498__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7273__auto__ = [];
var len__7266__auto___17509 = arguments.length;
var i__7267__auto___17510 = (0);
while(true){
if((i__7267__auto___17510 < len__7266__auto___17509)){
args__7273__auto__.push((arguments[i__7267__auto___17510]));

var G__17511 = (i__7267__auto___17510 + (1));
i__7267__auto___17510 = G__17511;
continue;
} else {
}
break;
}

var argseq__7274__auto__ = ((((1) < args__7273__auto__.length))?(new cljs.core.IndexedSeq(args__7273__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7274__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17507){
var vec__17508 = p__17507;
var req = cljs.core.nth.call(null,vec__17508,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq17505){
var G__17506 = cljs.core.first.call(null,seq17505);
var seq17505__$1 = cljs.core.next.call(null,seq17505);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__17506,seq17505__$1);
});
