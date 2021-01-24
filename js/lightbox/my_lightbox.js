$(document).ready(function() {
	// lightbox
	let lightBoxOptions = {
	  	disableScroll: false,
	  	captionSelector: 'self',
	  	closeText: '<div class="btn-close"><span></span></div>',
	  	alertErrorMessage: "No image found. Next will be load.",
	  	history: false,
	  	widthRatio: 1,
	  	heightRatio: 1
	},
  	lightboxSelector = $('.lightbox-wrapper'),
  	lightboxLength = lightboxSelector.length,
  	lightbox = [];
  	for(var i = 0; i < lightboxLength; i++){
  		lightbox[i] = $(lightboxSelector[i]).find('.lightbox').simpleLightbox(lightBoxOptions);
  	}
  	$('.lightbox').on('click', function () {
    	if ($(".lightbox-wrapper").find('.photo-title').length) {
      		$('.sl-wrapper').prepend('<div class="lightbox-title">'+ $(this).closest('.lightbox-wrapper').find('.photo-title').html() +'</div>');
    	}
  	});
});