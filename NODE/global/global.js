// console.log('Hello World');

//  console.log(global.Module);

// const t = require('./test-require');
console.log(module);

module.exports.foo = 'bar';


console.log(module.exports);


function bar() {
    console.log('Hello World')
}

module.exports.bar = bar;

module.exports.person = {
    name:'JS',
    gender:'female'
}

console.log(module.filename);


console.log('Access directory ',__dirname);

console.log('Access filename', __filename);


console.log('PRocess', process);

console.log(process.title);

console.log(process.pid);

console.log(process.platform);

console.log(process.cwd());

console.log(process.memoryUsage());

// code 0
// process.exit();

process.on('uncaughtException', function(err) {
    console.log('Uncaught exception');
    console.log(err);
});

// console.log(ashu);

process.on('exit', function() {
    console.log('I am exiting');
});

console.log(process.env)

