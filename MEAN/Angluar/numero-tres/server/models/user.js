let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    name: {type: String, require: [true, "Please enter a name"]},
}, {timestamps:true})

mongoose.model("User", UserSchema);
