var http = require('http');
var url = require('url');
var randomNumber = require('./lib/RandomNumber.js');



http.createServer(function (req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200,{'Content-Type' :'text/plain'});
            res.end('Home');
            break
    }        
}).listen(8080);