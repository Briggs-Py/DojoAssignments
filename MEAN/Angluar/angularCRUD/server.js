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

//Morgan
let morgan = require("morgan");
app.use(morgan('dev'));

//Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/usersSchema');
let UserSchema = new mongoose.Schema({
    first_name: {type: String, require: true },
    last_name: {type: String, require: true },
    email: {type: String, require: true },
    editable: {type: Boolean, require: true },
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User");


//Routes
//Get Users
app.get("/users", (req, res, next) => {
    console.log("Server > GET '/users' ");
    User.find({}, (err, users)=>{
        return res.json(users);
    })
})
//Create User
app.post("/users", (req, res, next) => {
    console.log("Server > POST '/users'> user ", req.body);
    delete req.body._id
    User.create(req.body, (err, user)=>{
        if (err) return res.json(err)
        else return res.json(user)
    })

})

//Destroy User
app.delete("/users/:id", (req, res, next) => {
    console.log("Server > DELETE '/users/:id ' > id ", req.params.id);
    User.deleteOne({_id:req.params.id}, (err, rawData)=>{
        if (err) return res.json(err)
        else return res.json(true)
    })

})

//Edit User
app.put("/users/:id", (req, res, next) => {
    console.log("Server > PUT '/users/:id ' > id ", req.params.id);
    console.log("Server > PUT '/users/:id ' > user ", req.body);
    User.update({_id:req.params.id}, {first_name: req.body.first_name, last_name:req.body.last_name, email:req.body.email}, (err, rawData)=>{
        if (err){
            console.log(err);
            return res.json(err)

    }else{
        console.log(rawData);
        return res.json(true)
        }
    })


})

app.all("*", (req, res, next) => {
    res.sendfile(path.resolve('./public/dist/index.html'))
})

//Server Listening @ 1337
app.listen(1337, ()=> console.log("Server running at 1337"));
