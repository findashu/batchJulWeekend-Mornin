let firstPara = document.querySelector('p');
let secondPara = document.querySelector('#secondPara');
let head = document.querySelector('h1');

firstPara.style.color = 'red';

firstPara.style.fontSize = '20px';

console.log(firstPara.style.cssText);


secondPara.style.cssText = 'color:white; background-color:black;font-size:20px;';


// 

console.log(head.classList[0]);

// head.classList[1] = 'color';

head.className += ' color';