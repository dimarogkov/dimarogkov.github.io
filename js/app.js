$(document).ready(function() {
	// Пункты портфолио
	$('.nav__link').click(function(event) {
		if ($('.nav__link').hasClass('active')) {
			$('.nav__link').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');
	})
	// Фиксированное меню
	$('.header').removeClass('active');
    $(window).scroll(function(){
        if ($(this).scrollTop()>100) {
            $('.header').addClass('active').fadeIn('fast');
        } else {
            $('.header').removeClass('active').fadeIn('fast');
        };
    })
    // Открывающейся меню
    $('.header__menu').click(function(event) {
		$('.header__menu, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.footer__des').not($(this).next()).slideUp(300);
	})

	// Service price
	$('.price__block').click(function(event) {
		if ($('.price__block').hasClass('active')) {
			$('.price__block').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');
	})
	// Blog
	$('.post__like').click(function(event) {
		if ($('.post__like').hasClass('active')) {
			$('.post__like').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active')
	})
	$('.post__comment').click(function(event) {
		if ($('.post__comment').hasClass('active')) {
			$('.post__comment').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');
	})
	$('.pos__text').click(function(event) {
		if ($('.pos__text').hasClass('active')) {
			$('.pos__text').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');
	})
	$('.tags__text').click(function(event) {
		if ($('.tags__text').hasClass('active')) {
			$('.tags__text').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');
	})


	// Media Blog

	$('.names').click(function(event) {
		if ($('.names').hasClass('open')) {
			$('.names').not($(this)).removeClass('active');
			$('.sub__block').not($(this).next()).slideToggle('slow');
		}
		$(this).toggleClass('active').next('.sub__block').slideToggle(300);
	})
})

		
		
	