


let popup = $('#popup');
window.setTimeout(function() {  
  popup.addClass('popup__active');
}, 4000);

window.onload = function() {
  createScratchCard({
  'container':document.getElementById('scratchcard'), 
  'background':'./img/discount.png', 
  'foreground':'./img/scratch.png', 
  'percent':90, 
  'coin':'./img/coin.ico ', 
  'thickness':20,
  });
}


var glower = $('#glow');
window.setInterval(function() {  
    glower.toggleClass('active');
}, 400);


// $(document).ready(function(){
//   $('.popup__shine').mouseenter(
//     function() {
//       $( this ).addClass('popup__shine--hide');
//     }, 
//   );
// });

// window.setTimeout(function() { 
//   $(document).ready(function(){
//     $('.popup__shine').mouseleave(
//       function() {
//         $( this ).removeClass('popup__shine--hide');
//       }, 
//     );
//   });
// }, 2000);
