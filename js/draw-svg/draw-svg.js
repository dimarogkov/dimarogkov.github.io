$(document).ready(function() {

	const drawSvgArea = $('.draw-svg-area');

	$(document).on('click', '#drawSvgBtn', function(e) {
		e.preventDefault();
		drawSvgArea.addClass('animate');
	});

	$(document).on('click', '#deleteSvgBtn', function(e) {
		e.preventDefault();
		drawSvgArea.removeClass('animate');
	});

});