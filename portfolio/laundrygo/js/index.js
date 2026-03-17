// business_box 들에 상위 개체에 overhidden 넣고, 슬라이드 애니메이션 무한반복 되도록. 생성
$(document).ready(function() {

    var owl = $('.business_contents .owl-carousel');
    owl.owlCarousel({
        margin: 40,
        loop: true,
        nav: true,
        dots: true,
        autoplay:true, // 자동 재생 활성화
        autoplayTimeout: 1000, // 3초마다 다음 슬라이드로 이동
        autoplayHoverPause: true, // 마우스 호버 시 일시 정지
        slideBy: 4,
        
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
        0: { items: 1 },
        480: { items: 1.5, center: true },
        600: { items: 1.5, center: true },
        800: { items: 1.5, center: true },
        1024: { items: 2.5, center: true },
        1280: { items: 2.5, center: true },
        1440: { items: 3, center: true },
        
        }
    })

})