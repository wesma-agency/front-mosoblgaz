document.addEventListener('DOMContentLoaded', () => {
	showActiveTab();
	toggleAccordion();
});

function showActiveTab() {
	const tabsBtnBoxes = document.querySelectorAll('.tabs-btns');

	tabsBtnBoxes.forEach((tabsBtnsBox) => {
		const btns = tabsBtnsBox.querySelectorAll('.tabs-btns__item');
		btns.forEach((btn, index) => {
			btn.addEventListener('click', () => {
				changeActiveTab(tabsBtnsBox.dataset.tabsName, index);
			});
		});
	});
}

function changeActiveTab(name, index) {
	const oldActiveBtn = document.querySelector(
		`.tabs-btns[data-tabs-name='${name}'] > .tabs-btns__item--active`,
	);
	const oldActiveTab = document.querySelector(
		`.tabs-list[data-tabs-name='${name}'] > .tab-item--active`,
	);

	const newActiveBtn = document.querySelectorAll(
		`.tabs-btns[data-tabs-name='${name}'] > .tabs-btns__item`,
	)[index];
	const newActiveTab = document.querySelectorAll(
		`.tabs-list[data-tabs-name='${name}'] > .tab-item`,
	)[index];

	oldActiveTab.classList.remove('tab-item--active');
	oldActiveBtn.classList.remove('tabs-btns__item--active');

	newActiveBtn.classList.add('tabs-btns__item--active');
	newActiveTab.classList.add('tab-item--active');
}

function toggleAccordion() {
	const filters = document.querySelectorAll('.tab-item');

	filters.forEach((filter) => {
		const accordionBtn = filter.querySelector('.tab-item-mob');
		const accordionBody = filter.querySelector('.tab-item__content');

		if (filter.classList.contains('tab-item--open')) {
			accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
			accordionBody.style.marginBottom = 20 + 'px';
		}

		accordionBtn.addEventListener('click', () => {
			filter.classList.toggle('tab-item--open');

			if (accordionBody.style.maxHeight) {
				accordionBody.style.maxHeight = null;
				accordionBody.style.marginBottom = null;
			} else {
				accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
				accordionBody.style.marginBottom = 20 + 'px';
			}
		});
	});
}
