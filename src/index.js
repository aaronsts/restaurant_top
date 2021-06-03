import {onPageLoad} from './initialize';
import {loadMenuPage} from './menu';

onPageLoad();

const eventHandlers = (() => {
    const menuItem = document.getElementById('menu');
    menuItem.addEventListener('click', () => {
        const home = document.getElementById('home-container');
        home.remove();
        loadMenuPage();

    })
})();