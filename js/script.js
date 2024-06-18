window.onload = function() {
    const hoy = new Date().toISOString().split("T")[0];
    document.getElementById("fecha").setAttribute("min", hoy);
}

function validarFormulario() {
    let esValido = true;

    // Limpiar errores previos
    document.getElementById("errorNombre").innerText = "";
    document.getElementById("errorTelefono").innerText = "";
    document.getElementById("errorFecha").innerText = "";
    document.getElementById("errorContrasena").innerText = "";
    document.getElementById("errorPais").innerText = "";
    document.getElementById("errorGenero").innerText = "";

    // Validar nombre
    const nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("errorNombre").innerText = "El nombre es obligatorio.";
        esValido = false;
    }

    // Validar teléfono
    const telefono = document.getElementById("telefono").value;
    if (telefono === "") {
        document.getElementById("errorTelefono").innerText = "El teléfono es obligatorio.";
        esValido = false;
    }
    
    // Validar fecha
    const fecha = document.getElementById("fecha").value;
    const fechaActual = new Date().toISOString().split("T")[0];
    if (fecha === "") {
        document.getElementById("errorFecha").innerText = "La fecha es obligatoria.";
        esValido = false;
    } else if (fecha < fechaActual) {
        document.getElementById("errorFecha").innerText = "La fecha no puede ser en el pasado.";
        esValido = false;
    }
    
    

    // Validar contraseña
    const contrasena = document.getElementById("contrasena").value;
    if (contrasena === "") {
        document.getElementById("errorContrasena").innerText = "La contraseña es obligatoria.";
        esValido = false;
    }

    // Validar país
    const pais = document.getElementById("pais").value;
    if (pais === "") {
        document.getElementById("errorPais").innerText = "El país es obligatorio.";
        esValido = false;
    }

    // Validar género
    const genero = document.querySelector('input[name="genero"]:checked');
    if (!genero) {
        document.getElementById("errorGenero").innerText = "El género es obligatorio.";
        esValido = false;
    }

    if (!esValido) {
        document.getElementById("mensajeAlerta").innerText = "¡Incompleto! Por favor, complete todos los campos obligatorios.";
        document.getElementById("alertaIncompleto").style.display = "block";
    }

    return esValido;
}
