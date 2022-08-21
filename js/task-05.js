const welcomSign = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

welcomSign.input.addEventListener('input', addText);

function addText(event) {
    welcomSign.output.textContent = event.currentTarget.value;
    if (event.target.value === '') {
        welcomSign.output.textContent = 'Anonymous';  
    }
}