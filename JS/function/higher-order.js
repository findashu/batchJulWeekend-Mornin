function add (a,b,sq) {
    let sum = a+b;
    return sq(sum)
}

function square(n) {
    return n*n;
}


let res = add(2,3,square);
// let res = add(2,3,n => n*n);

square(6);
console.log(res);


// 

function outer(x) {

    function inner(y) {
        console.log('Inner Function');
       return x+y
    }

    return inner;
}

let inn = outer(10);

let fR = inn(5);

console.log(fR)

// outer()();


let first = outer(30);

let rest = first(5);

console.log(rest)


// 
let addition = outer(45)(45);

console.log(addition);