const loadMenuPage = () => {
    const content = document.getElementById('content');

    const test = document.createElement('h1');
    test.textContent = 'test test';
    content.appendChild(test);
}

export {
    loadMenuPage
}