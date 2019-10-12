console.log('Program Starts');

// blocking code
// for(var i =0; i< 3e8; i++) {
//     // body
// }


// asynchronous
setTimeout(function(){
    console.log('Time expires');
}, 2000);


console.log('Program Ends');
