let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let MessageSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User' },
    message: {type: String, require: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment' }],
}, {timestamps:true})

mongoose.model("Message", MessageSchema);
