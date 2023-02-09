$(window).on("load", function () {

    "use strict";

    //Clear URL On Page Refresh
    var loc = window.location.href,
        index = loc.indexOf('#');

    if (index > 0) {
        window.location = loc.substring(0, index);
    }

/* ===================================
        WOW Animation
====================================== */

    if ($(window).width() > 991) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

/* ===================================
    Loading Timeout
 ====================================== */
    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $("#loader-fade").fadeOut("slow");
    }, 1000);
});



/*===================================
    Portfolio Carousel
====================================== */

$(".team-classic.owl-team").owlCarousel({
    items: 3,
    margin: 30,
    dots: false,
    nav: false,
    loop:true,
    autoplay: true,
    smartSpeed:500,
    navSpeed: true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        992: {
            items: 1
        },
        600: {
            items: 1
        },
        320: {
            items: 1
        },
        280: {
            items: 1
        }
    }
});
