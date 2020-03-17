$(document).ready(function() {

	// Slider
	$('.slider').slick({
		slidesToShow:1,			
		slidesToScroll:1,			
		infinite:false,		
		arrows: true,
		dots:true,
		appendArrows: $('.content__control'),
		appendDots: $('.number__slider')	
		
	});
	
})
	