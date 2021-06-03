const loadMenuPage = () => {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');

    const h2Title = document.createElement('h2');
    const contactCard = document.createElement('div');
    const h3Title = document.createElement('h3');
    const para1 = document.createElement('p')
    const para2 = document.createElement('p');

    menuContainer.id = 'menu-container';
    h2Title.textContent = 'Menu';
    h3Title.textContent = 'Phone & Email'
    para1.textContent = '0474 59 87 62';
    para2.textContent = 'palma@notreal.com';

    menuContainer.appendChild(h2Title);
    menuContainer.appendChild(h3Title);
    menuContainer.appendChild(para1);
    menuContainer.appendChild(para2);

    content.appendChild(menuContainer)
}

export {
    loadMenuPage
}