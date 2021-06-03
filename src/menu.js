const loadMenuPage = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    // Img 1
    const menuCard1 = document.createElement('div');
    const h2Title1 = document.createElement('h2');
    const img1 = document.createElement('img');

    img1.src = '../images/vegan-curry.jpg';
    img1.alt = 'vegan curry';

    h2Title1.textContent = 'Vegan Curry';

    img1.classList.add('menu-img');
    h2Title1.classList.add('menu-title');

    menuCard1.appendChild(h2Title1);
    menuCard1.appendChild(img1);
    menuContainer.appendChild(menuCard1);

    // Img 2
    const menuCard2 = document.createElement('div');
    const h2Title2 = document.createElement('h2');
    const img2 = document.createElement('img');

    img2.src = '../images/vegan-curry.jpg';
    img2.alt = 'vegan curry';

    h2Title2.textContent = 'Vegan Curry';

    img2.classList.add('menu-img');
    h2Title2.classList.add('menu-title');

    menuCard2.appendChild(h2Title2);
    menuCard2.appendChild(img2);
    menuContainer.appendChild(menuCard2);

    // Img 3
    const menuCard3 = document.createElement('div');
    const h2Title3 = document.createElement('h2');
    const img3 = document.createElement('img');

    img3.src = '../images/vegan-curry.jpg';
    img3.alt = 'vegan curry';

    h2Title3.textContent = 'Vegan Curry';

    img3.classList.add('menu-img');
    h2Title3.classList.add('menu-title');

    menuCard3.appendChild(h2Title3);
    menuCard3.appendChild(img3);
    menuContainer.appendChild(menuCard3);

    // Img 3
    const menuCard4 = document.createElement('div');
    const h2Title4 = document.createElement('h2');
    const img4 = document.createElement('img');

    img4.src = '../images/vegan-curry.jpg';
    img4.alt = 'vegan curry';

    h2Title4.textContent = 'Vegan Curry';

    img4.classList.add('menu-img');
    h2Title4.classList.add('menu-title');

    menuCard4.appendChild(h2Title4);
    menuCard4.appendChild(img4);
    menuContainer.appendChild(menuCard4);

    content.appendChild(menuContainer)
}

export {
    loadMenuPage
}