# Sistema de Prácticas de Campo

Sistema web para la gestión y seguimiento de prácticas de campo, desarrollado como proyecto de Ingeniería de Software (IS2026-2). Permite a trabajadores y profesores autenticarse, consultar módulos de práctica, reportes, calendario y más desde una interfaz centralizada.

---

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso](#uso)
- [Credenciales de Prueba](#credenciales-de-prueba)
- [Evidencias](#evidencias)
- [Equipo](#equipo)

---

## Características

- Autenticación de usuarios (login y registro)
- Panel principal con navegación lateral responsiva
- Módulo de Prácticas de Campo
- Módulo de Reportes
- Calendario de actividades
- Sistema de Notificaciones
- Configuración de cuenta
- Sección de Ayuda
- Gestión de sesión con `localStorage`

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| HTML5 | — | Estructura de páginas |
| CSS3 | — | Estilos y diseño responsivo |
| JavaScript (ES6+) | — | Lógica del cliente |
| [Supabase JS](https://supabase.com/docs/reference/javascript) | v2 | Base de datos y autenticación |
| [Font Awesome](https://fontawesome.com/) | 6.4.0 | Iconografía |

> El proyecto es **frontend puro** — no requiere Node.js ni servidor propio. La base de datos es gestionada por [Supabase](https://supabase.com/).

---

## Estructura de Carpetas

```
IS2026-2-Sistema-de-Practicas-de-Campo/
│
├── index.html                  # Página de inicio de sesión
│
├── pages/                      # Páginas internas del sistema
│   ├── principal.html          # Dashboard / Menú principal
│   ├── practicas.html          # Módulo de prácticas de campo
│   ├── reportes.html           # Módulo de reportes
│   ├── calendario.html         # Calendario de actividades
│   ├── notificaciones.html     # Centro de notificaciones
│   ├── configuracion.html      # Configuración de cuenta
│   ├── ayuda.html              # Sección de ayuda
│   └── registro.html           # Registro de nuevos usuarios
│
├── css/
│   └── style.css               # Estilos globales del sistema
│
├── js/
│   ├── supabase.js             # Inicialización del cliente Supabase
│   ├── script.js               # Lógica de inicio de sesión
│   ├── script_principal.js     # Gestión de sesión y dashboard
│   ├── script_home.js          # Menú lateral (toggle)
│   └── script_registro.js      # Lógica de registro de usuarios
│
└── assets/
    ├── logo.jpeg               # Logo principal
    └── logoPC.jpeg             # Logo de cabecera
```

---

## Instalación y Configuración

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Edge)
- Conexión a internet (para cargar Supabase y Font Awesome desde CDN)

### Pasos

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/AlexanderggFI/IS2026-2-Sistema-de-Practicas-de-Campo.git
   cd IS2026-2-Sistema-de-Practicas-de-Campo
   ```

2. **Configura las credenciales de Supabase:**

   Edita el archivo `js/supabase.js` con tu propia URL y clave pública de proyecto Supabase:

   ```javascript
   const db = createClient(
       'https://<TU_PROYECTO>.supabase.co',
       '<TU_CLAVE_PUBLICA>'
   );
   ```

3. **Abre el proyecto en el navegador:**

   Abre `index.html` directamente en tu navegador, o usa la extensión **Live Server** en VS Code:

   ```
   Click derecho en index.html → Open with Live Server
   ```

### Base de Datos

El sistema utiliza una tabla `trabajadores` en Supabase con la siguiente estructura mínima:

| Campo | Tipo | Descripción |
|---|---|---|
| `nombres` | text | Nombre(s) del usuario |
| `apellidoP` | text | Apellido paterno |
| `apellidoM` | text | Apellido materno |
| `numTrabajador` | text | Número de trabajador |
| `email` | text | Correo electrónico (login) |
| `password` | text | Contraseña |

---

## Uso

1. Abre `index.html` en el navegador.
2. Ingresa con un correo y contraseña registrados.
3. Al autenticarte correctamente, serás redirigido al panel principal (`pages/principal.html`).
4. Usa el menú lateral para navegar entre módulos.
5. Para cerrar sesión, usa el botón **Cerrar Sesión** en el panel principal.

### Registro de nuevo usuario

1. En la pantalla de login, haz clic en **"¿No tienes cuenta? Regístrate"**.
2. Completa el formulario con nombre, apellidos, número de trabajador, correo y contraseña (mínimo 8 caracteres).
3. Al registrarte exitosamente, regresa al login para iniciar sesión.

---

## Credenciales de Prueba

> Estas credenciales son exclusivas para entorno de desarrollo y pruebas.

| Correo | Contraseña | Rol |
|---|---|---|
| `hormigaglez@gmail.com` | `armandoalba` | Trabajador |
| `hdzmoreno@gmail.com` | `luismorita` | Trabajador |
| `juanmanu@gmail.com` | `juanmanuelpuebla` | Profesorado |

---

## Evidencias

### Pantalla de Login

Vista de autenticación con logo institucional, campos de correo y contraseña.

> _Agrega aquí capturas de pantalla del sistema en funcionamiento._

### Panel Principal

Dashboard con menú lateral desplegable y bienvenida personalizada al usuario.

### Módulos Disponibles

| Módulo | Ruta |
|---|---|
| Prácticas de Campo | `pages/practicas.html` |
| Reportes | `pages/reportes.html` |
| Calendario | `pages/calendario.html` |
| Notificaciones | `pages/notificaciones.html` |
| Configuración | `pages/configuracion.html` |
| Ayuda | `pages/ayuda.html` |

---

## Equipo

Proyecto desarrollado para la materia **Ingeniería de Software — IS2026-2**.

| Nombre | GitHub |
|---|---|
| Alexander GG | [@AlexanderggFI](https://github.com/AlexanderggFI) |

---

## Licencia

Este proyecto es de uso académico. Todos los derechos reservados © 2026.
