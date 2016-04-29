// Compiled by ClojureScript 1.8.51 {}
goog.provide('expert_pancake.core');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('enfocus.events');
goog.require('enfocus.effects');
goog.require('cljs.core.async');
expert_pancake.core.init = (function expert_pancake$core$init(){
var c__10528__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10528__auto__){
return (function (){
var f__10529__auto__ = (function (){var switch__10463__auto__ = ((function (c__10528__auto__){
return (function (state_14431){
var state_val_14432 = (state_14431[(1)]);
if((state_val_14432 === (1))){
var inst_14313 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_14314 = [false];
var inst_14315 = cljs.core.PersistentHashMap.fromArrays(inst_14313,inst_14314);
var inst_14316 = cljs_http.client.get.call(null,"http://bart.crudworks.org/api/departures/ROCK",inst_14315);
var state_14431__$1 = state_14431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14431__$1,(2),inst_14316);
} else {
if((state_val_14432 === (2))){
var inst_14318 = (state_14431[(2)]);
var inst_14319 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_14320 = [false];
var inst_14321 = cljs.core.PersistentHashMap.fromArrays(inst_14319,inst_14320);
var inst_14322 = cljs_http.client.get.call(null,"http://bart.crudworks.org/api/departures/ASHB",inst_14321);
var state_14431__$1 = (function (){var statearr_14433 = state_14431;
(statearr_14433[(7)] = inst_14318);

return statearr_14433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14431__$1,(3),inst_14322);
} else {
if((state_val_14432 === (3))){
var inst_14318 = (state_14431[(7)]);
var inst_14324 = (state_14431[(2)]);
var inst_14325 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14318);
var inst_14326 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14324);
var inst_14327 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14328 = enfocus.core.content.call(null,inst_14327);
var inst_14329 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14330 = cljs.core.first.call(null,inst_14329);
var inst_14331 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14330);
var inst_14332 = cljs.core.first.call(null,inst_14331);
var inst_14333 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_14332);
var inst_14334 = enfocus.core.content.call(null,inst_14333);
var inst_14335 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14336 = cljs.core.first.call(null,inst_14335);
var inst_14337 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14336);
var inst_14338 = cljs.core.first.call(null,inst_14337);
var inst_14339 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_14338);
var inst_14340 = enfocus.core.content.call(null,inst_14339);
var inst_14341 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14342 = cljs.core.first.call(null,inst_14341);
var inst_14343 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_14342);
var inst_14344 = enfocus.core.content.call(null,inst_14343);
var inst_14345 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14346 = cljs.core.first.call(null,inst_14345);
var inst_14347 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14346);
var inst_14348 = cljs.core.first.call(null,inst_14347);
var inst_14349 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_14348);
var inst_14350 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_14349);
var inst_14351 = enfocus.core.do__GT_.call(null,inst_14344,inst_14350);
var inst_14352 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14353 = cljs.core.second.call(null,inst_14352);
var inst_14354 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14353);
var inst_14355 = cljs.core.first.call(null,inst_14354);
var inst_14356 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_14355);
var inst_14357 = enfocus.core.content.call(null,inst_14356);
var inst_14358 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14359 = cljs.core.second.call(null,inst_14358);
var inst_14360 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14359);
var inst_14361 = cljs.core.first.call(null,inst_14360);
var inst_14362 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_14361);
var inst_14363 = enfocus.core.content.call(null,inst_14362);
var inst_14364 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14365 = cljs.core.second.call(null,inst_14364);
var inst_14366 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_14365);
var inst_14367 = enfocus.core.content.call(null,inst_14366);
var inst_14368 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14325);
var inst_14369 = cljs.core.second.call(null,inst_14368);
var inst_14370 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14369);
var inst_14371 = cljs.core.first.call(null,inst_14370);
var inst_14372 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_14371);
var inst_14373 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_14372);
var inst_14374 = enfocus.core.do__GT_.call(null,inst_14367,inst_14373);
var inst_14375 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14376 = enfocus.core.content.call(null,inst_14375);
var inst_14377 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14378 = cljs.core.first.call(null,inst_14377);
var inst_14379 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14378);
var inst_14380 = cljs.core.first.call(null,inst_14379);
var inst_14381 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_14380);
var inst_14382 = enfocus.core.content.call(null,inst_14381);
var inst_14383 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14384 = cljs.core.first.call(null,inst_14383);
var inst_14385 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14384);
var inst_14386 = cljs.core.first.call(null,inst_14385);
var inst_14387 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_14386);
var inst_14388 = enfocus.core.content.call(null,inst_14387);
var inst_14389 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14390 = cljs.core.first.call(null,inst_14389);
var inst_14391 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_14390);
var inst_14392 = enfocus.core.content.call(null,inst_14391);
var inst_14393 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14394 = cljs.core.first.call(null,inst_14393);
var inst_14395 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14394);
var inst_14396 = cljs.core.first.call(null,inst_14395);
var inst_14397 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_14396);
var inst_14398 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_14397);
var inst_14399 = enfocus.core.do__GT_.call(null,inst_14392,inst_14398);
var inst_14400 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14401 = cljs.core.second.call(null,inst_14400);
var inst_14402 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14401);
var inst_14403 = cljs.core.first.call(null,inst_14402);
var inst_14404 = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(inst_14403);
var inst_14405 = enfocus.core.content.call(null,inst_14404);
var inst_14406 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14407 = cljs.core.second.call(null,inst_14406);
var inst_14408 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14407);
var inst_14409 = cljs.core.first.call(null,inst_14408);
var inst_14410 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(inst_14409);
var inst_14411 = enfocus.core.content.call(null,inst_14410);
var inst_14412 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14413 = cljs.core.second.call(null,inst_14412);
var inst_14414 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(inst_14413);
var inst_14415 = enfocus.core.content.call(null,inst_14414);
var inst_14416 = new cljs.core.Keyword(null,"etd","etd",1024440570).cljs$core$IFn$_invoke$arity$1(inst_14326);
var inst_14417 = cljs.core.second.call(null,inst_14416);
var inst_14418 = new cljs.core.Keyword(null,"estimate","estimate",-1389718987).cljs$core$IFn$_invoke$arity$1(inst_14417);
var inst_14419 = cljs.core.first.call(null,inst_14418);
var inst_14420 = new cljs.core.Keyword(null,"hexcolor","hexcolor",-915286928).cljs$core$IFn$_invoke$arity$1(inst_14419);
var inst_14421 = enfocus.core.set_style.call(null,new cljs.core.Keyword(null,"color","color",1011675173),inst_14420);
var inst_14422 = enfocus.core.do__GT_.call(null,inst_14415,inst_14421);
var inst_14423 = enfocus.core.at.call(null,"#rock-name",inst_14328,"#rock-next",inst_14334,"#rock-next-dir",inst_14340,"#rock-next-dest",inst_14351,"#rock-second",inst_14357,"#rock-second-dir",inst_14363,"#rock-second-dest",inst_14374,"#ashb-name",inst_14376,"#ashb-next",inst_14382,"#ashb-next-dir",inst_14388,"#ashb-next-dest",inst_14399,"#ashb-second",inst_14405,"#ashb-second-dir",inst_14411,"#ashb-second-dest",inst_14422);
var inst_14424 = (function (){var rock_response = inst_14318;
var ashb_response = inst_14324;
var rock_body = inst_14325;
var ashb_body = inst_14326;
return ((function (rock_response,ashb_response,rock_body,ashb_body,inst_14318,inst_14324,inst_14325,inst_14326,inst_14327,inst_14328,inst_14329,inst_14330,inst_14331,inst_14332,inst_14333,inst_14334,inst_14335,inst_14336,inst_14337,inst_14338,inst_14339,inst_14340,inst_14341,inst_14342,inst_14343,inst_14344,inst_14345,inst_14346,inst_14347,inst_14348,inst_14349,inst_14350,inst_14351,inst_14352,inst_14353,inst_14354,inst_14355,inst_14356,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,inst_14365,inst_14366,inst_14367,inst_14368,inst_14369,inst_14370,inst_14371,inst_14372,inst_14373,inst_14374,inst_14375,inst_14376,inst_14377,inst_14378,inst_14379,inst_14380,inst_14381,inst_14382,inst_14383,inst_14384,inst_14385,inst_14386,inst_14387,inst_14388,inst_14389,inst_14390,inst_14391,inst_14392,inst_14393,inst_14394,inst_14395,inst_14396,inst_14397,inst_14398,inst_14399,inst_14400,inst_14401,inst_14402,inst_14403,inst_14404,inst_14405,inst_14406,inst_14407,inst_14408,inst_14409,inst_14410,inst_14411,inst_14412,inst_14413,inst_14414,inst_14415,inst_14416,inst_14417,inst_14418,inst_14419,inst_14420,inst_14421,inst_14422,inst_14423,state_val_14432,c__10528__auto__){
return (function (){
return alert("SF");
});
;})(rock_response,ashb_response,rock_body,ashb_body,inst_14318,inst_14324,inst_14325,inst_14326,inst_14327,inst_14328,inst_14329,inst_14330,inst_14331,inst_14332,inst_14333,inst_14334,inst_14335,inst_14336,inst_14337,inst_14338,inst_14339,inst_14340,inst_14341,inst_14342,inst_14343,inst_14344,inst_14345,inst_14346,inst_14347,inst_14348,inst_14349,inst_14350,inst_14351,inst_14352,inst_14353,inst_14354,inst_14355,inst_14356,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,inst_14365,inst_14366,inst_14367,inst_14368,inst_14369,inst_14370,inst_14371,inst_14372,inst_14373,inst_14374,inst_14375,inst_14376,inst_14377,inst_14378,inst_14379,inst_14380,inst_14381,inst_14382,inst_14383,inst_14384,inst_14385,inst_14386,inst_14387,inst_14388,inst_14389,inst_14390,inst_14391,inst_14392,inst_14393,inst_14394,inst_14395,inst_14396,inst_14397,inst_14398,inst_14399,inst_14400,inst_14401,inst_14402,inst_14403,inst_14404,inst_14405,inst_14406,inst_14407,inst_14408,inst_14409,inst_14410,inst_14411,inst_14412,inst_14413,inst_14414,inst_14415,inst_14416,inst_14417,inst_14418,inst_14419,inst_14420,inst_14421,inst_14422,inst_14423,state_val_14432,c__10528__auto__))
})();
var inst_14425 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),inst_14424);
var inst_14426 = enfocus.core.at.call(null,"#sf-weather-button",inst_14425);
var inst_14427 = (function (){var rock_response = inst_14318;
var ashb_response = inst_14324;
var rock_body = inst_14325;
var ashb_body = inst_14326;
return ((function (rock_response,ashb_response,rock_body,ashb_body,inst_14318,inst_14324,inst_14325,inst_14326,inst_14327,inst_14328,inst_14329,inst_14330,inst_14331,inst_14332,inst_14333,inst_14334,inst_14335,inst_14336,inst_14337,inst_14338,inst_14339,inst_14340,inst_14341,inst_14342,inst_14343,inst_14344,inst_14345,inst_14346,inst_14347,inst_14348,inst_14349,inst_14350,inst_14351,inst_14352,inst_14353,inst_14354,inst_14355,inst_14356,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,inst_14365,inst_14366,inst_14367,inst_14368,inst_14369,inst_14370,inst_14371,inst_14372,inst_14373,inst_14374,inst_14375,inst_14376,inst_14377,inst_14378,inst_14379,inst_14380,inst_14381,inst_14382,inst_14383,inst_14384,inst_14385,inst_14386,inst_14387,inst_14388,inst_14389,inst_14390,inst_14391,inst_14392,inst_14393,inst_14394,inst_14395,inst_14396,inst_14397,inst_14398,inst_14399,inst_14400,inst_14401,inst_14402,inst_14403,inst_14404,inst_14405,inst_14406,inst_14407,inst_14408,inst_14409,inst_14410,inst_14411,inst_14412,inst_14413,inst_14414,inst_14415,inst_14416,inst_14417,inst_14418,inst_14419,inst_14420,inst_14421,inst_14422,inst_14423,inst_14424,inst_14425,inst_14426,state_val_14432,c__10528__auto__){
return (function (){
return alert("Berkeley");
});
;})(rock_response,ashb_response,rock_body,ashb_body,inst_14318,inst_14324,inst_14325,inst_14326,inst_14327,inst_14328,inst_14329,inst_14330,inst_14331,inst_14332,inst_14333,inst_14334,inst_14335,inst_14336,inst_14337,inst_14338,inst_14339,inst_14340,inst_14341,inst_14342,inst_14343,inst_14344,inst_14345,inst_14346,inst_14347,inst_14348,inst_14349,inst_14350,inst_14351,inst_14352,inst_14353,inst_14354,inst_14355,inst_14356,inst_14357,inst_14358,inst_14359,inst_14360,inst_14361,inst_14362,inst_14363,inst_14364,inst_14365,inst_14366,inst_14367,inst_14368,inst_14369,inst_14370,inst_14371,inst_14372,inst_14373,inst_14374,inst_14375,inst_14376,inst_14377,inst_14378,inst_14379,inst_14380,inst_14381,inst_14382,inst_14383,inst_14384,inst_14385,inst_14386,inst_14387,inst_14388,inst_14389,inst_14390,inst_14391,inst_14392,inst_14393,inst_14394,inst_14395,inst_14396,inst_14397,inst_14398,inst_14399,inst_14400,inst_14401,inst_14402,inst_14403,inst_14404,inst_14405,inst_14406,inst_14407,inst_14408,inst_14409,inst_14410,inst_14411,inst_14412,inst_14413,inst_14414,inst_14415,inst_14416,inst_14417,inst_14418,inst_14419,inst_14420,inst_14421,inst_14422,inst_14423,inst_14424,inst_14425,inst_14426,state_val_14432,c__10528__auto__))
})();
var inst_14428 = enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),inst_14427);
var inst_14429 = enfocus.core.at.call(null,"#berkeley-weather-button",inst_14428);
var state_14431__$1 = (function (){var statearr_14434 = state_14431;
(statearr_14434[(8)] = inst_14423);

(statearr_14434[(9)] = inst_14426);

return statearr_14434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14431__$1,inst_14429);
} else {
return null;
}
}
}
});})(c__10528__auto__))
;
return ((function (switch__10463__auto__,c__10528__auto__){
return (function() {
var expert_pancake$core$init_$_state_machine__10464__auto__ = null;
var expert_pancake$core$init_$_state_machine__10464__auto____0 = (function (){
var statearr_14438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14438[(0)] = expert_pancake$core$init_$_state_machine__10464__auto__);

(statearr_14438[(1)] = (1));

return statearr_14438;
});
var expert_pancake$core$init_$_state_machine__10464__auto____1 = (function (state_14431){
while(true){
var ret_value__10465__auto__ = (function (){try{while(true){
var result__10466__auto__ = switch__10463__auto__.call(null,state_14431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10466__auto__;
}
break;
}
}catch (e14439){if((e14439 instanceof Object)){
var ex__10467__auto__ = e14439;
var statearr_14440_14442 = state_14431;
(statearr_14440_14442[(5)] = ex__10467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14443 = state_14431;
state_14431 = G__14443;
continue;
} else {
return ret_value__10465__auto__;
}
break;
}
});
expert_pancake$core$init_$_state_machine__10464__auto__ = function(state_14431){
switch(arguments.length){
case 0:
return expert_pancake$core$init_$_state_machine__10464__auto____0.call(this);
case 1:
return expert_pancake$core$init_$_state_machine__10464__auto____1.call(this,state_14431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expert_pancake$core$init_$_state_machine__10464__auto__.cljs$core$IFn$_invoke$arity$0 = expert_pancake$core$init_$_state_machine__10464__auto____0;
expert_pancake$core$init_$_state_machine__10464__auto__.cljs$core$IFn$_invoke$arity$1 = expert_pancake$core$init_$_state_machine__10464__auto____1;
return expert_pancake$core$init_$_state_machine__10464__auto__;
})()
;})(switch__10463__auto__,c__10528__auto__))
})();
var state__10530__auto__ = (function (){var statearr_14441 = f__10529__auto__.call(null);
(statearr_14441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10528__auto__);

return statearr_14441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10530__auto__);
});})(c__10528__auto__))
);

return c__10528__auto__;
});
goog.exportSymbol('expert_pancake.core.init', expert_pancake.core.init);
