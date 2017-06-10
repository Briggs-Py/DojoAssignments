var mongoose = require('mongoose');

var User = mongoose.model("User");
var Product = mongoose.model("Product");
// var Answer = mongoose.model("Answer");

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

    getProducts: (req, res) => {
        Product.find({}).populate('users').exec((err, questions)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                return res.json(questions);
            }
        })
    },
    //
    // getSingleQuestion: (req, res)=> {
	// 	Question.findOne({_id: req.params.id}).populate('_user').populate({path: 'answers', populate: {path: '_user'}}).exec((err, questions)=>{
    //         if(err){
    //             console.log(err);
    //             return res.sendStatus(500);
    //         }else{
    //             return res.json(questions);
    //         }
    //     })
	// },
    //
    newBid: (req, res) =>{
        if(!req.session.user){
            return res.sendStatus(401);
        }
        Product.findOne({name: req.params.name}, (err, product)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                if(parseInt(req.body.bid) < product.bid){
                    badErr = {err: "Bid must be higher than previous bid."}
                    return res.json(badErr)
                }else{
                    product.users.push({user: req.session.user._id, bid: req.body.bid});
                    product.bid = req.body.bid;
                    product.save((err, updatedProduct)=>{
                        if(err){
                            console.log(err);
                            return res.sendStatus(500);
                        }else{
                            return res.json(updatedProduct);
                        }
                    })
                }
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
    //
    results: (req, res) => {
        Product.find({}, (err, products)=>{
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                for(let product in products){
                    if(product.bid = 0){
                        console.log(err);
                        return res.sendStatus(500);
                    }else{
                        return res.json();
                    }
                }
            }
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }

}
