module.exports = function Route(app, server, Quote){

    var io = require('socket.io').listen(server);

    app.get('/', function(req, res) {
      res.render('index');
    })

    app.get('/quotes', function(req, res){
        Quote.find({}, function(err, results){
            if(err) {console.log(err);}
            res.render('quotes', { quotes: results});
        })
    })

    app.post('/quotes', function(req, res){
        Quote.create(req.body, function(err){
            if(err) {console.log(err); }
                res.redirect('/quotes');
        });
    });

};
