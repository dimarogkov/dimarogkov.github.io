$(document).ready(function() {

	$('.accordeon-title').on('click', function () {
		$(this).siblings('.accordeon-title.active').toggleClass('active').next().slideToggle();
		$(this).toggleClass('active').next().slideToggle();
	});

})