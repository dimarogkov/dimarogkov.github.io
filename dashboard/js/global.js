// JS MENU
// ==============
// - SIDE MENU
// ==============

$(document).ready(function() {

	"use strict";


	// =======================================
	// SIDE MENU
	// =======================================
	// open/close menu on burger
	$(document).on('click', '.side-menu__burger', function() {
		const th = $(this);
		const sideMenu = th.closest('.side-menu');
		const body = $('body');
		const sideLayer = $('.side-menu__layer');

		body.toggleClass('lock');
		sideMenu.toggleClass('active');
		sideLayer.toggleClass('active');
	});

	// close menu on layer
	$(document).on('click', '.side-menu__layer', function() {
		const th = $(this);
		const body = $('body');
		const sideMenu = $('.side-menu');

		body.removeClass('lock');
		th.removeClass('active');
		sideMenu.removeClass('active');
	});

});
