
// Before doing anything lets take a random Num and fix it
// With which we can verify the guess of user
const targetNum = Math.floor(Math.random()*100 +1)
console.log(targetNum);

// Lets also initialize the remaining guess to 10
let guessRemain = 10

// We also want to know whether the user found the answer/ already ran
// out of guesses without finding answer
let found = false
let failed = false

// Again as before, we want to get the input from the fomr
// The submit event is triggered by form through clicking on the button
// Hence we need to add an  submit eventlistener to form

const form = document.querySelector('form')
form.addEventListener( "submit", function(e){

    // Again for inspection, we want to stop form from
    // submitting to backend and reload the page
    e.preventDefault();

    // We want to get "value" attribute of the input from #guessField box
    const guessNum = document.querySelector("#guessField").value
    console.log(guessNum);

    // The correctness/validity is displayed on p tag of class = "lowOrHi"
    const result = document.querySelector(".lowOrHi")

    // We need to verify whether its invalid number or not
    if( guessNum == '' || guessNum <1 || guessNum >100 || typeof guessNum == Number ){
        result.innerHTML = 'Invalid Number'
    }
    else{
        
        if( found === false && failed === false){
            guessRemain -= 1
            // We also want to update this new guess remainng to .lastresult field
            const fieldGuessRemain = document.querySelector('.lastResult')
            fieldGuessRemain.innerHTML = guessRemain
            // Also prev guesses are a list of previous guess which help
            // users find correct number
            const prevGuess = document.querySelector('.guesses')
            prevGuess.appendChild( document.createTextNode(` ${guessNum},`))
        }
        if(guessRemain <= 0){
            result.innerHTML = "No guess remain"
            failed = true
        }
        else {
            if( guessNum < targetNum){
                result.innerHTML = 'target is bigger'
            }
            else if( guessNum > targetNum){
                result.innerHTML = "target is lesser"
            }
            else if(guessNum == targetNum){
                result.innerHTML = `Congrats! correct : ${targetNum}`
                found = true 
            }
            else{
                result.innerHTML = 'invalid num'
            }
        }
        
    }
})