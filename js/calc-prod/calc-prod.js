let _functions = {};

$(document).ready(function() {

	// functions
	_functions.setDataToTag = () => {
		$('.prod-item').each(function() {
			let th = $(this),
				price = +th.attr('data-price'),
				priceOld = +th.attr('data-price-old'),
				size = +th.attr('data-size');

			th.find('.prod-item-cont .size span').text(size);
			th.find('.prod-item-price .new span').text(price);
			th.find('.prod-item-price .old span').text(priceOld);
		});
	}

	_functions.checkStatusLike = () => {
		$('.prod-item').each(function() {
			let like = $(this).find('.prod-item-like');

			like.hasClass('active') ? $(this).attr('data-like', true) : $(this).attr('data-like', false);
		});
	}

	_functions.calcPrice = (item) => {
		let val = +item.find('.prod-item-controls input').val(),
			price = +item.attr('data-price-default'),
			total = price * val;

		item.attr('data-price', total);
		item.find('.prod-item-price .new span').text(total);
	}

	// click
	$(document).on('click', '.prod-item-like', function(e) {
		e.preventDefault();

		$(this).toggleClass('active').siblings().removeClass('active');
		_functions.checkStatusLike();
	});

	$(document).on('click', '.prod-item-size a', function(e) {
		e.preventDefault();

		$(this).closest('.prod-item').find('.prod-item-size a').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.prod-item').attr('data-price', +$(this).attr('data-size-price'));
		$(this).closest('.prod-item').attr('data-price-default', +$(this).attr('data-size-price'));

		_functions.setDataToTag();
		_functions.calcPrice($(this).closest('.prod-item'));
	});

	$(document).on('click', '.prod-item-controls .plus', function(e) {
		e.preventDefault();
		let val = +$(this).parent().find('input').val();

		$(this).parent().find('input').val(val + 1);
		_functions.calcPrice($(this).closest('.prod-item'));
	});

	$(document).on('click', '.prod-item-controls .minus', function(e) {
		e.preventDefault();
		let val = +$(this).parent().find('input').val(),
			min = +$(this).parent().find('input').attr('min');

		val <= 2 ? $(this).parent().find('input').val(min) : $(this).parent().find('input').val(val - 1);
		_functions.calcPrice($(this).closest('.prod-item'));
	});

	// run
	_functions.setDataToTag();
	_functions.checkStatusLike();
});