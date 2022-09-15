import React from 'react';
import { useSelector } from 'react-redux';

import { multilingualSelector } from '~/redux/selector';

const Search = () => {
    const multilingual = useSelector(multilingualSelector);

    return (
        <div className="search">
            <input type="text" placeholder={multilingual.translationSelected.messages.search + ' . . .'} />
            <i className="bx bx-search-alt search-btn"></i>
            <i className="bx bx-loader-alt search-loading"></i>
            {/* <Wrapper className="search__dropdown__content"></Wrapper> */}
        </div>
    );
};

export default Search;
