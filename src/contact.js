const loadContactPage = () => {
    const content = document.getElementById('content');
    const contactContainer = document.createElement('div');

    contactContainer.id = 'contact-container';
    const test = document.createElement('h1');
    test.textContent = 'Contact';

    contactContainer.appendChild(test);
    content.appendChild(contactContainer)
}

export {
    loadContactPage
}