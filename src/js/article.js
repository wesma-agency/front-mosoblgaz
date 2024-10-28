import Swiper from "swiper/bundle";

const $sidebarSliders = document.querySelectorAll(".benefit-slider");
$sidebarSliders.forEach(($slider) => {
  const $main = $slider.querySelector(".benefit-slider__main");
  const $prev = $slider.querySelector(".benefit-slider__prev");
  const $next = $slider.querySelector(".benefit-slider__next");
  const $pagination = $slider.querySelector('.benefit-slider__pagination');

  new Swiper($main, {
    spaceBetween: 32,
    slidesPerView: 1,
    loop: true,
    speed: 400,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    pagination: {
      el: $pagination,
      clickable: true,
    },
    mousewheelControl: false,
    keyboard: true,
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 32,
        slidesPerView: 1,
      },
    },
  });
});