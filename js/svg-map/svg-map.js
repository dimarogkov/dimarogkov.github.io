$(document).ready(function(){
	// svg map
	$('.svg-map .svg-map-imgs circle').on('click', function(e){
	let offset = $(this).parents('.svg-map').offset(),
		click_X =  e.pageX - offset.left,
		click_Y = e.pageY - offset.top,
		city = $(this).attr('data-city');

		$(this).addClass('point-active').siblings().removeClass('point-active');
    	$('.svg-map-info').css({'top':click_Y,'left':click_X});
		$('.svg-map-info').removeClass('active');
		$('.svg-map-info').addClass('active');
		$('.svg-map-info .title').html(city);
  	});
  	$('.svg-map-info .svg-map-close').on('click', function(e) {
	  	e.preventDefault();
	  	$(this).parent().removeClass('active');
	  	$('.svg-map .svg-map-imgs circle').removeClass('point-active');
  	});
});