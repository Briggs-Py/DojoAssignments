var mongoose = require('mongoose');

var User = mongoose.model("User");
var Question = mongoose.model("Question");

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
        Question.find({}).populate('_user').exec((err, questions)=>{
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
		Question.findOne({_id: req.params.id}).populate('_user').exec((err, questions)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                return res.json(questions);
            }
        })
	},

    vote: (req, res) => {
        Question.findOne({_id: req.params.id}, (err, question)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                if(req.params.number === "One"){
                    question.voteOne += 1;
                }
                else if(req.params.number === "Two"){
                    question.voteTwo += 1;
                }
                else if(req.params.number === "Three"){
                    question.voteThree += 1;
                }
                else if(req.params.number === "Four"){
                    question.voteFour += 1;
                }
                question.save((err, updatedVote)=>{
                    if(err){
                        console.log(err);
                        return res.sendStatus(500);
                    }else{
                        return res.json(updatedVote);
                    }
                })
            }
        })
    },

    delete: (req, res) => {
        Question.deleteOne({_id:req.params.id}, (err, rawData)=>{
            if (err) {
                return res.json(err)
            }else{
                return res.json(true)
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

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }

}
