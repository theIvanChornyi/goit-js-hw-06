const counter = {
    valueEl: document.querySelector('#value'),
    decBtnEl: document.querySelector('[data-action="decrement"]'),
    incBtnEl: document.querySelector('[data-action="increment"]'),
};

counter.incBtnEl.addEventListener('click', plusNumber);
counter.decBtnEl.addEventListener('click', minusNumber);

let counterValue = 0;

   function plusNumber() { 
    counterValue += 1;
    counter.valueEl.textContent = counterValue;
    }   


    function minusNumber() {
    counterValue -= 1;
    counter.valueEl.textContent = counterValue;
    }   


