const form = document.querySelector('form');
const username = document.querySelector('#username')
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cnf_password = document.querySelector('#cnf_password');
const submit = document.querySelector('button');


// Show Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'

    const small = formControl.querySelector('small');
    small.innerText =  message;
}

// Show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners
submit.addEventListener('click', (e) =>{
    e.preventDefault();

    
    
});