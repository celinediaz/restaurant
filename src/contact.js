const container = document.createElement('div');
const title = document.createElement('h2');
const text = document.createElement('p');
const info = document.createElement('p');
container.classList.add("contact");
title.textContent = "Contact";
text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  \r\n \r\n  I know the pancake looks like a Crepe but the description of the image said pancake.";
info.textContent = "Address: 1234 Main Street, North Wales, PA 19876 \r\n Number: 867-5309"
container.appendChild(title)
container.appendChild(text)
container.appendChild(info)
export default container;