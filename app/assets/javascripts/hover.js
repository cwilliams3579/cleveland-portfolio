$(document).ready(function() {
  function animationHover(element, animation){
    element = $(element);
    element.hover(
      function() {
        element.addClass('wow ' + animation);
      },
      function(){
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('wow ' + animation);
        }, 2000);
      });
    }
  });
