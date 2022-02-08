var http = require('http');
var url = require('url');
var randomNumber = require('./lib/RandomNumber.js');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month
    res.end(txt+'Hello World'+randomNumber.RandomNumber());
}).listen(8080);