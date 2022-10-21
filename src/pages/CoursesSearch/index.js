import { Loading } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Courses from '~/components/Courses';
import Filter from '~/components/Filter';
import Skeleton from '~/components/Skeleton';

import * as httpRequest from '~/utils/httpRequest';

const CoursesSearch = () => {
    const { query } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get('page');

    const [toggleFilter, setToggleFilter] = useState(true);
    const [dataSearch, setDataSearch] = useState({});
    const [result, setResult] = useState(true);

    useEffect(() => {
        const fecthDataSeach = async () => {
            setResult(true);
            try {
                const res = await httpRequest.get('/search-keyword', {
                    params: {
                        q: query,
                        page,
                    },
                });

                res.success === 'success' ? setDataSearch(res.result) : setDataSearch({});
                Loading.remove(500);
            } catch (error) {
                setDataSearch({});
                setResult(false);
                Loading.remove(500);
            }
        };

        fecthDataSeach();
    }, [query, page]);

    return (
        <div className="courses__search-page bg-main">
            <div className="container courses__search">
                {result && !dataSearch.data && (
                    <Skeleton width={'100%'} height={170}>
                        <rect x="0" y="0" rx="8" ry="8" width="80%" height="20%" />
                        <rect x="0" y="62" rx="8" ry="8" width="80%" height="40%" />
                    </Skeleton>
                )}

                {!result && (
                    <>
                        <h1 className="courses__search__header">Sorry, we couldn't find any results for “{query}”</h1>
                        <p className="courses__search__header-sub">Try adjusting your search. Here are some ideas:</p>
                        <ul className="courses__search__header-error">
                            <li>Make sure all words are spelled correctly</li>
                            <li>Try different search terms</li>
                            <li>Try more general search terms</li>
                        </ul>
                    </>
                )}

                {result && dataSearch.data && (
                    <>
                        <h1 className="courses__search__header">
                            {dataSearch.total && dataSearch.total} results for “{query}”
                        </h1>
                        <p className="courses__search__header-sub">
                            Explore <span>HTML5 courses</span>
                        </p>
                        <p className="courses__search__header-sub">
                            Students also learn{' '}
                            <span>CSS, Responsive, Design, Web, Design, HTML, JavaScript, Bootstrap</span>
                        </p>
                    </>
                )}

                {result && dataSearch.data && (
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
                            {dataSearch.total && dataSearch.total} results
                        </div>
                    </div>
                )}
                <div className={`courses__search__body ${toggleFilter ? '' : 'courses__search__body--hide'} `}>
                    <Filter
                        toggleFilter={toggleFilter}
                        on={!!dataSearch.data}
                        onToggleFilter={setToggleFilter}
                        result={result}
                    />
                    <Courses dataSearch={dataSearch} setSearchParams={setSearchParams} result={result} />
                </div>
            </div>
        </div>
    );
};

export default CoursesSearch;
