import { parseMaskedValue } from "./imask";

const checkboxFilters = document.querySelectorAll(".checkbox-filter");
checkboxFilters.forEach((checkboxFilter) => {
    const showMore = checkboxFilter.querySelector(".checkbox-filter__showmore-btn");
    const hideMore = checkboxFilter.querySelector(".checkbox-filter__hidemore-btn");

    showMore?.addEventListener("click", () => checkboxFilter.classList.add("checkbox-filter--active"));
    hideMore?.addEventListener("click", () => checkboxFilter.classList.remove("checkbox-filter--active"));
});

const priceRanges = document.querySelectorAll(".price-range");
priceRanges.forEach((priceRange) => {
    const inputMin = priceRange.querySelector(".price-range__value--min");
    const inputMax = priceRange.querySelector(".price-range__value--max");

    inputMin?.addEventListener("blur", () => {
        const minValue = parseMaskedValue(inputMin);
        const maxValue = parseMaskedValue(inputMax);

        if (minValue && maxValue && minValue > maxValue) {
            inputMax._imask.value = inputMin._imask.value;
        }
    });

    inputMax?.addEventListener("blur", () => {
        const minValue = parseMaskedValue(inputMin);
        const maxValue = parseMaskedValue(inputMax);

        if (minValue > maxValue) {
            inputMax._imask.value = inputMin._imask.value;
        }
    });
});

const tabsFilterItems = document.querySelectorAll(".tabs-filter__item");
tabsFilterItems.forEach((tabsFilterItem) => {
    tabsFilterItem.addEventListener("click", (e) => {
        const isClickClose = e.target.closest(".tabs-filter__close-btn");
        const isActiveItem = tabsFilterItem.classList.contains("tabs-filter__item--active");

        if (!isClickClose && !isActiveItem) {
            tabsFilterItem.classList.add("tabs-filter__item--active");
        }
    });

    const closeBtn = tabsFilterItem.querySelector(".tabs-filter__close-btn");
    closeBtn.addEventListener("click", () => {
        tabsFilterItem.classList.remove("tabs-filter__item--active");
    });
});
