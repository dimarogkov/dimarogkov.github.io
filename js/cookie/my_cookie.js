$(document).ready(function() {

	const cookieBlock = $('.cookie');

	function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop().split(';').shift();
	}

	if (cookieBlock.length) {

		if (!getCookie('cookie') === true) {

  		setTimeout( function(){
				cookieBlock.addClass('active');
			}, 3000);

		}

		$(document).on('click', '.cookies-accept', function(event) {
		  event.preventDefault();
		  const th = $(this);

		  $.cookie("cookie", true, { expires: 10 });
		  cookieBlock.removeClass('active');
		});

		$(document).on('click', '.cookies-close', function(event) {
		  event.preventDefault();
		  const th = $(this);

		  cookieBlock.removeClass('active');
		});
		
	}

});