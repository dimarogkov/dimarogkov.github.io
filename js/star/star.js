$(document).ready(function() {

	$(document).on('click', '.star .select-icon', function() {
	    let starsIndex = $(this).index(),
	        $icons = $(this).parent().find('.select-icon'),
	        starSlice = $icons.slice(0,starsIndex+1);

	    $icons.removeClass('star-active').addClass('star');
	    $(starSlice).removeClass('star');
	    $(starSlice).addClass('star-active'); 
  	});
  	
});