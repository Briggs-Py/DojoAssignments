//Express
let express = require("express");
let app = express();

const path = require('path');


// Static Folder
app.use(express.static(__dirname + '/public/dist'));

//Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Session
let session = require('express-session');
var sessionConfig = {
    secret: 'secret',
    resave:false,
    saveUninitialized:true,
    name:'myCookies',
    cookie: {
        secure:false,
        httpOnly:false,
        maxAge:3600000
    }
}
app.use(session(sessionConfig));

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/index.html'))
})

//Server Listening @ 1337
app.listen(1337, ()=> console.log("Server running at 1337"));
