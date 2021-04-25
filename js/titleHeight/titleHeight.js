$(document).ready(function() {

	// title-height
	let titleBlock = $('.title-height');

	if (titleBlock.length) {
		titleBlock.each(function() {
			let titles = $(this).find('.title-height-item'),
				titlesArr = [];

			titles.each(function() {
				let titleHeight = $(this).height();

				titlesArr.push(titleHeight);
			});

			let titleHeightMax = titlesArr.reduce(function(a, b) {
		      return Math.max(a, b);
		    });
		    titles.css({'height': titleHeightMax});
		});
	}

});