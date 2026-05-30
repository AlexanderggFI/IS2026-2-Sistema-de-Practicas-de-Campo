const botonMenu = document.getElementById('btnBarras');
const pantalla = document.getElementById('pantallaBienvenida');

const estadoMenu = localStorage.getItem('menuDesplegado');
if (estadoMenu === 'true') {
    pantalla.classList.add('mostrar');
}

document.getElementById("nombrePerfil").innerHTML = usuario;

botonMenu.addEventListener('click', () => {
    pantalla.classList.toggle('mostrar');
    
    if (pantalla.classList.contains('mostrar')) {
        localStorage.setItem('menuDesplegado', 'true');
    } else {
        localStorage.setItem('menuDesplegado', 'false');
    }
});
/*
const botonMenu = document.getElementById('btnBarras');
const pantalla = document.getElementById('pantallaBienvenida');

document.getElementById("nombrePerfil").innerHTML = usuario;

botonMenu.addEventListener('click', () => {
    pantalla.classList.toggle('mostrar');
    flag = true;
    
});
*/
