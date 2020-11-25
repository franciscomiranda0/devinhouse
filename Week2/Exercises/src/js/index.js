const alertUser = () => {
    window.alert('Bem-vindo à Semana 2')
}

const confirmPageChange = () => {
    const hasConfirmed = window.confirm('Deseja mesmo prosseguir?')

    if (hasConfirmed) window.location.href = 'secondPage.html'
}

const getUserName = () => {
    const userName = window.prompt('Insira seu primeiro nome:')

    document.getElementById('username').innerText = userName
}

const getTriviaAnswer = () => {
    const userAnswer = window.prompt('Insira um Estado brasileiro:')
    console.log(userAnswer);
}

const openFirstAndLastNameDialog = () => {
    document.getElementById("firstAndLastNameDialog").open = true

}

const submitFirstAndLastNameDialogForm = (event) => {
    event.preventDefault()

    let firstName = event.target.elements[0].value
    let lastName = event.target.elements[1].value
    let firstAndLastNameSize

    if (event.target.elements[2].checked) {
        firstName = firstName.toUpperCase()
        lastName = lastName.toUpperCase()
        firstAndLastNameSize = firstName.length + lastName.length
    }

    document.getElementById("fistAndLastNameResult").innerText = `${firstName} ${lastName}${firstAndLastNameSize>0? `, ${firstAndLastNameSize} letras.` : '' }`
}

const disposeDialog = () => {
    document.getElementById("firstAndLastNameDialog").close()
}