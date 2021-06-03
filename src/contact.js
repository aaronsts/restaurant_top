import {config} from '../config';

const loadContactPage = () => {
    const content = document.getElementById('content');
    const contactContainer = document.createElement('div');

    const h2Title = document.createElement('h2');
    const contactCard = document.createElement('div');
    const h3Title = document.createElement('h3');
    const para1 = document.createElement('p')
    const para2 = document.createElement('p');
    const h3Title2 = document.createElement('h3');
    const mapCard = document.createElement('div');

    // Create the script tag, set the appropriate attributes
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&callback=initMap`;
    script.async = true;

    // Attach your callback function to the `window` object
    window.initMap = function() {
    // JS API is loaded and available
    // The location of Uluru
    const brussels = { lat: 50.84965958068527, lng: 4.347751332061692 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: brussels,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: brussels,
      map: map,
    });
    };

    // Append the 'script' element to 'head'
    document.head.appendChild(script);


    contactContainer.id = 'contact-container';
    h2Title.textContent = 'Contact';
    h3Title.textContent = 'Phone & Email';
    para1.textContent = '0474 59 87 62';
    para2.textContent = 'palma@notreal.com';
    h3Title2.textContent = 'Map';
    mapCard.id = 'map';
    contactCard.id = 'contact';

    contactContainer.appendChild(h2Title);
    contactCard.appendChild(h3Title);
    contactCard.appendChild(para1);
    contactCard.appendChild(para2);
    contactCard.appendChild(h3Title2);

    contactContainer.appendChild(contactCard);
    contactContainer.appendChild(mapCard);
    content.appendChild(contactContainer);
}

export {
    loadContactPage
}