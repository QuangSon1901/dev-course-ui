import React, { useEffect, useRef, useState } from 'react';
import useDebounce from '~/hooks/useDebounce';
import { Wrapper } from '../Popper';
import * as httpRequest from '~/utils/httpRequest';

const searchInit = {
    programs: [],
    programs_total: 0,
    subjects: [],
    subjects_total: 0,
    teachers: [],
    teachers_total: 0,
};

const SidebarSearch = ({ onClose }) => {
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
                        onFocus={() => setSuggest(true)}
                        type="text"
                        placeholder="Search"
                    />
                    {loading && <i className="bx bx-loader-alt sidebar__search__input-loading"></i>}
                </div>
                <Wrapper
                    menu_toggle_ref={searchRef}
                    setSuggest={setSuggest}
                    focus_ref
                    focus_active={suggest && searchValue.length > 0}
                ></Wrapper>
            </div>
        </>
    );
};

export default SidebarSearch;
