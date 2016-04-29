(ns train-picker.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            ))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (route/not-found "Don't do that."))

(def app
  (wrap-defaults app-routes site-defaults)
  )
