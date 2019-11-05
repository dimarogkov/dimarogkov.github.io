$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

function hideshow() {
  document.getElementById("form").style.display="none";
  document.getElementById("success").style.display="block";
}
