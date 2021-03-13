$(document).ready(function(){
  mouseEnterLeave();
  menuPosition ();
  clickColor ();
})



// funzioni

function mouseEnterLeave () {
  $(".with-dropdown").mouseenter(function (){
    $(this).children(".dropdown-menu").removeClass("dis-none");
  })
  $(".with-dropdown").mouseleave(function (){
    $(this).children(".dropdown-menu").addClass("dis-none");
  })
  $(".dropdown-menu").mouseenter(function (){
    $(this).removeClass("dis-none");
  })
  $(".dropdown-menu").mouseleave(function (){
    $(this).addClass("dis-none");
  })
}

function menuPosition () {
  $(".with-dropdown").mouseenter(function (){
    if ($(this).children(".dropdown-menu").hasClass("big")) {
      $(this).children(".dropdown-menu").css("left", "-150px");
    } else {
      $(this).children(".dropdown-menu").css("left", "-30px");
    }
  })
}

function clickColor (){
  $(".nav-left > ul > li > a").click(function (){
    $(this).addClass("active");
  })
}
