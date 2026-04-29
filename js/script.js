function login(){
    let divMensaje = document.querySelector('#mensaje');
    
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;

    if(usuario=="admin" && contra=="123"){
        window.location.href="../pages/principal.html";
    }else{
        divMensaje.innerHTML = "Credenciales incorrectas";
    }

    
}

const btnIngresar = document.getElementById('btnIngresar');
 btnIngresar.addEventListener("click",login)
