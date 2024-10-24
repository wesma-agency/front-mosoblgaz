/*----- JS для динамических элементов ------*/
function activationAccordion(ACCORDIONS){
    ACCORDIONS.forEach((accordion) => {
        const ACCORDION_HEAD = accordion.querySelector('.js-accordion-head');
        const ACCORDION_BODY = accordion.querySelector('.js-accordion-body');
        ACCORDION_HEAD.addEventListener('click', ()=>{

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
function changeTabList(tab, tabs, tab_list){
    tabs?.querySelector('.active').classList.remove('active');
    console.log(tab_list);
    let tab_item = tab_list?.querySelectorAll('.js-tab-item');
    tab_item?.forEach( item => {  
        item.classList.remove('active');
        if(item.getAttribute('data-tabs-item') === tab.getAttribute('data-tabs-item'))
        {
            tab.classList.add('active');
            item.classList.add('active');
        }
    })

}

const TAB_CONTAINER = document.querySelectorAll(".js-tab-сontainer");

TAB_CONTAINER?.forEach(item => {
    const TABS = item.querySelector('.js-tabs');
    const LIST = item.querySelector('.js-tab-list');
    TABS?.querySelectorAll('.js-tab').forEach(item => {
        item.addEventListener('click', ()=>{
            changeTabList(item, TABS, LIST);
        })
    });
})

