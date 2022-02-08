var http = require('http'), fs = require('fs');
var url = require('url');

function serveStaticFile(res, path, contentType, responseCode){
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(500, {'Content-Type' : 'text/plain'});
            res.end('500 - Bruh');
        }else{
            res.writeHead(responseCode, {'Content-Type':contentType});
            res.end(data);

        }
    });
}

http.createServer(function (req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html','text/html');
            break
        case '/aboutus':
            serveStaticFile(res, '/public/aboutus.html', 'text/html');
            break
        default:
            serveStaticFile(res, '/public/notfound.html', 'text/html', 404);
            break
    }
}).listen(8080);