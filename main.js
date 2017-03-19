var http = require("http");

http.createServer(function(requset, response) {

    response.writeHead(200, {'Content-Type' : 'text/plain'});

    response.end("Hello nodejs world\n");
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080');