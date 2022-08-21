const categoriesList = document.querySelector('#categories');

function firstScript(category) {
    const subCategories = category.children;
    console.log('Number of categories:', subCategories.length);

    for (const subCategory of subCategories) {
        console.log('Category:', subCategory.firstElementChild.textContent);
        console.log('Elements:', subCategory.lastElementChild.children.length);
    }
    
}

firstScript(categoriesList);