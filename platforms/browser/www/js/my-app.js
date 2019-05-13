// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})




//pagina vuelo
$$("#vuelo").on('click',function(e){
    window.location.href="vuelo.html";//me dirije a otra pagina
});
$$("#vueloBoton").on('click',function(e){
    window.location.href="vuelo.html";//me dirije a otra pagina
});
//pagina hoteles
$$("#hoteles").on('click',function(e){
    window.location.href="hoteles.html";//me dirije a otra pagina
});
$$("#hotelesBoton").on('click',function(e){
    window.location.href="hoteles.html";//me dirije a otra pagina
});

//pagina paquetes
$$("#paquetes").on('click',function(e){
    window.location.href="promos.html";//me dirije a otra pagina
});
$$("#paquetesBoton").on('click',function(e){
    window.location.href="promos.html";//me dirije a otra pagina
});

//pagina testimonios
$$("#testimonios").on('click',function(e){
    window.location.href="testimonios.html";//me dirije a otra pagina
});
$$("#testimoniosBoton").on('click',function(e){
    window.location.href="testimonios.html";//me dirije a otra pagina
});

$$("#back").on('click',function(e){
    window.location.href="inicio.html";//me dirije a otra pagina
});


//nueva york
$("#abrirVentanaNuevaYork").on('click',function(e){
    $(".ventanaNuevaYork").slideDown();
})

$(".cerrarVentanaNuevaYork").on('click',function(e){
    $(".ventanaNuevaYork").slideUp();
})

//venecia
$("#abrirVentanaVenecia").on('click',function(e){
    $(".ventanaVenecia").slideDown();
})

$(".cerrarVentanaVenecia").on('click',function(e){
    $(".ventanaVenecia").slideUp();
})

//miami
$("#abrirVentanaMiami").on('click',function(e){
    $(".ventanaMiami").slideDown();
})

$(".cerrarVentanaMiami").on('click',function(e){
    $(".ventanaMiami").slideUp();
})

//roma
$("#abrirVentanaRoma").on('click',function(e){
    $(".ventanaRoma").slideDown();
})

$(".cerrarVentanaRoma").on('click',function(e){
    $(".ventanaRoma").slideUp();
})

//londres
$("#abrirVentanaLondres").on('click',function(e){
    $(".ventanaLondres").slideDown();
})

$(".cerrarVentanaLondres").on('click',function(e){
    $(".ventanaLondres").slideUp();
})


//paris
$("#abrirVentanaParis").on('click',function(e){
    $(".ventanaParis").slideDown();
})

$(".cerrarVentanaParis").on('click',function(e){
    $(".ventanaParis").slideUp();
})

//Hotel-perola

$("#abrirVentanaHotelUno").on('click',function(e){
    $(".ventanaHotelPerola").slideDown();
})

$(".cerrarVentanaHotelUno").on('click',function(e){
    $(".ventanaHotelPerola").slideUp();
})


//hotel londres
$("#abrirVentanaHotelDos").on('click',function(e){
    $(".ventanaHotelLondres").slideDown();
})

$(".cerrarVentanaHotelDos").on('click',function(e){
    $(".ventanaHotelLondres").slideUp();
})

//hotel roma
$("#abrirVentanaHotelTres").on('click',function(e){
    $(".ventanaHotelRoma").slideDown();
})

$(".cerrarVentanaHotelTres").on('click',function(e){
    $(".ventanaHotelRoma").slideUp();
})






/* paquetes promociones*/
$("#abrirVentanaPaqueteUno").on('click',function(e){
    $(".ventanaPaqueteUno").slideDown();
})

$(".cerrarPaqueteUno").on('click',function(e){
    $(".ventanaPaqueteUno").slideUp();
})


/*salta jujuy*/
$("#abrirVentanaPaqueteDos").on('click',function(e){
    $(".ventanaPaqueteDos").slideDown();
})

$(".cerrarPaqueteDos").on('click',function(e){
    $(".ventanaPaqueteDos").slideUp();
})


/*new york ws*/
$("#abrirVentanaPaqueteTres").on('click',function(e){
    $(".ventanaPaqueteTres").slideDown();
})

$(".cerrarPaqueteTres").on('click',function(e){
    $(".ventanaPaqueteTres").slideUp();
})


/*paquete nose*/
$("#abrirVentanaPaqueteCuatro").on('click',function(e){
    $(".ventanaPaqueteCuatro").slideDown();
})

$(".cerrarPaqueteCuatro").on('click',function(e){
    $(".ventanaPaqueteCuatro").slideUp();
})


/*slider ventana modal*/
//almacenar el slider en una variable
//var slider = $('#slider');
var slider = document.getElementById('slider');
Hammer(slider).on('swipe',function(ev){
    alert("hola")
});


 

//movemos la ultima imagen al primer lugar
/*$('#slider section:last').insertBefore('#slider section:first');
//mostrar la primer imagen con margin-left de -100%
slider.css('margin-left','-'+100+'%');

function moverDerecha(){
    slider.animate({margin-left:'-'+200+'%'},700,function(){

    });
}*/
