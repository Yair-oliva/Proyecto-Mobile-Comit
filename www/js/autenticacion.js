
window.onload = inicializar;
var formAutenticacion ;

function inicializar(){
	formAutenticacion = document.getElementById("formulario");
	formAutenticacion.addEventListener("submit",autentificar,false);
}

function autentificar(event){
	var usuario = event.target.email.value;//sobre quien se produce el evento en este caso sobre el formulario y toma el valor del email
	var contrasena = event.target.password.value;

	firebase.auth().signInWithEmailAndPassword(usuario,contrasena)
	 .then(function(result){
	 	alert("autentificacion correcta");
	 })
	 .catch(function(error) {
  		alert("no se ha realizado la autentificacion correctamente");
		});
}