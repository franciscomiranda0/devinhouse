import { useEffect, useState } from 'react';
import './index.css';

export const Entry = props => {
    const [foodRestrictionFlag, setFoodRestrictionFlag] = useState(false);
    const { clear, student, save, setStudentProperty } = props;

    const setFormValues = student => {
        if (!student) return;
        const inputNodes = document.querySelectorAll('.input');
        inputNodes
            .forEach(input => {
                input.value = student[input.name];
                input.checked = student[input.name];
            });
    }

    useEffect(() => {
        setFormValues(student)
    }, [student]);

    return (
        <div className={'entry__root'}>
            <div className={'entry__form--wrapper'}>
                <form
                    className={'entry__form'}
                    onSubmit={e => {
                        e.preventDefault();
                        save();
                        clear();
                    }}>
                    <div className={'entry__form-row'}>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'nameInput'}>Aluno:</label>
                            <input
                                className={'entry__form--cell--input input'}
                                id={'nameInput'}
                                maxLength={20}
                                minLength={1}
                                name={'name'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                required
                                type={'text'} />
                        </div>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'birthInput'}>Nascimento:</label>
                            <input
                                className={'entry__form--cell--input input'}
                                id={'birthInput'}
                                name={'birthDate'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                required
                                type={'date'} />
                        </div>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'gradeInput'}>Turma:</label>
                            <input
                                className={'entry__form--cell--input input'}
                                id={'gradeInput'}
                                name={'grade'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                required
                                type={'text'} />
                        </div>
                    </div>
                    <div className={'entry__form-row'}>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'guardianNameInput'}>Responsável:</label>
                            <input
                                className={'entry__form--cell--input input'}
                                id={'guardianNameInput'}
                                name={'guardianName'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                required
                                type={'text'} />
                        </div>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'guardianPhoneInput'}>Tel. Resp.:</label>
                            <input
                                className={'entry__form--cell--input input'}
                                id={'guardianPhoneInput'}
                                name={'guardianPhone'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                required
                                type={'text'} />
                        </div>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'emergencyNameInput'}>Emergência:</label>
                            <input
                                className={'entry__form--cell--input input'}
                                id={'emergencyNameInput'}
                                name={'emergencyName'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                type={'text'} />
                        </div>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'emergencyPhoneInput'}>Tel. Emer.:</label>
                            <input
                                className={'entry__form--cell--input input'}
                                id={'emergencyPhoneInput'}
                                name={'emergencyPhone'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                type={'text'} />
                        </div>
                    </div>
                    <div className={'entry__form-row'}>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'allowMediaInput'}>Permitir Mídia:</label>
                            <input
                                className={'input'}
                                id={'allowMediaInput'}
                                name={'allowMedia'}
                                onChange={event => setStudentProperty(event.target.name, event.target.checked)}
                                type={'checkbox'} />
                        </div>
                        {/* <div className={'entry__form-cell'}>
                            <label htmlFor={'pickupAuthorizedPersonelNameInput'}>Carona: </label>
                            <input
                                id={'pickupAuthorizedPersonelNameInput'}
                                name={'pickupName'}
                                type={'text'}>

                            </input>
                        </div>
                        <div className={'entry__form-cell'}>
                            <label htmlFor={'pickupAuthorizedPersonelRoleInput'}>Papel:</label>
                            <select
                                id={'pickupAuthorizedPersonelRoleInput'}
                                name={'pickupRole'}
                                type={'text'}>
                                <option className={'role__option'} value={'avos'}>Avós</option>
                                <option className={'role__option'} value={'irmaos'}>Irmãos</option>
                                <option className={'role__option'} value={'pais'}>Pais</option>
                                <option className={'role__option'} value={'tios'}>Tios</option>
                                <option className={'role__option'} value={'transporte'}>Transporte</option>
                                <option className={'role__option'} value={'outros'}>Outros</option>
                            </select>
                        </div>
                        <div className={'entry__form-cell'}>
                            <button>
                                Add
                            </button>
                        </div> */}

                    </div>
                    <div className={'entry__form-row'}>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'foodRestrictionInput'}>Restrição Alimentar:</label>
                            <input
                                className={'input'}
                                id={'foodRestrictionInput'}
                                name={'foodRestriction'}
                                onChange={event => {
                                    setFoodRestrictionFlag(event.target.checked);
                                    setStudentProperty(event.target.name, event.target.checked)
                                }}
                                type={'checkbox'} />
                        </div>
                        {foodRestrictionFlag &&
                            <div className={'entry__form--cell'}>
                                <label htmlFor={'foodRestrictionDescriptionInput'}>Descrição da restrição:</label>
                                <textarea
                                    className={'entry__form--cell--input input--expand input'}
                                    id={'foodRestrictionDescriptionInput'}
                                    name={'foodRestrictionDescription'}
                                    onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                    type={'text'} />
                            </div>}
                    </div>
                    <div className={'entry__form-row'}>
                        <div className={'entry__form--cell'}>
                            <label htmlFor={'additionalNoteInput'}>Notas adicionais:</label>
                            <textarea
                                className={'entry__form--cell--input input--expand input'}
                                id={'additionalNoteInput'}
                                name={'additionalNote'}
                                onChange={event => setStudentProperty(event.target.name, event.target.value)}
                                type={'text'} />
                        </div>
                    </div>
                    <div className={'entry__form--footer'}>
                        <button type={'button'}>Limpar</button>
                        <button type={'submit'}>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

