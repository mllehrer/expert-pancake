(ns expert-pancake.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :refer :all]
            ))

(defroutes app-routes
  (GET "/" [] (redirect "index.html"))
  (route/not-found "Don't do that."))

(def app
  (wrap-defaults app-routes site-defaults)
  )
