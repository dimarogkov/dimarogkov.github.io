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

		let block_top = $('.header__inner').offset().top;
		$('html, body').animate({
			scrollTop: -block_top
		}, 900)
	});


 	// header list
 	$('.header__inner .header__right .header__list').on('click', function() {
 		$(this).addClass('open');
 	});
 	$('.header__inner .header__right .header__list').on('mouseleave', function() {
 		$(this).removeClass('open');
 	})

});