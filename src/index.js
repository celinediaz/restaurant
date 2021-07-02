import loadContent from './loadContent.js';
import navbar from './navbar.js';
import './style.css';
const header = document.querySelector('#header')
const logo = document.createElement('h1');
logo.textContent = "Dessert9";
header.appendChild(logo);
header.appendChild(navbar);
loadContent("Home")
