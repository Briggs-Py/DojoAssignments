let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User' },
    question: {type: String, minlength: [10, "Question must be at least 10 characters in length"], required: [true, "Question is required"] },
    description: {type: String},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer' }],
}, {timestamps:true})

mongoose.model("Question", QuestionSchema);
