$(document).ready(function(){
  $('.carousel').slick({
     arrows:false,
     autoplay:true,
     autoplaySpeed:4000,
     pauseOnHover:false,
     pauseOnFocus:false,
     draggable: false
  });
  var x = 0;
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    if(y-x > 50){
      var z = $(".navbar").css("height");
      $('.navbar').animate({top: '-' + z}, 150);
        x = y;
    }else if (x - y > 50) {
        $('.navbar').animate({top: '0px'}, 150);
        x = y;
    }
  })
});
