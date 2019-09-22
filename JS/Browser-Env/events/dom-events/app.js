let btn = document.querySelector('button');


function handler(e) {
    alert('Clicked');
}

function handler2(e) {
    alert('Second handler');
    
}


function handler3(e) {
    alert('Third Listener');
    btn.removeEventListener('click', handler3);
}
// btn.onclick = handler;

// btn.onclick = handler2;


btn.addEventListener('click', handler );
btn.addEventListener('click', handler2 );


btn.addEventListener('click', handler3)