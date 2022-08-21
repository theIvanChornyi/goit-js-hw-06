const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

function addIngridientEl(ingredients) {
  const newIngredientsEl = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');
    ingredientEl.textContent = ingredient;
    return ingredientEl;
  });

  ingredientsListEl.append(...newIngredientsEl);
  
  // Просто коментарий в консоль
  return `All done, check HTML`;
}

console.log(addIngridientEl(ingredients));