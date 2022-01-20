$(document).ready(function() {
	var popupTop = 0;
	var _functions = {};

	function removeScroll() {
	  	popupTop = $(window).scrollTop();
	  	$('html').css({
      		"overflow": "hidden"
	  	});
	}

	function addScroll(){
		$('html').css({
	  		"overflow": "auto"
		});
		window.scroll(0, popupTop);
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

	$(document).on('click', '.popup-wrapper .btn-close, .popup-wrapper .layer-close', function(e){
		e.preventDefault();
		_functions.closePopup();
	});

	//close popup with ESCAPE key
	$(document).keyup(function(e){
		if (e.keyCode === 27 ){
			_functions.closePopup();
		}
	});

	// invalid
	$(document).on('blur', '.input[required]', function(){
	    if($(this).val().trim()){
        	$(this).removeClass('invalid');
	    } else {
	        $(this).addClass('invalid');
	    }
  	});

  	//inputmask
  	if ($(".inputmask").length) {
    	$(".inputmask").inputmask({
        	showMaskOnHover: false
	    });
  	}

  	/*video pop-up*/
	$(document).on('click', '.video-open', function(e){
		e.preventDefault();
		let video = $(this).attr('href');
		$('.video-popup-container iframe').attr('src',video);
		$('.video-popup').addClass('active');
		$('body').addClass('lock');
	});
	$(document).on('click', '.btn-close, .video-popup-layer', function(e){
		$('body').removeClass('lock');
		$('.video-popup').removeClass('active');
		$('.video-popup-container iframe').attr('src','about:blank');
		e.preventDefault();
	});

	// search popup
	$(document).on('click', '.search-open', function(e) {
		e.preventDefault();
		$('.search-popup').addClass('active');
	});
	$(document).on('click', '.search-close-js', function(e) {
		e.preventDefault();
		$('.search-popup').removeClass('active');
	});

});