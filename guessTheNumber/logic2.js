// This is more improved JS, after I wrote other logic.js 

const guessField = document.querySelector('#guessField')
const submit =  document.querySelector('#subt')
const prevGuessBox = document.querySelector('.guesses')
const remainGuessBox = document.querySelector('.lastResult')
const lowHiBox = document.querySelector('.lowOrHi')
const fullMessageBox = document.querySelector('.resultParas')

// We need another p tag to display message
const p = document.createElement('p')

// We will first initialize random Num
let targetNum = parseInt( Math.random()*100 +1)

// We need to track all the previous guess and no of remaing guesses
let prevGuesses = []
let remaingGuesses = 10

// We need a varible that tracks whether we can play the game or Not
let playGame = true

if( playGame){
    // if we can play the game, Then we can attach event listener to submit
    submit.addEventListener( 'click', function(e){
        e.preventDefault()

        // When the button is clicked , we need to get the val of guessfield
        const guessNum = parseInt(guessField.value)

        // Next we need to validate the guessed number
        validateGuess(guessNum)

    })
}

// We will seperate the flow of the game into different functionalities
// A function will be responsible for each functionality

function validateGuess( guess ){
    // This check correctnes of input say 
    if(isNaN( guess)){
        alert('enter Valid number')
    }else if( guess < 1 || guess > 100 ){
        alert('enter number less than 101 and greater than 0')
    }
    else{
        prevGuesses.push( guess )
        if( remaingGuesses === 0){

            // User ran out of guesses and failed. Lets 
            // just update guess boxes and inform the target Num
            refreshGame( guess );
        
            displayMessage (`Game Over, target random no. was : ${targetNum}`);
            
            // Now we just need to end the game
            endGame();
        }
        else {

            // If remaining guesses are not yet 0, then we need 
            // update the boxes and apply game logic
            refreshGame( guess );

            compareGuess( guess );
        }
    }
}

function compareGuess( guess){
    // This is main logic, comparing the guessed value to target val

    if( guess === targetNum ){
        // The user guessed the num correctly
        // Give a congrats messge and end the game
        displayMessage( ' Congrats! you guessed correctly');
        endGame()
    }
    else if( guess > targetNum ){
        displayMessage(' Your guess is too High!')
    }
    else{
        displayMessage( ' Your guess is too Low!')
    }
}

function refreshGame( guess ){
    // This will update all the guess/ result boxes

    // First lets update guessfield box to empty after since
    // we have already received the input we need after current click event
    guessField.value = ''

    // Note that we already pushed current guess into prevguesses array
    // Now just append new guess to its corresponding box
    prevGuessBox.innerHTML += ` ${guess}, `

    // We also need to reduce the guesses remainnig and display to its box
    remaingGuesses -= 1
    remainGuessBox.innerHTML = ` ${remaingGuesses}`

}

function displayMessage(message){
    // prints message Ex: whether val is low or high into its box
    lowHiBox.innerHTML = `${message}`

}

// Unlike Prev logic, We want to begin new and end finished games explicitly

function endGame(){
    // To end the game just clear all inputfields
    guessField.innerHTML = ''
    
    // We also need to make sure the user doesnt anything after it unless
    // refresh of page. So just disable this field through
    // setting the disable attribute
    guessField.setAttribute('disabled', '')
    // We only need 1st arg in most cases, but for disabled we need to
    // give '' in 2nd arg for correct execution

    // When the game ends we need to generate a button for user
    // to refresh the game ie, start new game. We will just add new 
    // class 'button' to the p tag from earlier

    p.classList.add('button')

    // Using classList.add() is useful for dynamically styling elements, 
    // toggling visibility, or triggering animations in JavaScript

    // We also need to change its text to start new game
    p.innerHTML = `<h4 id="newGame"> Start new Game </h4>`
    p.style.padding = '1px'
    p.style.backgroundColor = 'skyblue';

    // Now lets add this new button at the end of guess box
    fullMessageBox.appendChild(p)
    playGame = false; // make this false untill user goes to new game
    newGame();
}

function newGame(){
    // We need to select the button which starts new game,
    // Note that because of program flow we designed, this button
    // will be avilable to newGame() only after endGame()

    // We can use its ID newGame 
    const newGameButton = document.querySelector('#newGame')

    // Add event listener to this button so that we only start new game
    // when user clicks on it
    newGameButton.addEventListener( 'click', function(e){
        // Lets reset the variables needed for new game

        targetNum = parseInt( Math.random()*100 +1)
        prevGuesses = []
        remaingGuesses = 10

        // Also reset guessboxes
        prevGuessBox.innerHTML = ''
        remainGuessBox.innerHTML = 10

        // We also need to enable the userinput guessbox again
        // For this we need to remove the disabled attribute we have set
        guessField.removeAttribute('disabled');

        // We also need to remove the button we appended to the
        // fullMessagebox (ie, start new game button)
        fullMessageBox.removeChild(p)

        // At the end just set playgame to true to allow submit button
        // to be listened again.
        playGame = true
    })

}

