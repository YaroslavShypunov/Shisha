$(document).ready(function (){

 $(window).scroll(function(){

     var bo = $('body').scrollTop();
         if(bo > 800){
      $('.a').css('backgroundImage','url(anchor/anchorSmall.svg)');
      $('.a').eq(1).css('backgroundImage','url(anchor/anchorBig.svg)');
 }else if(bo < 800){
           $('.a').css('backgroundImage','url(anchor/anchorSmall.svg)');
      $('.a').eq(0).css('backgroundImage','url(anchor/anchorBig.svg)');
 }
          $('.a').hover(function(){
   $(this).css('backgroundImage','url(anchor/anchorBig.svg)'); 
},function (){
    $(this).css('backgroundImage','url(anchor/anchorSmall.svg)'); 
              if(bo > 800){
                        $('.a').eq(1).css('backgroundImage','url(anchor/anchorBig.svg)');
              }
              if(bo < 800){
                        $('.a').eq(0).css('backgroundImage','url(anchor/anchorBig.svg)');
              }
});
 })

            $(".a").click(function() {
                
                name = $(this).attr('href');
               destination = $(name).offset().top;
         $("html, body").animate({scrollTop: destination }, 1500);
                bla = $('#czemuMy').offset().top;
});
    
});