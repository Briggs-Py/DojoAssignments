let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    name: {type: String, require: [true, "Please enter a name"]},
    bid: {type: Number, default: null}
}, {timestamps:true})

mongoose.model("User", UserSchema);
