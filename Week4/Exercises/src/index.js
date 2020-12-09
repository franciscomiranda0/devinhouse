import {
    peopleArray
} from './model/Person.js'
import {
    cityArray
} from './model/City.js'
import {
    gradeArray,
    numberArray
} from './model/numbers'

// E01 - A function which receives an arbitrary array of grades and prints its average.
function printFinalGrade(arrayOfGrades) {
    const gradeSum = Array
        .from(arrayOfGrades)
        .reduce((prevValue, curValue) => prevValue += curValue)
    console.log(`Média: ${(gradeSum / arrayOfGrades.length).toFixed(2)}`)
}

// E02 - A function which receives a list of numbers and prints their square.
function printSquare(arrayOfNumbers) {
    Array
        .from(arrayOfNumbers)
        .forEach(number =>
            console.log(number * number)
        )
}

// E03 - Consider 'Person' with name, age, phone and profession atributes. Create a function which receives an array of people and checks if there are adults.
function hasAdult(arrayOfPeople) {
    return Array
        .from(arrayOfPeople)
        .some(person =>
            person.personAge >= 18)
}

// E04 - A function which returns if all people in an array are programmers.
function isEveryoneProgrammer(arrayOfPeople) {
    return Array
        .from(arrayOfPeople)
        .every(person =>
            person.personProfession === 'Programador')
}

// E05 - A function which receives an array of people and returns their names.
function getArrayOfNames(arrayOfPeople) {
    return Array
        .from(arrayOfPeople)
        .map(person =>
            person.personName
        )
}

// E06 - A function which receives an array of people and returns an array with the underage.
function getArrayOfUnderage(arrayOfPeople) {
    return Array
        .from(arrayOfPeople)
        .filter(person =>
            person.personAge < 18)
}

// E07 - A function which receives an array of people and returns the first person onder than 18.
function getFirstAdult(arrayOfPeople) {
    return Array
        .from(arrayOfPeople)
        .find(person =>
            person.personAge > 18)
}

// E08 - A fuction which receives an array of numbers and prints its numbers multiplied.
function printArrayProduct(arrayOfNumbers) {
    console.log(Array
        .from(arrayOfNumbers)
        .reduce((previous, current) =>
            previous *= current)
    )
}

// E09 - An arrow function which receives name and age as params. It should print ~'ola, eu sour x e tenho y anos'. 
const sayHello = (inName, inAge) => console.log(`Oi, eu sou ${inName} e tenho ${inAge} anos.`)

// E10 - A fuction which returns a promise. It'll get two numbers as params and add them, resolving the promise if even and rejecting it if odd, giving an explaining message.
const evenOddPromise = (numberA, numberB) =>
    new Promise((resolve, reject) => {
        (numberA + numberB) % 2 === 0 ?
            resolve(numberA + numberB) :
            reject('Resultado ímpar.')
    })

// E11 - An arrow function which returns the area of a reactangle.
const getRectangleArea = (height, width) => {
    if (height === width) return
    return height * width
}

// E12 - A function which receives neighborhood, city and state as params and returns a template string with 'em.
function printAddress(neighborhood, city, state) {
    console.log(`${neighborhood}, ${city} - ${state.toUpperCase()}`)
}

// E13 - Consider 'City' with name and state as attributes. Create a function which receives an array of cities and returns another array of cities whose state is 'SC'.
function getSantaCatarinaCities(arrayOfCities) {
    return Array
        .from(arrayOfCities)
        .filter(city =>
            city.cityState === 'SC'
        )
}

// E14 - A function which receives an array of cities and returns another array with their names and states.
function getCityStateString(arrayOfCities) {
    return Array
        .from(arrayOfCities)
        .map(city => `${city.cityName} - ${city.cityState}`)
}

// E15 - A function which checks if any of the cities are in RS.
function hasCityFromRS(arrayOfCities) {
    return Array
        .from(arrayOfCities)
        .some(city =>
            city.cityState === 'RS'
        )
}

// E16 - A function which receives a city, destructs it into two params and prints them.
function printDismemberedCity({
    cityName,
    cityState
}) {
    console.log(cityName, cityState)
}

// E17 - A functio which presents a list with the bestselling books. It only needs to differ between the first three.
function printBestSellersList(bestSeller, secondPlace, thirdPlace, ...otherBooks) {
    console.log(`1º - ${bestSeller}\n2º - ${secondPlace}\n3º - ${thirdPlace}\n${otherBooks}`)
}