//--------start back to top btn
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $(".back-top-btn").css("display","block");
        }else{
            $(".back-top-btn").css("display","none");
        }
    });
});


$(function(){
    $(".back-top-btn").click(function(){
        $('html').animate({scrollTop:200}, 50);
    });
});
//------end back to top btn