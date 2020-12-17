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

// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [55.616209, 37.208075],
        zoom: 11
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [55.616209, 37.208075] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.svg',  // картинка иконки
            iconImageSize: [82, 123],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
        // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}