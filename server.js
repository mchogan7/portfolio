//SET UP EXPRESS SERVER
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var exphbs = require("express-handlebars");
var routes = require("./controllers/route_controller.js");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname,'public/assets')));

//Routes are found in controllers/route_controllers.js
app.use("/", routes);

app.listen(PORT, function() {
		console.log("Listening on port %s", PORT);
	});
