/*function ejecutar(){
	nombre=document.contact.nombre.value;
	correo=document.contact.correo.value;
	mensaje=document.contact.mensaje.value;
	alert("Name: " +nombre + ". Mail: " + correo+ ". Message: " + mensaje+ ".");
}*/

function ejecutar() {
    // Obtener los valores usando getElementById
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Mostrar alerta con la información
    alert("Name: " + nombre + "\nMail: " + correo + "\nMessage: " + mensaje);
}
