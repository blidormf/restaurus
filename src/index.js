import home from "./modules/home.js";
import menu from "./modules/menu.js";
import contact from "./modules/contact.js";
import './styles/global.css';

function selectNavButton(id) {
    const navButtons = document.querySelectorAll('button.nav-button');

    for (let navButton of navButtons) {
        navButton.classList.remove('active');
    }

    const curr = document.querySelector(`button.nav-button${id}`);

    curr.classList.add('active');
}

const content = document.querySelector('div#content');
const homeDiv = home();
const menuDiv = menu();
const contactDiv = contact();

content.appendChild(homeDiv);

const homeButton = document.querySelector('button.nav-button#home');
homeButton.classList.add('active');
homeButton.addEventListener('click', () => {
    content.replaceChildren(homeDiv);
    
    selectNavButton('#home');
});

const menuButton = document.querySelector('button.nav-button#menu');
menuButton.addEventListener('click', () => {
    content.replaceChildren(menuDiv);

    selectNavButton('#menu');
});

const contactButton = document.querySelector('button.nav-button#contact');
contactButton.addEventListener('click', () => {
    content.replaceChildren(contactDiv);
    
    selectNavButton('#contact');
})