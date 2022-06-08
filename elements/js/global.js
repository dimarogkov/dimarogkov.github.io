// JS MENU
// ==============
// - SITE READY
// - ANCHOR
// - POPUP
// - AJAX POPUP
// - SWIPER
// - INPUTMASK
// - SUMOSELECT
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
	// ANCHOR
	// =============================
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				let target = $(this.hash);

				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 162
					}, 600);
					$('html').removeClass('overflow-hidden');
					$('header').removeClass('active-layer-close');

					return false;
				}
			}
		});
	});


	// =============================
	// POPUP
	// =============================
	_functions.removeScroll = () => {
  	$('body').addClass('lock');
	}

	_functions.addScroll = () => {
  	$('body').removeClass('lock');
	}

	_functions.openPopup = (popup) => {
		$('.popup-content').removeClass('active');
		$(popup + ', .popup-wrapper').addClass('active');
		_functions.removeScroll();
	};

	_functions.closePopup = () => {
		$('.popup-wrapper, .popup-content').removeClass('active');
		_functions.addScroll();
	};

	// open popup
	$(document).on('click', '.open-popup', function(e) {
		e.preventDefault();
		_functions.openPopup('.popup-content[data-rel="' + $(this).data('rel') +'"]');
	});

	// close popup
	$(document).on('click', '.popup-wrapper .btn-close, .popup-wrapper .layer-close, .popup-wrapper .close-popup, .popup-align .popup-btn-close', function(e) {
		e.preventDefault();
		_functions.closePopup();
	});

	// close popup on ESC
	$(document).keyup(function(e) {
		if (e.keyCode === 27){
			_functions.closePopup();
		}
	});


	// =============================
	// AJAX POPUP
	// =============================
	$(document).on('click', '.open-popup', function(e){
		e.preventDefault();
		let xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200){
	  		document.getElementById("popups").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "inc/popups/_popups.php", true);
		xhttp.send();

		$('.popup-wrapper').addClass('active');
		let dataRel = $(this).attr('data-rel');

		// reload mask
	  setTimeout( function() {
	   	$(".inputmask").inputmask({
	  		showMaskOnHover: false
			});
	  }, 100);

	  // open popup
	  setTimeout( function() {
	  	$('.popup-wrapper .popup-content').each(function() {
	    	const thisPopup = $(this).attr('data-rel');
	    	dataRel === thisPopup ? $(this).addClass('active') : $(this).removeClass('active');
	  	});
	  }, 100);
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

});