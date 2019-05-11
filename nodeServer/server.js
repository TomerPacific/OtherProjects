var http = require('http');
var fs = require('fs');
var port = 1337;
var host = '127.0.0.1';
var server = http.createServer( function(request, response) {
    if (request.method === 'POST') {
        console.log("POST");

        var body = '';

        request.on('data', function(data) {
            body+= data;
        });

        request.on('end', function() {
            console.log("Done reading " + body);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('received');
        });

        
    } else if (request.method === "GET") {

    } else if (request.method === "OPTIONS") {
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        response.writeHead(200, headers);
        response.end();
    }
});

server.listen(port, host);
console.log("Listening in on " + host + ":" + port + "...");