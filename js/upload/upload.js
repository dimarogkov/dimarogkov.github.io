$(document).ready(function() {

	$(document).on('change', '.upload input', function (e){
    	let img = URL.createObjectURL(e.target.files[0]);
    	$(this).closest('.upload').find('.upload-imgs').addClass('img-added');
	    $(this).closest('.upload').find('.upload-imgs img').attr('src', img);
  	});

});