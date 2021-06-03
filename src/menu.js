const loadMenuPage = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');

    const menuCard1 = document.createElement('div');
    const h2Title1 = document.createElement('h2');
    const img1 = document.createElement('img');

    img1.src = '../images/vegan-curry.jpg';
    img1.alt = 'vegan curry';

    h2Title1.textContent = 'Vegan Curry';

    menuContainer.id = 'menu-container';
    img1.classList.add('menu-img');
    h2Title1.classList.add('menu-title');

    menuCard1.appendChild(h2Title1);
    menuCard1.appendChild(img1);
    menuContainer.appendChild(menuCard1);
    content.appendChild(menuContainer)
}

export {
    loadMenuPage
}