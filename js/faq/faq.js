$(document).ready(function() {

	$('.accordeon__title').on('click', function () {
		$(this).siblings('.accordeon__title.active').toggleClass('active').next().slideToggle();
		$(this).toggleClass('active').next().slideToggle();
	});

})