$(document).ready(function(){
    $(".nav").on("click","li a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var nav = $('header');
    $(document).scroll(function () {
        if ($(this).scrollTop() > 20) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });

    $('.content-form').on('submit',function () {
        $('input',$(this)).each(function () {
            if($(this).val()==''){
                alert('Enter all field');
                return false;
            }
        });
    });
    $('.slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });

    $(document).on('click','.hamburger',function () {
        $('header .nav').toggle();
    });

});