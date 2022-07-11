$(document).ready(function() {

	// time dropper
	$('.time-dropper').each(function() {
		let th = $(this);

		th.timeDropper({
			format: 'HH:mm', // формат
			autoswitch: false, // автоматична зміна на хвилини/години після самої зміни часу
			meridians: false, // час доби ділиться на 2 періоди АМ і РМ
			mousewheel: true, // змінює час на івенк прокрутки на колесі миші
			setCurrentTime: false, // автоматично встановлює поточний час
			minutesSteps: false // крок хвилин (5, 10, 15, 20, 25, 30)
		});
	});

	// date dropper
	$('.date-dropper').each(function() {
		let th = $(this);

		th.dateDropper({
			format: 'd.m.Y', // формат дати, по дефолту - m/d/Y
			lang: 'en', // мова календарю, по дефолту - 'en'
			theme: '', // кольорова тема календарю (vanilla, leaf), але можна написати свої стилі
			fx: true, // включити або виключити анімацію появи календарю на десктопі, по дефолту - true
  		fxMobile: false, // включити або виключити анімацію появи календарю на мобілі, по дефолту - true
  		modal: false, // відкриває календар у попапі, по дефолту - false
  		large: true, // відкриває новий тип календарю по днях на кнопку, по дефолту - false
  		largeOnly: false, // відкриває новий тип календарю по днях одразу, по дефолту - false
  		hideDay: false, // ховає день в календарі, по дефолту - false
  		hideMonth: false, // ховає місяць в календарі, по дефолту - false
  		hideYear: false, // ховає рік в календарі, по дефолту - false
  		maxYear: 2050, // ставить максимальне значення року, по дефолту - currentYear
  		minYear: 2000, // ставить мінімальне значення року, по дефолту - 1970
  		startFromMonday: true, // починає тиждень з понеділка, якщо статус - false буде починатись з суботи. По дефолту - true
			roundtrip: false, // статус "my-trip" - дає можливість робити певний діапазон днів, по дефолту - false
		});
	});

});