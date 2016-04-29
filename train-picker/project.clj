(defproject train-picker "0.1.0-SNAPSHOT"
  :description "Just tells me which station to go to."
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                [org.clojure/clojurescript "1.8.51"]
                [compojure "1.4.0"]
                [ring/ring-defaults "0.1.5"]
                [ring/ring-json "0.4.0"]
                [cljs-http "0.1.40"]
                [org.clojure/core.async "0.2.374"]
                [enfocus "2.1.1"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.3"]]
            :cljsbuild  {
                         :builds [{
                                   :source-paths ["src-cljs"]
                                   :compiler {
                                              :output-to "resources/public/main.js"
                                              :optimizations :whitespace
                                              :pretty-print true
                                              }
                                   }]
                         }
  :ring {:handler train-picker.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
