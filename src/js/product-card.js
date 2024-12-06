const productCard = document.querySelector('.product-card');
if (productCard) {
    const columnImg = productCard.querySelector('.product-card__column-img');
	const favourBtn = columnImg.querySelector('.meta-btn.favour-btn');
	const compareBtn = columnImg.querySelector('.meta-btn.compare-btn');

	favourBtn.addEventListener('click', () => favourBtn.classList.toggle('meta-btn--active'));
	compareBtn.addEventListener('click', () => compareBtn.classList.toggle('meta-btn--active'));

    const count = productCard.querySelector('.product-order__count');
    const countValue = count.querySelector('.product-order__value');
    const btnDec = count.querySelector('.product-order__decr');
    const btnInc = count.querySelector('.product-order__incr');
    
    btnDec.addEventListener('click', () => updateCount(countValue, -1));
    btnInc.addEventListener('click', () => updateCount(countValue, 1));

    const orderFooterBtn = document.querySelector('.product-order__footer-btn');
    const orderFooterBtnAdd = document.querySelector('.product-order__add-to-cart');
    const orderFooterBtnCart = document.querySelector('.product-order__footer-btn-cart');

    const mobileCart = productCard.querySelector('.product-mobile-cart');
    const mobileCartAdd = productCard.querySelector('.product-mobile-cart__add-btn');

    orderFooterBtnAdd.addEventListener('click', () => {
        orderFooterBtn.classList.add('product-order__footer-btn--hide');
        orderFooterBtnCart.classList.add('product-order__footer-btn-cart--active');
        mobileCart?.classList.add('product-mobile-cart--active');
    });

    mobileCartAdd?.addEventListener('click', () => {
        orderFooterBtn.classList.add('product-order__footer-btn--hide');
        orderFooterBtnCart.classList.add('product-order__footer-btn-cart--active');
        mobileCart.classList.add('product-mobile-cart--active');
    })
}

function updateCount(elem, increment) {
    const value = parseInt(elem.innerText);
    const newValue = isNaN(value) ? 1 : value + increment;
    if (newValue < 1) {
        return;
    }

    elem.innerText = newValue;
}