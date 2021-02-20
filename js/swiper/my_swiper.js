let _functions = {};
let winWidth = $(window).width();

$(document).ready(function() {
	"use strict";

  	/* swiper sliders */
	_functions.getSwOptions = function(swiper){
    	let options = swiper.data('options'),
        	initialSlideNum = swiper.data('initial-slide');
        	options = (!options || typeof options !=='object') ? {} : options;
        let $p = swiper.closest('.swiper-entry'),
            slidesLength = swiper.find('>.swiper-wrapper>.swiper-slide').length;
	    if(!options.pagination) options.pagination = {
	      el: $p.find('.swiper-pagination')[0],
	      clickable: true
	    };
	    if(!options.navigation) options.navigation = {
	      nextEl: $p.find('.swiper-button-next')[0],
	      prevEl: $p.find('.swiper-button-prev')[0]
	    };
	    if (initialSlideNum) options.initialSlide = initialSlideNum;
	    options.preloadImages = false;
	    options.lazy = {loadPrevNext: true};
	    options.observer = true;
	    options.observeParents = true;
	    options.watchOverflow = true;
	    if(!options.speed) options.speed = 500;
	    options.roundLengths = false;
	    options.centerInsufficientSlides = true;
	    if(!options.centerInsufficientSlides) options.centerInsufficientSlides = false;
        if(winWidth < 992) options.direction = "horizontal";
		return options;
	};

	_functions.initSwiper = function(el){
		let swiper = new Swiper(el[0], _functions.getSwOptions(el));
    };
    
    $('.swiper-entry .swiper-container').each(function () {
        _functions.initSwiper($(this));
    });

    // thumbs init
    $('.swiper-thumbs').each(function () {
	    let top = $(this).find('.swiper-container.swiper-thumbs-top')[0].swiper,
	        bottom = $(this).find('.swiper-container.swiper-thumbs-bottom')[0].swiper;
	    top.thumbs.swiper = bottom;
	    top.thumbs.init();
	    top.thumbs.update();
  	});
  	$('.swiper-control').each(function () {
	    let top = $(this).find('.swiper-container')[0].swiper,
	        bottom = $(this).find('.swiper-container')[1].swiper;
	    top.controller.control = bottom;
	    bottom.controller.control = top;
  	});

});