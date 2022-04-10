$(document).ready(function() {
	$(document).on('click', '.copy-code-js', function(e){
		e.preventDefault();
		let th = $(this),
			code = th.closest('.elements-item').find('.elements-item-code').html();
			str = code.replace(/^\s*/gm, '');

		copy(str);
	});
	
	$('.elements-menu ul li a').on('click', function(e) {
		$(this).parent().addClass('active').siblings().removeClass('active');
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