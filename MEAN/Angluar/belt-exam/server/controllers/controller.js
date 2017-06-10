var mongoose = require('mongoose');

var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer");

module.exports = {

    loginReg: (req, res) => {

        User.findOne({name: req.body.name}, (err, user)=>{
            if(user == null){
                let newUser = new User(req.body);
                newUser.save((err, savedUser)=>{
                    if(err){
                        let errors = ""
                        for(let i in err.errors){
                            errors += ((err.errors[i].message))
                            console.log(err.errors)
                        }
                        return res.status(500).send(errors);
                    }else{
                        req.session.user = savedUser;
                        return res.json(savedUser);
                    }
                })
            }else{
                req.session.user = user;
                return res.json(user)
            }
        })
    },

    getQuestions: (req, res) => {
        Question.find({}).populate('_user').populate({path: 'answers', populate: {path: '_user'}}).exec((err, questions)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                return res.json(questions);
            }
        })
    },

    createQuestion: (req, res) =>{
        if(!req.session.user){
            return res.sendStatus(401);
        }else{
            let question = new Question(req.body);
            question._user = req.session.user._id;
            question.save((err, newQuestion)=>{
                if(err){
                    let errors = ""
                    for(let i in err.errors){
                        errors += ((err.errors[i].message))
                        console.log(err.errors)
                    }
                    return res.status(500).send(errors);
                }else{
                    return res.json(newQuestion);
                }
            })
        }
    },

    getSingleQuestion: (req, res)=> {
		Question.findOne({_id: req.params.id}).populate('_user').populate({path: 'answers', populate: {path: '_user'}}).exec((err, questions)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                return res.json(questions);
            }
        })
	},

    createAnswer: (req, res) =>{
        if(!req.session.user){
            return res.sendStatus(401);
        }
        Question.findOne({_id: req.params.question_id}, (err, question)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                let answer = new Answer(req.body);
                answer._user = req.session.user._id;
                answer.save((err, savedAnswer)=>{
                    if(err){
                        let errors = ""
                        for(let i in err.errors){
                            errors += ((err.errors[i].message))
                            console.log(err.errors)
                        }
                        return res.status(500).send(errors);
                    }else{
                        question.answers.push(savedAnswer);
                        question.save((err, savedQuestion)=>{
                            if(err){
                                console.log(err);
                                return;
                            }
                            return res.json(savedQuestion);
                        })

                    }
                })
            }
        })
    },

    current: (req, res) => {
        if(!req.session.user){
            return res.sendStatus(401);
        }else{
            return res.json(req.session.user);
        }
    },

    likes: (req, res) => {
        Answer.findOne({_id: req.params.id}, (err, answer)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                answer.likes += 1;
                answer.save((err, updatedAnswer)=>{
                    if(err){
                        console.log(err);
                        return res.sendStatus(500);
                    }else{
                        return res.json(updatedAnswer);
                    }
                })
            }
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }

}
