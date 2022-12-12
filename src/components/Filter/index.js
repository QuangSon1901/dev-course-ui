import React, { useState } from 'react';
import Skeleton from '../Skeleton';

const Filter = ({ toggleFilter, onToggleFilter, on, result, onFilterLevel, filterLevel }) => {
    const [filterField, setFilterField] = useState({
        level: true,
        price: true,
        ratings: true,
    });

    const handleToggleField = (event) =>
        setFilterField({ ...filterField, [event.target.id]: !filterField[event.target.id] });

    return (
        <>
            <div
                onClick={() => onToggleFilter(true)}
                className={`overlay filter__overlay ${!toggleFilter ? 'filter__overlay--active' : ''}`}
            ></div>

            <div className={`filter filter__tablet ${!toggleFilter ? 'filter__tablet--active' : ''}`}>
                {result && !on && (
                    <Skeleton width={306} height={200}>
                        <rect x="0" y="0" rx="8" ry="8" width="266" height="80" />
                    </Skeleton>
                )}
                {result && on && (
                    <>
                        <div className="filter__tablet__header">
                            <h2 className="filter__tablet__header__title">Tìm kiếm khoá học</h2>
                            <button className="filter__tablet__header__close" onClick={() => onToggleFilter(true)}>
                                <i className="bx bx-x"></i>
                            </button>
                        </div>
                        <ul className="filter__list">
                            <FilterItem
                                title="Level"
                                id="level"
                                typeField={filterField.level}
                                handleToggleField={handleToggleField}
                            >
                                <li className="filter__list__item__body__item">
                                    <input
                                        type="checkbox"
                                        name="level"
                                        id="level1"
                                        checked={filterLevel['all']}
                                        onChange={() => onFilterLevel('all')}
                                    />
                                    <label htmlFor="level1">All levels (2,233)</label>
                                </li>
                                <li className="filter__list__item__body__item">
                                    <input
                                        type="checkbox"
                                        name="level"
                                        id="level2"
                                        checked={filterLevel['beginner']}
                                        onChange={() => onFilterLevel('beginner')}
                                    />
                                    <label htmlFor="level2">Beginner (2,233)</label>
                                </li>
                                <li className="filter__list__item__body__item">
                                    <input
                                        type="checkbox"
                                        name="level"
                                        id="level3"
                                        checked={filterLevel['intermediate']}
                                        onChange={() => onFilterLevel('intermediate')}
                                    />
                                    <label htmlFor="level3">Intermediate (2,233)</label>
                                </li>
                                <li className="filter__list__item__body__item">
                                    <input
                                        type="checkbox"
                                        name="level"
                                        id="level4"
                                        checked={filterLevel['expert']}
                                        onChange={() => onFilterLevel('expert')}
                                    />
                                    <label htmlFor="level4">Expert (2,233)</label>
                                </li>
                            </FilterItem>
                            <FilterItem
                                title="Price"
                                id="price"
                                typeField={filterField.price}
                                handleToggleField={handleToggleField}
                            >
                                <li className="filter__list__item__body__item">
                                    <input type="checkbox" name="price" id="price1" />
                                    <label htmlFor="price1">Paid (5,233)</label>
                                </li>
                                <li className="filter__list__item__body__item">
                                    <input type="checkbox" name="price" id="price2" />
                                    <label htmlFor="price2">Free (0)</label>
                                </li>
                            </FilterItem>
                            <FilterItem
                                title="Ratings"
                                id="ratings"
                                typeField={filterField.ratings}
                                handleToggleField={handleToggleField}
                            >
                                <li className="filter__list__item__body__item">
                                    <input type="radio" name="ratings" id="ratings1" />

                                    <label htmlFor="ratings1">
                                        <div className="filter__list__item__body__item__star">
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star-half"></i>
                                        </div>
                                        4.5 & up (5,233)
                                    </label>
                                </li>
                                <li className="filter__list__item__body__item">
                                    <input type="radio" name="ratings" id="ratings2" />

                                    <label htmlFor="ratings2">
                                        <div className="filter__list__item__body__item__star">
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bx-star"></i>
                                        </div>
                                        4.0 & up (5,233)
                                    </label>
                                </li>
                                <li className="filter__list__item__body__item">
                                    <input type="radio" name="ratings" id="ratings3" />

                                    <label htmlFor="ratings3">
                                        <div className="filter__list__item__body__item__star">
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star-half"></i>
                                            <i className="bx bx-star"></i>
                                        </div>
                                        3.5 & up (5,233)
                                    </label>
                                </li>
                                <li className="filter__list__item__body__item">
                                    <input type="radio" name="ratings" id="ratings4" />

                                    <label htmlFor="ratings4">
                                        <div className="filter__list__item__body__item__star">
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bxs-star "></i>
                                            <i className="bx bx-star"></i>
                                            <i className="bx bx-star"></i>
                                        </div>
                                        3.0 & up (5,233)
                                    </label>
                                </li>
                            </FilterItem>
                        </ul>
                    </>
                )}
            </div>
        </>
    );
};

const FilterItem = ({ title, id, typeField, handleToggleField, children }) => {
    return (
        <li className="filter__list__item">
            <div id={id} onClick={handleToggleField} className="filter__list__item__header">
                <h3 id={id}>{title}</h3>
                <i
                    id={id}
                    className={`bx bx-chevron-down ${typeField ? 'filter__list__item__header__arrow--active' : ''}`}
                ></i>
            </div>
            <ul className={`filter__list__item__body ${!typeField ? 'filter__list__item__body--active' : ''}`}>
                {children}
            </ul>
        </li>
    );
};

export default Filter;
