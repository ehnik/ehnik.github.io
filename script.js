function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$(function(){
  $(".portfolio").click(function(){
    $(this).addClass("active")
  })
})

$(function(){
  $(".more").click(function(){
    $("#extBio").toggleClass("show")
    $("#projects").toggleClass("extended")

  })
})

$( window ).resize(function() {
  if ($(window).width()>767){
    if($(".hover-project1").hasClass("show")){
      $(".hover-project1").removeClass("show")
    }
    if($(".hover-project2").hasClass("show")){
      $(".hover-project2").removeClass("show")
    }
    if($(".hover-project3").hasClass("show")){
      $(".hover-project3").removeClass("show")
    }
  }
})

$(document).ready(function(){
  $("#project1").hover(function(){
    $(".hover-project1").toggleClass("unhover")
  })

  $("#project2").hover(function(){
    $(".hover-project2").toggleClass("unhover")
  })

  $("#project3").hover(function(){
    $(".hover-project3").toggleClass("unhover")
  })

  $(".project-desc1").click(function(){
    $(".hover-project1").toggleClass("show")
  })

  $(".project-desc2").click(function(){
    $(".hover-project2").toggleClass("show")
  })

  $(".project-desc3").click(function(){
    $(".hover-project3").toggleClass("show")
  })
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

 //>=, not <=
 if (scroll >= 500) {
    //clearHeader, not clearheader - caps H
    $(".portfolio").addClass("active")
    $(".home").removeClass("active")
    }
 else{
   $(".home").addClass("active");
      if($(".portfolio").hasClass("active")){
        $(".portfolio").removeClass("active")
      }
  }
})
})

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  //makes nav dropdown apper
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }

}

window.onclick = function(e) {
  //makes nav dropdown apper
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }

}
