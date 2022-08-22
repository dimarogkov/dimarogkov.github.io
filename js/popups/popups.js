$(document).ready(function() {

	function removeScroll() {
		$('html').css("overflow", "hidden")
	};

	function addScroll() {
		$('html').css("overflow", "auto");
	};

	function openPopup(popup) {
		$('.popup-content').removeClass('active');
		$(popup + ', .popup-wrapper').addClass('active');
		removeScroll();
	};

	function closePopup() {
		$('.popup-wrapper, .popup-content').removeClass('active');
		addScroll();
	};

	function inputMaskInit() {
		$(".inputmask").inputmask({
    	showMaskOnHover: false
    });
	}

	function inputValid(input) {
		input.val().trim() ? input.removeClass('invalid') : input.addClass('invalid');
	}

	$(document).on('click', '.open-popup', function(e){
		e.preventDefault();
		openPopup('.popup-content[data-rel="' + $(this).data('rel') +'"]');
	});

	$(document).on('click', '.popup-wrapper .btn-close, .popup-wrapper .layer-close', function(e){
		e.preventDefault();
		closePopup();
	});

	$(document).keyup(function(e){
		if (e.keyCode === 27 ){
			closePopup();
		}
	});

	// invalid
	$(document).on('blur', '.input[required]', function(){
		const input = $(this);
    inputValid(input);
	});

	//inputmask
	if ($(".inputmask").length) {
  	inputMaskInit();
	}

	/*video pop-up*/
	$(document).on('click', '.video-open', function(e){
		e.preventDefault();
		const video = $(this).attr('href');

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