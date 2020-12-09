const getPA = (baseNumber, rootNumber) => {
    const paArray = []
    paArray.push(baseNumber)
    for (let i = 0; i < 9; i++) {
        baseNumber += rootNumber
        paArray.push(baseNumber)
    }
    return paArray
}

const getPG = (baseNumber, rootNumber) => {
    const pgArray = []
    pgArray.push(baseNumber)
    for (let i = 0; i < 9; i++) {
        baseNumber *= rootNumber
        pgArray.push(baseNumber)
    }
    return pgArray
}

const submitForm = (event, flag) => {
    event.preventDefault()
    const baseNumber = parseFloat(event.target[0].value)
    const rootNumber = parseFloat(event.target[1].value)
    if (baseNumber == NaN || rootNumber == NaN) return
    flag == 'PA' ?
        writeDisplay(getPA, baseNumber, rootNumber) :
        writeDisplay(getPG, baseNumber, rootNumber)
}

const writeDisplay = (f, baseNumber, rootNumber) => document.getElementById('result').textContent = f(baseNumber, rootNumber)