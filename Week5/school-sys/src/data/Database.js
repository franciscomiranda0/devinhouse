import Student from '../models/Student'

export const initDatabase = () => {
    if (database.length > 0) clearDatabase();
    create(new Student(
        'Aderino',
        '01/01/1990',
        '3rd',
        'AderinoPai',
        '4833445566',
        'Pais',
        '48988776655',
        false,
        '',
        true,
        ['Pais', 'Avós'],
        ''
    ));
    create(new Student(
        'Baderino',
        '01/01/1990',
        '3rd',
        'AderinoPai',
        '4833445566',
        'Pais',
        '48988776655',
        false,
        '',
        true,
        ['Pais', 'Avós'],
        ''
    ));
    create(new Student(
        'Caderino',
        '01/01/1990',
        '3rd',
        'AderinoPai',
        '4833445566',
        'Pais',
        '48988776655',
        false,
        '',
        true,
        ['Pais', 'Avós'],
        ''
    ));
}

const clearDatabase = () => {
    database.forEach(() => database.pop())
}

export const create = student => {
    if (!database instanceof Student) return;
    database.push(student);
}

export const database = [

]