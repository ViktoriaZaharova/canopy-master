// mobile menu
$('.btn-close').click(function(){
   $('.mobile-menu').fadeOut();
});

$('.btn-burger').click(function(){
    $('.mobile-menu').fadeToggle();
});
// mobile menu end

// slick slider
$('.reviews-slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.video-reviews-slider').slick({
    slidesToShow: 1,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M17 32L3 17.5L17 3" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M3 3L17 17.5L3 32" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>'
})

$('.video-box').hover(function (){
    $(this).find('.btn-play').fadeToggle();
});