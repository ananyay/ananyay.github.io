$(function(){
    //WOW plugin init
    new WOW().init();
  
    //parallax effect for banner
    (function() {
        var posY;
        var image = document.getElementById('home');;
        function paralax() {
            posY = window.pageYOffset;
            image.style.top = posY * 0.9 + 'px';
        }
        window.addEventListener('scroll', paralax);
    })();
  });
  
