$(document).ready(function() {

	let serach = $('.changelog-block-search input');

	if (serach) {
		serach.on('keyup', function() {
			let th = $(this),
					searchValue = th.val().toLowerCase();

			search(searchValue);
		});
	}

	function search(searchValue) {
		let changeBlocks = $('.changelog-block-change');

		changeBlocks.each(function() {
			let item = $(this),
					itemText = item.text().replace(/\s+/g, ' ').trim(),
					itemVersion = item.find('.changelog-block-ver'),
					itemVersionText = itemVersion.text().toLowerCase(),
					status = itemText.includes(searchValue);

			chnageText(searchValue, itemVersion, itemVersionText);
			showBlock(searchValue, item, status);
			showNotFound(searchValue, changeBlocks);
		});
	}

	function chnageText(searchValue, item, itemText) {
		// let textArr = [...itemText],
				// resArr = [];

		if (searchValue.length > 0) {
			let newItemText = itemText.replace(searchValue, `<span class="search-result">${searchValue}</span>`);
			item.html(newItemText);
		} else {
			let newItemText = itemText.replace(`<span class="search-result">${searchValue}</span>`, searchValue);
			item.html(newItemText);
		}

		// if (searchValue.length === 1) {
		// 	textArr.forEach(letter => {
		// 		if (letter === searchValue) {
		// 			let newLetter = letter.replace(letter, `<span class="search-result">${searchValue}</span>`);
		// 			resArr.push(newLetter);
		// 		} else {
		// 			resArr.push(letter);
		// 		}
		// 	});

		// 	item.html(resArr.join(''));
		// }
	}

	function showBlock(searchValue, item, status) {
		if (searchValue.length > 0) {
			status ? item.show() : item.hide();
		} else {
			item.show();
		}
	}

	function showNotFound(searchValue, items) {
	 	let notFound = $('.search-not-found');
	 	!items.is(':visible') 
	 		? notFound.show().find('span').text(searchValue) 
	 		: notFound.hide().find('span').text('');
	}

});