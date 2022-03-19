const cart = function() {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const modalCloseBtn = cart.querySelector('.modal-close');

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex';
    });

    modalCloseBtn.addEventListener('click', () => {
        cart.style.display = '';
    });
}

cart();
