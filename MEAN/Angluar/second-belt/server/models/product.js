let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String},
    bid: {type: Number, default: 0},
    users: [{type: Array}],
}, {timestamps:true})

mongoose.model("Product", ProductSchema);
