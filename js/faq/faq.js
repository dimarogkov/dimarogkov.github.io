$(document).ready(function() {

	function accordeonInit(title) {
		title.siblings('.accordeon-title.active').toggleClass('active').next().slideToggle();
		title.toggleClass('active').next().slideToggle();
	}

	$(document).on('click', '.accordeon-title', function () {
		const th = $(this);
		accordeonInit(th);
	});

})