
function nameValidation () {

    const inputName = document.querySelector('.input-name').value.trim()
    const nameCard = document.querySelector('.name-card')

    nameCard.textContent = inputName === '' ? '' : inputName

}

function numberValidation () {
    const inputNumber = document.querySelector('.input-number').value.trim()
    const numberCard = document.querySelector('.number-card')
    const errorElement = document.querySelector('.error-number')
    
    

    let errorMessage = ''

    if (inputNumber === '') {
        numberCard.textContent = '0000 0000 0000 0000'
        errorMessage = 'Error: El número de tarjeta no puede estar vacío'
    } else if (!/^\d+$/.test(inputNumber)) {
        errorMessage = 'Error: Solo se permiten números'
    } else if (inputNumber.length !== 16) { 
        errorMessage = 'Error: El número de tarjeta debe tener 16 dígitos'
    } else {
        const formattedNumber = inputNumber.replace(/(\d{4})(?=\d)/g, '$1 ')
        numberCard.textContent = formattedNumber;
    } 

    if (errorMessage !== '') {
        errorElement.textContent = errorMessage
        errorElement.classList.add('active')
    } else {
        errorElement.textContent = ''
        errorElement.classList.remove('active')
        
}
}

function monthValidation () {
    const inputMonth = document.querySelector('#input-month').value.trim()
    const month = document.querySelector('.expiry-date-month')

    const errorElement = document.querySelector('.error-year')
    
    let errorMessage = ''
    let userMonth = ''

    // Validaciones
    if (inputMonth === '') {
    
    } else if (!/^\d+$/.test(inputMonth)) {
        errorMessage = 'Error: Solo se permiten números'
    } else if (parseInt(inputMonth) < 1 || parseInt(inputMonth) > 12) { 
        errorMessage = 'Error: El mes debe estar entre 1 y 12';
    } else {
        userMonth = inputMonth
    }

    // Mostrar mensaje de error si hay un error
    if (errorMessage !== '') {
        errorElement.textContent = errorMessage
        errorElement.classList.add('active')
    } else {
        errorElement.textContent = ''
        errorElement.classList.remove('active')
        month.textContent = userMonth 
    }
}


function yearValidation() {
    const inputYear = document.querySelector('#input-year').value.trim()
    const year = document.querySelector('.expiry-date-year')
    const errorElement = document.querySelector('.error-year')
    

    let errorMessage = ''
    let userYear = ''


    if (inputYear === '') {
    
    } else if (!/^\d+$/.test(inputYear)) {
        errorMessage = 'Error: Solo se permiten números'
    } else if (!/^\d{2}$/.test(inputYear)) {
        errorMessage = 'Error: El año debe ser de dos dígitos'
    } else {
        userYear = '/' + inputYear
    }


    if (errorMessage !== '') {
        errorElement.textContent = errorMessage
        errorElement.classList.add('active')
    } else {
        errorElement.textContent = ''
        errorElement.classList.remove('active')
        year.textContent = userYear
}
}

function cvcValidation () {
    const inputCvc = document.querySelector('#input-cvc').value.trim()
    const cvc = document.querySelector('.cvc')
    const errorElement = document.querySelector('.error-year')
    

    let errorMessage = ''
    let userCvc = ''


    if (inputCvc === '') {
    
    } else if (!/^\d+$/.test(inputCvc)) {
        errorMessage = 'Error: Solo se permiten números'
    } else if ( inputCvc.length > 3) {
        errorMessage = 'Error: El CVC debe tener hasta tres dígitos'
    } else {
        userCvc = inputCvc
    }


    if (errorMessage !== '') {
        errorElement.textContent = errorMessage
        errorElement.classList.add('active')
    } else {
        errorElement.textContent = ''
        errorElement.classList.remove('active')
        cvc.textContent = userCvc
}
}


function cardValidated() {
    const formContainer = document.querySelector('.form-container')
    const completeContainer = document.querySelector('#complete-card-container')

    formContainer.classList.add('inactive')
    completeContainer.classList.remove('inactive')
    completeContainer.style.display = 'flex' 
}


const buttonConfirm = document.querySelector('.button')
buttonConfirm.addEventListener('click', (event) => {
    event.preventDefault()
    
    nameValidation()
    numberValidation()
    monthValidation()
    yearValidation()
    cvcValidation()
  
    // Comprobar si hay errores activos
    const hasErrors = document.querySelectorAll('.active').length > 0
  
    if (!hasErrors) {
      cardValidated()
    }
});
