$(document).ready(function() {

	let winWidth = $(window).width();

	if (winWidth > 1199 && $('.sticky-parent-js').length) {
      	if (winWidth > 1819) {
        	$(".sticky-item-js").stick_in_parent({
          		parent: '.sticky-parent-js',
          		inner_scrolling: false,
          		offset_top: 170
        	});
      	} else {
        	$(".sticky-item-js").stick_in_parent({
          		parent: '.sticky-parent-js',
          		inner_scrolling: false,
          		offset_top: 120
        	});
      	}
    } else {
      	$(".sticky-item-js").trigger("sticky_kit:detach");
    }
    
});