// require returns module.exports object

const glob = require('./global');

// import a specific property
const { bar } = require('./global');

process.on('exit', function() {
    console.log('I am exiting')
})

console.log('Logging glob ',glob);

console.log(glob.foo);

glob.bar();

console.log(glob.person)

bar();

module.exports.hi = 'hello';

