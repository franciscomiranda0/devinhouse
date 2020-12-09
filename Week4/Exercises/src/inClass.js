// * In class proposed exercises.
// Exercício 1: Considerando um objeto funcionário com as propriedades nome, idade, cargo e salário, crie uma função que receba um objeto funcionário e retorne um novo objeto“ clonando” o funcionário recebido, alterando o nome e a idade.
const employee = {
    name: '',
    age: '',
    position: 'Gari',
    pay: 3000.00
}

function changeEmployee(employee) {
    return {
        ...employee,
        name: 'Ronaldo',
        age: 30
    }
}

// Exercício 2: Crie uma função de cálculo de valores, em que o primeiro parâmetro será a operação a ser realizada(soma ou multiplicação) e o restante dos parâmetros serão os números que serão calculados entre si conforme a operação recebida e imprima o resultado
function calculate(operator, ...operands) {
    switch (operator) {
        case 'SUM':
            console.log(Array
                .from(operands)
                .reduce((prev, cur) => prev += cur))
            break
        case 'MULTIPLY':
            console.log(Array
                .from(operands)
                .reduce((prev, cur) => prev *= cur))
            break
    }
}

calculate('SUM', 2, 3, 4)