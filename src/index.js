import {onPageLoad} from './initialize';
import {loadHomePage} from './home'
import {loadMenuPage} from './menu';

onPageLoad();

const eventHandlers = (() => {
    const menuItem = document.getElementById('menu');
    const homeItem = document.getElementById('home');
    const contactItem = document.getElementById('contact');
    menuItem.addEventListener('click', () => {
        const home = document.getElementById('home-container');
        home.remove();
        loadMenuPage();

    })
    homeItem.addEventListener('click', () => {
        document.getElementById('menu-container').remove();
        loadHomePage();
    })
})();