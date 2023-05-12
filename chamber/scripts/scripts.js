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

