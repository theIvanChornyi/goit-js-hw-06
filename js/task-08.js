const modalForm = document.querySelector('.login-form');

modalForm.addEventListener('submit', submit);


function submit(event) {
    event.preventDefault();

    const modFormEl = event.currentTarget;

    if (modFormEl.email.value === '' || modFormEl.password.value === '') {
        return alert('Все поля должны быть заполнены!');
    }

    const userAnswear = {};
    
    userAnswear.email = modFormEl.email.value;
    userAnswear.password = modFormEl.password.value;

    console.log(userAnswear);

    event.currentTarget.reset();
}


