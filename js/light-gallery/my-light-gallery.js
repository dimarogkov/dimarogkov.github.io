$(document).ready(function() {

	const galleryWrapper = $('.gallery-wrapper-js');

	if (galleryWrapper.length) {
    galleryWrapper.lightGallery({
      selector: '.gallery-item-js',
      subHtmlSelectorRelative: true,
      download: true
    });
  }

});