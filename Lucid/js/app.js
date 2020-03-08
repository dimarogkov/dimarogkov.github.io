$(document).ready(function() {

	// Slider
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow:2,
		adaptiveHeight:true,
		infinite:true,
		autoplay:true,
		draggable: true,
		slidesToScroll:2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	})
	

	// Price 
	$('.subprice__block').click(function(event) {
		if ($('.subprice__block').hasClass('active')) {
			$('.subprice__block').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');
	})

	$('.burger').click(function(event) {
		$('.burger, .menu').toggleClass('active');
	}) 
})