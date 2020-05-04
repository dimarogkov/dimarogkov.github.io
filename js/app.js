$(document).ready(function(){
    $('.header').removeClass("head_fix");
    $(window).scroll(function(){
        if ($(this).scrollTop()>40) {
            $(".header").addClass("head_fix").fadeIn('fast');
        } else {
            $(".header").removeClass("head_fix").fadeIn('fast');
        };
    })
})

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#arrow").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});