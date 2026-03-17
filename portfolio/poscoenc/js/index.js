
var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 0,
loop: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},

autoplay: {
delay: 5000, // 5000ms = 5초
disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지 (선택 사항)
},
});





$(document).ready(function() {


  $('.gnb > ul > li').hover(function() {
    $('.menu > ul > li > a').stop().animate({ 'filter' : 'invert(100%);' }, 120);
      $('header').stop().animate({ 'background-color' : '#fff' }, 120);
      $('.gnb > ul > li > a').stop().animate({ 'color' : '#333' }, 120);
      $(this).find('ul').stop().slideDown(200);
      $('.logo a').css({ filter : 'invert(0%)' })
      $('.menu ul li a').css({ filter : 'invert(100%)' })
  }, function() {
    $('.menu > ul > li > a').stop().animate({ 'filter' : 'invert(0%);' }, 120);
    $('header').stop().animate({ 'background-color' : 'transparent' }, 120)
    $('.gnb > ul > li > a').stop().animate({ 'color' : '#fff' }, 120);
    $(this).find('ul').stop().slideUp(200);
    $('.logo a').css({ filter : 'brightness(0%) invert(1)' })
    $('.menu ul li a').css({ filter : 'invert(0%)' })


  });







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
      $('header').css({'background-color' : '#fff'})
      $('.logo a').css({'filter': 'invert(0%)'})

  } else {
      $('.accordion_wrap').stop().animate({left: '-250px'}, 200 );
      $('.accordion_bg').css({ display : 'none' })
      $('body').css({ height: 'auto', overflow : 'auto' })
      $('.menu ul li span').css({'color' : '#fff'})
      $('header').css({'background-color' : 'transparent'})
      $('.logo a').css({'filter': 'brightness(0%) invert(1)'})

  }
  
   state = !state;

});

})


let state = false;
$('.m_menu').on('click', function() {
  state = !state;
  if (state) {
    $(this).css({'filter': 'invert(100%)'});
  } else {
    $(this).css({'filter': 'invert(0%)'});
  }
});






$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) { 
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });
});


// Function to show the content of the clicked tab
const showTab = (tabId, event) => {
// Hide all tab contents
document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('show'));
// Show the selected tab content
document.getElementById(tabId).classList.add('show');

// Remove the active class from all buttons
document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
// Add the active class to the clicked button
event.currentTarget.classList.add('active');
};

// On page load, select the "개발사업, 도시정비, 리모델링" tab and make it active
window.onload = () => {
const defaultTabButton = document.querySelector('.tab-button');
const defaultTabId = defaultTabButton.getAttribute('onclick').split('\'')[1]; 
showTab(defaultTabId, { currentTarget: defaultTabButton });
};

