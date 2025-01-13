import { getWordForm } from "./utils";

const cart = document.querySelector(".cart");
if (cart) {
    const CART_ITEM_MAX_COUNT = 999;

    cartPriceHandler(cart);

    const $cartItems = cart.querySelectorAll(".cart-product");
    $cartItems.forEach(($cartItem) => {
        const $counter = $cartItem.querySelector(".cart-product__counter");
        const $btnInc = $counter.querySelector(".mog-btn__plus");
        const $counterValue = $counter.querySelector(".mog-counter__value");
        const $btnDec = $counter.querySelector(".mog-btn__minus");

        $btnDec?.addEventListener("click", () => {
            $counterValue.value = Math.min(Math.max(+$counterValue.value - 1, 1), CART_ITEM_MAX_COUNT);
            cartPriceHandler(cart);
        });

        $btnInc?.addEventListener("click", () => {
            $counterValue.value = Math.min(Math.max(+$counterValue.value + 1, 1), CART_ITEM_MAX_COUNT);
            cartPriceHandler(cart);
        });

        const $btnDelete = $cartItem.querySelector(".cart-product__delete .mog-btn__delete");
        $btnDelete.addEventListener("click", () => {
            $cartItem.remove();
            cartPriceHandler(cart);
        });

        const $additionServices = $cartItem.querySelectorAll(".cart-product__addition");
        $additionServices.forEach(($additionService) => {
            const $input = $additionService.querySelector(".checkbox__input");
            $input.addEventListener("change", () => {
                cartPriceHandler(cart);
            });
        });
    });
}

function cartPriceHandler(cart) {
    const $productsCountLabel = document.querySelector(".cart-top__count-products");
    const $productsCount = cart.querySelector(".cart-total__product .cart-total__row");
    const $productsPrice = cart.querySelector(".cart-total__product .cart-total__price");
    const $discountPrice = cart.querySelector(".cart-total__discount .cart-total__price");
    const $totalPrice = cart.querySelector(".cart-total__result .cart-total__price");

    let productsCount = 0;
    let resultCount = 0;
    let resultPrice = 0;
    let resultPriceDiscount = 0;
    let resultAdditionService = 0;

    const $cartItems = cart.querySelectorAll(".cart-product");
    $cartItems.forEach(($cartItem) => {
        const productCount = +$cartItem.querySelector(".cart-product__counter .mog-counter__value").value;
        const defaultPrice = +$cartItem.dataset.productPrice;
        const defaultPriceDiscount = +$cartItem.dataset.productPriceDiscount;

        productsCount += 1;
        resultCount += productCount;
        resultPrice += defaultPrice * productCount;

        if (defaultPriceDiscount) {
            resultPriceDiscount += defaultPriceDiscount * productCount;
        } else {
            resultPriceDiscount += defaultPrice * productCount;
        }

        const $additionServices = $cartItem.querySelectorAll(".cart-product__addition");
        $additionServices.forEach(($additionService) => {
            const additionPrice = +$additionService.dataset.additionPrice;
            const $input = $additionService.querySelector(".checkbox__input");

            if (additionPrice && $input.checked) {
                resultAdditionService += additionPrice;
            }
        });
    });

    const discount = resultPrice - resultPriceDiscount;
    const resultTotal = resultPriceDiscount + resultAdditionService;

    $productsCountLabel.innerText = getWordForm(productsCount, ["товар", "товара", "товаров"]);
    $productsCount.innerText = getWordForm(resultCount, ["товар", "товара", "товаров"]);
    $productsPrice.innerText = resultPrice.toLocaleString("ru-RU");
    $discountPrice.innerText = discount.toLocaleString("ru-RU");
    $totalPrice.innerText = resultTotal.toLocaleString("ru-RU");

    const $totalBtn = cart.querySelector(".cart-total__button");
    productsCount === 0 ? $totalBtn.classList.add('cart-total__button--disabled') : $totalBtn.classList.remove('cart-total__button--disabled');
}
