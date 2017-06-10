let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let TopicSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User' },
    topic: {type: String, minlength: [5, "Topic must be at least 5 Characters in length."], require: [true, "A topic is required"]},
    description: {type: String},
    category: {type: String, require: [true] },
    posts: [{type: Schema.Types.ObjectId, ref: 'Post' }]
}, {timestamps:true})

mongoose.model("Topic", TopicSchema);
