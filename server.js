// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


// tells node creating express server
var app = express();
var PORT = 3000;

// standard code, bodyParser makes it so that the server to interprets the data to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.listen(PORT, function() {
  console.log("App listening to on Port" + PORT);
});
