const $dropdowns = document.querySelectorAll(".dropdown");
$dropdowns.forEach(($dropdown) => {
  const $btn = $dropdown.querySelector(".dropdown__btn");
  $btn.addEventListener("click", (e) => dropdownHandler($dropdown, e));

  const $closeBtns = $dropdown.querySelectorAll(".js-close-dropdown");
  $closeBtns.forEach(($closeBtn) => {
    $closeBtn.addEventListener("click", () => {
      $dropdown.classList.remove("dropdown--active");
    });
  });
});

window.addEventListener("click", (e) => {
  const $activeDropdown = document.querySelector(".dropdown--active");
  const isInner = e.target.closest(".dropdown") && !e.target.classList.contains("dropdown");
  if (!$activeDropdown || isInner) {
    return;
  }

  $activeDropdown.classList.remove("dropdown--active");
});

function dropdownHandler($dropdown, e) {
  e.stopPropagation();

  const isActive = $dropdown.classList.contains("dropdown--active");

  document.querySelectorAll(".dropdown--active").forEach(($activeDropdown) => {
    $activeDropdown.classList.remove("dropdown--active");
  });

  if (!isActive) {
    $dropdown.classList.add("dropdown--active");
  }
}