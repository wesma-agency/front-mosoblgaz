document.addEventListener('DOMContentLoaded', () => {
	addToBasket();
	showMobileFilters();
	toggleAccordion();
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

function toggleAccordion() {
	const filters = document.querySelectorAll('.filter-item');

	filters.forEach((filter) => {
		const accordionBtn = filter.querySelector('.filter-item__title');
		const accordionBody = filter.querySelector('.filter-item__main');

		if (filter.classList.contains('filter-item--open')) {
			accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
		}

		accordionBtn.addEventListener('click', () => {
			filter.classList.toggle('filter-item--open');

			if (accordionBody.style.maxHeight) {
				accordionBody.style.maxHeight = null;
			} else {
				accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
			}
		});
	});
}
