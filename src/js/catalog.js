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
		itemsToShow += 5;

		if (itemsToShow <= catalogItems.length) {
			for (let i = 0; i < itemsToShow; i++) {
				catalogItems[i].style.display = 'block';
			}
		}

		if (itemsToShow >= catalogItems.length) {
			showMoreItemsBtn.classList.add('btn-disabled');
		}

		console.log(itemsToShow);
		console.log(catalogItems.length);
	});
}
