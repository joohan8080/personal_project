
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

// On page load, select the "2024,2023" tab and make it active
window.onload = () => {
    const defaultTabButton = document.querySelector('.tab-button');
    const defaultTabId = defaultTabButton.getAttribute('onclick').split('\'')[1]; // Extract 'civil'
    showTab(defaultTabId, { currentTarget: defaultTabButton });
};





document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.main_contents ul li a');
    const images = document.querySelectorAll('.main_img');

    // 초기 상태
    links[0].classList.add('active');
    images.forEach((img, i) => {
        img.style.display = i === 0 ? 'flex' : 'none';
    });

    links.forEach((link, idx) => {
        link.addEventListener('click', e => {
            e.preventDefault();

            links.forEach(a => a.classList.remove('active'));
            link.classList.add('active');

            images.forEach(img => img.style.display = 'none');
            images[idx].style.display = 'flex';
        });
    });
});





$(document).ready(function() {
  $('.gnb > ul > li').hover(function() {
      $(this).find('ul li').stop().slideDown(200);
      $(this).find('>a').css({'background-color' : '#000'});
      $(this).find('>a').css({'color' : '#fff'});
  }, function() {
      $(this).find('ul li').stop().slideUp(200);
      $(this).find('>a').css({'background-color' : 'transparent'});
      $(this).find('>a').css({'color' : '#333'});
  });
  
  $('.gnb > ul > li > ul > li > a').hover(function() {
    $(this).stop().animate({ 'background-color' : '#ed1c24' }, 120);
  }, function() {
    $(this).stop().animate({ 'background-color' : 'transparent' }, 120);
  });


});


$(document).ready(function() {
  $( ".accordion" ).accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
  })

var state = true;

$('.hamburger, .accordion_bg').stop().on('click', function() {

  if (state) {
      $('.accordion_wrap').stop().animate({left: '0'}, 200);
      $('.accordion_bg').css({ display : 'block' })
      $('.wrap').css({ height: '820px', overflow : 'hidden' })
      
  } else {
      $('.accordion_wrap').stop().animate({left: '-250px'}, 200 );
      $('.accordion_bg').css({ display : 'none' })
      $('.wrap').css({ height: 'auto', overflow : 'auto' })


  }
  
  state = !state;


})


var owl = $('.shop .owl-carousel');
owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    dots: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    navSpeed: 300,
    responsive: {
    0: { items: 1.5, left: true },
    480: { items: 1.5, left: true },
    600: { items: 2, center: true },
    800: { items: 2, center: true },
    1024: { items: 3, center: true },
    1280: { items: 3, center: true },
    1440: { items: 4 }
    }
})

var owl = $('.exhibition_contents .owl-carousel');
owl.owlCarousel({
    margin: 280,
    loop: true,
    nav: true,
    dots: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    navSpeed: 300,
    responsive: {
    0: { items: 1 },
    480: { items: 1, center: true },
    600: { items: 1.5, center: true },
    800: { items: 1.5, center: true },
    1024: { items: 1, center: true },
    1281: { items: 2, center: true },
    1440: { items: 2.5, center: true }
    }
})

var owl = $('.exhibition .owl-carousel');
owl.owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    dots: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    navSpeed: 300,
    responsive: {
    0: { items: 1.5 , center: true },
    480: { items: 1.5, center: true },
    600: { items: 1.5, center: true },
    800: { items: 1.5, center: true },
    1024: { items: 1.5, center: true },
    1280: { items: 2.5, center: true },
    1440: { items: 2.5, center: true }
    }
})




})

