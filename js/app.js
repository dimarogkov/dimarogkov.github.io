$(document).ready(function() {
	// Header
	$('.header__burger').click(function(event) {
		$(this).toggleClass('active');
	}) 

	// Slider 
	$('.slider').slick({
		slidesToShow:1,			
		slidesToScroll:1,			
		infinite:true,		
		autoplay:true,		
	});

	// Blog Slider
	$('.blog__slider').slick({
		slidesToShow:1,			
		slidesToScroll:1,			
		infinite:false,		
		fade: true,
		arrows: true,
		dots:true,
		appendArrows: $('.blog__arrows'),
		appendDots: $('.blog__dots'),		
	});
})