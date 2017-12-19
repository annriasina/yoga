$(document).ready(function(){
    var nav = $('header');
    $(document).scroll(function () {
        if ($(this).scrollTop() > 20) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });
});