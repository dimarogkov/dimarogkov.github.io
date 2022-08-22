$(document).ready(function() {

	function upload(item, img) {
		item.closest('.upload').find('.upload-imgs').addClass('img-added');
    item.closest('.upload').find('.upload-imgs img').attr('src', img);
	}

	$(document).on('change', '.upload input', function (e){
		const th = $(this);
  	const img = URL.createObjectURL(e.target.files[0]);
  	upload(th, img);
	});

});