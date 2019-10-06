const events = require('events');

const emitter = new events.EventEmitter();

// By default node provides 10 listeners to be attached on event
emitter.setMaxListeners(12);

emitter.on('knock', function() {
    console.log("Who's der")
});

emitter.on('knock', function() {
    console.log('I am node');
})

emitter.on('knock', function() {
    console.log('What you want');
})

emitter.on('knock', () => console.log('Event 4'));
emitter.on('knock', () => console.log('Event 5'));
emitter.on('knock', () => console.log('Event 6'));
emitter.on('knock', () => console.log('Event 7'));
emitter.on('knock', () => console.log('Event 8'));
emitter.on('knock', () => console.log('Event 9'));
emitter.on('knock', () => console.log('Event 10'));
emitter.on('knock', () => console.log('Event 11'));



emitter.emit('knock');
emitter.emit('knock');

emitter.once('hello', function(name) {
    console.log(`Hiii ${name} :)`)
})

emitter.emit('hello', 'ashu');

function toSalesTeam() {
    console.log('Mail send to sales team with usr detail')
}

emitter.on('sendEmail', function() {
    console.log('Confirmation mail to user')
});

emitter.on('sendEmail', toSalesTeam);

emitter.on('sendEmail', function() {
    console.log('Welcome mail to user')
});

emitter.emit('sendEmail');

// emitter.removeAllListeners('sendEmail')

emitter.removeListener('sendEmail', toSalesTeam)


emitter.emit('sendEmail')

