let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    comment: {type: String, require: true }
}, {timestamps:true})

mongoose.model("Comment", CommentSchema);
