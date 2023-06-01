const images = document.querySelectorAll('img');

const options = {
  rootMargin: '0px 0px 100px 0px',
  threshold: 0.5
};

const loadImage = (image) => {
  const src = image.getAttribute('data-src');
  if (!src) return;

  const newImage = new Image();
  newImage.src = src;
  newImage.onload = () => {
    image.src = src;
    image.classList.add('loaded');
    image.classList.remove('placeholder');
  };
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      loadImage(image);
      observer.unobserve(image);
    }
  });
}, options);

images.forEach((image) => {
  image.classList.add('placeholder');
  imageObserver.observe(image);
});
