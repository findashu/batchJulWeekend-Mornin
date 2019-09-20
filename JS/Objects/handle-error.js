// let a = 10;

// console.log(b);

// console.log(a);


// try catch block

let a = 10;
// throw new Error('Own Error')

// try {
//     // console.log(b);
    

//     try {
//         throw new Error('Inner Error')
//     } catch (error) {
//         console.log(error)
//     }
//     throw new Error('Password Wrong');

// } catch (error) {
//     console.log(error.message);
//     console.log(error.stack)
// }



try {
    // throw new Error('Something went wrong!')
    console.log('Without any error try block')
} catch (error) {
    console.log(error)
} finally {
    let b = 10;
    console.log('In finally ',b);
}


console.log(a);