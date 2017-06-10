var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.urlencoded());
mongoose.connect('mongodb://localhost/Quoting-Dojo');

var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String
})
var Quote = mongoose.model('quotes', QuoteSchema);

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join( __dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

var route = require("./routes/index.js")(app, server, Quote);
