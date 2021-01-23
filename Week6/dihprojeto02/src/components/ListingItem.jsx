import React from 'react';
import Cell from './Cell';

const ListingItem = props => {
    const { data, showDetailing } = props;

    return (
        <div
            className={'listing-item gray-border shadow'}
            onClick={() => showDetailing(data, true)}>
            <Cell heading={'Número'} content={data.processName} />
            <Cell heading={'Assunto'} content={data.processSubject} />
            <Cell heading={'Interessado'} content={data.processConcerns[0] || ''} />
            <Cell heading={'Descrição'} content={data.processDescription} />
        </div>
    );
};

export default ListingItem;