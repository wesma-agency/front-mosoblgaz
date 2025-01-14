
function initComparisonSlider(containerSwiper, containerTable) {
    const swiperElem = containerSwiper.querySelector('.swiper__product-comparison');
    const buttonNext = containerSwiper.querySelector('.product-comparison-button-next');
    const buttonPrev = containerSwiper.querySelector('.product-comparison-button-prev');
    const pagination = containerSwiper.querySelector('.product-comparison__pagination');

    const swiper = new Swiper(swiperElem, {
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
        },
        mousewheelControl: false,
        keyboard: true,
        spaceBetween: 20,
        slidesPerView: 2.125,
        
        breakpoints: {
            576: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                pagination: false,
                spaceBetween: 20,
                slidesPerView: 2,
            },
            992: {
                pagination: false,
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1200: {
                pagination: false,
                spaceBetween: 20,
                slidesPerView: 4,
            },
        }
    });

    const rowSwipers = containerTable.querySelectorAll('.swiper-row-parameters');
    rowSwipers.forEach((rowSwiper) => {
        const swiperRow = new Swiper(rowSwiper, {
            navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev,
            },
            mousewheelControl: false,
            keyboard: false,
            spaceBetween: 20,
            slidesPerView: 2.125,
            breakpoints: {
                576: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                768: {
                    pagination: false,
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                992: {
                    pagination: false,
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                1200: {
                    pagination: false,
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
            }
        });

        const swipeAllSliders = (index) => {
            swiper.slideTo(index);
            swiperRow.slideTo(index);
        }

        swiper.on('slideChange', () => swipeAllSliders(swiper.activeIndex));
        swiperRow.on('slideChange', () => swipeAllSliders(swiperRow.activeIndex));
    })   
    
    

   

      
}


document.addEventListener('DOMContentLoaded', ()=>{
    const containerSwiper = document.querySelectorAll(".swiper-container");
    const containerTable = document.querySelector('.product-comparison__container-table');
    containerSwiper?.forEach( item => {
        initComparisonSlider(item, containerTable) ;
        
    })
})