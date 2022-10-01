import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import images from '~/assets/images';

import { multilingualSelector } from '~/redux/selector';
import Button from '../Button';
import { Wrapper } from '../Popper';

const Search = () => {
    const multilingual = useSelector(multilingualSelector);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState({});
    const [suggest, setSuggest] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchRef = useRef(null);

    const handleChangeSearchValue = (e) => {
        e.preventDefault();

        !e.target.value.startsWith(' ') && setSearchValue(e.target.value);
    };

    useEffect(() => {
        if (!searchValue.trim()) return setSearchResult({});

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult({});
        searchRef.current.focus();
    };

    return (
        <div className="search">
            <input
                ref={searchRef}
                type="text"
                value={searchValue}
                onChange={(e) => handleChangeSearchValue(e)}
                onFocus={() => setSuggest(true)}
                onBlur={() => setSuggest(false)}
                placeholder={multilingual.translationSelected.messages.search + ' . . .'}
            />
            <i className="bx bx-search-alt search-btn"></i>
            {loading && <i className="bx bx-loader-alt search-loading"></i>}
            {!!searchValue && !loading && <i className="bx bxs-x-circle search-clear" onClick={handleClear}></i>}
            <Wrapper focus_ref focus_active={suggest && searchValue.length > 0} className="search__dropdown__content">
                <div className="search__dropdown__content__wrapp">
                    <div className="search__dropdown__content__wrapp__header">
                        <i className="bx bx-search-alt"></i>
                        <span>Kết quả tìm kiếm cho '{searchValue}'</span>
                    </div>
                    <div className="search__dropdown__content__wrapp__body">
                        <div className="search__dropdown__content__wrapp__body__group">
                            <div className="search__dropdown__content__wrapp__body__group__title">
                                <h4>Môn học</h4>
                                <span>Xem thêm</span>
                            </div>
                            <ul>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="search__dropdown__content__wrapp__body__group">
                            <div className="search__dropdown__content__wrapp__body__group__title">
                                <h4>Khoá học</h4>
                                <span>Xem thêm</span>
                            </div>
                            <ul>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="search__dropdown__content__wrapp__body__group">
                            <div className="search__dropdown__content__wrapp__body__group__title">
                                <h4>Giảng viên</h4>
                                <span>Xem thêm</span>
                            </div>
                            <ul>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        large
                                        className="btn-wrapper btn-default"
                                        img="userAvt"
                                        imgStyle={{ width: '32px', height: '32px', borderRadius: '50%' }}
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        Xây dựng Website với ReactJS
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Search;
