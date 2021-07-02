import {pic1, pic2, pic3, pic4, pic5, pic6} from './menupics';
const container = document.createElement('div');
const desserts = [{title: "Strawberry Eclair", price: 8.99, photo: pic1}, {title: "Strawberry Cream Puff", price: 6.99, photo: pic2}, {title: "Mini Cheesecake", price: 5.99, photo: pic3}, {title: "Macaron", price: 3.99, photo: pic4}, {title: "Chocolate cake", price: 7.99, photo: pic5}, {title: "Pancakes", price: 8.99, photo: pic6}]
desserts.forEach( (dessert) =>{
    const item = document.createElement('div');
    const text = document.createElement('h2');
    const price = document.createElement('p');
    item.classList.add('item')
    const photo = new Image();
    photo.src = dessert.photo;
    text.textContent = dessert.title;
    price.textContent = String(dessert.price);
    item.appendChild(text);
    item.appendChild(photo);
    item.appendChild(price);
    container.appendChild(item);
})

container.classList.add("menu");

export default container;