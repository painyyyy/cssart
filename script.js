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
   
   var gpupil1 = $('#ginnypupil1');
  function runIt1() {
      gpupil1.animate({left:'+=8'}, 1000);
       gpupil1.animate({left:'-=8'}, 1000, runIt1);
   }

  runIt1();

var gpupil2 = $('#ginnypupil2');
  function runIt2() {
      gpupil2.animate({left:'+=8'}, 1000);
       gpupil2.animate({left:'-=8'}, 1000, runIt2);
   }

 runIt2();

var glid1 = $('#ginnylid1');
  function runIt3() {
    glid1.animate({top:'+=0'}, 3000);
      glid1.animate({top:'+=16'}, 80);
       glid1.animate({top:'-=16'}, 80);
      glid1.animate({top:'+=16'}, 80);
       glid1.animate({top:'-=16'}, 80, runIt3);
   }

  runIt3();

var glid2 = $('#ginnylid2');
  function runIt4() {

    glid2.animate({top:'+=0'}, 3000);
      glid2.animate({top:'+=16'}, 80);
       glid2.animate({top:'-=16'}, 80);
      glid2.animate({top:'+=16'}, 80);
       glid2.animate({top:'-=16'}, 80, runIt4);
   }
 runIt4();

 var gtooth1 = $('#ginnytooth1');
   function runIt5() {
      gtooth1.animate({width:'+=4', left:'-=2'}, 1000);
      gtooth1.animate({width:'-=4', left:'+=2'}, 1000, runIt5);   
   }

   runIt5();

 var gtooth2 = $('#ginnytooth2');
   function runIt6() {
      gtooth2.animate({width:'+=4', left:'-=2'}, 1000);
      gtooth2.animate({width:'-=4', left:'+=2'}, 1000, runIt6);
     
       
   }

   runIt6();
   
   var painyhead = $('#painyhead');
  function runIt7() {
     painyhead.animate({top:'+=8'}, 1000);
       painyhead.animate({top:'-=8'}, 1000, runIt7);
   }

runIt7();

var painycheek1= $('#painycheek1');
  function runIt8() {
     painycheek1.animate({height:'+=10'}, 1000);
       painycheek1.animate({height:'-=10'}, 1000, runIt8);
   }

runIt8();

var painycheek2= $('#painycheek2');
  function runIt9() {
     painycheek2.animate({height:'+=10'}, 1000);
       painycheek2.animate({height:'-=10'}, 1000, runIt9);
   }

runIt9();


   // taken from here: https://stackoverflow.com/questions/12738558/how-to-make-a-div-move-up-and-down-like-a-floating-baloon
