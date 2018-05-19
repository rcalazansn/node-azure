var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
    response.write('<h1>Hello World!</h1>');
    response.end();
});

const port = process.env.PORT || 1337;

server.listen(port);