const button = document.querySelector('#btn');

button.addEventListener('click', (e) => {
    const nombreApellido= document.querySelector('#nombreApellido').value.trim();
    const email=document.querySelector('#email').value.trim();
    const mensaje=document.querySelector('#mensaje').value.trim();
    
    if (nombreApellido === '' || email === '' || mensaje=== '' || !validarEmail(email)) {
        e.preventDefault()
        Swal.fire({
            title: 'Error',
            text: 'Faltan rellenar campos o el formato del mail es incorrecto.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else {
        Swal.fire({
            title: 'Formulario enviado!',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }
})

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}