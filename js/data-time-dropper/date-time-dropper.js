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

		th.dateDropper();
	});

});