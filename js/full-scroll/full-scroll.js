$(document).ready(function() {

	const animateSection = (fullScroll, section, header) => {
		if (section.length) {
			let total = fullScroll.scrollTop() + section.offset().top - header;
  		$('html, body').animate({ scrollTop: total }, 400);
		}
	}

	$('.full-scroll-section').on('wheel', function (e) {
		let th = $(this),
				fullScroll = th.closest('.full-scroll'),
				prevSection = th.prev();
				nextSection = th.next(),
      	headerHeight = $('header').height(),
      	delta = e.originalEvent.deltaY;

    if (delta > 0) {
    	animateSection(fullScroll, nextSection, headerHeight);
    } else {
    	animateSection(fullScroll, prevSection, headerHeight);
    }
	});

});