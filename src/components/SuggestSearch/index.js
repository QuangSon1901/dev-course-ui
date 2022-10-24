import React from 'react';
import config from '~/config';
import Button from '../Button';

const SuggestSearch = ({ data, onSuggest, onChangeValue }) => {
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
                    data.map((item, index) => {
                        let url = item.keyword
                            ? `${config.routes.coursesSearch}?query=${item.keyword}`
                            : '/course/' + item.slug;
                        return (
                            <li className="search__dropdown__content__wrapp__body__item" key={index}>
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
