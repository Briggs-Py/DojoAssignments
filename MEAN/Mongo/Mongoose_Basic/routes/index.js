module.exports = function Route(app, server){

    var io = require('socket.io').listen(server);

    app.get('/', function(req, res) {
      res.render('index');
    })

};
