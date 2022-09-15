$(document).ready(function() {

	// init marquee
	const initMarquee = (item, options) => {
		item.marquee(options);
	}


	const block =  $('.marquee-block');
	if (block) {
		// options
		const marqueeOptionsLeft = {
			direction: 'left',
			duration: 5000,
			duplicated: true,
			gap: 0
		};
		const marqueeOptionsRight = {
			direction: 'right',
			duration: 5000,
			duplicated: true,
			gap: 0
		};
		const marqueeOptionsTop = {
			direction: 'up',
			duration: 2000,
			duplicated: true,
			gap: 0
		};
		const marqueeOptionsBottom = {
			direction: 'down',
			duration: 2000,
			duplicated: true,
			gap: 0
		};

		// init
		initMarquee($('.marquee-item.left'), marqueeOptionsLeft);
		initMarquee($('.marquee-item.right'), marqueeOptionsRight);
		initMarquee($('.marquee-item.top'), marqueeOptionsTop);
		initMarquee($('.marquee-item.bottom'), marqueeOptionsBottom);
	}


});