
if($(window).width <= "575"){
    $(document).ready(function (){
        
    }); 
}else if($(window).width >= "576"){ 
    $(document).ready(function (){
    var dopVar = null;
    
$('.a').eq(0).css('backgroundImage','url(anchor/anchorBig.svg)');
 $(window).scroll(function(){

     var bo = $('body').scrollTop();
        if(bo > 3300){
    $('.a').css('backgroundImage','url(anchor/anchorSmall.svg)');
      $('.a').eq(4).css('backgroundImage','url(anchor/anchorBig.svg)');

        } 
     else if(bo > 2200){
      $('.a').css('backgroundImage','url(anchor/anchorSmall.svg)');
      $('.a').eq(3).css('backgroundImage','url(anchor/anchorBig.svg)');

         }
     else if(bo > 1300){
           $('.a').css('backgroundImage','url(anchor/anchorSmall.svg)');
      $('.a').eq(2).css('backgroundImage','url(anchor/anchorBig.svg)');

 }
     else if(bo > 750 && bo < 1200){
      $('.a').css('backgroundImage','url(anchor/anchorSmall.svg)');
      $('.a').eq(1).css('backgroundImage','url(anchor/anchorBig.svg)');

 }
     else if(bo < 700){
           $('.a').css('backgroundImage','url(anchor/anchorSmall.svg)');
      $('.a').eq(0).css('backgroundImage','url(anchor/anchorBig.svg)');

 }

 })
            $("nav > a").click(function() {
                dopVar = this;
                name0 = $(this).attr('href');
               destination0 = $(name0).offset().top;
         $("html, body").animate({scrollTop: destination0 }, 1500);
                bla0 = $('#czemuMy').offset().top;
});
            $(".a").click(function() {
                dopVar = this;
                name = $(this).attr('href');
               destination = $(name).offset().top;
         $("html, body").animate({scrollTop: destination }, 1500);
                bla = $('#czemuMy').offset().top;
});
              $('.a').hover(function(){
   $(this).css('backgroundImage','url(anchor/anchorHover.svg)'); 
},function (){
    $(this).css('backgroundImage','url(anchor/anchorSmall.svg)'); 
    if(this == dopVar){
            $(this).css('backgroundImage','url(anchor/anchorBig.svg)'); 
    }
});
        });
}
