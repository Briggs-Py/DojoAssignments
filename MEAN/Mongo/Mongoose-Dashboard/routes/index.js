module.exports = function Route(app, server, Animal){

    app.get('/', function(req, res){
        Animal.find({}, function(err, results){
            if(err) {console.log(err);}
            res.render('index', { animal: results});
        });
    });

    app.get('/animal/new', function(req, res){
        res.render('new')
    });

    app.post('/animal', function(req, res){
        Animal.create(req.body, function(err){
            if(err) {console.log(err); }
            res.redirect('/');
        });
    });

    app.get('/animal/:id', function(req, res){
        Animal.find({ _id: req.params.id }, function(err, response) {
            if (err) { console.log(err); }
            res.render('show', { animal: response[0] });
        });
    });

    app.get('/animal/edit/:id', function(req, res){
        Animal.find({ _id: req.params.id }, function(err, results){
            if(err) {console.log(err);}
            res.render('edit', { animal: results[0]});
        });
    });

    app.post('/animal/:id', function(req, res){
        Animal.update({ _id: req.params.id}, req.body, function(err, results){
            if (err) { console.log(err);}
            res.redirect('/');
        })
    })

    app.get('/animal/delete/:id', function(req, res){
        Animal.remove({ _id: req.params.id }, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/');
        });
    });

};
