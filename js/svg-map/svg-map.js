$(document).ready(function(){

	function openPopup(item, event) {
		let offset = item.parents('.svg-map').offset(),
				click_X =  event.pageX - offset.left,
				click_Y = event.pageY - offset.top,
				city = item.attr('data-city'),
				info = $('.svg-map-info');

		item.addClass('point-active').siblings().removeClass('point-active');
  	info.css({'top':click_Y,'left':click_X});
		info.removeClass('active');
		info.addClass('active');
		info.find('.title').html(city);
	}

	function closePopup(item) {
		item.parent().removeClass('active');
  	$('.svg-map .svg-map-imgs circle').removeClass('point-active');
	}

	$(document).on('click', '.svg-map .svg-map-imgs circle', function(e){
		const th = $(this);
		openPopup(th, e);
	});

	$(document).on('click', '.svg-map-info .svg-map-close', function(e) {
  	e.preventDefault();
  	const th = $(this);

  	closePopup(th);
	});

});