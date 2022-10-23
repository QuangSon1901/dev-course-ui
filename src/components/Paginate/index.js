import { Loading } from 'notiflix';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Paginate = ({ data }) => {
    const checkPaginateBtn = (item, index) => {
        switch (item.label) {
            case '&laquo; Previous':
                return <ButtonPrevNext key={index} url={item.url} type="prev" />;
            case 'Next &raquo;':
                return <ButtonPrevNext key={index} url={item.url} type="next" />;
            default:
                return <ButtonNumber key={index} url={item.url} active={item.active} page={item.label} />;
        }
    };
    return <div className="paginate">{data && data.map((item, index) => checkPaginateBtn(item, index))}</div>;
};

const ButtonPrevNext = ({ url, type }) => {
    let [searchParams, setSearchParams] = useSearchParams();

    const handleSetParam = () => {
        if (url) {
            Loading.circle();
            handleScollTop();
            return setSearchParams({ query: searchParams.get('query'), page: url.split('page=')[1] });
        }
    };
    return (
        <span onClick={handleSetParam} className={`paginate__btn ${url === null && 'paginate__btn--disable'}`}>
            {type === 'prev' ? <i className="bx bx-chevron-left"></i> : <i className="bx bx-chevron-right"></i>}
        </span>
    );
};

const ButtonNumber = ({ url, active, page }) => {
    let [searchParams, setSearchParams] = useSearchParams();

    const handleSetParam = () => {
        if (url) {
            Loading.circle();
            handleScollTop();
            return setSearchParams({ query: searchParams.get('query'), page: url.split('page=')[1] });
        }
    };
    return (
        <span onClick={handleSetParam} className={`paginate__page ${active && 'paginate__page--active'}`}>
            {page}
        </span>
    );
};

const handleScollTop = () => {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

export default Paginate;
