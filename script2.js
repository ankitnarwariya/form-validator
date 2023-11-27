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

    //username
    if(username.value !== ''){
        showSuccess(username);
    }else{
        showError(username, `${getFieldName(username)} is required`)
    }

    //email
    if(email.value !== ''){
        showSuccess(email);
    }else{
        showError(email, `${getFieldName(email)} is required`)
    }

    //password
    if(password.value !== ''){
        showSuccess(password);
    }else{
        showError(password, `${getFieldName(password)} is required`)
    }

    //Confirm password
    if(cnf_password.value === ''){
        showError(cnf_password, `${getFieldName(cnf_password)} is required`);
    }else if( password.value !== cnf_password.value){
        showError(cnf_password, `Password  does not match`)
    }else{
        showSuccess(cnf_password);
    }
    
});