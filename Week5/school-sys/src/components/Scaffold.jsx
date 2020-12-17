import { title } from 'process';
import React from 'react';

class Scaffold extends React.Component {
    constructor(props) {
        super(props);
        this._scaffoldTitle = props.title;
        this._scaffoldChildren = props.children;
    }

    render() {
        return (
            <div className={'scaffold'}>
                <header className={'scaffold__header'}>
                    <h1>School Sys</h1>
                    <h2>{this._scaffoldTitle}</h2>
                </header>
                {this._scaffoldChildren}
            </div>
        )
    }
}

export default Scaffold;