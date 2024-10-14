import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";

import ResizeObserver from "resize-observer-polyfill";
window.ResizeObserver = ResizeObserver;

const $simplebars = document.querySelectorAll(".js-simplebar");
$simplebars.forEach(($simplebar) => {
  const simplebar = new SimpleBar($simplebar);
  const scrollContentEl = simplebar.getScrollElement();

  updateScrollEndClass(scrollContentEl, $simplebar);
  scrollContentEl.addEventListener("scroll", () => updateScrollEndClass(scrollContentEl, $simplebar));
});

function updateScrollEndClass(scrollContentEl, $simplebar) {
  const maxScroll = scrollContentEl.scrollHeight - scrollContentEl.clientHeight;
  const currentScroll = scrollContentEl.scrollTop;

  if (currentScroll >= maxScroll) {
    $simplebar.classList.add("simplebar-scroll-end");
  } else {
    $simplebar.classList.remove("simplebar-scroll-end");
  }
}
