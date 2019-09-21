let anc = document.querySelector('a');


anc.onclick = function(e) {
    e.preventDefault();

    console.log(e);
    console.log(e.target);

    console.log(this);

    alert('Hello')
}