const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const nombreApellido= document.querySelector('#nombreApellido');
    const email=document.querySelector('#email');
    const mensaje=document.querySelector('#mensaje');
    if (nombreApellido.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '' || !validarEmail(email.value)) {
        Swal.fire({
            title: 'Error',
            text: 'Faltan rellenar campos o el formato del mail es incorrecto.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else {
        const formulario = document.querySelector('#form');
        formulario.submit();
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