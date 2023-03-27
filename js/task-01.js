
const categoriesList = document.querySelector('#categories');

const categoriesCount = categoriesList.children.length;
console.log(`Number of categories: ${categoriesCount}`);

const itemsList = categoriesList.querySelectorAll('.item');

itemsList.forEach((item) => {
console.log(`Category: ${item.querySelector('h2').textContent}`);    
console.log (`Elements: ${item.querySelectorAll('li').length}`);
});