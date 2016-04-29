(ns train-picker.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [enfocus.core :as ef]
            [enfocus.events :as ev]
            [enfocus.effects :as ee]))

(defn ^:export init []                                      ;;export makes it so JS can call this function globally
       (go (let [response (<! (http/get "http:///bart.crudworks.org/api/departures/ROCK"))
                 body (:body response)]
                (ef/at "#rockridge" (ef/content (:name body))
                       (ef/at "#sf-weather-button" (ev/listen
                                                     :click
                                                     #(js/alert "You clicked that")))))))