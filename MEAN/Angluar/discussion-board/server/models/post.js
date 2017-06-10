let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let PostSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User' },
    _topic:{type: Schema.Types.ObjectId, ref: 'Topic'},
    post: {type: String, require: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment' }],
    voteUp: {type: Number, default: 0 },
    voteDown: {type: Number, default: 0 }
}, {timestamps:true})

mongoose.model("Post", PostSchema);
