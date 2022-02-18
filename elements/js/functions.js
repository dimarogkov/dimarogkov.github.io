var _functions = {};

$(document).ready(function() {
	_functions.siteReady = () => {
		$('body').addClass('site-ready');
	}

	_functions.scrollCall = () => {
    	let winScr = $(window).scrollTop();

	    if (winScr > 10) {
	      	$('header').addClass('scrolled');
	    } else {
	      	$('header').removeClass('scrolled');
	    }
  	}

  	_functions.anchorScroll = () => {
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
  	}

  	_functions.removeScroll = () => {
      	$('body').addClass('lock');
  	}

  	_functions.addScroll = () => {
	    $('body').removeClass('lock');
  	}

   	_functions.openPopup = (popup) => {
	    $('.popup-content').removeClass('active');
	    $(popup + ', .popup-wrapper').addClass('active');
	    removeScroll();
  	};

  	_functions.closePopup = () => {
    	$('.popup-wrapper, .popup-content').removeClass('active');
    	addScroll();
  	};

  	_functions.loadPopup = () => {
    	let xhttp = new XMLHttpRequest();

    	xhttp.onreadystatechange = function() {
      		if (this.readyState == 4 && this.status == 200){
        		document.getElementById("popups").innerHTML = this.responseText;
      		}
    	};
    	xhttp.open("GET", "inc/popups/_popup.php", true);
    	xhttp.send();
  	}

  	_functions.inputInvalid = (item) => {
  		if(item.val().trim()){
      		item.removeClass('invalid');
	    } else {
      		item.addClass('invalid');
	    }
  	}

  	_functions.inputMaskInit = () => {
  		$(".inputmask").inputmask({
          	showMaskOnHover: false
      	});
  	}

  	_functions.getSwOptions = (swiper) => {
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
    	if(slidesLength <= 1){
      		options.loop = false;
    	}
    	if(winWidth < 992) options.direction = "horizontal";

    	return options;
  	};

  	_functions.initSwiper = (item) => {
    	let swiper = new Swiper(item[0], _functions.getSwOptions(item));
  	};

});