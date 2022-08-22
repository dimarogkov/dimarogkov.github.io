$(document).ready(function() {

	$(document).on('click', '.clone-add', function(e) {
		e.preventDefault();
		const th = $(this);
		const form = $('.clone-forms').find('form:last').clone();

		$('.clone-remove').addClass('show');
		th.closest('.clone-block').find('.clone-forms').append(form);
		th.closest('.clone-block').find('.clone-forms form:last input').val('');
	});

	$(document).on('click', '.clone-remove', function(e) {
		e.preventDefault();
		const th = $(this);
		
		th.closest('.clone-block').find('.clone-forms form:last').remove();

		if ($('.clone-forms form').length === 1) {
			$('.clone-remove').removeClass('show');
		}
	});

});