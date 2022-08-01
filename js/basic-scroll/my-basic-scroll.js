$(document).ready(function() {

	const figureAnimateOne = basicScroll.create({
		elem: document.querySelector('.animate-style-1'),
		from: 'bottom-bottom',
		to: 'top-top',
		direct: true,
		props: {
			'--right': {
		   	from: '0',
		   	to: '200px'
			}
		}
	});

	const figureAnimateTwo = basicScroll.create({
		elem: document.querySelector('.animate-style-2'),
		from: 'bottom-bottom',
		to: 'top-top',
		direct: true,
		props: {
			'--rotate': {
		   	from: '0',
		   	to: '180deg'
			}
		}
	});

	const figureAnimateTree = basicScroll.create({
		elem: document.querySelector('.animate-style-3'),
		from: 'bottom-bottom',
		to: 'top-top',
		direct: true,
		props: {
			'--scale': {
		   	from: '1',
		   	to: '1.6'
			}
		}
	});

	figureAnimateOne.start();
	figureAnimateTwo.start();
	figureAnimateTree.start();

});