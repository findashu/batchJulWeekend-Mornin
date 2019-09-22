let ul = document.querySelector('ul');
let li = document.querySelector('#firstList');
let anc = document.querySelector('#firstAnc');


ul.onclick = function(e) {
    alert('UL Clicked');
}

li.onclick = function(e) {
    e.stopPropagation();
    alert('LI Clicked');
}

anc.onclick = function(e) {

    // prevent bubbling
    e.stopPropagation();

    alert('Anchor Clicked');
}