$(document).ready(function() {

	// Burger 
	let menu = $('.menu__burger');
	let menuBtn = $('.menu');
	let body = $('body');
	// Scroll Links
	let home = $('#scrollHome');
	let about = $('#scrollAbout');
	let services = $('#scrollServices');
	let offers = $('#scrollOffers');
	let brands = $('#scrollBrands');
	let contact = $('#scrollContact');
	let formOne = $('#formOne');
	let formTwo = $('#formTwo');
	let formTree = $('#formTree');
	// Odometer
	let block_show = null;

	// Parallax
	$(window).scroll(function() {
		let parallax = $(this).scrollTop();
		$('#floOne, #floTree').css({
			"transform" : "translate(0%, " + parallax + "%)" + 'rotate(' + parallax/2 + 'deg)'
		});
		$('#floTwo').css({
			"transform" : "translate(0%, " + parallax/2 + "%)" + 'rotate(' + -parallax/4 + 'deg)'
		});
		$('#floFour, #floFive').css({
			"transform" : "translate(0%, " + parallax/2 + "%)" + 'rotate(' + parallax/4 + 'deg)'
		});
	});
	
	// Odometer
	function scrollTracking(){
		let wt = $(window).scrollTop();
		let wh = $(window).height();
		let et = $('.number').offset().top;
		let eh = $('.number').outerHeight();
		// Odometer
		let odoOne = $('#numberOne');
		let odoTwo = $('#numberTwo');
		let odoTree = $('#numberTree');
		let odoFour = $('#numberFour');
	 
		if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
			if (block_show == null || block_show == false) {
				odoOne.html(210);
				odoTwo.html(385);
				odoTree.html(987);
				odoFour.html(1285);
			}
			block_show = true;
		}
	};
	$(window).scroll(function(){
		scrollTracking();
	});
	scrollTracking();

	// Form
	$('#form').submit(function(form) {
		form.preventDefault();

		let name = $('#name').val();
		let phone = $('#phone').val();

		if(name=='') {
			$('#name').addClass('sup__error')
			return false;
		} else {
			$('#name').removeClass('sup__error');
			
		} if(phone=='') {
			$('#phone').addClass('sup__error')
			return false;
		} else {
			$('#email').removeClass('sup__error');
		}

		$('.sub__inputs').addClass('close');
		$('.sub__success').addClass('active');
	});

	// Slider
	$('.slider__block').slick({
		arrows: true,
		dots:false,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:1,
		infinite:true,
		autoplay:true,
		autoplaySpeed:2000,
		waitForAnimate: true,
		centerMode:false
	});

	// Burger 
	menu.on('click', function() {
		$('.menu__burger , .menu').toggleClass('active');
		body.toggleClass('lock');
	});

	// Home Scroll
	home.click(function(event) {
		event.preventDefault();
		let home_deg = $('.main').offset().top; 
		$('html, body').animate({
			scrollTop: -home_deg
		}, 1200);
		$('.menu__burger , .menu').removeClass('active');
		body.removeClass('lock');
	});

	// About Scroll
	about.click(function(event) {
		event.preventDefault();
		let about_deg = $('.about').offset().top; 
		$('html, body').animate({
			scrollTop: about_deg
		}, 1200);
		$('.menu__burger , .menu').removeClass('active');
		body.removeClass('lock');
	});

	// Services Scroll
	services.click(function(event) {
		event.preventDefault();
		let services_deg = $('.services').offset().top; 
		$('html, body').animate({
			scrollTop: services_deg
		}, 1200);
		$('.menu__burger , .menu').removeClass('active');
		body.removeClass('lock');
	});

	// Offers Scroll
	offers.click(function(event) {
		event.preventDefault();
		let offers_deg = $('.off').offset().top; 
		$('html, body').animate({
			scrollTop: offers_deg
		}, 1200);
		$('.menu__burger , .menu').removeClass('active');
		body.removeClass('lock');
	});

	// Brands Scroll
	brands.click(function(event) {
		event.preventDefault();
		let brands_deg = $('.brand').offset().top; 
		$('html, body').animate({
			scrollTop: brands_deg
		}, 1200);
		$('.menu__burger , .menu').removeClass('active');
		body.removeClass('lock');
	});

	// Contact Scroll
	contact.click(function(event) {
		event.preventDefault();
		let contact_deg = $('.contact').offset().top; 
		$('html, body').animate({
			scrollTop: contact_deg
		}, 1200);
		$('.menu__burger , .menu').removeClass('active');
		body.removeClass('lock');
	});

	// Forms Scroll
	formOne.click(function(event) {
		event.preventDefault();
		let form_deg = $('.sub').offset().top; 
		$('html, body').animate({
			scrollTop: form_deg
		}, 1200);
	});
	formTwo.click(function(event) {
		event.preventDefault();
		let form_deg = $('.sub').offset().top; 
		$('html, body').animate({
			scrollTop: form_deg
		}, 1200);
	});
	formTree.click(function(event) {
		event.preventDefault();
		let form_deg = $('.sub').offset().top; 
		$('html, body').animate({
			scrollTop: form_deg
		}, 1200);
	});

	// Aos
	AOS.init({
		disable: 'phone',
    	startEvent: 'DOMContentLoaded',
    	initClassName: 'aos-init',
    	animatedClassName: 'aos-animate',
    	useClassNames: false,
    	disableMutationObserver: false,
    	debounceDelay: 50,
    	throttleDelay: 99,
    	offset: 0, 
    	delay: 0, 
    	duration: 800, 
    	easing: 'ease',
    	once: true,
    	mirror: false,
    	anchorPlacement: 'top-bottom',
	});
})