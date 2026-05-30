const campos = [
    { name: 'nombres', label: 'Nombre(s)', type: 'text', placeholder: 'ej. Carlos Alberto' },
    { name: 'apellidoP', label: 'Apellido Paterno', type: 'text', placeholder: 'ej. González' },
    { name: 'apellidoM', label: 'Apellido Materno', type: 'text', placeholder: 'ej. Rodríguez' },
    { name: 'numTrabajador', label: 'Número de Trabajador', type: 'number', placeholder: 'ej. 324367035' },
    { name: 'email', label: 'Correo Electrónico', type: 'email', placeholder: 'ej. carlosalberto@gmail.com' },
    { name: 'password', label: 'Contraseña', type: 'password', placeholder: 'Mínimo 8 caracteres' }
];

const contenedor = document.getElementById('contenedorInputsRegistro');

campos.forEach((campo) => {

    const divCampo = document.createElement('div');
    divCampo.classList.add('campoRegistro');

    const label = document.createElement('label');
    label.textContent = campo.label;

    const input = document.createElement('input');
    input.type = campo.type;
    input.id = campo.name; 
    input.name = campo.name; 
    input.placeholder = campo.placeholder;
    
    input.classList.add('entradaTexto');

    divCampo.appendChild(label);
    divCampo.appendChild(input);
    
    contenedor.appendChild(divCampo);
});

document.getElementById('btnIngresar').addEventListener('click', async () => {
    const botonRegistrar = document.getElementById('btnIngresar');

    const nombres = document.getElementById('nombres').value;
    const apellidoP = document.getElementById('apellidoP').value;
    const apellidoM = document.getElementById('apellidoM').value;
    const numTrabajador = document.getElementById('numTrabajador').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    botonRegistrar.disabled = true;
    botonRegistrar.textContent = "Registrando...";

    setTimeout(async () => {
        
        if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            botonRegistrar.disabled = false;
            botonRegistrar.textContent = "Registrar";
            return; 
        }

        const {data, error} = await db
        .from("trabajadores")
        .insert([
            {nombres, apellidoP, apellidoM, numTrabajador, email, password}
        ]);

        if (error) {
            alert("Error al registrar: " + error.message);
            botonRegistrar.disabled = false;
            botonRegistrar.textContent = "Registrar";
        } else {
            alert("Registro exitoso");
            window.location.href = "../index.html";
        }   

    }, 1000); 
});

  