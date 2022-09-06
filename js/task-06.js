const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', validation);
    
function validation(event) {

    const MAX_LENGTH = Number(textInput.getAttribute('data-length'));

    console.log('MAX_LENGTH', MAX_LENGTH);
    
    if (event.target.value.length === MAX_LENGTH) {
        updateClasslist(textInput, 'valid', 'invalid');
    } else {
        updateClasslist(textInput, 'invalid', 'valid');
    }
}

function updateClasslist(where, addClass, remClass) {
    where.classList.remove(remClass);
    where.classList.add(addClass);
}