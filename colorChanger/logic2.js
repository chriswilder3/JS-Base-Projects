// In this script we select all button at once, So that we can 
// apply forloops on them

    // Remember to use queryselectorAll dont ommit All
const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

// Since buttons is a Nodelist, it has foreach loop

buttons.forEach( (button) =>
{
    button.addEventListener("click", ( e)=>{       

        // Note that param taken by callback of event function
        // is called event object
        console.log(e); 
        // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
        // Hence e is a object representing pointer attribute  details about the click event, 
        // such as pointer position, whether the event is trusted etc
        
        // target is a property of even object carrying info regarding
        // element on which this even will be applied.
        console.log(e.target);
        //<span class="button" id="white"></span>

        // Since we clicked the white button, it is the current target now

        body.style.backgroundColor = button.id; 
                    // This callback can access
                    // both button variable and body variable since
                    // They are in its lexical scope
    })
})

