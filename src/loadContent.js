import homeContainer from './home.js';
import contactContainer from './contact.js';
import menuContainer from './menu.js';
import Bakery from './bakery.jpeg';
const content = document.querySelector('#content')
const loadContent = (category) => {
    document.body.style.removeProperty('background-image')
    content.style.removeProperty('background-color')
    content.removeChild(content.lastChild);
    switch (category) {
        case "Home":
            document.body.style.backgroundImage = `url(${Bakery})`;
            content.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
            content.appendChild(homeContainer)
            break;
        case "Contact":
            document.body.style.backgroundImage = `url(${Bakery})`;
            content.appendChild(contactContainer)
            break;
        case "Menu":
            content.appendChild(menuContainer)
            break;
    }
}
export default loadContent;