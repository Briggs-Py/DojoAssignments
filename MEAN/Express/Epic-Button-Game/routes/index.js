module.exports = function Route(app, server){

    var io = require('socket.io').listen(server);

    app.get('/', function(req, res) {
      res.render('index');
    })

    var counter = 0
    io.sockets.on('connection', function(socket) {
        console.log("Message");

        socket.on("button_pressed", function(data){
            console.log("Hello");
            counter += 1;
            io.emit('updated_message', {"response": counter});

        })
        socket.on("reset_pressed", function(data){
            counter = 0;
            io.emit('reset_triggered', {"response": counter});
        })
    })

};
