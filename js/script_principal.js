let usuario = localStorage.getItem("usuario");

if(usuario !== null){

    document.getElementById("bienvenida").innerHTML =
    "Bienvenido, " + usuario;

}

function cerrarSesion(){

    localStorage.removeItem("usuario");

    window.location.href = "../index.html";

}

const btnCerrarSesion =
document.getElementById("btnCerrarSesion");

if(btnCerrarSesion !== null){

    btnCerrarSesion.addEventListener(
        "click",
        cerrarSesion
    );

}