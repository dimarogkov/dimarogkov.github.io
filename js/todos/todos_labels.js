$(document).ready(function() {

	_functions.labelsSetColor = () => {
		$('.todos-label-selected').each(function() {
			let th = $(this),
				thColor = th.attr('data-label-color');

			th.css('background-color', thColor);
		});

		$('.added-label').each(function() {
			let th = $(this),
				thColor = th.attr('data-label-color');

			th.find('span').css('background-color', thColor);
		});
	}

	_functions.labelsMenuOpen = (item) => {
		$('.todos-layer').addClass('active');
		$('.todos-labels-list').removeClass('active');
		item.closest('.todos-labels').find('.todos-labels-list').addClass('active');
	}

	_functions.labelsMenuClose = () => {
		$('.todos-labels-list, .todos-layer').removeClass('active');
	}

	_functions.labelsPopupOpen = () => {
		$('body').addClass('lock');
		$('.todos-labels-popup').addClass('active');
	}

	_functions.labelsPopupClose = () => {
		$('body').removeClass('lock');
		$('#name, #color').val('');
		$('.todos-labels-popup').removeClass('active');
	}

	_functions.addLabels = (form) => {
		let labels = [],
			itemName = form.find('#name').val(),
			itemColor = form.find('#color').val(),
			newItem = "<li class='added-label' data-label-color='" + itemColor + "'><span>" + itemName + "<i></i></span></li>";

		$('.todos-labels-list').prepend(newItem);
		$('.todos-labels-list').addClass('has-labels');

		_functions.labelsPopupClose();
		
		$('.todos-labels-list:first .added-label').each(function() {
			let th = $(this),
				label = {
					id: th.index(),
					label_name: th.text().replace(/ /g,''),
					label_color: th.attr('data-label-color').replace(/ /g,'')
				}

			labels.push(label);
		});

		localStorage.setItem('labels', JSON.stringify(labels));
		_functions.labelsSetColor();
	}

	_functions.getLabels = () => {
		if (localStorage.getItem('labels') !== null) {
			let data = JSON.parse(localStorage.getItem('labels'));

			$('.added-label').remove();
			$('.todos-labels-list').addClass('has-labels');

			data.forEach(item => {
				let itemName = item.label_name,
					itemColor = item.label_color,
					newItem = "<li class='added-label' data-label-color='" + itemColor + "'><span>" + itemName + "<i></i></span></li>";

				$('.todos-labels-list').prepend(newItem);
			});
		} else {
			$('.todos-labels-list').removeClass('has-labels');
		}

		_functions.labelsSetColor();
	}

	_functions.removeLabel = (item, list) => {
		let labels = [],
			itemName = item.closest('.added-label').text(),
			selectedName = item.closest('.todos-labels').find('.todos-label-selected').text();

		if (selectedName === itemName) {
			item.closest('.todos-body').find('.todos-label-selected').text('other').attr('data-label-color', '#cbcbcb');
		}

		_functions.labelsSetColor();
		item.closest('.added-label').remove();

		list.find('.added-label').each(function() {
			let th = $(this),
				label = {
					id: th.index(),
					label_name: th.text().replace(/ /g,''),
					label_color: th.attr('data-label-color').replace(/ /g,'')
				};

			labels.push(label);
		});

		localStorage.setItem('labels', JSON.stringify(labels));
		_functions.getLabels();

		if ($('.todos-labels-list:first .added-label').length === 0) {
			$('.todos-labels-list').removeClass('has-labels');
			localStorage.removeItem("labels");
		} else {
			$('.todos-labels-list').addClass('has-labels');
		}
	}

	_functions.selectLabel = (item) => {
		let itemName = item.text(),
			itemColor = item.attr('data-label-color');

		item.closest('.todos-labels').find('.todos-label-selected').text(itemName).attr('data-label-color', itemColor);
		_functions.labelsSetColor();
		_functions.labelsMenuClose();
		_functions.setData();
	}

	$(document).on('click', '.todos-labels .todos-label-selected', function(e) {
		e.preventDefault();
		let th = $(this);

		_functions.labelsMenuOpen(th);
	});

	$(document).on('click', '.todos-labels .todos-labels-popup-open', function(e) {
		e.preventDefault();

		_functions.labelsMenuClose();
		_functions.labelsPopupOpen();
	});

	$(document).on('submit', '.todos-labels-popup-wrapper form', function(e) {
		e.preventDefault();
		let th = $(this);

		_functions.addLabels(th);
	});

	$(document).on('click', '.todos-labels-popup-layer, .todos-labels-popup-close', function(e) {
		e.preventDefault();
		_functions.labelsPopupClose();
	});

	$(document).on('click', '.todos-labels-list li span i', function(e) {
		e.preventDefault();
		let th = $(this),
			thList = th.closest('.todos-labels-list');

		_functions.removeLabel(th, thList);
	});

	$(document).on('click', '.added-label', function(e) {
		e.preventDefault();
		let th = $(this);

		_functions.selectLabel(th);
	});

	_functions.getLabels();
});