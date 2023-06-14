const url = 'data.json';

async function getBusinessData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.companies);
  } catch (error) {
    console.error('Error al obtener los datos del archivo JSON:', error);
  }
}

function displayBusinesses(companies) {
  const businessList = document.getElementById('business-list');

  companies.forEach(company => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');

    const name = document.createElement('h2');
    name.textContent = company.name;

    const address = document.createElement('p');
    address.textContent = `Address: ${company.address}`;

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${company.phone}`;

    const website = document.createElement('a');
    website.textContent = `Website : ${company.website}`;
    website.href = company.website;

    const membership = document.createElement('p');
    membership.textContent = `Membership: ${company.membershipLevel}`;

    // Set the image source, alt text, and other attributes
    img.src = `${company.image}`;
    img.alt = `Logo of ${company.name}`;
    img.loading = 'lazy';
    img.width = 200;
    img.height = 200;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    businessList.appendChild(card);
  });
}

getBusinessData(url);


const cardsBtn = document.getElementById('cardsBtn');
const listBtn = document.getElementById('listBtn');
const businessList = document.getElementById('business-list');

cardsBtn.addEventListener('click', () => {
  businessList.classList.remove('list');
  businessList.classList.add('cards');
});

listBtn.addEventListener('click', () => {
  businessList.classList.remove('cards');
  businessList.classList.add('list');
});
