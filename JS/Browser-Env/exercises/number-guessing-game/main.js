let userInput = document.querySelector('input[type=text]');
let sbtBtn = document.querySelector('input[type=submit]');
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHi');


let random = Math.floor(Math.random() * 100);
let counter = 1;

function handleGuess(e) {
    let value = parseInt(userInput.value);
    
    if(counter == 1) {
        guesses.innerText = 'Previous Guesses: '
    }

    if(counter == 10) {
        guesses.innerText += " "+value;
        lastResult.innerText = 'Game Over!!';
        lastResult.style.backgroundColor = 'red';
        startGame()

    }else if (value == random){
        guesses.innerText += " "+value;
        lastResult.innerText = 'Guessed correctly';
        lastResult.style.backgroundColor = 'green';
        startGame()
    } else{
        guesses.innerText += " "+value;
        lastResult.innerText = 'Incorrect';
        lastResult.style.backgroundColor = 'red';
        if(value > random) {
            lowOrHigh.innerText = 'Value is too high'
        }else {
            lowOrHigh.innerText = 'Value is too low'
        }
    }

    counter++
    userInput.value= '';
    userInput.focus();
}

function resetGame(e) {
    sbtBtn.disabled = false;
    lastResult.innerText = '';
    lastResult.style.backgroundColor = '';
    guesses.innerText= '';
    lowOrHigh.innerText = '';
    random = Math.floor(Math.random() * 100);
    counter = 1;
    this.remove();
}

function startGame() {
    sbtBtn.disabled = true;
    let btn = document.createElement('button');
    btn.innerText = 'Start Again';

    btn.addEventListener('click', resetGame);

    document.body.appendChild(btn);
}

sbtBtn.addEventListener('click', handleGuess);