$(document).ready(function() {

  $(function () {
    //Initialize filterizr with default options
    $('#filtr-container').filterizr();
  });
  $('#team__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="team__slider-btn team__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="team__slider-btn team__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: false,
    // arrows: false,
    autoplaySpeed: 4000,
    fade: true,
  });

  $('#testimonials__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: false,
    // arrows: false,
    autoplaySpeed: 4000,
    fade: true,
  });

  $(function(){
    $('.team__item-description').slimScroll({
        height: '250px',
        color: 'lightgreen'
    });
  });



});

