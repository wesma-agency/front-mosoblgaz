document.addEventListener('DOMContentLoaded', () => {
	addToBasket();
});

function addToBasket() {
	const addBtn = document.querySelectorAll('.product__cart-add');

	addBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const addBtn = btn.querySelector('.cart-icon-add');
			const addedBtn = btn.querySelector('.cart-icon-added');

			if (e.currentTarget.classList.contains('product__cart-add')) {
				addBtn.style.display = 'none';
				addedBtn.style.display = 'block';
			}
		});
	});
}
