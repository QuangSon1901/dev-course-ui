import React, { useEffect, useRef, useState } from 'react';
import useDebounce from '~/hooks/useDebounce';
import { Wrapper } from '../Popper';
import * as httpRequest from '~/utils/httpRequest';
import SuggestSearch from '../SuggestSearch';
import { useParams } from 'react-router-dom';

const searchInit = {
    suggests: [],
};

const SidebarSearch = ({ onClose }) => {
    const { query } = useParams();

    const initQuery = query ? query : '';

    const [searchValue, setSearchValue] = useState(initQuery);
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(searchInit);
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
        <>
            <button className="sidebar__close" onClick={onClose}>
                <i className="bx bx-x"></i>
            </button>
            <h2 className="sidebar__title">Tìm kiếm khoá học</h2>
            <div className="sidebar__search">
                <div className="sidebar__search__input">
                    <input
                        ref={searchRef}
                        value={searchValue}
                        onChange={(e) => handleChangeSearchValue(e)}
                        type="text"
                        placeholder="Search"
                    />
                    {loading && <i className="bx bx-loader-alt sidebar__search__input-loading"></i>}
                </div>
                {searchResult.suggests.length > 0 ? (
                    <Wrapper className="active">
                        <div className="search__dropdown__content__wrapp">
                            <div className="search__dropdown__content__wrapp__header">
                                {loading ? (
                                    <i className="bx bx-loader-alt bx-spin search__dropdown__content__wrapp__header__loading"></i>
                                ) : (
                                    <i className="bx bx-search-alt"></i>
                                )}

                                {loading ? (
                                    <span>Tìm '{searchValue}'</span>
                                ) : searchResult.suggests.length === 0 ? (
                                    <span>Không có kết quả cho '{searchValue}'</span>
                                ) : (
                                    <span>Kết quả tìm kiếm cho '{searchValue}'</span>
                                )}
                            </div>
                            <SuggestSearch data={searchResult.suggests}></SuggestSearch>
                        </div>
                    </Wrapper>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default SidebarSearch;
