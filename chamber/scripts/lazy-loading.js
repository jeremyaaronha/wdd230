document.addEventListener('DOMContentLoaded', () => {
    const isDiscoverPage = document.body.classList.contains('body-discover');

    if (isDiscoverPage) {
        const images = document.querySelectorAll('img[data-src]');

        const lazyLoad = target => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;

                        img.setAttribute('src', img.getAttribute('data-src'));
                        img.classList.add('image-loaded', 'is-visible');

                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '-190px' 
            });

            io.observe(target);
        };

        images.forEach(image => {
            lazyLoad(image);
        });
    }
});


