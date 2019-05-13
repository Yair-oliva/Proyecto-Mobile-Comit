var db = firebase.firestore(); //inicializando firebase
//agregando informacion a la base de datos
db.collection("personas").doc("yaOliva");
db.collection("personas").add({
    nombre : "yair",
    mail : "pepe@hotmail.com",
    rol : "developer"
})

var data = {
    nombre : "Yair",
    apellido : "Oliva",
    ocupacion : "Estudiante IT"
};
//setear datos
db.collection("datos").doc("yair").set(data) // no colocar ;
.then(function(resultado){//resultado es un parametro se puede colocar lo que queramos
    console.log("Document succesfully writte!");
})
.catch(function(error){//error tambien
    console.log("Error writing document:",error);
})


// .then(function(docRef){
//     console.log("ok! con el ID: "+docRef.id);
// })


//actualizar datos
db.collection("datos").doc("yair").update({
    nombre:"Matias"
})
.then(function(){
    console.log("actualizado ok");
})
.catch(function(error){
    console.log("error: "+error);
})


