import Process from '../models/Process';
import { getName } from '../utils/ProcessNaming';

export const initDatabase = () => {
    create(new Process(
        getName(),
        'Important Overflow',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus hic suscipit odit quae. Quasi delectus repellendus perferendis ab ipsa! Adipisci consequuntur libero non officia repellendus a illum, accusamus dolores ab doloribus nisi natus asperiores iste tempora culpa impedit nobis accusantium. Nobis eius laboriosam autem dolores nesciunt mollitia quia incidunt saepe?',
        [
            'Concerns A',
            'Concerns B',
            'Concerns C'
        ]
    ));
    create(new Process(
        getName(),
        'Important Subject',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus hic suscipit odit quae. Quasi delectus repellendus perferendis ab ipsa! Adipisci consequuntur libero non officia repellendus a illum, accusamus dolores ab doloribus nisi natus asperiores iste tempora culpa impedit nobis accusantium. Nobis eius laboriosam autem dolores nesciunt mollitia quia incidunt saepe?',
        [
            'Concerns D',
            'Concerns E',
            'Concerns F'
        ]
    ));
    create(new Process(
        getName(),
        'Important Subject',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus hic suscipit odit quae. Quasi delectus repellendus perferendis ab ipsa! Adipisci consequuntur libero non officia repellendus a illum, accusamus dolores ab doloribus nisi natus asperiores iste tempora culpa impedit nobis accusantium. Nobis eius laboriosam autem dolores nesciunt mollitia quia incidunt saepe?',
        [
            'Concerns G',
            'Concerns H',
            'Concerns I'
        ]
    ));
};

const clearDatabase = () => {
    initialDatabase.forEach(() => initDatabase.shift());
}

const create = process => {
    if (!initialDatabase instanceof Process) return;
    initialDatabase.push(process);
}

export const initialDatabase = [];