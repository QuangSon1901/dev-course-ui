import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import images from '~/assets/images';
import useDebounce from '~/hooks/useDebounce';

import { multilingualSelector, searchSelector } from '~/redux/selector';
import Button from '../Button';
import { Wrapper } from '../Popper';
import SuggestSearch from '../SuggestSearch';
import searchSlice, { searchHeader } from './searchSlice';

const Search = () => {
    const dispatch = useDispatch();
    const searchRedux = useSelector(searchSelector);

    const multilingual = useSelector(multilingualSelector);
    const [searchValue, setSearchValue] = useState('');
    const [suggest, setSuggest] = useState(true);
    const searchRef = useRef(null);

    const debouncedValue = useDebounce(searchValue, 500);

    const handleChangeSearchValue = (e) => {
        e.preventDefault();

        !e.target.value.startsWith(' ') && setSearchValue(e.target.value);
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            handleClear();
            return;
        }

        dispatch(searchHeader({ q: debouncedValue }));
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        dispatch(searchSlice.actions.clearData());
        searchRef.current.focus();
    };

    return (
        <div className="search">
            <input
                name="name"
                ref={searchRef}
                type="text"
                value={searchValue}
                onChange={(e) => handleChangeSearchValue(e)}
                onFocus={() => setSuggest(true)}
                onBlur={() => setSuggest(false)}
                placeholder={multilingual.translationSelected.messages.search + ' . . .'}
            />
            <i className="bx bx-search-alt search-btn"></i>
            {searchRedux.loading && <i className="bx bx-loader-alt search-loading"></i>}
            {!!searchValue && !searchRedux.loading && (
                <i className="bx bxs-x-circle search-clear" onClick={handleClear}></i>
            )}
            <Wrapper focus_ref focus_active={suggest && searchValue.length > 0} className="search__dropdown__content">
                <div className="search__dropdown__content__wrapp">
                    <div className="search__dropdown__content__wrapp__header">
                        {searchRedux.loading ? (
                            <i className="bx bx-loader-alt bx-spin search__dropdown__content__wrapp__header__loading"></i>
                        ) : (
                            <i className="bx bx-search-alt"></i>
                        )}

                        {searchRedux.loading ? (
                            <span>Tìm '{searchValue}'</span>
                        ) : searchRedux.subjects_total === 0 &&
                          searchRedux.programs_total === 0 &&
                          searchRedux.teachers_total === 0 ? (
                            <span>Không có kết quả cho '{searchValue}'</span>
                        ) : (
                            <span>Kết quả tìm kiếm cho '{searchValue}'</span>
                        )}
                    </div>
                    <SuggestSearch data={searchRedux}></SuggestSearch>
                </div>
            </Wrapper>
        </div>
    );
};

export default Search;
