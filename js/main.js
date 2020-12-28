$(document).ready(function() {
	// anchor
	 $(window).scroll(function(){
        if ($(this).scrollTop()>0) {
            $('.anchor').addClass('active');
        } else {
            $('.anchor').removeClass('active');
        };
    });
 	$('.anchor').on('click', function(event) {
		event.preventDefault();

		let block_top = $('.header__inner').offset().top;
		$('html, body').animate({
			scrollTop: -block_top
		}, 900)
	});


});