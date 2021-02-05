(ns demo.index)

(defn html []
  (let [code-url "main.js"
        title "Radiant Demo"]
    (str
     "<!DOCTYPE html>"
     "<html>"
     "<head>"
     "<title>" title "</title>"
     "<meta charset='UTF-8' />"
     "<meta name='viewport' content='width=device-width, initial-scale=1' />"
     "<link href=\"https://fonts.googleapis.com/css?family=Lato|Roboto:300,400\" rel= \"stylesheet\" >"
     "<link href= \"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap\" rel= \"stylesheet\" >"
     "<style>
      p {font-family: 'Roboto', sans-serif;}
      h1 {font-family: 'Roboto', sans-serif;}
      td {font-family: 'Roboto', sans-serif;
      height: 20px;}
      code {font-family: 'Roboto Mono', monospace;}
      body {margin: 0px; background-color: #2e3440;}
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        display: none;
      }
      </style>"
     "</head>"
     "<body style=\"margin: 0\">"
     "<div id=\"root\"></div>"
     "<script src=\"" code-url "\"></script>"
     "</body>"
     "</html>")))

(defn -main []
  (println (html)))
