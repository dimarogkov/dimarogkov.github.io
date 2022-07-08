// JS MENU
// ==============
// - SITE READY
// - SCROLL
// - POPUP
// - SWIPER
// - INPUTMASK
// - SUMOSELECT
// - UPLOAD
// - CHECKBOX
// - TABS
// ==============

var _functions = {};

$(document).ready(function() {

	"use strict";

	let winWidth = $(window).width(),
			winHeight = $(window).height();

	// =============================
	// SITE READY
	// =============================
	setTimeout(function() {
		$('body').addClass('site-ready');
	}, 700);


	// =============================
  // SCROLL
  // =============================
  var prev_scroll = 0;

  _functions.scrollCall = function() {
    let winScr = $(window).scrollTop();
    if (winScr > 10) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  }
  _functions.scrollCall();

  $(window).scroll(function(){
    _functions.scrollCall();
  });


	// =============================
	// POPUP
	// =============================
	function removeScroll() {
  	$('body').addClass('lock');
	}

	function addScroll(){
		$('body').removeClass('lock');
	}

	_functions.openPopup = function(popup){
		$('.popup-content').removeClass('active');
		$(popup + ', .popup-wrapper').addClass('active');
		removeScroll();
	};

	_functions.closePopup = function(){
		$('.popup-wrapper, .popup-content').removeClass('active');
		addScroll();
	};

	$(document).on('click', '.open-popup', function(e){
		e.preventDefault();
		_functions.openPopup('.popup-content[data-rel="' + $(this).data('rel') +'"]');
	});

	$(document).on('click', '.popup-wrapper .btn-close-block, .popup-wrapper .layer-close', function(e){
		e.preventDefault();
		_functions.closePopup();
	});

	$(document).keyup(function(e){
		if (e.keyCode === 27 ){
			_functions.closePopup();
		}
	});


	// =============================
	// SWIPER
	// =============================
	_functions.getSwOptions = function(swiper){
		let options = swiper.data('options'),
	    	initialSlideNum = swiper.data('initial-slide');
	    	options = (!options || typeof options !=='object') ? {} : options;
	    
		let $p = swiper.closest('.swiper-entry'),
	        slidesLength = swiper.find('>.swiper-wrapper>.swiper-slide').length;

	  // if options not includes pagination
	  if(!options.pagination) options.pagination = {
	    el: $p.find('.swiper-pagination')[0],
	    clickable: true
	  };

	  // if options not includes navigation
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

	  // if options not includes speed
	  if(!options.speed) options.speed = 500;
	  options.roundLengths = false;
	  if (!$('.swiper-thumbs').length) options.centerInsufficientSlides = true;

	  if(!options.centerInsufficientSlides) options.centerInsufficientSlides = false;
	  if(winWidth < 992) options.direction = "horizontal";
		
		return options;
	};

	_functions.initSwiper = function(el){
		let swiper = new Swiper(el[0], _functions.getSwOptions(el));
	};

	// init swiper
	$('.swiper-entry .swiper-container').each(function () {
	  _functions.initSwiper($(this));
	});


	// =============================
	// INPUTMASK
	// =============================
	// invalid input
	$(document).on('blur', '.input[required]', function(e) {
		e.preventDefault();
		let th = $(this),
				thBlock = th.parent();

		th.val().trim() ? thBlock.removeClass('invalid') : thBlock.addClass('invalid');
	});

	// mask
	if ($(".inputmask").length) {
		$(".inputmask").inputmask({
			showMaskOnHover: false
		});
	};


  // =============================
  // SUMOSELECT
  // =============================
  if ($('.SelectBox').length) {
    $('.SelectBox').each(function () {
      $(this).SumoSelect({
        floatWidth: 0,
        nativeOnDevice: []
      });
    });
  }


  // =============================
  // UPLOAD
  // =============================
  $('.cv-btn').each(function() {
  	let btn = $(this);

  	btn.find('input').on('change', function(e) {
  		e.preventDefault();

  		let fileName = $(this).val().substring($(this).val().lastIndexOf("\\") + 1);
  		btn.addClass('active').find('span').text(fileName);
  	});

  });


  // =============================
  // CHECKBOX
  // =============================
  $('.checkbox-wrapper .checkbox-entry').each(function() {
  	let th = $(this);

  	th.find('input').on('change', function() {
  		let input = $(this);

  		if (input.is(":checked")) {
  			th.addClass('active').siblings().removeClass('active');
  		}
  	});

  });


  // =============================
  // HEADER
  // =============================
  $(document).on('click', '.header-block-burger', function(e) {
    e.preventDefault();
    let th = $(this),
        body = $('body'),
        header = $('.header'),
        menu = $('.header-block-menu');
    
    body.addClass('lock');
    header.addClass('menu-open');
    th.addClass('active');
    menu.addClass('active');
  });

  $(document).on('click', '.header-block-burger.active', function(e) {
    e.preventDefault();
    let body = $('body'),
    		header = $('.header'),
        btn = $('.header-block-burger'),
        menu = $('.header-block-menu');
    
    body.removeClass('lock');
    header.removeClass('menu-open');
    btn.removeClass('active');
    menu.removeClass('active');
  });


  // =============================
  // TABS
  // =============================
  $('.partners-block-item').on('click', function(e) {
  	e.preventDefault();
    let th = $(this),
    		tab = th.closest('.tabs').find('.tab'),
    		i = th.index();
    		
    tab.eq(i).siblings('.tab:visible').fadeOut(function() {
      tab.eq(i).fadeIn();
    });
  });

});
