module.exports = function Route(app, server){

    var io = require('socket.io').listen(server);

    app.get('/', function(req, res) {
      res.render('index');
    })

    io.sockets.on('connection', function(socket) {

        socket.on("posting", function (data){

            var randNum = Math.floor((Math.random() * 1000) + 1);

            socket.emit('updated_message', {response: data});
            socket.emit('randNum', {response: randNum})
        })
    })

};
