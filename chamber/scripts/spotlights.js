fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const companies = data.companies;
    const silverGoldCompanies = companies.filter(company => company.membershipLevel === 'Silver' || company.membershipLevel === 'Gold');
    const randomCompanies = getRandomCompanies(silverGoldCompanies, 3); 

    const spotlight1 = document.querySelector('.spotlight1');
    const spotlight2 = document.querySelector('.spotlight2');
    const spotlight3 = document.querySelector('.spotlight3');

    spotlight1.querySelector('.title-1').textContent = randomCompanies[0].name;
    spotlight1.querySelector('.title-2').textContent = `Call Now: ${randomCompanies[0].phone} | ${randomCompanies[0].website}`;

    spotlight2.querySelector('.title-1').textContent = randomCompanies[1].name;
    spotlight2.querySelector('.title-2').textContent = `Call Now: ${randomCompanies[1].phone} | ${randomCompanies[1].website}`;

    if (randomCompanies.length >= 3) {
      spotlight3.querySelector('.title-1').textContent = randomCompanies[2].name;
      spotlight3.querySelector('.title-2').textContent = `Call Now: ${randomCompanies[2].phone} | ${randomCompanies[2].website}`;
    }
  });

  function getRandomCompanies(companies, count) {
    const randomCompanies = [];
    const companyCount = companies.length;
  
    // Copy the original array so as not to modify it directly
    const availableCompanies = companies.slice();
  
    for (let i = 0; i < count; i++) {
      if (availableCompanies.length === 0) {
        break; 
      }
  
      const randomIndex = Math.floor(Math.random() * availableCompanies.length);
      const selectedCompany = availableCompanies[randomIndex];
    // Add the selected company to the list of random companies
      randomCompanies.push(selectedCompany);
    // Removes the selected company from the available ones
      availableCompanies.splice(randomIndex, 1);
    }
  
    return randomCompanies;
  }
  
