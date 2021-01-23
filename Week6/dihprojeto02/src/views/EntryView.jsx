import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Process from '../models/Process';
import {
    asyncInsert,
    asyncUpdate,
    asyncLoadOne,
    setEntryDialogOptions,
    processEntryPropertyChange,
    processEntryConcernsAddition,
    asyncLoadAll,
} from '../redux/process/processAction';
import { getProcessEntry, getProcessEntryId, getShowEntryDialog } from '../redux/process/processSelector';
import '../styles/EntryView.css';

const EntryView = () => {
    const processEntry = useSelector(getProcessEntry);
    const processEntryId = useSelector(getProcessEntryId);
    const showEntryDialog = useSelector(getShowEntryDialog);
    const [newConcerns, setNewConcerns] = useState('');
    const dispatch = useDispatch();

    const handleCloseDialog = (flag, processId) => dispatch(setEntryDialogOptions(flag, processId));
    const handleNewConcernsChange = value => setNewConcerns(value);
    const handleProcessEntryConcernsAddition = value => {
        dispatch(processEntryConcernsAddition(value));
        handleNewConcernsChange('');
    }
    const handleProcessEntryPropertyChange = (property, value) => dispatch(processEntryPropertyChange(property, value));
    const handleSubmit = entry => {
        entry.processId ?
            dispatch(asyncUpdate(entry)) :
            dispatch(asyncInsert(Process.newProcess(entry)));
        dispatch(asyncLoadAll());
        handleCloseDialog(false, 0);
    };

    useEffect(() => {
        if (processEntryId != 0) {
            dispatch(asyncLoadOne(processEntryId));
        }
    }, [processEntryId]);

    return (
        <React.Fragment>
            {
                showEntryDialog &&
                <div className={'entry-dialog__wrapper'}>
                    <dialog className={'entry-dialog shadow'} open={showEntryDialog} hidden={showEntryDialog}>
                        <div className={'entry-dialog__title--wrapper'}>
                            <h2 className={'entry-dialog__title'}>Cadastro de processo</h2>
                            <button
                                className={'entry-dialog__close'}
                                onClick={() => handleCloseDialog(false, 0)}>
                                X
                            </button>
                        </div>
                        <div className={'entry-dialog__form--wrapper'}>
                            <form
                                className={'form'}
                                method={'dialog'}
                                onSubmit={event => {
                                    event.preventDefault();
                                    handleSubmit(processEntry);
                                }}>
                                <div className={'form__row'}>
                                    <div className={'form__cell w50'}>
                                        <label
                                            className={'form__cell--label'}
                                            htmlFor={'processSubjectInput'}>
                                            Assunto
                                        </label>
                                        <input
                                            className={'form__cell--input'}
                                            id={'processSubjectInput'}
                                            name={'processSubject'}
                                            onChange={({ target }) => handleProcessEntryPropertyChange(target.name, target.value)}
                                            type={'text'}
                                            value={processEntry.processSubject || ''} />
                                    </div>
                                </div>

                                <div className={'form__row'}>
                                    <div className={'form__cell'}>
                                        <label
                                            className={'form__cell--label'}>
                                            Interessados
                                        </label>
                                        {
                                            processEntry &&
                                            processEntry.processConcerns &&
                                            processEntry.processConcerns.length &&
                                            processEntry.processConcerns.length > 0 &&
                                            processEntry.processConcerns.map((item, index) => (
                                                <span key={index}>
                                                    {item}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className={'form__row'}>
                                    <div className={'form__cell'}>
                                        <label
                                            className={'form__cell--label'}
                                            htmlFor={'processConcernsInput'}>
                                            Novo Interessado
                                        </label>
                                        <input
                                            className={'form__cell--input'}
                                            id={'processConcernsInput'}
                                            name={'processConcerns'}
                                            onChange={({ target }) => handleNewConcernsChange(target.value)}
                                            type={'text'}
                                            value={newConcerns || ''} />
                                    </div>
                                    <div className={'form__cell'}>
                                        <button
                                            className={'entry-dialog__button button blue-button blue-border shadow'}
                                            disabled={newConcerns.length == 0}
                                            onClick={() => handleProcessEntryConcernsAddition(newConcerns)}
                                            type={'button'}>
                                            ADICIONAR
                                    </button>
                                    </div>
                                </div>

                                <div className={'form__row'}>
                                    <div className={'form__cell w75'}>
                                        <label
                                            className={'form__cell--label'}
                                            htmlFor={'processDescriptionInput'}>
                                            Descrição
                                        </label>
                                        <textarea
                                            className={'form__cell--input'}
                                            id={'processDescriptionInput'}
                                            name={'processDescription'}
                                            onChange={({ target }) => handleProcessEntryPropertyChange(target.name, target.value)}
                                            value={processEntry.processDescription || ''} />
                                    </div>
                                </div>

                                <div className={'form__footer'}>
                                    <button
                                        className={'button blue-button blue-border shadow'}
                                        type={'submit'}>
                                        SALVAR
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            }
        </React.Fragment>
    );
};

export default EntryView;