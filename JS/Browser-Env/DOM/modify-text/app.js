let para = document.querySelector('p');

console.log(para);

// innerText
// para.innerText = '<p>Learning innertext property</p>';


// innerHTML

para.innerHTML = 'HEllo World <p>Learning innertext property</p> ';


console.log(para.innerHTML);

console.log(para.textContent);


para.innerHTML += 'hello World'


// outerText
// outerHTML