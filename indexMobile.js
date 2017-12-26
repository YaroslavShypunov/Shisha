$(function (){
    
    /*-------------------------___MOBILE MENU___------------------------*/
    $("#openMenuMobile").on('click',function(){
        $('#mobileMenu').slideDown('slow');
    });
    $('#closeMenuMobile').on('click',function(){
        $('#mobileMenu').slideUp('slow');
    });
    $('#mobileMenu > ul > li').on('click', function(){
        $('#mobileMenu').slideUp('slow');
    });
  /*-----------------------------------------------------------------------*/
    
    $('#mobileHeader img').eq(2).hover(function(){
        $(this).attr('src','menu/yellow/logo_yellow.svg');
    },function(){
         $(this).attr('src','menu/logo.svg');
    });
    $('#openMenuMobile').hover(function(){
        $(this).attr('src','mobile/menu_yellow.svg');
    },function(){
             $(this).attr('src','mobile/menu.svg');
    });
    $('#closeMenuMobile').hover(function(){
        $(this).attr('src','mobile/close_yellow.svg');
    },function(){
        $(this).attr('src','mobile/close.svg');
    });
});