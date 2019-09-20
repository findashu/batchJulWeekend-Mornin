// tag Names

let headings = document.getElementsByTagName('h1');

// headings[0].innerText = 'Changed HEad'
console.log(headings);


let eleByClass = document.getElementsByClassName('test');

console.log(eleByClass);


let eleById = document.getElementById('hello');
eleById.innerText = 'Something'
console.log( eleById);


// querySelector();
//  querySelectorAll();


let firstHead = document.querySelector('h1');
let allHeadings = document.querySelectorAll('h1');

console.log(firstHead);

console.log(allHeadings);

let usingClass = document.querySelector('.test');

console.log(usingClass);


let usingID = document.querySelector('#hello')

console.log(usingID);


let inpt = document.querySelector('input[type="text"]');


console.log(inpt)

document.querySelector('body').style.backgroundColor = 'red';
