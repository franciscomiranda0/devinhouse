export default class Person {
    constructor(inName, inAge, inPhone, inProfession) {
        this._personName = inName
        this._personAge = inAge
        this._personPhone = inPhone
        this._personProfession = inProfession
    }

    get personName() {
        return this._personName
    }

    get personAge() {
        return this._personAge
    }

    get personProfession() {
        return this._personProfession
    }
}

export const peopleArray = [
    new Person('Ana', 17, '0011112222', 'Programador'),
    new Person('Bruna', 18, '0033334444', 'Programador'),
    new Person('Camões', 38, '0055556666', 'Programador'),
    new Person('Davidson', 13, '0077779999', 'Programador')
]