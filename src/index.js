


function nameValidation (){

    const inputName = document.querySelector('.input-name').value.trim()
    const nameCard = document.querySelector('.name-card')

    nameCard.textContent = inputName === '' ? '' : inputName;

}
function numberValidation() {
    const inputNumber = document.querySelector('.input-number').value.trim();
    const numberCard = document.querySelector('.number-card');

    // Si el campo está vacío, mostrar texto predeterminado, si no, mostrar el número de tarjeta
    if (inputNumber === '') {
        numberCard.textContent = '0000 0000 0000 0000'; // Valor por defecto
    } else {
        // Muestra el número ingresado en formato de tarjeta de crédito
        const formattedNumber = inputNumber.replace(/(\d{4})(?=\d)/g, '$1 '); // Agrega espacios cada 4 dígitos
        numberCard.textContent = formattedNumber;
    }
}


