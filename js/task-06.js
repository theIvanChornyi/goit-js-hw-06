const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', validation);
    
function validation(event) {

    const MAX_LENGTH = textInput.getAttribute('data-length');
    
    if (event.currentTarget.value.length < MAX_LENGTH) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }

    else if (event.currentTarget.value.length >= MAX_LENGTH) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    }
}