const http = require('http');
const fs = require('fs');


let server = http.createServer();

server.on('request', function(req,res) {
    // fs.readFile(__dirname+'/file.txt', {encoding:'utf8'}, function(err, data) {
    //     if(err) {
    //         console.log(err)
    //         res.end('SOmething went wrong')
    //     }else {
    //         res.end(data)
    //     }
    // })

    let readStream = fs.createReadStream(__dirname+'/file.txt',{encoding:'utf8'});

    readStream.pipe(res);


})

server.listen(3006, () => console.log('Server up n running'))