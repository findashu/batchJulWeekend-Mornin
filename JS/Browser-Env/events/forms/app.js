let frm = document.querySelector('form');
let para = document.querySelector('p');


frm.onsubmit = function(e) {
    e.preventDefault();
    
    let n = document.querySelector('input[name=name]').value;
    let email = document.querySelector('input[name=email]').value;

   
    if(!n || !email) {
        para.innerText = 'Name and email field is required';
        para.style.color = 'red';
    }

}

let inptName = document.querySelector('input[name=name]');


inptName.onblur = function(e) {
    let value = inptName.value;

    if(!value || value.length < 3) {
        para.innerText = 'Name field is required';
        para.style.color = 'red';
        inptName.style.border = '1px solid red';
    }else {
        para.innerText= '';
        inptName.style.border = '1px solid green';
    }
};

inptName.onfocus = function() {
    para.innerText = 'Name is mandatory';
    para.style.color = 'red';
}