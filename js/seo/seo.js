$(document).ready(function() {

	$('.more__text .read__more').on('click', function(){
		$(this).parents('.more__text').toggleClass('open__more_text');
		$(this).parent().find('.text').slideToggle(300);
	});

})