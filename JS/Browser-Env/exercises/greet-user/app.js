let username = prompt('Please Enter your name');
let para = document.querySelector('p');

console.log(username);

if(username) {
    para.innerText = `Welcome ${username}`;
}else {
    para.innerText = 'Please enter your name';
}
