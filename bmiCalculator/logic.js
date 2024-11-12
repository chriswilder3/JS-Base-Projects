

// We need to get the value give by the individual input tags
// Then apply the formula

// Note that since here form is used, the button inside the form
// generates a submit event not a click event. 
// IMP : This submit event is generated for form itself not button

// Why ? This way clicking a button will prompt all input fields of
// the form to submit all together.

// by default, all buttons inside a form element trigger the form's 
// submit event, not just those labeled as "submit".

// Hence we need to select form first

const form = document.querySelector("form")

form.addEventListener( "submit", function(e){
    e.preventDefault(); 
    // This stops the form from submitting to backend. Otherwise, as soon as
    // it submits to backend, the event associated with it disapears
    // very quickly, hence we cant study this even object on the console
    // Use it only during frontend build. Not fullstack/backend.

    // Note that this backend submission causes page reload, since backend
    // receive HTTP request, and sends back HTTP response along with
    // fresh HTML to update. Remember it during django.

    console.log(e);
    // SubmitEvent {isTrusted: true, submitter: button, type: 'submit', 
    // target: form, currentTarget: form, …}

    // Hence we can see that this event is triggered by form but by clicking
    // on button inside it.

    // Now that backend submission is bloked, we can obtain the input 
    // elements and apply logic

    const height = document.querySelector('#height')
    const weight = document.querySelector('#weight')

    // We can use .value or to obtain the submitted values from input tags

    // console.log(height.value);
    // console.log(weight.value);

    // Now we need to update the results ID div with calulcated value

    const resultDiv = document.querySelector('#results')

    // We will convert height to mtrs first and then apply
    // kg wt / (mtr ht)^2

    // We use replaceWith or innerText
    // But dont use appendChild, it will keep appeding each result

    // resultDiv.replaceWith( document.createTextNode( 
    //     weight.value / ((height.value/100)* (height.value/100))
    // ))
    // but replaceWith just destroyed the styling.

    // resultDiv.textContent = weight.value / ((height.value/100)* (height.value/100))

    // We can apply floor or round to avoid nonsense digits

    // NOTE :Its good to convert the values to Int/ Number using
    // parseInt() / Number() methods

    // console.log(parseInt(height.value)); // rounds it to int
    // console.log(Number(weight.value)); // converts to Number type

    // We can further apply Nullity/negative/empty checks on received values
    // isNaN() is used to check whether is NaN?

    if(height.value === '' || height.value <0 || isNaN(height.value) ){
        resultDiv.innerHTML = "height must be Valid"
    }
    else if(weight.value === '' || weight.value <0 || isNaN(weight.value) ){
        resultDiv.innerHTML = "weight must be Valid"
    }else{
        resultDiv.textContent = weight.value / ((height.value/100)* (height.value/100))
    }



})
