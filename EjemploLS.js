function guardarNombre() {
    const nombre = document.getElementById('nombre').value;
    if(!nombre) {
        document.getElementById('resultado').innerText = 'Por favor, ingresa un nombre válido';
        return;
    }
    document.getElementById('resultado').innerText = `Nombre guardado: ${nombre}`;
    sessionStorage.setItem('nombreUsuario', nombre);
}

function obtenerNombre() {
    const nombre = sessionStorage.getItem('nombreUsuario') || 'Desconocido';
    if(nombre !== 'Desconocido') {
        document.getElementById('resultado').innerText = `Hola, ${nombre}`;
    }
    else {
        document.getElementById('resultado').innerText = 'No hay nombre guardado';
    }
}

function eliminarNombre() {
    if(!sessionStorage.getItem('nombreUsuario')) {
        document.getElementById('resultado').innerText = 'No hay nombre guardado para eliminar';
        return;
    }
    sessionStorage.removeItem('nombreUsuario');
    document.getElementById('resultado').innerText = 'Nombre eliminado';
}
