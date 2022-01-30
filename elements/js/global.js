// JS MENU
// ==============
// - SITE READY
// - SCROLL
// - POPUP
// - AJAX POPUP
// - SWIPER
// - INPUTMASK
// - MORE TEXT
// - RELLAX
// - SUMOSELECT
// - ACCORDEON
// ==============

$(document).ready(function() {

	"use strict";

	let winWidth = $(window).width(),
  		winHeight = $(window).height();


  	// =============================
  	// SITE READY
  	// =============================
  	setTimeout(function() {
    	_functions.siteReady();
  	}, 700);


  	// =============================
  	// SCROLL
  	// =============================
  	_functions.scrollCall();
  	_functions.anchorScroll();

  	$(window).on('scroll', function() {
    	_functions.scrollCall();
  	});


  	// =============================
  	// POPUP
  	// =============================
  	$(document).on('click', '.open-popup', function(e) {
	    e.preventDefault();
	    _functions.openPopup('.popup-content[data-rel="' + $(this).data('rel') +'"]');
  	});

  	$(document).on('click', '.popup-wrapper .btn-close, .popup-wrapper .layer-close, .popup-wrapper .close-popup, .popup-align .popup-btn-close', function(e) {
	    e.preventDefault();
	    _functions.closePopup();
  	});

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
    	loadPopup();

    	$('.popup-wrapper').addClass('active');
    	let dataRel = $(this).attr('data-rel');

	    setTimeout( function() {
	      if ($('.SelectBox').length) {
	        _functions.sumoselectInit();
	      }
	    }, 100);

	    setTimeout( function() {
	     	_functions.inputMaskInit();
	    }, 100);

	    setTimeout( function() {
	      	$('.popup-wrapper .popup-content').each(function() {
	        	const thisPopup = $(this).attr('data-rel');

	        	if (dataRel === thisPopup){
	          		$(this).addClass('active')
	        	} else {
	          		$(this).removeClass('active')
	        	}
	      	});
	    },100);
  	});


  	// =============================
  	// SWIPER
  	// =============================
  	$('.swiper-entry .swiper-container').each(function() {
    	_functions.initSwiper($(this));
  	});


  	// =============================
  	// INPUTMASK
  	// =============================
  	$(document).on('blur', '.input[required]', function() {
  		let item = $(this);
    	_functions.inputInvalid(item);
  	});
  	if ($(".inputmask").length) {
		_functions.inputMaskInit();
  	};


  	// =============================
  	// MORE TEXT
  	// =============================
  	$(document).on('click', '.more-text .read-more', function() {
  		let item = $(this);
    	_functions.moreText(item);
  	});


  	// =============================
  	// RELLAX
  	// =============================
  	if($('.rellax').length && winWidth > 1199){
  		_functions.rellaxInit();
  	}


  	// =============================
  	// SUMOSELECT
  	// =============================
  	if ($('.SelectBox').length) {
    	_functions.sumoselectInit();
  	}


  	// =============================
  	// ACCORDEON
  	// =============================
  	$(document).on('click', '.accordeon-title', function(e) {
  		e.preventDefault();
  		let item = $(this),
  			itemActive = $('.accordeon-title.active');

		_functions.accordeonInit(item,itemActive);
  	});

});