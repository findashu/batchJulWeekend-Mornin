// console.log('Program Starts')
// setTimeout(function() {
//     console.log('Hey Der')
// },1000);

// console.log('Program Ends');



// function add (a,b, cb) {
//     if(typeof a != 'number') {
//         cb('Addition needs a number', null)
//     }else {
//         let addition = a+b;
//         cb(null, addition)
//     }
// }


// function square(x, cb) {
//     if(typeof x != 'number'){
//         cb('Square needs a number', null)
//     }else {
//         cb(null, x*x);
//     }
// }


// add (4,4, function (err,data) {
//     if(err) {
//         console.log(err)
//     }else {
//         square(data, function(err,sdata) {
//             if(err) {
//                 console.log(err)
//             }else {
//                 console.log('Getting square ',sdata)
//             }
//         })
//     }
// });




function add (a,b) {
    return new Promise(function(resolve,reject)  {
        if(typeof a != 'number') {
            reject('Addition needs a number')
        }else {
            resolve(a+b);
        }
    })
}

function square (x) {
    return new Promise((resolve, reject) => {
        if(typeof x != 'number') {
            reject('Square needs a number')
        }else {
            resolve(x*x);
        }
    })
}


add(4,4)
    .then(data => {
       return square(data)
    }).then(sq => console.log('Square res ',sq))
    .catch(err => console.log(err))


add(5,5)
    .then(dt => square(dt))
    .then(sq => console.log(sq))
    .catch(err => console.log(err));


add(10,10)
    .then(dt => console.log(dt))
    .catch(err => console.log(err));


square(5)
    .then(dt => console.log(dt))
    .catch(err => console.log(err));


Promise.all([add(20,20), square(6)])
    .then(dt => console.log(dt))
    .catch(err => console.log(err));


// async await

async function handleResult () {

    try {
        let sum = await add(3,3);
        console.log('Async ', sum)
        
        let s = await square(sum);
    
        console.log('Async square ', s) 
    } catch (error) {
        console.log(error)
    }


}


handleResult();