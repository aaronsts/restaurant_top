const loadMenuPage = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    // Img 1
    const menuCard1 = document.createElement('div');
    const h2Title1 = document.createElement('div');
    const img1 = document.createElement('img');
    const overlay1 = document.createElement('div');

    img1.src = '../images/vegan-curry.jpg';
    img1.alt = 'vegan curry';

    h2Title1.textContent = 'Vegan Curry';

    img1.classList.add('menu-img');
    h2Title1.classList.add('menu-title');
    overlay1.classList.add('overlay');
    menuCard1.classList.add('container');

    overlay1.appendChild(h2Title1);
    menuCard1.appendChild(img1);
    menuCard1.appendChild(overlay1);
    menuContainer.appendChild(menuCard1);

    // Img 2
    const menuCard2 = document.createElement('div');
    const h2Title2 = document.createElement('div');
    const img2 = document.createElement('img');
    const overlay2 = document.createElement('div');

    img2.src = '../images/korean-bbq.jpg';
    img2.alt = 'Korean BBQ';

    h2Title2.textContent = 'Korean BBQ';

    img2.classList.add('menu-img');
    h2Title2.classList.add('menu-title');
    overlay2.classList.add('overlay');
    menuCard2.classList.add('container');

    overlay2.appendChild(h2Title2);
    menuCard2.appendChild(img2);
    menuCard2.appendChild(overlay2);
    menuContainer.appendChild(menuCard2);

    // Img 3
    const menuCard3 = document.createElement('div');
    const h2Title3 = document.createElement('div');
    const img3 = document.createElement('img');
    const overlay3 = document.createElement('div');

    img3.src = '../images/pasta.jpg';
    img3.alt = 'Pasta with Kale';

    h2Title3.textContent = 'Pasta & Kale';

    img3.classList.add('menu-img');
    h2Title3.classList.add('menu-title');
    overlay3.classList.add('overlay');
    menuCard3.classList.add('container');

    overlay3.appendChild(h2Title3);
    menuCard3.appendChild(img3);
    menuCard3.appendChild(overlay3);
    menuContainer.appendChild(menuCard3);

    content.appendChild(menuContainer)
}

export {
    loadMenuPage
}