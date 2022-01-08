$(document).ready(function() {

	$(document).on('click', '.clone-add', function(event) {
		event.preventDefault();

		const form = $('.clone-forms').find('form:last').clone();

		$('.clone-remove').addClass('show');
		$(this).closest('.clone-block').find('.clone-forms').append(form);
		$(this).closest('.clone-block').find('.clone-forms form:last input').val('');
	});

	$(document).on('click', '.clone-remove', function(event) {
		event.preventDefault();
		$(this).closest('.clone-block').find('.clone-forms form:last').remove();

		if ($('.clone-forms form').length === 1) {
			$('.clone-remove').removeClass('show');
		}
	});

});