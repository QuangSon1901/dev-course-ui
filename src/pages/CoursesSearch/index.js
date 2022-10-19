import React, { useState } from 'react';
import Courses from '~/components/Courses';
import Filter from '~/components/Filter';

const CoursesSearch = () => {
    const [toggleFilter, setToggleFilter] = useState(true);
    return (
        <>
            <div className="courses__search-page bg-main">
                <div className="container courses__search">
                    <h1 className="courses__search__header">7,764 results for “react”</h1>
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
                        <div className="courses__search__filter-panel__btn__count">7,764 results</div>
                    </div>
                    <div className={`courses__search__body ${toggleFilter ? '' : 'courses__search__body--hide'} `}>
                        <Filter />
                        <Courses />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesSearch;
