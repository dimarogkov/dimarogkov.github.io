$(document).ready(function() {

	const wavesurfer = WaveSurfer.create({
    container: '.wavesurfer',
    scrollParent: true
	});

	wavesurfer.load('../../audio/given-up.mp3');

});