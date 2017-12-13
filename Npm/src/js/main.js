$(document).ready(function() {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true, 
    gutter: 10
  });

 
  $('[data-tab-nav]').on('click', function () {
    var that = $(this),
      tabs = $('.about__tab-content > div');
    $('.about__tab-menu li').removeClass('active');
    $(that).addClass('active');
    $(tabs).removeClass('active');
    $('[' + $(that).attr("data-tab-nav") + ']').addClass('active');
  });
  
});

