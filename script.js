const random = parseInt(Math.random()*100+1);

const submit = document.querySelector('#sbt');
const userinput = document.querySelector('#guessfield');
const guessslot= document.querySelector('.guesses');
const remaining= document.querySelector('.last');
const loworhigh= document.querySelector('.loworhigh');
const startover = document.querySelector('.innerparas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
        
    } else if(guess<1){
        alert('please enter a number more than 1')
    
    } else if(guess>100){
        alert('please enter a number less than 100')
    } else {
        prevguess.push(guess);
        if(numguess===11){
            displayguess(guess);
        displaymessage(`Game Over. Random number was  ${random}`)
        endgame()
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    } 
         
    
    
}


function checkguess(guess) {
    if (guess === random) {
        displaymessage(`You guessed it right`)
        endgame()
        
    } else if(guess< random){
        displaymessage(`Number is too low`)
    }
     else if(guess>random){
        displaymessage(`Number is too high`)
    }
    
}

function displayguess(guess) {
    userinput.value = "";
    guessslot.innerHTML+= `${guess} ,`;
    numguess++;
    remaining.innerHTML = `${11-numguess}`


    
}

function displaymessage(message) {
    loworhigh.innerHTML = `<h2>${message}</h2>`
    
}

function endgame() {
    userinput.value= "";
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newgame'>Start new game</h2>`;
    startover.appendChild(p);
    playgame=false
    newgame();
    
}

function newgame() {

   const newgamebutton =  document.querySelector('#newgame')
   newgamebutton.addEventListener('click',function (e) {
    random =  parseInt(Math.random()*100+1);
    prevguess = []
    numguess = 1
    guessslot.innerHTML = '';
     remaining.innerHTML = `${11-numguess}`;
     userinput.removeAttribute('disabled');
     startover.removeChild(p);
     playgame = true

    
   })
    
}