$(function() {
    
   //Ocultar bloque
    $("#b1").click(function() {
        $("#bloque").hide(1500);
    });
    
    //Mostrar bloque
    $("#b2").click(function() {
        $("#bloque").show("slow");
    });
    
    //Ocultar - Mostrar
    $("#b3").click(function() {
        $("#bloque").toggle(1500);
    });
    
    //Cambiar tamaño
    $("#b4").click(function() {
        $("#bloque").animate({
            fontSize:'2.4em',
            width: 400,
            padding: 24
        }, 2500);
    });
    
    //Ocultar con fadeOut
    $("#b5").click(function() {
       $("#bloque").fadeOut(1000); 
    });
    
    
    //Mostar con fadeIn
    $("#b6").click(function() {
        $("#bloque").fadeIn(1000);
    });
    
    //Mover
    $("#b7").click(function() {
        $("#bloque")
        .animate({
            opacity:"0.1",
            left: "+=400",
            fontSize: "1em",
            width: "200"
        }, 1200)
        .animate({
            opacity: "0.4",
            top: "+=160",
            height: "20",
            width: "80",
            fontSize: "0.5em"
        }, "slow")
        .animate({
            opacity: "1",
            left: "0",
            width: "260",
        }, "slow")
        .animate({
            top: "0",
            width: "260",
            fontSize: "1.2em"
        }, "fast")
        .slideUp()
        .slideDown(1800)
        
        return false;
    });
    
    //Cambiar estilo CSS
    $("#b8").click(function() {
        $("#bloque").css({
            'border': '4px solid #b7e5ff',
            'color': '#c33',
            'font-weight': 'bold',
            'background-color': '#fff'
        });
    });
    
});