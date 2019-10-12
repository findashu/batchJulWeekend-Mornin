const fs = require('fs');
const path = require('path');

let file = path.join(__dirname,'../callbacks.js');

let readerStream = fs.createReadStream(file,{start:10});


readerStream.setEncoding('utf8');


let data = '';

readerStream.on('data', function(chunk) {
    console.log('chunk',chunk);
    data += chunk;
});

readerStream.on('end', function () {
    console.log('Reading Completed');
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log('Stream Error', err)
});