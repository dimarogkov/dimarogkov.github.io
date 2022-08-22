$(document).ready(function() {

	function seoInit(item, moreText, lessText) {
		item.parents('.more-text').toggleClass('open');
		item.parent().find('.text').slideToggle(300);
    $('.more-text').hasClass('open') ? item.text(lessText) : item.text(moreText);
	}

	$(document).on('click', '.more-text .read-more', function(){
		let th = $(this),
				seoBtn = $('.more-text .read-more'),
				moreText = seoBtn.attr('data-read-more'),
				lessText = seoBtn.attr('data-read-less');

		seoInit(th, moreText, lessText);
	});

})