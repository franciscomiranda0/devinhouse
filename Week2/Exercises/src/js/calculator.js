let stringMemory = ''
let stringToCalculate = ''
let resolution = ''
let isEnterLastAct = false

document.addEventListener('click', listener)

function listener(event) {
    if (event.target.nodeName != 'BUTTON') return
    const buttonValue = event.target.value

    if (isEnterLastAct && isButtonValueANumber(buttonValue)) whipeVariables()
    isButtonValueAnAction(buttonValue) ?
        act(buttonValue) :
        writeString(buttonValue)
}

function act(buttonValue) {
    buttonValue == 'ENTER' ?
        onEnterPressed() :
        buttonValue == 'BACK' ?
        onBackspacePressed() :
        whipeVariables()
}

function getResolution() {
    try {
        if (isEnterLastAct) stringToCalculate = stringMemory
        resolution != '' ?
            resolution = eval((`${resolution.toString()}${stringToCalculate}`)) :
            resolution = eval(stringToCalculate)
        writeDisplay()
    } catch (error) {
        console.error(error);
        writeDisplay('ERROR!')
        setTimeout(whipeVariables, 1000)
    }
}

function isButtonValueAnAction(buttonValue) {
    return buttonValue == 'BACK' || buttonValue == 'ENTER' || buttonValue == 'CE'
}

function isButtonValueANumber(buttonValue) {
    return buttonValue >= 0 && buttonValue <= 9
}

function isButtonValueAnOperator(buttonValue) {
    return buttonValue == '-' || buttonValue == '+' || buttonValue == '%' || buttonValue == '/' || buttonValue == '*'
}

function onBackspacePressed() {
    stringToCalculate = stringToCalculate.slice(0, --stringToCalculate.length)
    writeDisplay(stringToCalculate)
    isEnterLastAct = false
}

function onEnterPressed() {
    getResolution()
    isEnterLastAct = true
    stringToCalculate = ''
}

function writeDisplay(displayValue = resolution) {
    document.getElementById('display').value = displayValue
}

function writeMemory(buttonValue) {
    isButtonValueAnOperator(buttonValue) ?
        stringMemory = buttonValue :
        stringMemory += buttonValue
}

function writeString(buttonValue) {
    if (isButtonValueAnOperator(buttonValue) || !isButtonValueAnOperator(buttonValue)) writeMemory(buttonValue)
    stringToCalculate += buttonValue
    isEnterLastAct = false
    writeDisplay(stringToCalculate)
}

function whipeVariables() {
    isEnterLastAct = false
    stringToCalculate = ''
    resolution = ''
    writeDisplay('')
}