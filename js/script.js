$(document).ready(function () {
  $('.burger__menu').click(function (event) {
    $('.burger__menu, .header_cap_navigation_menu_menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


// Эта функция нужна для слайдера
$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    centerMode: true,
    fade: true,
    waitForAnimate: true
  });
  $('.slider_1440').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    centerMode: true,
    fade: true,
    waitForAnimate: true
  });
  $('.slider_1024').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    centerMode: true,
    fade: true,
    waitForAnimate: true
  });
  $('.slider_680').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    centerMode: true,
    fade: true,
    waitForAnimate: true,
  });
  $('.slider_424').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    centerMode: true,
    fade: true,
    waitForAnimate: true,
  });
});
//----------------

//Плавный скролл до объекта
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
  });
});
//----------------

//Функция кнопки "Вверх"
(function ($) {
  $(function () {

    $('#up').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 700);
      return false;
    })

  })
})(jQuery);
//----------------


$(document).ready(function () {
  var typed = new Typed('.hii', {
    strings: ["Привет !", "Hi !", "Halo !", "Прывітанне !", "こんにちは !", "Bonjour !"],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true
  });
});

$(document).ready(function () {
  var typed = new Typed('.coopr', {
    strings: ["dbadinov@mail.ru", "DenisBadinov"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
});

AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 90, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

