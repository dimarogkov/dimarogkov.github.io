$(document).ready(function() {
	$('.menu__link').click(function(event) {
		$('.menu__link').not($(this)).removeClass('active');
		$(this).toggleClass('active');
	})

	$('a[href^="#"]').click(function(){ 
		let anchor = $(this).attr('href');  
			$('html, body').animate({           
			scrollTop:  $(anchor).offset().top  
		}, 600);                           
	});

	// Фиксированное меню
	$('.header').removeClass('active');
    $(window).scroll(function(){
        if ($(this).scrollTop()>100) {
            $('.header').addClass('active').fadeIn('fast');
        } else {
            $('.header').removeClass('active').fadeIn('fast');
        };
    })

    // Slider 
	$('.slider').slick({
		dots:true,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:2000,
	});

	$(function(){
		$('.scroll_top').click(function(){
			$('html, body').animate({scrollTop: 0}, 600);
			return false;
		});
	});
	
});




