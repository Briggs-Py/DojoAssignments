let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let AnswerSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    answer: {type: String, minlength: [5, "Answer must be at least 5 characters in length"], require: [true, "An answer is required"] },
    details: {type: String},
    likes: {type: Number, default: 0}
}, {timestamps:true})

mongoose.model("Answer", AnswerSchema);
