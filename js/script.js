$(document).ready(function () {  

// PAGE LOADER
    $(".loader").fadeOut("slow");

// NAVBAR
    $(".nav-item")
        .hover(function () {
            $(this).find(".dropdown-menu").slideDown('fast');
        })
        .mouseleave(function () {
            $(this).find(".dropdown-menu").slideUp('fast');
        });

// CAROUSEL
    $("#carousel .owl-carousel, #owl .owl-carousel")
        .owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            margin: 8,
            loop: true
        });

    $("#carousel .owl-carousel")
        .hover(function () {
            $('.owl-nav').css("display", "flex");
        })
        .mouseleave(function () {
            $('.owl-nav').css("display", "none");
        });

// ACCORDION
    $("#accordion").accordion();

// SROLL TO TOP    
    $(window).scroll(function(){
        if($(this).scrollTop()>=500){
            $(".goToTop").css("display", "block");
        } else {
            $(".goToTop").css("display", "none");
        }
    });   

    $(".goToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });   

});