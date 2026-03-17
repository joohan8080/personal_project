
$(document).ready(function() {

    $('.gnb > ul > li').hover(function() {
        $(this).find('ul').stop().slideDown(200);
        $(this).find('>a').css({'background-color' : '#fff'});
        $(this).find('>a').css({'color' : '#333'});
    }, function() {
        $(this).find('ul').stop().slideUp(200);
        $(this).find('>a').css({'background-color' : 'transparent'});
        $(this).find('>a').css({'color' : '#fff'});
    });

    $('.gnb > ul > li > ul > li > a').hover(function() {
        $(this).stop().animate({ 'background-color' : '#000', 'color' : '#fff' }, 120);
    }, function() {
    $(this).stop().animate({ 'background-color' : 'transparent', 'color' : '#333' }, 120);
    });

});


$(document).ready(function() {
    $( ".accordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    })

var state = true;

$('.m_menu, .accordion_bg').stop().on('click', function() {

    if (state) {
        $('.accordion_wrap').stop().animate({left: '0'}, 200);
        $('.accordion_bg').css({ display : 'block' })
        $('body').css({ height: '820px', overflow : 'hidden' })
        $('.menu ul li span').css({'color' : '#000'})

        
    } else {
        $('.accordion_wrap').stop().animate({left: '-250px'}, 200 );
        $('.accordion_bg').css({ display : 'none' })
        $('body').css({ height: 'auto', overflow : 'auto' })
        $('.menu ul li span').css({'color' : '#fff'})


    }
    
     state = !state;

     

})

})

$( function() {
    $( ".accordion" ).accordion({
    heightStyle: "fill"
    });

    $( "#accordion-resizer" ).resizable({
    minHeight: 140,
    minWidth: 200,
    resize: function() {
        $( "#accordion" ).accordion( "refresh" );
    }
});

var owl = $('.main .owl-carousel');
owl.owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true, 
    autoplayTimeout: 3000,
    navSpeed: 300,
    responsive: { 0: { items: 1, center: true } }
})

var owl = $('.personality .owl-carousel');
owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    navSpeed: 300,

    responsive: {
    0: { items: 1.5, left: true },
    480: { items: 1.5, left: true },
    600: { items: 1.5, left: true },
    800: { items: 2, left: true },
    1024: { items: 3.5, left: true },
    1280: { items: 3.5, left: true },
    1440: { items: 4, left: true },
    }
})

var owl = $('.fashion .owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplay: true, 
    autoplayTimeout: 3000,
    navSpeed: 300,
    responsive: { 0: { items: 1, center: true } }
})





} );


