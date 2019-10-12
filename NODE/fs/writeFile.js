const fs = require('fs');

console.log('PRogram Starts');
// synchronous

// fs.writeFileSync(__dirname+'/input.txt', 'Hello Programming World', {encoding:'utf8'});

// asynchronous

let dt = 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships'


fs.writeFile(__dirname+'/input.txt', dt , function(err,data) {
    if(err) {
        console.log(err)
    }else {
        console.log('Writing is done')
    }
});

console.log('PRogram Ends');


// appendFile()
// mkdir()
// createDir()
// removeDir();
// readDir();
// rename();
// rmdir();



