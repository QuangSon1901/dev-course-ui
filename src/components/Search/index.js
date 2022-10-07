import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useDebounce from '~/hooks/useDebounce';
import * as httpRequest from '~/utils/httpRequest';

import { multilingualSelector } from '~/redux/selector';
import { Wrapper } from '../Popper';
import SuggestSearch from '../SuggestSearch';

const searchInit = {
    programs: [],
    programs_total: 0,
    courses: [],
    courses_total: 0,
    teachers: [],
    teachers_total: 0,
};

const Search = () => {
    const multilingual = useSelector(multilingualSelector);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(searchInit);
    const [suggest, setSuggest] = useState(true);
    const searchRef = useRef(null);

    const debouncedValue = useDebounce(searchValue, 500);

    const handleChangeSearchValue = (e) => {
        !e.target.value.startsWith(' ') && setSearchValue(e.target.value);
    };

    useEffect(() => {
        if (!debouncedValue.trim()) return setSearchResult(searchInit);

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const res = await httpRequest.get('/search', {
                params: { q: debouncedValue },
            });

            setSearchResult(res);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult(searchInit);
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
                placeholder={multilingual.translationSelected.messages.search + ' . . .'}
            />
            <i className="bx bx-search-alt search-btn"></i>
            {loading && <i className="bx bx-loader-alt search-loading"></i>}
            {!!searchValue && !loading && <i className="bx bxs-x-circle search-clear" onClick={handleClear}></i>}
            <Wrapper
                menu_toggle_ref={searchRef}
                setSuggest={setSuggest}
                focus_ref
                focus_active={suggest && searchValue.length > 0}
                className="search__dropdown__content"
            >
                <div className="search__dropdown__content__wrapp">
                    <div className="search__dropdown__content__wrapp__header">
                        {loading ? (
                            <i className="bx bx-loader-alt bx-spin search__dropdown__content__wrapp__header__loading"></i>
                        ) : (
                            <i className="bx bx-search-alt"></i>
                        )}

                        {loading ? (
                            <span>Tìm '{searchValue}'</span>
                        ) : searchResult.courses_total === 0 &&
                          searchResult.programs_total === 0 &&
                          searchResult.teachers_total === 0 ? (
                            <span>Không có kết quả cho '{searchValue}'</span>
                        ) : (
                            <span>Kết quả tìm kiếm cho '{searchValue}'</span>
                        )}
                    </div>
                    <SuggestSearch data={searchResult}></SuggestSearch>
                </div>
            </Wrapper>
        </div>
    );
};

export default Search;
