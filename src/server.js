require("dotenv").config();
const express = require("express");
const initWebRoutes = require("./routes/web");
const bodyParser = require("body-parser");

let app = express();

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

//config body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);
//config
//init web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Messenger tech shop is running at the port ${port}`);
});
