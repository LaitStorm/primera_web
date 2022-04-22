$(document).ready(function(){
    var bot = $("#buton");
    bot.click(function(){
        $("#redder").css("color", "red");
        console.log("no red");
    });
        
    var bot2 =$("#but2");
    bot2.click(function(){
        $("#red").hide();
        console.log("no foto");
    
    });

    var bot3 =$("#but3");
    bot3.click(function(){
        $("#red").show();
        console.log("no foto2");
    
    });
    
    var con = $("#concl");
    con.mouseenter(function(){
        $(this).append("P.d. No soy tan consumista, lo juro.");

        console.log("wenas");
    });


});