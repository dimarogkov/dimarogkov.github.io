$(document).ready(function() {
	// settings open
	$('.sett__btn').on('click', function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('open');
	});
	$('.sett__block div').on('click', function(event) {
		event.preventDefault();
		$(this).closest('body').removeClass();

		let styleClass = $(this).data("style");
		$(this).closest('body').addClass(styleClass);
		
		$(this).closest('.sett').removeClass('open');
	});
});