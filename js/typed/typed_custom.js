$(document).ready(function() {

	if ($('.typed-block').length) {
		$('.typed-block').each(function() {
			let th = $(this),
					thElement = th.find('.typed-element'),
					thStr = th.attr('data-typed-str'),
					thTypeSpeed = +th.attr('data-typed-typeSpeed'),
					thTypeBackSpeed = +th.attr('data-typed-backSpeed'),
					thStartDelay = +th.attr('data-typed-startDelay'),
					thBackDelay = +th.attr('data-typed-backDelay'),
					thLoop = Boolean(th.attr('data-typed-loop')),
					thShowCursor = Boolean(th.attr('data-typed-showCursor'));

			// init typed js
			$(function(){
				thElement.typed({
	        strings: thStr ? thStr.split(',') : ['Test One', 'Test Two', 'Test Tree'], // текст
	        typeSpeed: thTypeSpeed ? thTypeSpeed : 80, // скорость набора
	        backSpeed: thTypeBackSpeed ? thTypeBackSpeed : 20, // скорость удаления текста
	        startDelay: thStartDelay ? thStartDelay : 1500, // начальная задержка перед набором
	        backDelay: thBackDelay ? thBackDelay : 500, // пауза перед удалением текста
	        loop: thLoop ? thLoop : true, // повтор (true или false)
	        showCursor: thShowCursor ? thShowCursor : true, // отображение курсора
		    });
			});

		});
	}

});