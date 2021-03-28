$(document).ready(function() {
	let drawSvgBtn = $('#drawSvgBtn'),
		deleteSvgBtn = $('#deleteSvgBtn'),
		drawSvgArea = $('.draw-svg-area');

	$(drawSvgBtn).on('click', function(event) {
		event.preventDefault();
		$(drawSvgArea).addClass('animate');
	});

	$(deleteSvgBtn).on('click', function(event) {
		event.preventDefault();
		$(drawSvgArea).removeClass('animate');
	});
});