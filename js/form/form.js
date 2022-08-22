$(document).ready(function() {

	// functions
	const inputMaskInit = () => {
		$(".inputmask").inputmask({
  		showMaskOnHover: false
    });
	}

	const inputValid = (input) => {
		input.val().trim() ? input.removeClass('invalid') : input.addClass('invalid');
	}
	
	// init inputmask
	if ($(".inputmask").length) {
  	inputMaskInit();
	};

	// blur
	$(document).on('blur', '.input[required]', function(){
		const input = $(this);
    inputValid(input);
	});
	
});