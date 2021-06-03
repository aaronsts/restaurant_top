import {onPageLoad} from './initialize';
import {loadHomePage} from './home'
import {loadMenuPage} from './menu';
import {loadContactPage} from './contact';

onPageLoad();

const eventHandlers = (() => {
    const menuItem = document.getElementById('menu');
    const homeItem = document.getElementById('home');
    const contactItem = document.getElementById('contact');
    menuItem.addEventListener('click', () => {
        if (document.getElementById('home-container')){
            document.getElementById('home-container').remove();
            loadMenuPage();
        }
        if (document.getElementById('contact-container')){
            document.getElementById('contact-container').remove();
            loadMenuPage();
        }
    })
    homeItem.addEventListener('click', () => {
        if (document.getElementById('menu-container')){
            document.getElementById('menu-container').remove();
            loadHomePage();
        }
        if (document.getElementById('contact-container')){
            document.getElementById('contact-container').remove();
            loadHomePage();
        }
    })
    contactItem.addEventListener('click', () => {
        if (document.getElementById('menu-container')){
            document.getElementById('menu-container').remove();
            loadContactPage();
        }
        if (document.getElementById('home-container')){
            document.getElementById('home-container').remove();
            loadContactPage();
        }
    })
})();