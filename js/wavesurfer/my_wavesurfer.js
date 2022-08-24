$(document).ready(function() {

	$('.wavesurfer-item').each(function () {
    const item = $(this);
    const itemId = item.attr('id');
    const itemSong = item.attr('data-song');
    const itemBtn = item.find('.wavesurfer-btn');
    const wave = WaveSurfer.create({
      container: `#${itemId} .wavesurfer`,
      height: 70,
      waveColor: '#ccc',
      cursorColor: '#2d3436',
      progressColor: '#2d3436',
      cursorWidth: 3,
      barWidth: 4,
      barRadius: 3,
      barGap: 6,
      partialRender: true,
      responsive: true
    });

    wave.load(`../../audio/${itemSong}`);

    // play & pause
    itemBtn.on('click', function (e) {
      e.preventDefault();
      const th = $(this);

      if (th.hasClass('play')){
        th.removeClass('play').addClass('pause');
        wave.play();
      } else  {
        th.removeClass('pause').addClass('play');
        wave.pause();
      }
    });

    // when music is finish
    wave.on('finish', function () {
      itemBtn.removeClass('pause').addClass('play');
      wave.stop();
    });

	});

});