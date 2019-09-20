// setTimeout();


console.log('Program Starts')

// setTimeout(function() {
//     console.log('Time expired')
// }, 2000);


// clearInterval()


let counter = 1;


let intrval = setInterval(function() {
    console.log('Every Second')

    if(counter == 5) {
        clearInterval(intrval)
    }
    counter++;
}, 1000);



console.log(intrval)

console.log('Program Ends');

