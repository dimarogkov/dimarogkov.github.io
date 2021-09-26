$(document).ready(function() {
	let winWidth = $(window).width();

	if ($('.c-rellax').length) {

		// vertical parallax
	    $(window).scroll(function() {
	    	let item = $('.c-rellax');

	      	$(item).each(function(e) {
	    
          		let top = $(window).scrollTop(),
          			type = $('.parallax-decor').attr('data-parallax-type'),
          			speedY = +$(this).attr('data-parallax-speedY'),
          		 	verticalParallax = -((top / 10) * speedY);

          		if (type === 'vertical' || type === '') {
		          	$(this).css({
		          		'transform': 'translate3d(0px, ' + verticalParallax + 'px, 0px)',
		          		'transition': 'transform 0.1s'
		          	});
		      	}
	      	});
	    });

	    // horizontal parallax
	    if (winWidth > 1199) {
		    $('.parallax').on('mousemove', function(e) {
		    	let item = $('.c-rellax');

		    	$(item).each(function() {
		    
	          		let type = $('.parallax-decor').attr('data-parallax-type'),
	          			speedX = +$(this).attr('data-parallax-speedX'),
	          			speedY = +$(this).attr('data-parallax-speedY'),
						horizontalParallaxX = (e.clientX * speedX) / 200;
						horizontalParallaxY = (e.clientY * speedY) / 200;

			      	if (type === 'horizontal') {
			          	$(this).css({
			          		'transform': 'translate3d('+ horizontalParallaxX + 'px ,' + horizontalParallaxY + 'px, 0px)',
			          		'transition': 'transform 0.1s'
			          	});
			      	}
		      	});
		    });
		}
  	}

  	// parallax imgs
  	if ($('.c-rellax-img').length && winWidth > 1199) {

	    $(window).scroll(function() {
	      	let cRellax = $('.c-rellax-img'),
	      		winScr = $(window).scrollTop();

	      	$(cRellax).each(function() {
		        let itemOffset = $(this).offset().top,
		            itemHeight = $(this).height(),
		            itemVisible = winScr - ( $(window).height() * 0.9 );

		        if (itemVisible) {
		          	let diff = winScr - itemOffset,
		              	diffSpeed = ( +$(this).attr('data-parallax-speed') + 2 ) + 100,
		              	total = Math.round((diff / itemHeight) * diffSpeed);

		          	$(this).css({
			            'top': total
		          	});
		        };
	      	});
	      
	    });

  	}
});