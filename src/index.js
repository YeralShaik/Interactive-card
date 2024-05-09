
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
    } else if (!/^\d+$/.test(inputNumber)) {
        errorMessage = 'Error: Solo se permiten números'
    
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
    } else if ( inputMonth.length > 2) {
        errorMessage = 'Formato incorrecto'
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
    } else if ( inputYear.length > 2) {
        errorMessage = 'Formato incorrecto'
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
        errorMessage = 'Formato incorrecto'
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
    
    cardValidated()
});
