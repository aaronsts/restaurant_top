const onPageLoad = () => {
    //Creating Elements..
    const content = document.getElementById('content');

    const headerDiv = document.createElement('div');
    const title = document.createElement('h1');
    const headerImg = document.createElement('img');
    const nav = document.createElement('nav');
    const homeItem = document.createElement('a');
    const menuItem = document.createElement('a');
    const contactItem = document.createElement('a');

    const bodyDiv = document.createElement('div');
    const h2Title = document.createElement('h2');
    const para1 = document.createElement('p');
    const line = document.createElement('div');
    const headshotImg = document.createElement('img');
    const h3Title = document.createElement('h3');
    const para2 = document.createElement('p');

    // Adding Classes/attributes..
    headerDiv.classList.add('header');
    bodyDiv.id = 'home-container';
    headerImg.classList.add('image');
    line.classList.add('line');
    headshotImg.classList.add('headshot-img');

    nav.classList.add('navbar');
    homeItem.id = 'home';
    menuItem.id = 'menu';
    contactItem.id = 'contact';

    headerImg.src = '../images/header-image.jpg';
    headerImg.alt = 'image of food';

    headshotImg.src = '../images/ben-parker-OhKElOkQ3RE-unsplash.jpg';
    headshotImg.alt = 'headshot of person';

    // Add text content..
    title.textContent = 'Palma';
    homeItem.textContent = 'home';
    menuItem.textContent = 'menu';
    contactItem.textContent = 'contact';
    h2Title.textContent = 'Het Ontstaan';
    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    h3Title.textContent = 'Chef';
    para2.textContent = 'I love to cook vegan meals!'

    // Adding to content div..
    nav.appendChild(homeItem);
    nav.appendChild(menuItem);
    nav.appendChild(contactItem);

    headerDiv.appendChild(headerImg);
    headerDiv.appendChild(title);
    headerDiv.appendChild(nav);

    bodyDiv.appendChild(h2Title);
    bodyDiv.appendChild(para1);
    bodyDiv.appendChild(line);
    bodyDiv.appendChild(headshotImg);
    bodyDiv.appendChild(h3Title);
    bodyDiv.appendChild(para2);

    content.appendChild(headerDiv);
    content.appendChild(bodyDiv);
}

export {
    onPageLoad
}