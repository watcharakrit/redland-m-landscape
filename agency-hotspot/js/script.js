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
});

/* ===================================
     Team Carousel
====================================== */

$("#team-slider").owlCarousel({
    items: 2,
    dots: false,
    nav: true,
        navText: ["<i class='las la-angle-left'></i>","<i class='las la-angle-right'></i>"],
    loop: true,
    center:true,
    autoplay: false,
    autoplayHoverPause:true,
    slideSpeed: 3000,
    paginationSpeed: 5000,
    smartSpeed:1000,
    responsive: {
        1200: {
            items: 2
        },
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

/* ===================================
        Fancy Box
====================================== */

$('[data-fancybox]').fancybox({
    protect: true,
    animationEffect: "fade",
    hash: null,
});