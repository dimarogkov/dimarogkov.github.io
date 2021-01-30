$(document).ready(function() {

	setTimeout(function () {
	    $("#countdown").countdown("2021/04/12", function (event) {
        	let $this = $(this).html(event.strftime('' +
	        	'<div><span>%D</span><span>днів</span></div>' +
	        	'<div><span>%H</span><span>годин</span></div>' +
	        	'<div><span>%M</span><span>хвилин</span></div>' +
	        	'<div><span>%S</span><span>секунд</span></div>'
	        ));
	    });
  	}, 100);

});