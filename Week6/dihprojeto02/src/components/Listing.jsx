import React from 'react';

const Listing = props => {
    const { children } = props;

    return (
        <div className={'listing'}>
            {children}
        </div>
    );
};

export default Listing;