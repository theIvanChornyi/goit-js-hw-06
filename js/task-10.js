const refs = {
  addBtn: document.querySelector('[data-create]'),
  desBtn: document.querySelector('[data-destroy]'),
  amountBox: document.querySelector('input[type = number]'),
  container: document.querySelector('#boxes'),
};

refs.addBtn.addEventListener('click', createBoxes);
refs.desBtn.addEventListener('click', destroyAllBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getAllNumbers(number) {
  const numberArray = [];
  for (let i = 1; i <= number; i += 1){
    numberArray.push(i);
  }
  return numberArray;
}

function createBoxes() {
  const boxesEL = getAllNumbers(refs.amountBox.value)
    .map(box => `<div style ="background-color:${getRandomHexColor()};
     width: ${(box*10)+20}px; height:${(box*10)+20}px" class = "box${box}"></div>`)
    .join('');
  
  refs.container.insertAdjacentHTML('afterbegin', boxesEL);
}

function destroyAllBoxes() {
  refs.container.innerHTML = '';
  }