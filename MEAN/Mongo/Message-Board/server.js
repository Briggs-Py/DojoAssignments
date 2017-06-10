var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.urlencoded());
mongoose.connect('mongodb://localhost/Message-Board');

var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
 name: String,
 post: String,
 _comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});
postSchema.path('name').required(true, 'Name cannot be blank');
postSchema.path('post').required(true, 'Message cannot be blank');
var Post = mongoose.model('Post');

var commentSchema = new mongoose.Schema({
 name: String,
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: String
}, {timestamps: true});
commentSchema.path('name').required(true, 'Name cannot be blank');
commentSchema.path('text').required(true, 'Comment cannot be blank');
var Comments = mongoose.model('Comment');



app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join( __dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

var route = require("./routes/index.js")(app, server, Message);
