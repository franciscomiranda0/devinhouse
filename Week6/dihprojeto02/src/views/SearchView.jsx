import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Search from '../components/Search.jsx';
import { setEntryDialogOptions } from '../redux/process/processAction.js';
import '../styles/SearchView.css';

const SearchView = () => {
    const dispatch = useDispatch();
    const browserHistory = useHistory();
    const navigate = (url, navigator) => navigator(url);

    const handleOpenDialog = (flag, id) => {
        dispatch(setEntryDialogOptions(flag, id));
    }

    return (
        <div className={'search__root'}>
            <div className={'search__wrapper'}>
                <div className={'search__title--wrapper'}>
                    <h1 className={'search__title headline'}>Busca de processos</h1>
                </div>
                <Search />
                <div className={'search__footer--wrapper'}>
                    <h6>Você pode criar um novo processo&nbsp;
                        <span
                            className={'link'}
                            onClick={() => handleOpenDialog(true, 0)}>
                            clicando aqui
                        </span>
                        .
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default SearchView;
