// Funcion autoinvocada
// -- para proteger las variables y no se mezclen con otros archivos

( function() {

    const hamburguer = document.querySelector('.nav__icon');
    const menu = document.querySelector('.nav__link');
    const close = document.querySelector('.nav__close');

    hamburguer.addEventListener('click', () => {
        menu.classList.add('spread');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('spread');
    });


    window.addEventListener('click', e => {

        if ( menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
            menu.classList.remove('spread');
        };

    });

} )();