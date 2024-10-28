export function lockBody(lockBy = "") {
  const scrollbarWidth = getScrollbarWidth();

  document.body.classList.add("body--lock");
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.dataset.lockedBy = lockBy;

  const $absoluteElems = document.querySelectorAll(".menu-bottom");
  $absoluteElems.forEach(($elem) => {
    const elemPaddingRight = parseInt(window.getComputedStyle($elem, null).getPropertyValue("padding-right"));
    $elem.style.paddingRight = `${scrollbarWidth + elemPaddingRight}px`;
  });
}

export function unlockBody() {
  document.body.classList.remove("body--lock");
  document.body.style.paddingRight = "";
  document.body.removeAttribute("data-locked-by");

  const $absoluteElems = document.querySelectorAll(".menu-bottom");
  $absoluteElems.forEach(($elem) => ($elem.style.paddingRight = ""));
}

export function isLockedBody() {
  return document.body.classList.contains("body--lock");
}

export function getLockedBodyBy() {
  return document.body.dataset.lockedBy;
}

export function getScrollbarWidth() {
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

export default {
  lockBody,
  unlockBody,
  isLockedBody,
  getLockedBodyBy,
  getScrollbarWidth,
};
