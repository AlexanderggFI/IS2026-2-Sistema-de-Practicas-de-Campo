async function login(){

    let divMensaje = document.querySelector('#mensaje');
    
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;

    const { data, error } = await db
        .from('trabajadores')
        .select('*')
        .eq('email', usuario)
        .eq('password', contra);

    if (error) {
        divMensaje.innerHTML = error.message;
        divMensaje.style.color = "darkred";
        return;
    }

    if (data.length > 0) {
        localStorage.setItem("usuario", data[0].nombres);
        divMensaje.innerHTML = "Login correcto";
        divMensaje.style.color = "green";
        setTimeout(() => {
            window.location.href = "./pages/principal.html";
        }, 2000);
    } else {
        divMensaje.innerHTML = "Credenciales incorrectas";
        divMensaje.style.color = "#e74c3c";
    }
}

const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click", login);
