function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bkg: document.querySelector('body'),
  changeBtn: document.querySelector('button'),
  color: document.querySelector('.color'),
};

refs.changeBtn.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  refs.bkg.style.backgroundColor = color;
  refs.color.textContent = color;
}