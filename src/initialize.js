const onPageLoad = () => {
    console.log('Creating Elements..')

    const content = document.querySelector('.content');
    const headerDiv = document.createElement('div');
    const bodyDiv = document.createElement('div');
    const title = document.createElement('h1');
    const headerImg = document.createElement('img');
    const h2Title = document.createElement('h2');
    const para1 = document.createElement('p');
    const headshotImg = document.createElement('img');
    const h3Title = document.createElement('h3');
    const para2 = document.createElement('p');

    console.log('Adding Classes/attributes..')

    headerDiv.classList.add('header');
    headerImg.classList.add('image');

    console.log('Adding to content div..')
}

export {
    onPageLoad
}