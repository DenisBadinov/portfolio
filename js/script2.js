//Плавный скролл до объекта

$(document).ready(function () {
  var mql = window.matchMedia('all and (max-width: 768px)');
  if (mql.matches) {
    $("#header_cap_navigation_menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top - 70;
      $('body,html').animate({ scrollTop: top }, 1200);
    }); // размер окна 768px или меньше
  } else {
    $("#header_cap_navigation_menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1200);
    }); // иначе, если размер окна более 768px 
  }
});

//----------------

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