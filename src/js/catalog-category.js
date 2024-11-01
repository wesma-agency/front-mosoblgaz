document.addEventListener('DOMContentLoaded', () => {
	addToBasket();
	showMobileFilters();
});

const categoryProducts = document.querySelectorAll('.category-product');
categoryProducts.forEach(categoryProduct => {
	const favourBtn = categoryProduct.querySelector('.meta-btn.favour-btn');
	favourBtn.addEventListener('click', () => favourBtn.classList.toggle('meta-btn--active'));

	const compareBtn = categoryProduct.querySelector('.meta-btn.compare-btn');
	compareBtn.addEventListener('click', () => compareBtn.classList.toggle('meta-btn--active'));
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

function showMobileFilters() {
	const mobileFiltersBtn = document.querySelector('.mobile-filters-btn');
	const mobileBg = document.querySelector('.mobile-bg');
	const sidebar = document.querySelector('.category-sidebar');
	const filtersCloseBtn = document.querySelector('.filters-title__btn');

	mobileFiltersBtn?.addEventListener('click', () => {
		sidebar.classList.add('category-sidebar-mobile');
		mobileBg.classList.add('mobile-bg--active');
	});

	filtersCloseBtn?.addEventListener('click', () => {
		sidebar.classList.remove('category-sidebar-mobile');
		mobileBg.classList.remove('mobile-bg--active');
	});
}
