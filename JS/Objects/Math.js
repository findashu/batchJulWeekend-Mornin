// properties

// PI

console.log(Math.PI);


console.log(Math.LN10);

console.log(Math.LN2);


console.log(Math.SQRT2);


// pow()


console.log(Math.pow(2,3));


console.log(Math.sqrt(9));



let max = Math.max(34,56,78,23);

console.log(max);

let min = Math.min(45,65,12,98);

console.log(min);


console.log(Math.cbrt(27));


// random();

let random = Math.random();

console.log(random);

let rand = Math.random()*10 +1;

console.log(rand);



function randomNum(min, max) {
    return parseInt(Math.random() * (max-min) + min);
}


let rn = randomNum(50,100);

console.log(rn);


// floor();
// ceil();
// round();


console.log(Math.floor(10.6))
console.log(Math.ceil(10.6));
console.log(Math.round(10.4));