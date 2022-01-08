$(document).ready(function() {

	$(document).on('blur', '.input[required]', function(){
	    if($(this).val().trim()){
        	$(this).removeClass('invalid');
	    } else {
	        $(this).addClass('invalid');
	    }
  	});

  	if ($(".inputmask").length) {
    	$(".inputmask").inputmask({
      		showMaskOnHover: false
	    });
  	};
});