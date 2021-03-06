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

});