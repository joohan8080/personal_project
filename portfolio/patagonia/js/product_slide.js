$(document).ready(function() {

    var owl = $('.relation_box_wrap .owl-carousel, .recent_box_wrap .owl-carousel');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        // nav: true,
        // dots: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        navSpeed: 300,
        responsive: {
        0: { items: 1 },
        480: { items: 1.5, center: true },
        600: { items: 2.5, center: true },
        800: { items: 3.5, center: true },
        1024: { items: 3.5, center: true },
        1280: { items: 4.5, center: true },
        1440: { items: 5.5, },
        }
    })


})
