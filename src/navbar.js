import loadContent from './loadContent.js';
const categories = ["Home", "Menu", "Contact"];
const navbar = document.createElement('nav');
const ul = document.createElement('ul');
const createMenuCategory = (category) => {
    const btn = document.createElement('li');
    btn.textContent = `${category}`;
    btn.classList.add(`${category}`)
    btn.addEventListener("click", function() {
        console.log(category);
        loadContent(category);
    });
    ul.appendChild(btn);
    return btn;
}
categories.forEach((category) => createMenuCategory(category));
navbar.appendChild(ul);

export default navbar;