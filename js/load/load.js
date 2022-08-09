$(document).ready(function() {

	// main value
	let loadBlock = $('.load-block-js'),
			visibleCount = +loadBlock.attr('data-visible-cards'),
			loadBtn = $('.load-more-js');

	// visible cards 
	function visibleCards(visibleCount) {
		$(`.load-card-js:lt(${visibleCount})`).show();
	}

	// show cards
	function showCards(cardsLength, count) {
		let showCount = +loadBlock.attr('data-show-cards');

		count = ( count + showCount <= cardsLength) ? count + showCount : cardsLength;
    visibleCards(count);
    visibleCount = count;

    if(visibleCount === cardsLength){
      loadBtn.hide();
    }
	}

	// click to btn
	$(document).on('click', '.load-more-js', function(e) {
		e.preventDefault();
		let cardsLength = $('.load-card-js').length;

		showCards(cardsLength, visibleCount);
	});

	visibleCards(visibleCount);

});