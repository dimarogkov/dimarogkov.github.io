$(document).ready(function() {
	$('.elements-item').each(function() {
		let th = $(this);
			code = th.find('.elements-item-code').html(),
			str = code.replace(/^\s*/gm, '');

		$(document).on('click', '.copy-code-js', function(e){
			e.preventDefault();
			copy(str);
		});
	});

	function copy(text) {
	    let copyCode = document.createElement("textarea");
	    document.body.appendChild(copyCode);
	    copyCode.value = text;
	    copyCode.select();
	    document.execCommand("copy");
	    document.body.removeChild(copyCode);
	}
});