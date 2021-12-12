
//Limpia los errores una vez corregidos
function limpiarErrores() {
    var errores = document.getElementsByClassName("text-danger");
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }
}

function validar(formulario) {

    limpiarErrores()

    // Validar Nombre vacio
    if (formulario.nombres.value.trim().length == 0) {
        document.getElementById("errornombres").innerText = "Campo obligatorio";
        formulario.nombres.focus();
        return false;
    }

    // Validar Nombre minimo 3 caracteres
    if (formulario.nombres.value.trim().length < 3) {
        document.getElementById("errornombres").innerText = "Campo inválido";
        formulario.nombres.focus();
        return false;
    }

    // Validar email
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText = "Campo inválido";
        formulario.email.focus();
        return false;
    }

    //Validar contraseña campo vacio
    if (formulario.contrasena.value.trim().length == 0) {
        document.getElementById("errorContrasena").innerText = "Campo obligatorio";
        formulario.contrasena.focus();
        return false;
    }

    // Validar contraseña minino 7 caracteres
    if (formulario.contrasena.value.trim().length < 7) {
        document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 7 caracteres)";
        formulario.contrasena.focus();
        return false;
    }

    //Validar confirmacion de contraseña
    if (formulario.contrasena.value != formulario.confirmacion.value) {
        document.getElementById("errorConfirmacion").innerText = "Confirmación no coincide";
        formulario.confirmacion.focus();
        return false;

    }

    //Validar Selector tipo lista desplegable
    if (formulario.tipo.value == "-1") {
        document.getElementById("errorTipo").innerText = "Campo obligatorio";
        formulario.tipo.focus();
        return false;
    }

    // Validar check condiciones
    if (!formulario.acepto.checked) {
        document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
        formulario.acepto.focus();
        return false;
    }

    //Alerta de envio si todo OK
    alert("Datos enviados");
    return true;

}