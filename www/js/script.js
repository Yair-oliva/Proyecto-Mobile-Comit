$("#iniciar").on("click",function(){
	$(".modal-sesion").slideDown();
});

$(".cancelar").on("click",function(){
	$(".modal-sesion").slideup();
});
$("#entrar").on("click",function(){
	 window.location.href="inicio.html";
});







var i=0;
var imagesNY = [];
var time =  3000;

//slider modal auto nueva york
imagesNY[0] = 'img/fotosNuevaYork.jpg';
imagesNY[1] = 'img/fotosNuevaYork1.jpg';
imagesNY[2] = 'img/fotosNuevaYork2.jpg';



function changeImgNY(){
	document.getElementById("slideNY").src = imagesNY[i];


	if( i < imagesNY.length -1 ){
		i++;
	} else {
		i=0;
	}

	setTimeout("changeImgNY()",time);
}

window.onload = changeImgNY;


//slider modal

//imagenes
//slider modal londres

var venecia=0;
var imagesVenecia = [];
var time =  3000;

imagesVenecia[0] = 'img/fotosVenecia.jpg';
imagesVenecia[1] = 'img/fotosVenecia1.jpg';
imagesVenecia[2] = 'img/fotosVenecia2.jpg'; 


function changeImgVenecia(){
	document.getElementById("slideVenecia").src = imagesVenecia[venecia] ;
	

	if( venecia < imagesVenecia.length -1 ){
		venecia++;
	} else {
		venecia=0;
	}

	setTimeout("changeImgVenecia()",time);
}

window.onload = changeImgVenecia;


//slide miami
var miami=0;
var imagesMiami = [];
var time =  3000;

imagesMiami[0] = 'img/fotosMiami.jpg';
imagesMiami[1] = 'img/fotosMiami1.jpg';
imagesMiami[2] = 'img/fotosMiami2.jpg'; 

function changeImgMiami(){
	document.getElementById("slideMiami").src = imagesMiami[miami] ;
	

	if( miami < imagesMiami.length -1 ){
		miami++;
	} else {
		miami=0;
	}

	setTimeout("changeImgMiami()",time);
}

window.onload = changeImgMiami;

//slide roma
var roma=0;
var imagesRoma = [];
var time =  3000;

imagesRoma[0] = 'img/fotosRoma.jpg';
imagesRoma[1] = 'img/fotosRoma1.jpg';
imagesRoma[2] = 'img/fotosRoma2.jpg'; 

function changeImgRoma(){
	document.getElementById("slideRoma").src = imagesRoma[roma] ;
	

	if( roma < imagesRoma.length -1 ){
		roma++;
	} else {
		roma=0;
	}

	setTimeout("changeImgRoma()",time);
}

window.onload = changeImgRoma;


//slide londres
var londres=0;
var imagesLondres = [];
var time =  3000;

imagesLondres[0] = 'img/fotosLondres.jpg';
imagesLondres[1] = 'img/fotosLondres1.jpg';
imagesLondres[2] = 'img/fotosLondres2.jpg'; 

function changeImgLondres(){
	document.getElementById("slideLondres").src = imagesLondres[londres] ;
	

	if( londres < imagesLondres.length -1 ){
		londres++;
	} else {
	londres=0;
	}

	setTimeout("changeImgLondres()",time);
}

window.onload = changeImgLondres;


//slide Paris
var paris=0;
var imagesParis = [];
var time =  3000;

imagesParis[0] = 'img/fotosParis.jpg';
imagesParis[1] = 'img/fotosParis1.jpg';
imagesParis[2] = 'img/fotosParis2.jpg'; 


function changeImgParis(){
	document.getElementById("slideParis").src = imagesParis[paris] ;
	

	if( paris < imagesParis.length -1 ){
		paris++;
	} else {
		paris=0;
	}

	setTimeout("changeImgParis()",time);
}

window.onload = changeImgParis;






/**********************************************************************************************************
slider hotel****/
var hotelBuzios=0;
var imagesHotelBuzios = [];
var time =  3000;

imagesHotelBuzios[0] = 'img/hotelPerola.jpg';
imagesHotelBuzios[1] = 'img/fotosHotelBuzios1.jpg';
imagesHotelBuzios[2] = 'img/fotosHotelBuzios2.jpg'; 

function changeImgHotelBuzios(){
	document.getElementById("slideHotelBuzios").src = imagesHotelBuzios[hotelBuzios] ;
	

	if( hotelBuzios < imagesHotelBuzios.length -1 ){
		hotelBuzios++;
	} else {
	hotelBuzios=0;
	}

	setTimeout("changeImgHotelBuzios()",time);
}

window.onload = changeImgHotelBuzios;




//hotel londres
var hotelLondres=0;
var imagesHotelLondres = [];
var time =  3000;

imagesHotelLondres[0] = 'img/hotelLondres2.jpg';
imagesHotelLondres[1] = 'img/fotosHotelLondres.jpg';
imagesHotelLondres[2] = 'img/fotosHotelLondres1.jpg'; 


function changeImgHotelLondres(){
	document.getElementById("slideHotelLondres").src = imagesHotelLondres[hotelLondres] ;
	

	if( hotelLondres < imagesHotelLondres.length -1 ){
		hotelLondres++;
	} else {
		hotelLondres=0;
	}

	setTimeout("changeImgHotelLondres()",time);
}

window.onload = changeImgHotelLondres;




//hotel roma
var hotelRoma=0;
var imagesHotelRoma = [];
var time =  3000;

imagesHotelRoma[0] = 'img/hotelRoma2.jpg';
imagesHotelRoma[1] = 'img/fotosHotelRoma.jpg';
imagesHotelRoma[2] = 'img/fotosHotelRoma1.jpg'; 


function changeImgHotelRoma(){
	document.getElementById("slideHotelRoma").src = imagesHotelRoma[hotelRoma] ;
	

	if( hotelRoma < imagesHotelRoma.length -1 ){
		hotelRoma++;
	} else {
		hotelRoma=0;
	}

	setTimeout("changeImgHotelRoma()",time);
}

window.onload = changeImgHotelRoma;





/***********************************************************************
Paquetes
***********************************************************************/
//hotel roma
var circuito=0;
var imagesCircuito = [];
var time =  3000;

imagesCircuito[0] = 'img/paqueteEuropa1.jpg';
imagesCircuito[1] = 'img/paqueteEuropa.jpg';
imagesCircuito[2] = 'img/londresPromo.jpg'; 


function changeImgCircuito(){
	document.getElementById("slideCircuito").src = imagesCircuito[circuito] ;
	

	if( circuito < imagesCircuito.length -1 ){
		circuito++;
	} else {
		circuito=0;
	}

	setTimeout("changeImgCircuito()",time);
}

window.onload = changeImgCircuito;


//hotel salta jujuy
var circuitoNorte=0;
var imagesCircuitoNorte = [];
var time =  3000;

imagesCircuitoNorte[0] = 'img/paqueteJujuy1.jpg';
imagesCircuitoNorte[1] = 'img/paqueteSalta1.jpg';
imagesCircuitoNorte[2] = 'img/paqueteJujuy.jpg'; 


function changeImgCircuitoNorte(){
	document.getElementById("slideCircuitoNorte").src = imagesCircuitoNorte[circuitoNorte] ;
	

	if( circuitoNorte < imagesCircuitoNorte.length -1 ){
		circuitoNorte++;
	} else {
		circuitoNorte=0;
	}

	setTimeout("changeImgCircuitoNorte()",time);
}

window.onload = changeImgCircuitoNorte;



//nY
var circuitoEEUU=0;
var imagesCircuitoEEUU = [];
var time =  3000;

imagesCircuitoEEUU[0] = 'img/paqueteWS.jpg';
imagesCircuitoEEUU[1] = 'img/paqueteNewY.jpg';
imagesCircuitoEEUU[2] = 'img/paqueteWSDC.jpg'; 


function changeImgCircuitoEEUU(){
	document.getElementById("slideCircuitoEEUU").src = imagesCircuitoEEUU[circuitoEEUU] ;
	

	if( circuitoEEUU < imagesCircuitoEEUU.length -1 ){
		circuitoEEUU++;
	} else {
		circuitoEEUU=0;
	}

	setTimeout("changeImgCircuitoEEUU()",time);
}

window.onload = changeImgCircuitoEEUU;



//rio
var circuitoRio=0;
var imagesCircuitoRio = [];
var time =  3000;

imagesCircuitoRio[0] = 'img/paqueteRio.jpg';
imagesCircuitoRio[1] = 'img/riojaneiro.jpg';
imagesCircuitoRio[2] = 'img/paqueteRio1.jpg'; 


function changeImgCircuitoRio(){
	document.getElementById("slideCircuitoRio").src = imagesCircuitoRio[circuitoRio] ;
	

	if( circuitoRio < imagesCircuitoRio.length -1 ){
		circuitoRio++;
	} else {
		circuitoRio=0;
	}

	setTimeout("changeImgCircuitoRio()",time);
}

window.onload = changeImgCircuitoRio;