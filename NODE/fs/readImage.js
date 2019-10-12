const fs = require('fs');

let encoding = 'base64';

let data = fs.readFileSync(__dirname+'/javascript.png').toString(encoding);



let imgUri = `data:image/jpeg;base64,${data}`;

let dt = imgUri.split(',')[1];
let bffr = Buffer(dt,encoding);


fs.writeFileSync('./myfile.png', bffr);

// console.log(imgUri);