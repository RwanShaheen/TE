const loader = document.querySelector('.eyePreloader')

window.addEventListener('load', () => {

    setTimeout(() => {

        loader.classList.add('.fadeOut')
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);

    }, 4000);

});