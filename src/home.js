const loadHomePage = () => {
    //Creating Elements..
    const content = document.getElementById('content');

    const bodyDiv = document.createElement('div');
    const h2Title = document.createElement('h2');
    const para1 = document.createElement('p');
    const line = document.createElement('div');
    const headshotImg = document.createElement('img');
    const h3Title = document.createElement('h3');
    const para2 = document.createElement('p');

    // Adding Classes/attributes..
    bodyDiv.id = 'home-container';
    headshotImg.src = '../images/ben-parker-OhKElOkQ3RE-unsplash.jpg';
    headshotImg.alt = 'headshot of person';

    // Add text content..
    h2Title.textContent = 'Het Ontstaan';
    para1.textContent = 'Sam Pelgroms, gekend van Entrez, neemt samen met zijn vriendin Laura Nollet het gekende The Venue langs de A12 over. Ze vormen het legendarische pand om tot Palma en hopen tegen de heropening van de terrassen in de horeca ook de deuren te openen.'
    h3Title.textContent = 'Chef';
    para2.textContent = 'I love to cook vegan meals!'

    // Adding to content div..
    bodyDiv.appendChild(h2Title);
    bodyDiv.appendChild(para1);
    bodyDiv.appendChild(line);
    bodyDiv.appendChild(headshotImg);
    bodyDiv.appendChild(h3Title);
    bodyDiv.appendChild(para2);

    content.appendChild(bodyDiv);
}

export {
    loadHomePage
}