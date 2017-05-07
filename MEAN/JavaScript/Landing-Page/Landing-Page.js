var http = require('http');
var fs = require('fs');
var port = 5000;

var server = http.createServer(function (request, response){
    var file;

    switch (request.url){
        case "/":
            file = "index.html";
            break;
        case "/ninjas":
            file = "ninjas.html";
            break;
        case "/dojos/new":
            file = "dojos.html";
            break;
        default:
            file = null;
            break;
    }

    if(file !== null){
        fs.readFile(`static/${file}`, 'utf8', function(err, contents){
        if (err) { console.log(err); }
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end("File not found!");
    }
});

server.listen(port, function(){
  console.log("Running on port: ", port);
});
