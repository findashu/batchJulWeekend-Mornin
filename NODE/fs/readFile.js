const fs = require('fs');
const path = require('path');


console.log('Program Starts')


// synchronous

let file = path.join(__dirname, '../callbacks.js');

// let data = fs.readFileSync(file, {encoding:'utf8'});
// console.log(data);


fs.readFile(file, {encoding:'utf8'}, function(err, data) {
    if(err) {
        console.log(err)
    }else {
        console.log(data)
    }
});

console.log('Program Ends');