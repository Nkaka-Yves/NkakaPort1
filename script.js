$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbarp').addClass("sticky");
        }else{
            $('.navbarp').removeClass("sticky");
        }
    });
   // toggle menu/navbar script
  $('.menu-btn').click(function(){
     $('.navbarp .menup').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
   });
    
   // typing text animation script
   var typed = new Typed(".typing", {
    strings: [ "Web Developer","Designer", "Leader", "Singer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
   });

   var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Designer","Leader", "Singer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
});