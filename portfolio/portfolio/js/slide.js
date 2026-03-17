$(document).ready(function() {
    $('nav ul li a, .main_text_btn a').click(function() {
        $('html, body').animate({ scrollTop:$(this.hash).offset().top }, 400)
    })
});



// console.log('text') 