// In this script we select all button at once, So that we can 
// apply forloops on them

// Change src in script of index to logic2.js

    // Remember to use queryselectorAll dont ommit All
const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

// Since buttons is a Nodelist, it has foreach loop

buttons.forEach( (button) =>
{
    button.addEventListener("click", ()=>{       
        body.style.backgroundColor = button.id; // This callback can access
                    // both button variable and body variable since
                    // They are in its lexical scope
    })
})
