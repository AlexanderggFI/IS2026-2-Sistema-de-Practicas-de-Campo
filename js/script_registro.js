const campos = [
    { name: 'nombres', label: 'Nombre(s)', type: 'text' },
    { name: 'apellidoP', label: 'Apellido Paterno', type: 'text' },
    { name: 'apellidoM', label: 'Apellido Materno', type: 'text' },
    { name: 'numTrabajador', label: 'Número de Trabajador', type: 'number' },
    { name: 'email', label: 'Correo Electrónico', type: 'email' },
    { name: 'password', label: 'Contraseña', type: 'password' }
];

const contenedor = document.getElementById('contenedorInputs');

campos.forEach((campo) => {
    const label = document.createElement('label');
    label.textContent = campo.label;

    const input = document.createElement('input');
    input.type = campo.type;
    input.id = campo.name; 
    input.name = campo.name; 

    input.classList.add('entradaTexto');
    
    contenedor.appendChild(label);
    contenedor.appendChild(input);
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

    const {data, error} = await db
    .from("trabajadores")
    .insert([
        {nombres, apellidoP, apellidoM, numTrabajador, email, password}
    ]);

    if (error) {
        alert("Error al registrar: ");
        botonRegistrar.disabled = false;
        botonRegistrar.textContent = "Registrar";
    } else {
        alert("Registro exitoso");
        window.location.href = "../index.html";
    }   
});