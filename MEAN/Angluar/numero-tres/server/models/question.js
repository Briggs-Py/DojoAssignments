let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User' },
    question: {type: String, minlength: [8, "Question must be at least 8 characters in length. "], required: [true, "Question is required. "] },
    optionOne: {type: String, minlength: [3, "Option 1 must be at least 3 characters in length. "], required: [true, "Option 1 is required. "]},
    optionTwo: {type: String, minlength: [3, "Option 2 must be at least 3 characters in length. "], required: [true, "Option 2 is required. "]},
    optionThree: {type: String, minlength: [3, "Option 3 must be at least 3 characters in length. "], required: [true, "Option 3 is required. "]},
    optionFour: {type: String, minlength: [3, "Option 4 must be at least 3 characters in length. "], required: [true, "Option 4 is required. "]},
    voteOne: {type: Number, default: 0},
    voteTwo: {type: Number, default: 0},
    voteThree: {type: Number, default: 0},
    voteFour: {type: Number, default: 0}
}, {timestamps:true})

mongoose.model("Question", QuestionSchema);
