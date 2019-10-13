const url = require('url');

let uri = 'http://localhost:3000/?name=ashu&gender=male';

let parsedUrl = url.parse(uri,true);

console.log(parsedUrl);