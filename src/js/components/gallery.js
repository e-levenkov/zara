function Gallery() {
    const current = document.querySelector('#js-currentImg');
    const imgs = document.querySelector('.js-imgs');
    const img = document.querySelectorAll('.js-imgs img');

    function imgClick(e) {
        current.src = e.target.src;
        current.classList.add('fade-in');
        setTimeout(() => current.classList.remove('fade-in'), 500);
    }

    if (img.length > 0) {
        imgs.addEventListener('click', imgClick);
    }
}

export { Gallery };
