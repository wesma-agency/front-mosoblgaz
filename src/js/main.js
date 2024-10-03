'use strict';

import '../scss/style.scss';
import Swiper from 'swiper/bundle';

const categoryProductSlider = new Swiper('.product-slider', {
	loop: true,
	pagination: {
		el: '.product-slider__pagination',
		clickable: true,
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
	},
});
