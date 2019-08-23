const PI = 3.14;

// Assignment Error
// PI = 20;

console.log(PI)


const obj = {
    name : 'js'
}

obj.name = 'Javascript';

// obj = {name:'Array'}

console.log(obj);


let myVar = 100;

myVar = 20;

var n = 10;
if(true) {
    let n = 'Srinidhi';
    console.log('Inside if', n);
}

let m = 20;


function foo() {
    console.log(m);
    let m = 30;
    console.log(m);
}


console.log(n)

foo();