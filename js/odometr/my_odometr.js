$(document).ready(function() {
	// Odometer
  	let block_show = null,
  		winWidth = $(window).width(),
	 	customOdometr = $('.odometer');

	function scrollTracking(){
		let wt = $(window).scrollTop(),
		    wh = $(window).height(),
		    et = $('.num').offset().top,
		    eh = $('.num').outerHeight();

		if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		  if (block_show == null || block_show == false) {
		    customOdometr.each(function() {
    			let = numberInMyOdometr = $(this).data('num');
		      	$(this).html(numberInMyOdometr);
		    })
		  }
		  block_show = true;
		}
	};

	if (winWidth > 1199) {
		$(window).scroll(function(){
	      	scrollTracking();
	    });	
	};
})