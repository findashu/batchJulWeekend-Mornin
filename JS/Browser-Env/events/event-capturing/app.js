let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner');
let btn = document.querySelector('button');

function outerDiv(e) {
    alert('Outer Div');
    outer.style.border = '1px solid red';
}

function innerDiv(e) {
    alert('Inner Div');
    inner.style.border = '1px solid green';
}

function btnHandler(e) {
    e.stopPropagation();
    alert('Button Clicked');
    btn.style.border = '1px solid blue';
}

outer.addEventListener('click', outerDiv,true);
inner.addEventListener('click', innerDiv,true);
btn.addEventListener('click', btnHandler,true);