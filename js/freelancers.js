
//-------start portfolio
$(function(){
    $("#app-button").click(function(){
        
        $("#app").attr("id","app-v")
        $("#all").attr("id","all-hiden")
        $("#card-v").attr("id","card")
        $("#web-v").attr("id","web")
    });

});

$(function(){
    $("#card-button").click(function(){
        
        $("#card").attr("id","card-v")
        $("#all").attr("id","all-hiden")
        $("#app-v").attr("id","app")
        $("#web-v").attr("id","web")
    });

});

$(function(){    
    $("#web-button").click(function(){
        
        $("#web").attr("id","web-v")
        $("#all").attr("id","all-hiden")
        $("#app-v").attr("id","app")
        $("#card-v").attr("id","card")
    });
});

$(function(){    
    $("#all-button").click(function(){
      

        $("#all-hiden").attr("id","all")
        $("#app-v").attr("id","app")
        $("#card-v").attr("id","card")
        $("#web-v").attr("id","web")

    });
});
//btn color
$(function(){    
    $(".portfolio-btn").click(function(){
        
       if(! $(this).hasClass("selcted-btn")){
           $(this).addClass("selcted-btn");
           $(this).parentsUntil(".links-container").siblings().find(".portfolio-btn").removeClass("selcted-btn");  
        }

    });
});

//info
$(function(){    
    $(".portfolio-img").mouseover(function(){
        $(this).find(".portfolio-info").css("display" , "block");
    });
    
    $(".portfolio-img").mouseout(function(){  
        $(this).find(".portfolio-info").css("display" , "none");
    });
});
$(function(){
    $(".web-pic").mouseover(function(){
        $(this).find(".portfolio-info").css("display" , "block");
    });

    $(".portfolio-img").mouseout(function(){
        $(this).find(".portfolio-info").css("display" , "none");
    });
});
$(function(){
    $(".app-pic").mouseover(function(){
        $(this).find(".portfolio-info").css("display" , "block");
    });

    $(".portfolio-img").mouseout(function(){
        $(this).find(".portfolio-info").css("display" , "none");
    });
});
$(function(){
    $(".card-pic").mouseover(function(){
        $(this).find(".portfolio-info").css("display" , "block");
    });

    $(".portfolio-img").mouseout(function(){
        $(this).find(".portfolio-info").css("display" , "none");
    });
});


//------end portfolio
//--------start form

//end form
  
