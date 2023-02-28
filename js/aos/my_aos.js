$(document).ready(function() {

	// AOS
	AOS.init({
		disable: 'phone',
		startEvent: 'DOMContentLoaded',
		initClassName: 'aos-init',
		animatedClassName: 'aos-animate',
		useClassNames: false,
		disableMutationObserver: false,
		debounceDelay: 50,
		throttleDelay: 99,
		offset: 100, 
		delay: 0, 
		duration: 800, 
		easing: 'ease',
		once: true,
		mirror: false,
		anchorPlacement: 'top-bottom',
	});

});