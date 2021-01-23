import React from 'react';
import Cell from './Cell';
import { toString } from '../utils/dateUtil';

const Detailing = props => {
    const { data, deleteEntry, editEntry, showDetailing } = props;

    return (
        <article className={'detailing shadow'}>
            <div className={'detailing__row'}>
                <Cell heading={'Processo'} content={data.processName} />
                <Cell heading={'Data'} content={toString(data.processDate)} />
                <div className={'detailing__close-wrapper'}>
                    <button
                        className={'detailing__close'}
                        onClick={() => showDetailing({}, false)}>X</button>
                </div>
            </div>

            <div className={'detailing__row'}>
                <Cell heading={'Assunto'} content={data.processSubject} />
            </div>

            <div className={'detailing__row'}>
                <Cell
                    heading={'Interessados'}
                    content={''}>
                    {
                        data.processConcerns &&
                        data.processConcerns.length > 0 &&
                        data.processConcerns.map((concerns, index) => (
                            <span
                                className={'cell__child'}
                                key={index}>
                                {concerns}
                            </span>
                        ))
                    }
                </Cell>
            </div>

            <div className={'detailing__row'}>
                <Cell heading={'Descrição'} content={data.processDescription} sliceContent={false} />
            </div>

            <div className={'detailing__footer'}>
                <button
                    className={'detailing__button button white-button button__label shadow gray-border'}
                    onClick={() => deleteEntry(data, false)}>
                    REMOVER
                        </button>
                <button
                    className={'detailing__button button white-button button__label shadow blue-border'}
                    onClick={() => editEntry(true, data)}>
                    EDITAR
                </button>
            </div>
        </article>
    );
};

export default Detailing;