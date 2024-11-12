
// We need to get the value give by the individual input tags
// Then apply the formula

// Note that since here form is used, the button inside the form
// generates a submit event not a click event. 
// IMP : This submit event is generated for form itself not button

// Why ? This way clicking a button will prompt all input fields of
// the form to submit 

// by default, all buttons inside a form element trigger the form's 
// submit event, not just those labeled as "submit".

// Hence we need to select form first

const form = document.querySelector("form")
const submit = document.querySelector("button")
submit.addEventListener( "submit", function(e){
    e.preventDefault();
    console.log(e);
})
