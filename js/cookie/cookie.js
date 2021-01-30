$(document).ready(function() {

	setTimeout( function(){
		$('.cookie').addClass('show');
	},3000);

	$('.cookie-btns a').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.cookie').addClass('close');
	});

});