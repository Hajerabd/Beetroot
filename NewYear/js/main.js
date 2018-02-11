$(document).ready(function() {

  $('#clock').countdown('2018/01/01', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});

});

