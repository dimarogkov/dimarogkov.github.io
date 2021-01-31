$(document).ready(function() {

	let winWidth = $(window).width(),
		is_IE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent);

	if(!is_IE && $('.rellax').length && winWidth > 1199){
    	let rellax = new Rellax('.rellax');
  	}

});