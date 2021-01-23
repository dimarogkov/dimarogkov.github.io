$(document).ready(function() {
    // tab simple block
	$('.tab-one .tab-title').on('click', function() {
        $(this).parent().toggleClass('active');
    });
    $('.tab-toggle div').on('click', function() {
        var tab = $(this).closest('.tabs').find('.tab');
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        tab.eq(i).siblings('.tab:visible').fadeOut(function() {
            tab.eq(i).fadeIn();
        });
        $(this).closest('.tab-one .tab-nav').removeClass('active').find('.tab-title').text($(this).text());
    });

    // tab block on left
    $(' .tab-two .tab-title').on('click', function() {
        $(this).parent().toggleClass('active');
    });
    $('.tab-toggle div').on('click', function() {
        var tab = $(this).closest('.tab-two').find('.tab');
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        tab.eq(i).siblings('.tab:visible').fadeOut(function() {
            tab.eq(i).fadeIn();
        });
        $(this).closest('.tab-two .tab-nav').removeClass('active').find('.tab-title').text($(this).text());
    });
});