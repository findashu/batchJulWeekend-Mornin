const http = require('http');
const fs = require('fs');
const url = require('url');

let server = http.createServer();


server.on('request', function (req,res) {

    let parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname == '/') {
        fs.readFile(__dirname+'/index.html', {encoding:'utf8'}, function(err,data) {
            if(err) {
                res.writeHead(500, {'Content-type':'text/html'});
                res.end('Something went wrong')
            }else {
                res.writeHead(200, {'Content-type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }else if(parsedUrl.pathname == '/contact' && req.method=='GET') {
        fs.readFile(__dirname+'/contact.html', {encoding:'utf8'}, function(err,data) {
            if(err) {
                res.writeHead(500, {'Content-type':'text/html'});
                res.end('Something went wrong')
            }else {
                res.writeHead(200, {'Content-type':'text/html'});
                res.write(data);
                res.end();
            }
        })   
    }else if (parsedUrl.pathname == '/contact' && req.method=='POST') {
        req.on('data', function(data) {
            console.log(data);
            let dt = Buffer.from(data).toString();
            console.log(dt);
        })

       req.on('end', function() {
            res.end('Form Submitted');
       })
 
    }else {
        res.writeHead(404, {'Content-type':'text/html'});
        res.end('Page not found')
    }

    

})

server.listen(3005, () => console.log('Server is running on port 3005'))
