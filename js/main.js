$(document).ready(function() {
	// header & anchor
	$(window).scroll(function(){
        if ($(this).scrollTop()> 50) {
            $('.anchor').addClass('active');
            $('header').addClass('scrolled');
        } else {
            $('.anchor').removeClass('active');
            $('header').removeClass('scrolled');
        };
    });
 	$('.anchor').on('click', function(event) {
		event.preventDefault();

		let block_top = $('.header-inner').offset().top;
		$('html, body').animate({
			scrollTop: -block_top
		}, 900)
	});


 	// header list
 	$('.header-inner .header-right .header-list').on('click', function() {
 		$(this).addClass('open');
 	});
 	$('.header-inner .header-right .header-list').on('mouseleave', function() {
 		$(this).removeClass('open');
 	})

});