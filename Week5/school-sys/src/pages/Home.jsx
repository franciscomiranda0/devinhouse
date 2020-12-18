import React from 'react';
import Scaffold from '../components/Scaffold';
import Section from '../components/Section';
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