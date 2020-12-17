import Student from '../models/Student'

export const initDatabase = () => {
    if (database.length > 0) clearDatabase();
    create(new Student(
        'Aderino',
        '01/01/1990',
        'AderinoPai',
        '4833445566',
        'Pais',
        '48988776655',
        false,
        '',
        true,
        ['Pais', 'Avós'],
        '3rd',
        ''
    ));
}

const clearDatabase = () => {
    database.forEach(() => database.pop())
}

export const create = student => {
    if (!database instanceof Student) return;
    database.push(student);
    console.log(database);
}

export const database = [

]