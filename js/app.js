$(document).ready(function() {

	// Checkbox
	$('.header__theme').click(function(event) {
		$('.header__theme, .main').toggleClass('dark');
	})


});

// Chart

var day = document.getElementById('day');
var year = document.getElementById('year');
var repeats = document.getElementById('repeats');
var dwell = document.getElementById('dwell');

// Day
var day = new Chart(day, {
    type: 'line',
    data: {
        labels: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7', 'Jun 8', 'Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14'],
        datasets: [{
            label: 'Passers',
            data: [240, 280, 120, 320, 650, 250, 260, 530, 220, 110, 350, 235, 600, 490],
            backgroundColor: 'transparent',
            borderColor: '#ff1e6d',
            pointBackgroundColor:'#ff1e6d',
            borderWidth: 1
        }, {
        	label: 'Visitors',
            data: [100, 110, 490, 260, 60, 350, 90, 50, 120, 420, 220, 620, 250, 180],
            backgroundColor: 'transparent',
            borderColor: '#ffc000',
            pointBackgroundColor: '#ffc000',
            borderWidth: 1
        }]
    }
});

// Year
var year = new Chart(year, {
    type: 'line',
    data: {
        labels: [
        	'January', 'February', 'March', 'April', 'May', 'Jun', 
        	'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [{
        	label: 'Visitors',
            data: [500, 400, 800, 600, 400, 900, 550, 530, 350, 600, 550, 430],
            backgroundColor: '#ffc000',
            borderColor: 'transparent',
            pointBackgroundColor:'transparent',
            borderWidth: 'transparent'
        }, {
        	label: 'Passers',
            data: [100, 550, 1050, 700, 500, 350, 900, 1200, 800, 400, 220, 300],
            backgroundColor: '#ff1e6d',
            borderColor: 'transparent',
            pointBackgroundColor:'transparent',
            borderWidth: 'transparent'
        }]
    }
});

// Repeats

var repeats = new Chart(repeats, {
    type: 'bar',
    data: {
        labels: ['New', 'Repeat 1', 'Repeats 2', 'Repeats 3'],
        datasets: [{
        	label: 'Repeats',
            data: [75, 27, 12, 4],
            backgroundColor: ['#846bb9', '#ae91ec', '#ffc000', '#ff1e6d'],
            borderWidth: 1
        }]
    }
});

// Dwell

var dwell = new Chart(dwell, {
    type: 'pie',
    data: {
        labels: ['Red','Yellow', 'Blue'],
        datasets: [{
        	label: ['1-5 Min', '5-30 Min', '30-1hr'],
            data: [15, 15, 70],
            backgroundColor: ['#ffc000', '#ff1e6d', '#846bb9'],
            borderColor: 'transparent'
        }]
    }
});