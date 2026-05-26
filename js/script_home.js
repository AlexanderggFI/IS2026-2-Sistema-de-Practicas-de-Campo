const botonMenu = document.getElementById('btnBarras');
const menuLateral = document.getElementById('menuLateral');

botonMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('mostrar');
});