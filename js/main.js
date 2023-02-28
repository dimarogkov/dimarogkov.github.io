$(document).ready(function() {
	// loader
	$('.loader').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		$('body').addClass('site-ready');
	});

	$(function () {
	    $('a[href*="#"]:not([href="#"])').click(function () {
	      	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	        	var target = $(this.hash);
	        		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

		        if (target.length) {
		          	$('html, body').animate({
		            	scrollTop: target.offset().top - 162
		          	}, 888);
		          	$('html').removeClass('overflow-hidden');
		          	$('header').removeClass('active-layer-close');
		          	return false;
		        }
	      	}
	    });
  	});

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
 	});

});