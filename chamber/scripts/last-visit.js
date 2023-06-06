const lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');

const currentTimestamp = new Date().getTime();

const timeDifference = currentTimestamp - lastVisitTimestamp;

const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

localStorage.setItem('lastVisitTimestamp', currentTimestamp);

const timeDisplayElement = document.getElementById('last-visit-info');
timeDisplayElement.textContent = `||  Days since last visit: ${daysDifference}`;
