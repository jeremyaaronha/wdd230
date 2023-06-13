const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
getProphetData(url);

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let h4 = document.createElement('h4');
      let h5 = document.createElement('h5');
      let h6 = document.createElement('h6');
      let portrait = document.createElement('img');

  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      h3.textContent = `Birth Date: ${prophet.birthdate}`;
      h4.textContent = `Birth Place: ${prophet.birthplace}`;
      h5.textContent = `Death: ${prophet.death}`;
      h6.textContent = `Number of children: ${prophet.numofchildren}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${getOrdinalNumber(prophet.order)} Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(h5);
      card.appendChild(h6);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression

function getOrdinalNumber(number) {
    let suffix;
    if (number === 1) {
      suffix = 'st';
    } else if (number === 2) {
      suffix = 'nd';
    } else if (number === 3) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return number + suffix;
  }
