
function openPopup() {
document.getElementById("popup").style.display = "flex";
document.body.style.overflow = "hidden";
const header = document.getElementById("header"); // 헤더 요소 선택 (id를 "header"로 가정)
header.style.backgroundColor = "#000";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////  

function closePopup() {
document.getElementById("popup").style.display = "none";
document.body.style.overflow = "auto";
const header = document.getElementById("header");
header.style.backgroundColor = ""; // 초기 스타일로 복원
}

$(document).ready(function() {

    $('.gnb > ul > li, .nav_bg').hover(function() {
        $('header').stop().animate({ 'background-color' : '#fff' }, 120);
        $('.gnb > ul > li > a').css({ 'color' : '#333' })
        $(this).children('a').stop().animate({ 'color' : '#fff', 'background-color' : '#000' }, 120)
        $('.menu ul li span').css({'color' : '#000'})
        $('.logo a').css({'background-position' : '50% 100%'})
        $('.nav_bg').stop().slideDown(200)
        $('.subnav').stop().slideDown(200)
        $('#popup').css("display", "none");
        $("body").css("overflow", "auto");
    }, function() {
        $('header').stop().animate({ 'background-color' : 'transparent' }, 120)
        $('.black_header').stop().animate({ 'background-color' : '#000' }, 120)
        $('.gnb > ul > li > a').css({ 'color' : '#fff' })
        $(this).children('a').stop().animate({ 'background-color' : 'transparent' }, 120)
        $('.menu ul li span').css({'color' : '#fff'})
        $('.logo a').css({'background-position' : '100% 0'})
        $('.nav_bg').stop().slideUp(200)
        $('.subnav').stop().slideUp(200)
    });




});


$(document).ready(function() {
    $( ".accordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    })

var state = true;

$('.menu ul li:last-child a, .accordion_bg').stop().on('click', function() {

    if (state) {
        $('.accordion_wrap').stop().animate({left: '0'}, 200);
        $('.accordion_bg').css({ display : 'block' })
        $('.wrap').css({ height: '820px', overflow : 'hidden' })
        $('header').css({backgroundColor: '#fff'})
        $('.menu ul li span').css({'color' : '#000'})
        $('.logo a').css({'background-position' : '0 -25.5px'})

        
    } else {
        $('.accordion_wrap').stop().animate({left: '-250px'}, 200 );
        $('.accordion_bg').css({ display : 'none' })
        $('.wrap').css({ height: 'auto', overflow : 'auto' })
        $('header').css({backgroundColor: 'transparent'})
        $('.black_header').css({backgroundColor: '#000'})
        $('.menu ul li span').css({'color' : '#fff'})
        $('.logo a').css({'background-position' : '100% 0'})


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


// var depth01 = true;

// $('.ui-accordion .ui-accordion-header').stop().on('click', function() {
//     if (depth01) {
//         $(this).css({background : '#fff', color : '#333'})

        
//     } else {
//         $(this).css({background : '#000', color : '#fff'})

//     }
    
//     depth01 = !depth01;

// })


var owl = $('.shop .owl-carousel');
owl.owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    dots: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    navSpeed: 300,

    responsive: {
    0: { items: 1 },
    480: { items: 1.5 },
    600: { items: 1.5 },
    800: { items: 2.5 },
    1024: { items: 2.5 },
    1280: { items: 2.5 },
    1440: { items: 2.5 },
    }
})

var owl = $('.sports .owl-carousel');
owl.owlCarousel({
    margin: 15,
    loop: true,
    nav: true,
    dots: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    navSpeed: 300,
    responsive: {
    0: { items: 1 },
    480: { items: 1.5, center: true },
    600: { items: 1.5, center: true },
    800: { items: 1.5, center: true },
    1024: { items: 1.5, center: true },
    1280: { items: 1.8, center: true },
    1440: { items: 1.5, center: true },
    }
})





} );


