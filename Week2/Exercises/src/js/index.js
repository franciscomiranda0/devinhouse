const simpleAgeDialog = document.getElementById('simpleAgeDialog')
let userBirthYear
let currentYear

simpleAgeDialog
    .addEventListener('click', event => {
        event.preventDefault()
    });

const alertUser = () => window.alert('Bem-vindo à Semana 2')

const confirmPageChange = () => {
    const hasConfirmed = window.confirm('Deseja mesmo prosseguir?')
    if (hasConfirmed) window.location.href = 'secondPage.html'
}

const disposeDialog = () => {
    document.getElementById('firstAndLastNameDialog').close()
    simpleAgeDialog.close()
}

const getTriviaAnswer = () => {
    const userAnswer = window.prompt('Insira um Estado brasileiro:')
    console.log(userAnswer);
}

const getUserName = () => {
    const userName = window.prompt('Insira seu primeiro nome:')
    document.getElementById('username').innerText = userName
}

const getYear = (dateOfChoice) => {
    dateOfChoice === 'BIRTH_YEAR' ?
        userBirthYear = window.prompt('Ano de nascimento:') :
        currentYear = window.prompt('Ano atual:')
    updateSimpleAgeView()
}

const isEven = () => {
    const number = window.prompt('Número: ')
    number % 2 === 0 && number > 0 ?
        document.getElementById('isEvenView').innerText = 'É PAR' :
        number > 0 ?
        document.getElementById('isEvenView').innerText = 'É ÍMPAR' :
        document.getElementById('isEvenView').innerText = ''
    setTimeout(isEvenTimeout, 1500)
    clearTimeout(isEvenTimeout)
}

const isEvenTimeout = () => document.getElementById('isEvenView').innerText = ''

const loadCalculatorPage = () => location.href = 'calculator.html'

const loadPaPgPage = () => location.href = 'paPg.html'

const loadSeasonsPage = () => location.href = 'seasons.html'

const loadWatchPage = () => location.href = 'watch.html'

const openFirstAndLastNameDialog = () => document.getElementById('firstAndLastNameDialog').open = true

const openSimpleAgeDialog = () => simpleAgeDialog.open = true

const submitFirstAndLastNameDialogForm = (event) => {
    event.preventDefault()
    let firstName = event.target.elements[0].value
    let lastName = event.target.elements[1].value
    let firstAndLastNameSize
    if (event.target.elements[2].checked) {
        lastName = lastName.toUpperCase()
        firstAndLastNameSize = firstName.length + lastName.length
    }
    document
        .getElementById('fistAndLastNameResult')
        .innerText =
        `${firstName} ${lastName}${firstAndLastNameSize> 0 ? 
            `, ${firstAndLastNameSize} letras.` :
            '' }`
}

const updateSimpleAgeView = () => {
    userBirthYear && currentYear ?
        document
        .getElementById('simpleAgeResult')
        .innerText = `Aprox. ${currentYear - userBirthYear} anos.` :
        document
        .getElementById('simpleAgeResult')
        .innerText = 'Idade aproximada'
}