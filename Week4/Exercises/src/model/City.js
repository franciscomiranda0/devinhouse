export default class City {
    constructor(inName, inState) {
        this._cityName = inName
        this._cityState = inState
    }

    get cityName() {
        return this._cityName
    }

    get cityState() {
        return this._cityState
    }
}

export const cityArray = [
    new City('Florianópolis', 'SC'),
    new City('Salvador', 'BA'),
    new City('Fortaleza', 'CE'),
    new City('Curitiba', 'PR'),
    new City('Garopaba', 'SC')
]