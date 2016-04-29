// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__16370){
var vec__16371 = p__16370;
var k = cljs.core.nth.call(null,vec__16371,(0),null);
var v = cljs.core.nth.call(null,vec__16371,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16373 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__16373)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__16373)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__16373)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__16373)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__16373)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__16373)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16374){
var map__16378 = p__16374;
var map__16378__$1 = ((((!((map__16378 == null)))?((((map__16378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16378):map__16378);
var request = map__16378__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16378__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__16378__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__16378__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__6196__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16380 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__16380,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__16380,response_type);

G__16380.setTimeoutInterval(timeout);

G__16380.setWithCredentials(send_credentials);

return G__16380;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16381){
var map__16408 = p__16381;
var map__16408__$1 = ((((!((map__16408 == null)))?((((map__16408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16408):map__16408);
var request = map__16408__$1;
var request_method = cljs.core.get.call(null,map__16408__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__16408__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__16408__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16408__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__16408__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__6196__auto__ = request_method;
if(cljs.core.truth_(or__6196__auto__)){
return or__6196__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13594__auto___16434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___16434,channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___16434,channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_16420){
var state_val_16421 = (state_16420[(1)]);
if((state_val_16421 === (1))){
var state_16420__$1 = state_16420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16420__$1,(2),cancel);
} else {
if((state_val_16421 === (2))){
var inst_16411 = (state_16420[(2)]);
var inst_16412 = xhr__$1.isComplete();
var inst_16413 = cljs.core.not.call(null,inst_16412);
var state_16420__$1 = (function (){var statearr_16422 = state_16420;
(statearr_16422[(7)] = inst_16411);

return statearr_16422;
})();
if(inst_16413){
var statearr_16423_16435 = state_16420__$1;
(statearr_16423_16435[(1)] = (3));

} else {
var statearr_16424_16436 = state_16420__$1;
(statearr_16424_16436[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (3))){
var inst_16415 = xhr__$1.abort();
var state_16420__$1 = state_16420;
var statearr_16425_16437 = state_16420__$1;
(statearr_16425_16437[(2)] = inst_16415);

(statearr_16425_16437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (4))){
var state_16420__$1 = state_16420;
var statearr_16426_16438 = state_16420__$1;
(statearr_16426_16438[(2)] = null);

(statearr_16426_16438[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (5))){
var inst_16418 = (state_16420[(2)]);
var state_16420__$1 = state_16420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16420__$1,inst_16418);
} else {
return null;
}
}
}
}
}
});})(c__13594__auto___16434,channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__13482__auto__,c__13594__auto___16434,channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__13483__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13483__auto____0 = (function (){
var statearr_16430 = [null,null,null,null,null,null,null,null];
(statearr_16430[(0)] = cljs_http$core$xhr_$_state_machine__13483__auto__);

(statearr_16430[(1)] = (1));

return statearr_16430;
});
var cljs_http$core$xhr_$_state_machine__13483__auto____1 = (function (state_16420){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_16420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e16431){if((e16431 instanceof Object)){
var ex__13486__auto__ = e16431;
var statearr_16432_16439 = state_16420;
(statearr_16432_16439[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16440 = state_16420;
state_16420 = G__16440;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13483__auto__ = function(state_16420){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13483__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13483__auto____1.call(this,state_16420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13483__auto____0;
cljs_http$core$xhr_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13483__auto____1;
return cljs_http$core$xhr_$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___16434,channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__13596__auto__ = (function (){var statearr_16433 = f__13595__auto__.call(null);
(statearr_16433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___16434);

return statearr_16433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___16434,channel,request_url,method,headers__$1,xhr__$1,map__16408,map__16408__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16441){
var map__16458 = p__16441;
var map__16458__$1 = ((((!((map__16458 == null)))?((((map__16458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16458):map__16458);
var request = map__16458__$1;
var timeout = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__16458__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_16474 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_16474], null));

if(cljs.core.truth_(cancel)){
var c__13594__auto___16475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto___16475,req_16474,channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto___16475,req_16474,channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_16464){
var state_val_16465 = (state_16464[(1)]);
if((state_val_16465 === (1))){
var state_16464__$1 = state_16464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16464__$1,(2),cancel);
} else {
if((state_val_16465 === (2))){
var inst_16461 = (state_16464[(2)]);
var inst_16462 = jsonp__$1.cancel(req_16474);
var state_16464__$1 = (function (){var statearr_16466 = state_16464;
(statearr_16466[(7)] = inst_16461);

return statearr_16466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16464__$1,inst_16462);
} else {
return null;
}
}
});})(c__13594__auto___16475,req_16474,channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13482__auto__,c__13594__auto___16475,req_16474,channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13483__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13483__auto____0 = (function (){
var statearr_16470 = [null,null,null,null,null,null,null,null];
(statearr_16470[(0)] = cljs_http$core$jsonp_$_state_machine__13483__auto__);

(statearr_16470[(1)] = (1));

return statearr_16470;
});
var cljs_http$core$jsonp_$_state_machine__13483__auto____1 = (function (state_16464){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_16464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e16471){if((e16471 instanceof Object)){
var ex__13486__auto__ = e16471;
var statearr_16472_16476 = state_16464;
(statearr_16472_16476[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16477 = state_16464;
state_16464 = G__16477;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13483__auto__ = function(state_16464){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13483__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13483__auto____1.call(this,state_16464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13483__auto____0;
cljs_http$core$jsonp_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13483__auto____1;
return cljs_http$core$jsonp_$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto___16475,req_16474,channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13596__auto__ = (function (){var statearr_16473 = f__13595__auto__.call(null);
(statearr_16473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto___16475);

return statearr_16473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto___16475,req_16474,channel,jsonp__$1,map__16458,map__16458__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16478){
var map__16481 = p__16478;
var map__16481__$1 = ((((!((map__16481 == null)))?((((map__16481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16481):map__16481);
var request__$1 = map__16481__$1;
var request_method = cljs.core.get.call(null,map__16481__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});
