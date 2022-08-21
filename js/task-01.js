const categoriesList = document.querySelector('#categories');

function firstScript(category) {
    const subCategories = category.children;
    console.log('Number of categories:', subCategories.length);
    
    // Пустой лог для более удобного визуального восприятия
    console.log('');

    for (const subCategory of subCategories) {
        console.log('Category:', subCategory.firstElementChild.textContent);
        console.log('Elements:', subCategory.lastElementChild.children.length);

        console.log(''); 
    }
    
}

firstScript(categoriesList);