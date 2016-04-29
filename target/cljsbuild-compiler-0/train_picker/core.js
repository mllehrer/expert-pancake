// Compiled by ClojureScript 1.8.51 {}
goog.provide('train_picker.core');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('enfocus.events');
goog.require('enfocus.effects');
goog.require('cljs.core.async');
train_picker.core.init = (function train_picker$core$init(){
var c__13594__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13594__auto__){
return (function (){
var f__13595__auto__ = (function (){var switch__13482__auto__ = ((function (c__13594__auto__){
return (function (state_21305){
var state_val_21306 = (state_21305[(1)]);
if((state_val_21306 === (1))){
var inst_21187 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_21188 = [false];
var inst_21189 = cljs.core.PersistentHashMap.fromArrays(inst_21187,inst_21188);
var inst_21190 = cljs_http.client.get.call(null,"http://bart.crudworks.org/api/departures/ROCK",inst_21189);
var state_21305__$1 = state_21305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21305__$1,(2),inst_21190);
} else {
if((state_val_21306 === (2))){
var inst_21192 = (state_21305[(2)]);
var inst_21193 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_21194 = [false];
var inst_21195 = cljs.core.PersistentHashMap.fromArrays(inst_21193,inst_21194);
var inst_21196 = cljs_http.client.get.call(null,"http://bart.crudworks.org/api/departures/ASHB",inst_21195);
var state_21305__$1 = (function (){var statearr_21307 = state_21305;
(statearr_21307[(7)] = inst_21192);

return statearr_21307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21305__$1,(3),inst_21196);
} else {
if((state_val_21306 === (3))){
var inst_21192 = (state_21305[(7)]);
var inst_21198 = (state_21305[(2)]);
var inst_21199 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21192);
var inst_21200 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21198);
var inst_21201 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21202 = enfocus.core.content.call(null,inst_21201);
var inst_21203 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21204 = cljs.core.first.call(null,inst_21203);
var inst_21205 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21204);
var inst_21206 = cljs.core.first.call(null,inst_21205);
var inst_21207 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_21206);
var inst_21208 = enfocus.core.content.call(null,inst_21207);
var inst_21209 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21210 = cljs.core.first.call(null,inst_21209);
var inst_21211 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21210);
var inst_21212 = cljs.core.first.call(null,inst_21211);
var inst_21213 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_21212);
var inst_21214 = enfocus.core.content.call(null,inst_21213);
var inst_21215 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21216 = cljs.core.first.call(null,inst_21215);
var inst_21217 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_21216);
var inst_21218 = enfocus.core.content.call(null,inst_21217);
var inst_21219 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21220 = cljs.core.first.call(null,inst_21219);
var inst_21221 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21220);
var inst_21222 = cljs.core.first.call(null,inst_21221);
var inst_21223 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_21222);
var inst_21224 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_21223);
var inst_21225 = enfocus.core.do__GT_.call(null,inst_21218,inst_21224);
var inst_21226 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21227 = cljs.core.second.call(null,inst_21226);
var inst_21228 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21227);
var inst_21229 = cljs.core.first.call(null,inst_21228);
var inst_21230 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_21229);
var inst_21231 = enfocus.core.content.call(null,inst_21230);
var inst_21232 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21233 = cljs.core.second.call(null,inst_21232);
var inst_21234 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21233);
var inst_21235 = cljs.core.first.call(null,inst_21234);
var inst_21236 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_21235);
var inst_21237 = enfocus.core.content.call(null,inst_21236);
var inst_21238 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21239 = cljs.core.second.call(null,inst_21238);
var inst_21240 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_21239);
var inst_21241 = enfocus.core.content.call(null,inst_21240);
var inst_21242 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21199);
var inst_21243 = cljs.core.second.call(null,inst_21242);
var inst_21244 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21243);
var inst_21245 = cljs.core.first.call(null,inst_21244);
var inst_21246 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_21245);
var inst_21247 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_21246);
var inst_21248 = enfocus.core.do__GT_.call(null,inst_21241,inst_21247);
var inst_21249 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21250 = enfocus.core.content.call(null,inst_21249);
var inst_21251 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21252 = cljs.core.first.call(null,inst_21251);
var inst_21253 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21252);
var inst_21254 = cljs.core.first.call(null,inst_21253);
var inst_21255 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_21254);
var inst_21256 = enfocus.core.content.call(null,inst_21255);
var inst_21257 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21258 = cljs.core.first.call(null,inst_21257);
var inst_21259 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21258);
var inst_21260 = cljs.core.first.call(null,inst_21259);
var inst_21261 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_21260);
var inst_21262 = enfocus.core.content.call(null,inst_21261);
var inst_21263 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21264 = cljs.core.first.call(null,inst_21263);
var inst_21265 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_21264);
var inst_21266 = enfocus.core.content.call(null,inst_21265);
var inst_21267 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21268 = cljs.core.first.call(null,inst_21267);
var inst_21269 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21268);
var inst_21270 = cljs.core.first.call(null,inst_21269);
var inst_21271 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_21270);
var inst_21272 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_21271);
var inst_21273 = enfocus.core.do__GT_.call(null,inst_21266,inst_21272);
var inst_21274 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21275 = cljs.core.second.call(null,inst_21274);
var inst_21276 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21275);
var inst_21277 = cljs.core.first.call(null,inst_21276);
var inst_21278 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_21277);
var inst_21279 = enfocus.core.content.call(null,inst_21278);
var inst_21280 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21281 = cljs.core.second.call(null,inst_21280);
var inst_21282 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21281);
var inst_21283 = cljs.core.first.call(null,inst_21282);
var inst_21284 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_21283);
var inst_21285 = enfocus.core.content.call(null,inst_21284);
var inst_21286 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21287 = cljs.core.second.call(null,inst_21286);
var inst_21288 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_21287);
var inst_21289 = enfocus.core.content.call(null,inst_21288);
var inst_21290 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_21200);
var inst_21291 = cljs.core.second.call(null,inst_21290);
var inst_21292 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_21291);
var inst_21293 = cljs.core.first.call(null,inst_21292);
var inst_21294 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_21293);
var inst_21295 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_21294);
var inst_21296 = enfocus.core.do__GT_.call(null,inst_21289,inst_21295);
var inst_21297 = enfocus.core.at.call(null,"#rock-name",inst_21202,"#rock-next",inst_21208,"#rock-next-dir",inst_21214,"#rock-next-dest",inst_21225,"#rock-second",inst_21231,"#rock-second-dir",inst_21237,"#rock-second-dest",inst_21248,"#ashb-name",inst_21250,"#ashb-next",inst_21256,"#ashb-next-dir",inst_21262,"#ashb-next-dest",inst_21273,"#ashb-second",inst_21279,"#ashb-second-dir",inst_21285,"#ashb-second-dest",inst_21296);
var inst_21298 = (function (){var rock_response = inst_21192;
var ashb_response = inst_21198;
var rock_body = inst_21199;
var ashb_body = inst_21200;
return ((function (rock_response,ashb_response,rock_body,ashb_body,inst_21192,inst_21198,inst_21199,inst_21200,inst_21201,inst_21202,inst_21203,inst_21204,inst_21205,inst_21206,inst_21207,inst_21208,inst_21209,inst_21210,inst_21211,inst_21212,inst_21213,inst_21214,inst_21215,inst_21216,inst_21217,inst_21218,inst_21219,inst_21220,inst_21221,inst_21222,inst_21223,inst_21224,inst_21225,inst_21226,inst_21227,inst_21228,inst_21229,inst_21230,inst_21231,inst_21232,inst_21233,inst_21234,inst_21235,inst_21236,inst_21237,inst_21238,inst_21239,inst_21240,inst_21241,inst_21242,inst_21243,inst_21244,inst_21245,inst_21246,inst_21247,inst_21248,inst_21249,inst_21250,inst_21251,inst_21252,inst_21253,inst_21254,inst_21255,inst_21256,inst_21257,inst_21258,inst_21259,inst_21260,inst_21261,inst_21262,inst_21263,inst_21264,inst_21265,inst_21266,inst_21267,inst_21268,inst_21269,inst_21270,inst_21271,inst_21272,inst_21273,inst_21274,inst_21275,inst_21276,inst_21277,inst_21278,inst_21279,inst_21280,inst_21281,inst_21282,inst_21283,inst_21284,inst_21285,inst_21286,inst_21287,inst_21288,inst_21289,inst_21290,inst_21291,inst_21292,inst_21293,inst_21294,inst_21295,inst_21296,inst_21297,state_val_21306,c__13594__auto__){
return (function (){
return alert("SF");
});
;})(rock_response,ashb_response,rock_body,ashb_body,inst_21192,inst_21198,inst_21199,inst_21200,inst_21201,inst_21202,inst_21203,inst_21204,inst_21205,inst_21206,inst_21207,inst_21208,inst_21209,inst_21210,inst_21211,inst_21212,inst_21213,inst_21214,inst_21215,inst_21216,inst_21217,inst_21218,inst_21219,inst_21220,inst_21221,inst_21222,inst_21223,inst_21224,inst_21225,inst_21226,inst_21227,inst_21228,inst_21229,inst_21230,inst_21231,inst_21232,inst_21233,inst_21234,inst_21235,inst_21236,inst_21237,inst_21238,inst_21239,inst_21240,inst_21241,inst_21242,inst_21243,inst_21244,inst_21245,inst_21246,inst_21247,inst_21248,inst_21249,inst_21250,inst_21251,inst_21252,inst_21253,inst_21254,inst_21255,inst_21256,inst_21257,inst_21258,inst_21259,inst_21260,inst_21261,inst_21262,inst_21263,inst_21264,inst_21265,inst_21266,inst_21267,inst_21268,inst_21269,inst_21270,inst_21271,inst_21272,inst_21273,inst_21274,inst_21275,inst_21276,inst_21277,inst_21278,inst_21279,inst_21280,inst_21281,inst_21282,inst_21283,inst_21284,inst_21285,inst_21286,inst_21287,inst_21288,inst_21289,inst_21290,inst_21291,inst_21292,inst_21293,inst_21294,inst_21295,inst_21296,inst_21297,state_val_21306,c__13594__auto__))
})();
var inst_21299 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),inst_21298);
var inst_21300 = enfocus.core.at.call(null,"#sf-weather-button",inst_21299);
var inst_21301 = (function (){var rock_response = inst_21192;
var ashb_response = inst_21198;
var rock_body = inst_21199;
var ashb_body = inst_21200;
return ((function (rock_response,ashb_response,rock_body,ashb_body,inst_21192,inst_21198,inst_21199,inst_21200,inst_21201,inst_21202,inst_21203,inst_21204,inst_21205,inst_21206,inst_21207,inst_21208,inst_21209,inst_21210,inst_21211,inst_21212,inst_21213,inst_21214,inst_21215,inst_21216,inst_21217,inst_21218,inst_21219,inst_21220,inst_21221,inst_21222,inst_21223,inst_21224,inst_21225,inst_21226,inst_21227,inst_21228,inst_21229,inst_21230,inst_21231,inst_21232,inst_21233,inst_21234,inst_21235,inst_21236,inst_21237,inst_21238,inst_21239,inst_21240,inst_21241,inst_21242,inst_21243,inst_21244,inst_21245,inst_21246,inst_21247,inst_21248,inst_21249,inst_21250,inst_21251,inst_21252,inst_21253,inst_21254,inst_21255,inst_21256,inst_21257,inst_21258,inst_21259,inst_21260,inst_21261,inst_21262,inst_21263,inst_21264,inst_21265,inst_21266,inst_21267,inst_21268,inst_21269,inst_21270,inst_21271,inst_21272,inst_21273,inst_21274,inst_21275,inst_21276,inst_21277,inst_21278,inst_21279,inst_21280,inst_21281,inst_21282,inst_21283,inst_21284,inst_21285,inst_21286,inst_21287,inst_21288,inst_21289,inst_21290,inst_21291,inst_21292,inst_21293,inst_21294,inst_21295,inst_21296,inst_21297,inst_21298,inst_21299,inst_21300,state_val_21306,c__13594__auto__){
return (function (){
return alert("Berkeley");
});
;})(rock_response,ashb_response,rock_body,ashb_body,inst_21192,inst_21198,inst_21199,inst_21200,inst_21201,inst_21202,inst_21203,inst_21204,inst_21205,inst_21206,inst_21207,inst_21208,inst_21209,inst_21210,inst_21211,inst_21212,inst_21213,inst_21214,inst_21215,inst_21216,inst_21217,inst_21218,inst_21219,inst_21220,inst_21221,inst_21222,inst_21223,inst_21224,inst_21225,inst_21226,inst_21227,inst_21228,inst_21229,inst_21230,inst_21231,inst_21232,inst_21233,inst_21234,inst_21235,inst_21236,inst_21237,inst_21238,inst_21239,inst_21240,inst_21241,inst_21242,inst_21243,inst_21244,inst_21245,inst_21246,inst_21247,inst_21248,inst_21249,inst_21250,inst_21251,inst_21252,inst_21253,inst_21254,inst_21255,inst_21256,inst_21257,inst_21258,inst_21259,inst_21260,inst_21261,inst_21262,inst_21263,inst_21264,inst_21265,inst_21266,inst_21267,inst_21268,inst_21269,inst_21270,inst_21271,inst_21272,inst_21273,inst_21274,inst_21275,inst_21276,inst_21277,inst_21278,inst_21279,inst_21280,inst_21281,inst_21282,inst_21283,inst_21284,inst_21285,inst_21286,inst_21287,inst_21288,inst_21289,inst_21290,inst_21291,inst_21292,inst_21293,inst_21294,inst_21295,inst_21296,inst_21297,inst_21298,inst_21299,inst_21300,state_val_21306,c__13594__auto__))
})();
var inst_21302 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),inst_21301);
var inst_21303 = enfocus.core.at.call(null,"#berkeley-weather-button",inst_21302);
var state_21305__$1 = (function (){var statearr_21308 = state_21305;
(statearr_21308[(8)] = inst_21297);

(statearr_21308[(9)] = inst_21300);

return statearr_21308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21305__$1,inst_21303);
} else {
return null;
}
}
}
});})(c__13594__auto__))
;
return ((function (switch__13482__auto__,c__13594__auto__){
return (function() {
var train_picker$core$init_$_state_machine__13483__auto__ = null;
var train_picker$core$init_$_state_machine__13483__auto____0 = (function (){
var statearr_21312 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21312[(0)] = train_picker$core$init_$_state_machine__13483__auto__);

(statearr_21312[(1)] = (1));

return statearr_21312;
});
var train_picker$core$init_$_state_machine__13483__auto____1 = (function (state_21305){
while(true){
var ret_value__13484__auto__ = (function (){try{while(true){
var result__13485__auto__ = switch__13482__auto__.call(null,state_21305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13485__auto__;
}
break;
}
}catch (e21313){if((e21313 instanceof Object)){
var ex__13486__auto__ = e21313;
var statearr_21314_21316 = state_21305;
(statearr_21314_21316[(5)] = ex__13486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21317 = state_21305;
state_21305 = G__21317;
continue;
} else {
return ret_value__13484__auto__;
}
break;
}
});
train_picker$core$init_$_state_machine__13483__auto__ = function(state_21305){
switch(arguments.length){
case 0:
return train_picker$core$init_$_state_machine__13483__auto____0.call(this);
case 1:
return train_picker$core$init_$_state_machine__13483__auto____1.call(this,state_21305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
train_picker$core$init_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$0 = train_picker$core$init_$_state_machine__13483__auto____0;
train_picker$core$init_$_state_machine__13483__auto__.cljs$core$IFn$_invoke$arity$1 = train_picker$core$init_$_state_machine__13483__auto____1;
return train_picker$core$init_$_state_machine__13483__auto__;
})()
;})(switch__13482__auto__,c__13594__auto__))
})();
var state__13596__auto__ = (function (){var statearr_21315 = f__13595__auto__.call(null);
(statearr_21315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13594__auto__);

return statearr_21315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13596__auto__);
});})(c__13594__auto__))
);

return c__13594__auto__;
});
goog.exportSymbol('train_picker.core.init', train_picker.core.init);
