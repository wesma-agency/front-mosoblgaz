/*----- JS для динамических элементов ------*/
function activationAccordion(ACCORDIONS){
    ACCORDIONS.forEach((accordion) => {
        const ACCORDION_HEAD = accordion.querySelector('.js-accordion-head');
        const ACCORDION_BODY = accordion.querySelector('.js-accordion-body');
        ACCORDION_HEAD.addEventListener('click', ()=>{
            //ACCORDION_HEAD.classList.toggle('open-accordion-head')
            accordion.classList.toggle('open-accordion');
        })
    })
}


function activationShowMore(show_more){
    if(window.innerWidth <= 768){
        console.log(window.innerWidth);
        show_more.forEach(item => {
            const CONTAINER = item.querySelector('.js-show-more-container');
            const BUTTON = item.querySelector('.js-show-more-button');
            const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
    
            BLOCKS.forEach((block, index) => {
                if(index >= 3){
                    block.style.display = 'none';
                }
            })
            
            BUTTON.addEventListener('click', ()=>{
                BLOCKS.forEach(block =>{
                    block.removeAttribute("style");
                })
                item.classList.add('show-more-activate');
            })
        })
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth <= 768){
            console.log(window.innerWidth);
            show_more.forEach(item => {
                const CONTAINER = item.querySelector('.js-show-more-container');
                const BUTTON = item.querySelector('.js-show-more-button');
                const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
        
                BLOCKS.forEach((block, index) => {
                    if(index >= 3){
                        block.style.display = 'none';
                    }
                })
                
                BUTTON.addEventListener('click', ()=>{
                    BLOCKS.forEach(block =>{
                        block.removeAttribute("style");
                    })
                    item.classList.add('show-more-activate');
                })
            })
        }
        else{
            show_more.forEach(item => {
                const CONTAINER = item.querySelector('.js-show-more-container');
                const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
                BLOCKS.forEach(block =>{
                    block.removeAttribute("style");
                })
            })
        }
    })
    
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    const ACCORDIONS = document.querySelectorAll('.js-accordion');
    activationAccordion(ACCORDIONS);

    const SHOW_MORE = document.querySelectorAll('.js-show-more');
    
    activationShowMore(SHOW_MORE);
    //.js-show-more-container
    //.js-show-more-block
    //.js-show-more-button
    // const UI = {
    //     ACCORDION: document.querySelector(".js-menu"),
        // MENU_BUTTON: document.querySelector(".js-open-menu"),
        // MENU_CLOSE: document.querySelector(".js-close-menu"),
    // }

    // UI.MENU_BUTTON.addEventListener('click', ()=>{ 
    //     openMenu(UI.MENU, UI.MENU_CLOSE);
    // })
})

//Раскрытие/скрытие текста
const textContents = document.querySelectorAll('.text-content');
textContents.forEach((textContent, index) => {
    const body = textContent.querySelector('.text-content__body');
    const show = textContent.querySelector('.text-content__show');

    show?.addEventListener('click', () => {
        textContent.classList.add('text-content--active');
        textContentBodyHandler(body, show);
    });
    
    const hide = textContent.querySelector('.text-content__hide');
    hide?.addEventListener('click', () => {
        textContent.classList.remove('text-content--active');
        textContentBodyHandler(body, show, index);
    });

    let resizeTimeout;
    setTimeout(() => textContentBodyHandler(body, show), 500);
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => textContentBodyHandler(body, show), 100);
    });
});

function textContentBodyHandler(body, show) {
    if (!body.classList.contains('text-content__body--clamp')) {
        return;
    }

    if (body.scrollHeight > body.clientHeight) {
        show?.classList.remove('text-content__show--inactive');
    } else {
        show?.classList.add('text-content__show--inactive');
    }
}