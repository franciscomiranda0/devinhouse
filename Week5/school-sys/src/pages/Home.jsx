import React from 'react';
import Scaffold from '../components/Scaffold';
import Section from '../components/Section';

import { initDatabase, database } from '../data/Database'

initDatabase()
console.log(database);
class Home extends React.Component {

    render() {
        return (
            <Scaffold title={'Home'}>
                <Section title={'Listagem'}></Section>
            </Scaffold>
        )
    }
}

export default Home;