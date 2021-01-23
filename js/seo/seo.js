$(document).ready(function() {

	$('.more-text .read-more').on('click', function(){
		$(this).parents('.more-text').toggleClass('open-more-text');
		$(this).parent().find('.text').slideToggle(300);
	});

})