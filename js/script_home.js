const botonMenu = document.getElementById('btnBarras');
const pantalla = document.getElementById('pantallaBienvenida');

document.getElementById("nombrePerfil").innerHTML = usuario;

botonMenu.addEventListener('click', () => {
    pantalla.classList.toggle('mostrar');
    flag = true;
    
});
