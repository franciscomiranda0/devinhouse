import React from 'react';

const Cell = props => {
    const { heading, content, sliceContent = true } = props;
    const transformString = (string, flag) => {
        if (!flag) return string;
        return string &&
            string.length &&
            string.length < 20 ?
            string :
            string.slice(0, 20)
    };

    return (
        <div className={'cell'}>
            <div className={'cell__heading--wrapper heading-typo'}>
                <h4 className={'cell__heading'}>{heading}</h4>
            </div>
            <div className={'cell__content--wrapper'}>
                {
                    !props.children &&
                    <p className={'cell__content content-typo'}>{transformString(content, sliceContent)}</p>
                }
                {props.children}
            </div>
        </div>
    );
};

export default Cell;