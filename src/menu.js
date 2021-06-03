const loadMenuPage = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');

    menuContainer.id = 'menu-container';
    const test = document.createElement('h1');
    test.textContent = 'test test';

    menuContainer.appendChild(test);
    content.appendChild(menuContainer)
}

export {
    loadMenuPage
}