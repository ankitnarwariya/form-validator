const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cnf_password = document.querySelector('#cnf_password');

// Input Error Messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Input Success Outlines
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Email RegEx validation
function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}


// Check Required Fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
       // console.log(input.value);
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

//Check Input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input)
    }
};

//Check password match
function chechkPassMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'password do not match')
    }
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, cnf_password]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
    chechkPassMatch(password, cnf_password);

    /*
    if (username.value === '') {
        showError(username, 'Username is Required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is Required');
    } else if (!isValidateEmail(email.value)){
        showError(email, 'Email is not  valid');

    }else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is Required');
    } else {
        showSuccess(password);
    }

    if (cnf_password.value === '') {
        showError(cnf_password, 'Confirm Password is Required');
    } else if (cnf_password.value !== password.value) {
        showError(cnf_password, 'Password does not match');
    } else {
        showSuccess(cnf_password);
    } */
});
