// document

console.log(window.document);

console.log(window.document.documentElement);


console.log(document.documentElement.childNodes);

// accesed body
console.log(document.documentElement.childNodes[2]);


console.log(document.documentElement.childNodes[2].childNodes)

console.log(document.documentElement.childNodes[2].childNodes[3])


document.documentElement.childNodes[2].childNodes[3].innerText = 'This is dynamic text inserted';

document.documentElement.childNodes[2].childNodes[3].style.color = 'red';



