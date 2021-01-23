import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDelete, asyncLoadAll, setDetailingOptions, setEntryDialogOptions } from '../redux/process/processAction';
import { getListingData, getShowDetailingEntry, getDetailingEntry } from '../redux/process/processSelector';

import Detailing from '../components/Detailing';
import Listing from '../components/Listing';
import ListingItem from '../components/ListingItem';
import Search from '../components/Search';
import '../styles/ListingView.css';

const ListingView = () => {
    const listData = useSelector(getListingData);
    const detailingEntry = useSelector(getDetailingEntry);
    const showDetailingEntry = useSelector(getShowDetailingEntry);
    const dispatch = useDispatch();

    const handleDelete = (entry, flag) => {
        dispatch(asyncDelete(entry.id));
        dispatch(asyncLoadAll());
        handleShowDetailing({}, flag);
    };
    const handleEdit = (flag, entry) => dispatch(setEntryDialogOptions(flag, entry.id));
    const handleOpenDialog = (flag, id) => dispatch(setEntryDialogOptions(flag, id));
    const handleShowDetailing = (entry, flag) => dispatch(setDetailingOptions(entry, flag));

    useEffect(() => {
        dispatch(asyncLoadAll());
    }, [dispatch]);

    return (
        <div className={'listing-view__root'}>
            <div className={'listing-view__wrapper'}>
                <div className={'listing-view__header--wrapper'}>
                    <header className={'header'}>
                        <div className={'header__half'}>
                            <div className={'header__title--wrapper'}>
                                <h2 className={'header__title'}>Busca de processos</h2>
                            </div>
                            <div className={'header__search--wrapper'}>
                                <Search />
                            </div>
                        </div>
                        <div className={'header__half'}>
                            <div className={'header__button--wrapper'}>
                                <button
                                    className={'header__button white-button button gray-border shadow'}
                                    onClick={() => handleOpenDialog(true, 0)}>
                                    NOVO
                                </button>
                            </div>
                        </div>
                    </header>
                </div>

                <div className={'listing-view__content--wrapper'}>
                    <article className={'content'}>
                        <section className={'content__section'}>
                            {
                                listData &&
                                listData.length &&
                                listData.length > 0 &&
                                <div className={'content__listing--wrapper'}>
                                    <Listing>
                                        {
                                            listData.map((item, index) => (
                                                <ListingItem
                                                    data={item}
                                                    key={index}
                                                    showDetailing={handleShowDetailing} />
                                            ))
                                        }
                                    </Listing>
                                </div>
                            }
                        </section>
                        {
                            showDetailingEntry &&
                            <section className={'content__section'}>
                                <div className={'content__detailing--wrapper'}>
                                    <Detailing
                                        data={detailingEntry}
                                        deleteEntry={handleDelete}
                                        editEntry={handleEdit}
                                        showDetailing={handleShowDetailing} />
                                </div>
                            </section>
                        }
                    </article>
                </div>
            </div>
        </div>
    );
};

export default ListingView;