
images = [
  (scr = "imagenes/fotoinicio2.jpg"),
  (scr = "imagenes/fondo2.jpg"),
  (scr = "imagenes/fondo1.webp"),
  (scr = "imagenes/fondoinicio.jpg"),
];

let index = 0;
$(function() {
  
  setInterval( image, 4000);

});

function image() {
 $('.fondoinicio').css("background-image", 'url(' + images[index] + ')')             
 index++;
                
 if(index == 4)
    index = 0;
  
  
}