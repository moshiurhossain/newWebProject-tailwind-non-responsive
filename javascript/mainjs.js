$(function(){
// code for sliding down box start
$("#mainbutton").click(function(){
    $(".box").slideToggle();
});

$("#mainbutton2").click(function(){
    $(".box2").slideToggle();
});

$("#mainbutton3").click(function(){
    $(".box3").slideToggle();
});

$("#mainbutton4").click(function(){
    $(".box4").slideToggle();
});

$("#mainbutton5").click(function(){
    $(".box5").slideToggle();
});
// code for sliding down box end


/* $(".fa-plus").click(function(){
     $(this).toggleClass("fa-x ");
 });*/
/*this code changed the icon when the icon plus is clicked only, but i found some issues with this method */


// code for changing button icon start
$("#mainbutton").click(function(){
    $(".plus1").toggleClass("fa-x");
});

$("#mainbutton2").click(function(){
    $(".plus2").toggleClass("fa-x");
});

$("#mainbutton3").click(function(){
    $(".plus3").toggleClass("fa-x");
});

$("#mainbutton4").click(function(){
    $(".plus4").toggleClass("fa-x");
});

$("#mainbutton5").click(function(){
    $(".plus5").toggleClass("fa-x");
});
// code for changing button icon end
});