const modalForm = document.querySelector('.login-form');

modalForm.addEventListener('submit', submit);


function submit(event) {
    event.preventDefault();

    const modFormEl = event.currentTarget;

    if (modFormEl.email.value.trim() === '' || modFormEl.password.value.trim() === '') {
        return alert('Все поля должны быть заполнены!');
    }

    const userAnswear = {};
    
    userAnswear.email = modFormEl.email.value.trim();
    userAnswear.password = modFormEl.password.value.trim();

    console.log(userAnswear);

    event.currentTarget.reset();
}


