/* Date */
const date = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long'
  });

document.getElementById("date").innerHTML = date;

/* Last Updated */
const year = new Date().getFullYear();
document.getElementById('currentYear').textContent = year;

const lastUpdated = new Date(document.lastModified);
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
const formattedDate = lastUpdated.toLocaleDateString('en-US', options);
document.getElementById('lastUpdated').textContent = formattedDate;

/* Nav Button */

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

// Current day of the week
const currentDate = new Date();
const currentDay = currentDate.getDay();

// Monday [1] or Tuesday [2]
if (currentDay === 1 || currentDay === 2) {
  // Create a banner
  const banner = document.createElement('div');
  banner.classList.add('banner');
  banner.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';

  // Append the banner to the very top of the page
  const header = document.querySelector('header');
  header.insertBefore(banner, header.firstChild);
}


  // Set the value of the hidden field with the current date and time
  var formattedDateISOS = currentDate.toISOString();
  document.getElementById("form-load-time").value = formattedDateISOS;
