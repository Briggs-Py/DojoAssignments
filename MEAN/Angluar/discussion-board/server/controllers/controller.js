var mongoose = require('mongoose');

var User = mongoose.model("User");
var Topic = mongoose.model("Topic");
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

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

    getTopics: (req, res) => {
        Topic.find({}).populate('_user').exec((err, topic)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                return res.json(topic);
            }
        })
    },

    createTopic: (req, res) =>{
        if(!req.session.user){
            return res.sendStatus(401);
        }else{
            let topic = new Topic(req.body);
            topic._user = req.session.user._id;
            topic.save((err, newTopic)=>{
                if(err){
                    let errors = ""
                    for(let i in err.errors){
                        errors += ((err.errors[i].message))
                        console.log(err.errors)
                    }
                    return res.status(500).send(errors);
                }else{
                    return res.json(newTopic);
                }
            })
        }
    },

    getSingleTopic: (req, res)=> {
		Topic.findOne({_id: req.params.id}).populate('_user')
        .populate({path: 'posts',  populate: {path: 'comments', populate: {path: '_user'}}})
        .populate({path: 'posts', populate: {path: '_user'}}).exec((err, topic)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                return res.json(topic);
            }
        })
	},

    createPost: (req, res) =>{
        if(!req.session.user){
            return res.sendStatus(401);
        }
        Topic.findOne({_id: req.params.id}, (err, topic)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                let post = new Post(req.body);
                post._user = req.session.user._id;
                post.save((err, savedPost)=>{
                    if(err){
                        let errors = ""
                        for(let i in err.errors){
                            errors += ((err.errors[i].message))
                            console.log(err.errors)
                        }
                        return res.status(500).send(errors);
                    }else{
                        topic.posts.push(savedPost);
                        topic.save((err, savedTopic)=>{
                            if(err){
                                console.log(err);
                                return;
                            }
                            return res.json(savedTopic);
                        })

                    }
                })
            }
        })
    },

    createComment: (req, res) =>{
        if(!req.session.user){
            return res.sendStatus(401);
        }
        Post.findOne({_id: req.params.id}, (err, post)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                let comment = new Comment(req.body);
                comment._user = req.session.user._id;
                comment.save((err, savedComment)=>{
                    if(err){
                        let errors = ""
                        for(let i in err.errors){
                            errors += ((err.errors[i].message))
                            console.log(err.errors)
                        }
                        return res.status(500).send(errors);
                    }else{
                        post.comments.push(savedComment);
                        post.save((err, savedPost)=>{
                            if(err){
                                console.log(err);
                                return;
                            }
                            return res.json(savedPost);
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
