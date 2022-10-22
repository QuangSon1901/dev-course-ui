import React from 'react';
import Button from '../Button';

const SuggestSearch = ({ data, onSuggest, onChangeValue, debouncedValue }) => {
    const handleSubmit = (value) => {
        onSuggest(false);
        onChangeValue(value);
    };
    return (
        <div
            className={`search__dropdown__content__wrapp__body ${
                data.length > 0 && 'search__dropdown__content__wrapp__border'
            }`}
        >
            <ul className="search__dropdown__content__wrapp__body__list">
                {data.length > 0 &&
                    data.map((item) => {
                        let url = item.keyword ? '/courses/search/' + item.keyword : '/courses/' + item.slug;
                        return (
                            <li className="search__dropdown__content__wrapp__body__item" key={item.id}>
                                <Button
                                    to={url}
                                    onClick={() => handleSubmit(item.keyword ? item.keyword : '')}
                                    large
                                    hover={false}
                                    leftIcon={item.keyword ? 'bx bx-search-alt' : 'bx bx-file-blank'}
                                    className="btn-wrapper btn-default"
                                    style={{ justifyContent: 'flex-start', padding: '10px 0' }}
                                >
                                    {item.keyword || item.name}
                                </Button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
export default SuggestSearch;
