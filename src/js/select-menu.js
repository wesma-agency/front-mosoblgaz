const selectMenuOptions = document.querySelectorAll(".select-menu__option");
selectMenuOptions.forEach((option) => {
    const selectMenu = option.closest('.select-menu');
    const btn = selectMenu.querySelector('.select-menu__btn');
    const btnValue = btn.querySelector('.select-menu__btn-value');
    option.addEventListener('click', () => {
        btnValue.innerText = option.dataset.optionValue || '';

        selectMenu.classList.remove('dropdown--active');
        btn.classList.remove('dropdown__btn--active');
    });
});
