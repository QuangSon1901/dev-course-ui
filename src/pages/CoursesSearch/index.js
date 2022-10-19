import { Loading } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Courses from '~/components/Courses';
import Filter from '~/components/Filter';

import * as httpRequest from '~/utils/httpRequest';

const CoursesSearch = () => {
    const { query } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get('page');

    const [toggleFilter, setToggleFilter] = useState(true);
    const [dataSearch, setDataSearch] = useState({});

    useEffect(() => {
        const fecthDataSeach = async () => {
            try {
                const res = await httpRequest.get('/search-keyword', {
                    params: {
                        q: query,
                        page,
                    },
                });

                if (res.success === 'success') setDataSearch(res.result);
                Loading.remove(500);
            } catch (error) {
                Loading.remove(500);
            }
        };

        fecthDataSeach();
    }, [query, page]);

    return (
        <>
            <div className="courses__search-page bg-main">
                <div className="container courses__search">
                    <h1 className="courses__search__header">
                        {dataSearch.total ? dataSearch.total : '...'} results for “{query}”
                    </h1>
                    <div className="courses__search__filter-panel">
                        <div className="courses__search__filter-panel__btn">
                            <div
                                className="courses__search__filter-panel__btn__filter"
                                onClick={() => setToggleFilter(!toggleFilter)}
                            >
                                <i className="bx bx-filter"></i>
                                <h3>Filter</h3>
                            </div>
                            <div className="courses__search__filter-panel__btn__sort">
                                <select className="courses__search__filter-panel__btn__sort__select">
                                    <option value="most-reviewed">Most Reviewed</option>
                                    <option value="most-reviewed">Most Reviewed</option>
                                    <option value="most-reviewed">Most Reviewed</option>
                                </select>
                                <i className="bx bx-chevron-down courses__search__filter-panel__btn__sort__arrow"></i>
                                <h3 className="courses__search__filter-panel__btn__sort__span">Sort by</h3>
                            </div>
                        </div>
                        <div className="courses__search__filter-panel__btn__count">
                            {dataSearch.total ? dataSearch.total : '...'} results
                        </div>
                    </div>
                    <div className={`courses__search__body ${toggleFilter ? '' : 'courses__search__body--hide'} `}>
                        <Filter toggleFilter={toggleFilter} onToggleFilter={setToggleFilter} />
                        <Courses dataSearch={dataSearch} setSearchParams={setSearchParams} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesSearch;
