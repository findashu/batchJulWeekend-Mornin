let userName = prompt('Please enter your name');


if(userName) {
    let p = document.createElement('p');
    console.log(p);
    p.innerText = userName;

    document.body.appendChild(p);

}else {

}