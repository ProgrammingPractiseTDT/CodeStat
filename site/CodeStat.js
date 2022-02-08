var http = require('http');
var randomNumber = require('./lib/RandomNumber.js');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World'+randomNumber.RandomNumber());
}).listen(8080);