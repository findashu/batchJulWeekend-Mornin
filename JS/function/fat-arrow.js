let add = function (x,y) {
    return x+y;
}


console.log(add(2,2));


// Fat Arrow Way

// let sum = (a,b) => {
//     return a+b;
// }

let sum = (a,b) => a+b;


let sq = n => n*n;


let res = n => x => n+x; 


console.log(sum(45,5));

console.log(sq(10));

console.log(res(10)(20));