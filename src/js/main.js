'use strict';

import Swiper from 'swiper/bundle';
import '../scss/style.scss';

let swiperPopular = new Swiper(".swiper_category", {
    spaceBetween: 30,
    slidesPerView: 7,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    navigation: {
      nextEl: ".popular-button-next",
      prevEl: ".popular-button-prev",
    },
    mousewheel: true,
    keyboard: true,


    enabled: false,
    breakpoints: {
        576:{
            enabled: true,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768:{
            enabled: true,
            spaceBetween: 20,
            slidesPerView: 4,
        },
        1200:{
            enabled: true,
            spaceBetween: 30,
            slidesPerView: 6,
        }
    }
});



let swiperMaterial = new Swiper(".swiper_material", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    navigation: {
      nextEl: ".material-button-next",
      prevEl: ".material-button-prev",
    },
    mousewheel: true,
    keyboard: true,

    pagination: true,
    breakpoints: {
        576:{
      
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768:{
            pagination: false,

            spaceBetween: 20,
            slidesPerView: 2,
        },
        1200:{
            pagination: false,

            spaceBetween: 30,
            slidesPerView: 3,
        },
        1440:{
            pagination: false,

            spaceBetween: 30,
            slidesPerView: 4,
        }
    }
});


let swiperBrand1 = new Swiper(".swiper_brand_one", {
    loop: true,
    autoplay: {
        delay: 0,  
        disableOnInteraction: false,
        reverseDirection: true,
        waitForTransition: true,
    },
  
    speed: 2000,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        576:{
            spaceBetween: 10,
            slidesPerView: 3,
        },
        768:{

            spaceBetween: 10,
            slidesPerView: 5,
        },
        1200:{
 
            spaceBetween: 30,
            slidesPerView: 9,
        }
    }
});

let swiperBrand2 = new Swiper(".swiper_brand_two", {
    loop: true,
    autoplay: {
        delay: 0,   
        disableOnInteraction: false,
        waitForTransition: true,
    },
    enabled:true,
    speed: 2000,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        576:{          
            spaceBetween: 10,
            slidesPerView: 3,
        },
        768:{

            spaceBetween: 10,
            slidesPerView: 5,
        },
        1200:{
            spaceBetween: 30,
            slidesPerView: 9,
        }
    }
});


let swiperBanner = new Swiper(".swiper_banner", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    mousewheel: true,
    keyboard: true,

});


function openMenu(ui_menu, ui_close, ui_body){
    ui_menu.classList.add("active-menu");
    ui_body.classList.add("active-bloor")
    ui_close.addEventListener("click", ()=>{
        ui_menu.classList.remove("active-menu");
        ui_body.classList.remove("active-bloor")
    })
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    const UI = {
        MENU: document.querySelector(".js-menu"),
        MENU_BUTTON: document.querySelector(".js-open-menu"),
        MENU_CLOSE: document.querySelector(".js-close-menu"),
        BODY: document.querySelector("body"),
    }
    UI.MENU_BUTTON.addEventListener('click', ()=>{ 
        openMenu(UI.MENU, UI.MENU_CLOSE, UI.BODY);
    })
})