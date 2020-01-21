 var h = $('#head');
   function runIt() {
       h.animate({top:'+=20'}, 1000);
       h.animate({top:'-=20'}, 1000, runIt);
   }

   runIt();
   
  var f = $('#floating');
   function rrunIt() {
      h.animate({top:'+=20'}, 1000);
      h.animate({top:'-=20'}, 1000, rrunIt);
      f.animate({width:'+=10', left:'-=5'}, 1000);
      f.animate({width:'-=10', left:'+=5'}, 1000, rrunIt);  
   }

   rrunIt();

   // taken from here: https://stackoverflow.com/questions/12738558/how-to-make-a-div-move-up-and-down-like-a-floating-baloon
