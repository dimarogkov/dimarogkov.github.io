$(document).ready(function() {

	$('.more-text .read-more').on('click', function(){
		let seoBtn = $('.more-text .read-more'); 
		let more = seoBtn.attr('data-read-more');
		let less = seoBtn.attr('data-read-less');

		$(this).parents('.more-text').toggleClass('open');
		$(this).parent().find('.text').slideToggle(300);

	    $('.more-text').hasClass('open') ? $(this).text(less) : $(this).text(more);
	});

})