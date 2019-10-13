const http = require('http');

let server = http.createServer(function (req,res) {

    console.log(req);

    console.log(req.url);

    console.log(req.method);

    if(req.url == '/') {
        res.end('Welcome to Home page')
    }else if (req.url == '/about') {
        res.end('About Page')
    }else {
        res.end('Page not found');
    }

});


server.listen(3000, (err) =>{
    if(err) console.log(err);
    console.log('Server up n running on port 3000')
});