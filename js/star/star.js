$(document).ready(function() {

	function changeStarRating(icons, starSlice) {
		icons.removeClass('star-active').addClass('star');
    starSlice.removeClass('star');
    starSlice.addClass('star-active');
	}

	$(document).on('click', '.star .select-icon', function() {
    let starsIndex = $(this).index(),
        icons = $(this).parent().find('.select-icon'),
        starSlice = icons.slice(0,starsIndex+1);

    changeStarRating(icons, starSlice); 
	});
  	
});