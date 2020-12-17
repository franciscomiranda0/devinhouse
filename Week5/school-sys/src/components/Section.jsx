import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this._sectionTitle = props.title;
        this._sectionChildren = props.children;
    }

    render() {
        return (
            <div className={'section'}>
                <h3>{this._sectionTitle}</h3>
                {this._sectionChildren}
            </div>
        )
    }
}

export default Section;
