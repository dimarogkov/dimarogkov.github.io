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

	// header news
    $('.header-news-types div').on('click', function() {
        let tab = $(this).closest('.header-news-body').find('.header-news-item'),
        	i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        tab.eq(i).siblings('.header-news-item:visible').fadeOut(function() {
            tab.eq(i).fadeIn(300);
        });
    });
    $('.header-news-btn').on('click', function(e) {
    	e.preventDefault();
    	$(this).toggleClass('active');
    	$('.header-news-body').addClass('active');
    });
    $('.header-news-close .far').on('click', function(e) {
    	e.preventDefault();
    	$('.header-news-btn').removeClass('active');
    	$('.header-news-body').removeClass('active');
    });


 	// header list
 	$('.header-inner .header-right .header-list').on('click', function() {
 		$(this).addClass('open');
 	});
 	$('.header-inner .header-right .header-list').on('mouseleave', function() {
 		$(this).removeClass('open');
 	})

});