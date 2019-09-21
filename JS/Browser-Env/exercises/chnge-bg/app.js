let bd = document.body;


function randomNumber(min,max) {
    return Math.round(Math.random()* (max-min) + min)
}

console.log(randomNumber(0,255))

// bd.style.backgroundColor = `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)},${randomNumber(0,255)})`;


bd.style.backgroundColor = "rgb("+randomNumber(0,255)+","+randomNumber(0,255)+","+randomNumber(0,255)+")"