import React from 'react';
import './index.css';

export const List = props => {
    const { data, edit, erase } = props;

    const handleDelete = entry => erase(entry);
    const handleUpdate = entry => edit(entry);

    return (
        <React.Fragment>
            {data &&
                data.length > 0 &&
                <div
                    className={'list__root'}>
                    <div
                        className={'list__table--wrapper'}>

                        <table
                            className={'list__table'}>
                            <thead
                                className={'table__head'}>
                                <tr
                                    className={'table__head--row'}>
                                    <th className={'table__head--row--cell'}>#</th>
                                    <th className={'table__head--row--cell'}>Nome</th>
                                    <th className={'table__head--row--cell'}>Nascimento</th>
                                    <th className={'table__head--row--cell'}>Turma</th>
                                    <th className={'table__head--row--cell'}>Emergência</th>
                                    <th className={'table__head--row--cell'}>Tel. Emer.</th>
                                    <th className={'table__head--row--cell'}>Opções</th>
                                </tr>
                            </thead>
                            <tbody
                                className={'table__body'}>
                                {data.map((student, index) => {
                                    return (
                                        <tr
                                            className={'table__body--row'}
                                            key={student.id}>
                                            <td className={'table__body--row--cell'}>{index + 1}</td>
                                            <td className={'table__body--row--cell'}>{student.name}</td>
                                            <td className={'table__body--row--cell'}>{student.birthDate}</td>
                                            <td className={'table__body--row--cell'}>{student.grade}</td>
                                            <td className={'table__body--row--cell'}>{student.emergencyName}</td>
                                            <td className={'table__body--row--cell'}>{student.emergencyPhone}</td>
                                            <td className={'table__body--row--cell cell--flex'}>
                                                <button
                                                    className={'table__body--row--button'}
                                                    onClick={() => handleUpdate(student)}>
                                                    Editar
                                                </button>
                                                <button
                                                    className={'table__body--row--button'}
                                                    onClick={() => handleDelete(student)}>
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}
