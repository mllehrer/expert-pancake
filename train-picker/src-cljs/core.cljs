(ns train-picker.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [enfocus.core :as ef]
            [enfocus.events :as ev]
            [enfocus.effects :as ee]))

(defn ^:export init []                                      ;;export makes it so JS can call this function globally
       (go (let [rock-response (<! (http/get "http://bart.crudworks.org/api/departures/ROCK"
                                             {:with-credentials? false}))
                 ashb-response (<! (http/get "http://bart.crudworks.org/api/departures/ASHB"
                                             {:with-credentials? false}))
                 rock-body (:body rock-response)
                 ashb-body (:body ashb-response)]
                (ef/at "#rock-name" (ef/content (:name rock-body))
                       "#rock-next" (ef/content (:minutes (first (:estimate (last (:etd rock-body))))))
                       "#rock-next-dir" (ef/content (:direction (first (:estimate (last (:etd rock-body))))))
                       "#rock-next-dest" (ef/do-> (ef/content (:destination (first (:etd rock-body))))
                                                  (ef/set-style :color (:hexcolor (first (:estimate (first (:etd rock-body)))))))
                       "#ashb-name" (ef/content (:name ashb-body))
                       "#ashb-next" (ef/content (:minutes (first (:estimate (first (:etd ashb-body))))))
                       "#ashb-next-dir" (ef/content (:direction (first (:estimate (first (:etd ashb-body))))))
                       "#ashb-next-dest" (ef/do-> (ef/content (:destination (first (:etd ashb-body))))
                                                  (ef/set-style :color (:hexcolor (first (:estimate (first (:etd ashb-body))))))))
                (ef/at "#sf-weather-button" (ev/listen
                                              :click
                                              #(js/alert rock-body))))))