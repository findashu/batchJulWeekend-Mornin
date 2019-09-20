function add (...args) {

    // arguments[0]
    console.log(args)

    console.log(Array.isArray(args))

    // return a+b;
}

console.log(add(1,2,3,4,5,6));


let arr = [65,34,56,78,90];

// Q WAP to find biggest num in given array;


let biggest = Math.max(...arr);

console.log(biggest);


// call apply and bind;