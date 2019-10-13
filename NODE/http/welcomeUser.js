const http = require('http');
const url = require('url');

let server = http.createServer();


server.on('request', function(req,res) {
    console.log(req.method, req.url);

    let parsedUrl = url.parse(req.url,true);

    // console.log(parsedUrl);

    if(parsedUrl.pathname == '/') {
        if(parsedUrl.query.name) {
            res.end('Welcome '+parsedUrl.query.name);
        }else {
            res.end('Please pass name in query');
        }
    }else if(parsedUrl.pathname == '/about'){
        res.end('About page')
    }else {

        res.writeHead(404,{'Content-type':'text/html'})
        res.end('Page not found');
    }
})




server.listen(3000, () => console.log('Server is running'));