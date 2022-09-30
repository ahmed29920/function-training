
//-------start portfolio
$(function(){
    $("#media-button").click(function(){
        
        $("#media").attr("id","media-v")
        $("#all").attr("id","all-hiden")
        $("#business-v").attr("id","business")
        $("#web-v").attr("id","web")
        $("#game-v").attr("id","game")
    });

});

$(function(){
    $("#business-button").click(function(){
        
        $("#business").attr("id","business-v")
        $("#all").attr("id","all-hiden")
        $("#media-v").attr("id","media")
        $("#web-v").attr("id","web")
        $("#game-v").attr("id","game")
    });

});

$(function(){    
    $("#web-button").click(function(){
        
        $("#web").attr("id","web-v")
        $("#all").attr("id","all-hiden")
        $("#media-v").attr("id","media")
        $("#business-v").attr("id","business")
        $("#game-v").attr("id","game")
    });
});

$(function(){
    $("#game-button").click(function(){

        $("#game").attr("id","game-v")
        $("#all").attr("id","all-hiden")
        $("#media-v").attr("id","media")
        $("#web-v").attr("id","web")
        $("#business-v").attr("id","business")
    });
});



$(function(){    
    $("#all-button").click(function(){
        $("#all-hiden").attr("id","all")
        $("#media-v").attr("id","media")
        $("#web-v").attr("id","web")
        $("#business-v").attr("id","business")
        $("#game-v").attr("id","game")
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
  
