$(document).ready(function() {

	const selectBox = $('.SelectBox');

	if (selectBox.length) {

  	selectBox.each(function () {
  		const th = $(this);

    	th.SumoSelect({
      	floatWidth: 0,
      	nativeOnDevice: []
    	});
  	});

	}

});