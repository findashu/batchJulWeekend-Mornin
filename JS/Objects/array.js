let names = ['js','python','java'];

let results = new Array(12,34,45,56);

console.log(names);

console.log(results);


let prices = new Array(23);

console.log(prices);


// length

console.log(results.length);

// push() && pop();


console.log(results.push(60))
console.log(results)

console.log(results.pop())

console.log(results)


// shift() && unshift();


console.log(names.unshift('node'));

console.log(names);

console.log(names.shift());

console.log(names);


// sort()

// let unsorted = [5,7,2,4,1];

let unsorted = [5,7,2,4,11,34,44];
let sorted = unsorted.sort();

console.log(unsorted)

console.log(sorted);


// slice();

let fruits = ['apple','orange','mango','grapes','banana','muskmelon']


console.log(fruits.slice(2,5));

console.log(fruits)

// splice();

console.log(fruits.splice(2,3,'watermelon','papaya'));


console.log(fruits);

// join();


console.log(fruits.join('-'));




let myArr = [45,36,56,64,89];

function iter (ele,ind,arr) {
    console.log('Element', ele);
    console.log('Index', ind);
    console.log('Arr', arr);
}


myArr.forEach(iter);


// for of

let frnds = ['ashu','manni','atul','ravi']

for(ele of frnds) {

    console.log(ele)
    
}













