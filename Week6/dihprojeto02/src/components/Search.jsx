import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import searchIcon from '../assets/search_icon_32.svg';
import { asyncLoadAll, asyncLoadQuery } from '../redux/process/processAction';

const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearch = queryText => {
        queryText ?
            dispatch(asyncLoadQuery(queryText)) :
            dispatch(asyncLoadAll());
        history.push('/listing');
    };

    return (
        <div className={'search shadow'}>
            <input
                className={'search__input'}
                onChange={({ target }) => setQuery(target.value)}
                placeholder={'Pesquise por uma informação do processo...'}
                type={'text'}
                value={query} />
            <button
                className={'search__button'}
                onClick={() => handleSearch(query)}>
                <img src={searchIcon} alt={'Botão de busca'} />
            </button>
        </div>
    );
};

export default Search;