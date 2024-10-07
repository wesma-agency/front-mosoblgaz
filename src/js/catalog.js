document.addEventListener('DOMContentLoaded', () => {
	showMoreCategories();
});

function showMoreCategories() {
	const catalogItems = document.querySelectorAll('.catalog-item');
	const showMoreItemsBtn = document.querySelector('.catalog-showmore__btn');
	const visibleItems = 5;
	let itemsToShow = 5;

	if (window.innerWidth < 575) {
		for (let i = visibleItems; i < catalogItems.length; i++) {
			catalogItems[i].style.display = 'none';
		}
	}

	showMoreItemsBtn.addEventListener('click', () => {
		if (itemsToShow <= catalogItems.length) {
			itemsToShow += 5;

			for (let i = 0; i < itemsToShow; i++) {
				catalogItems[i].style.display = 'block';
				if (itemsToShow >= catalogItems.length) {
					itemsToShow = catalogItems.length;
					showMoreItemsBtn.classList.add('btn-disabled');
				}
			}
		}
	});
}
