const popup = document.getElementById('imagePopup');
const popupImage = document.getElementById('popupImage');
const closeButton = document.getElementById('closeButton');

const images = document.querySelectorAll('.image-gallery img');
images.forEach(image => {
    image.addEventListener('click', () => {
        const imageUrl = image.getAttribute('src');
        popupImage.setAttribute('src', imageUrl);
        popup.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';

popup.addEventListener('click', function(event) {
  if (event.target !== popupImage && !popupImage.contains(event.target)) {
    popup.style.display = 'none';
  }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      popup.style.display = 'none';

    }
  });

});


