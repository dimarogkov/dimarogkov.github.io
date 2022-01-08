$(document).ready(function() {

	function getCookie(name) {
	    const value = `; ${document.cookie}`;
	    const parts = value.split(`; ${name}=`);
	    if (parts.length === 2) return parts.pop().split(';').shift();
  	}

	if ($('.cookie').length) {

		if (!getCookie('cookie') === true) {
		  	setTimeout( function(){
				$('.cookie').addClass('active');
			},3000);
		}

		$(document).on('click', '.cookies-accept', function(event) {
		  event.preventDefault();
		  $.cookie("cookie", true, { expires: 10 });
		  $(this).closest('.cookie').removeClass('active');
		});

		$(document).on('click', '.cookies-close', function(event) {
		  event.preventDefault();
		  $(this).closest('.cookie').removeClass('active');
		});
	}

});