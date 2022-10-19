import { Loading } from 'notiflix';
import React from 'react';

const Paginate = ({ data, setSearchParams }) => {
    const checkPaginateBtn = (item, index) => {
        switch (item.label) {
            case '&laquo; Previous':
                return <ButtonPrevNext setSearchParams={setSearchParams} key={index} url={item.url} type="prev" />;
            case 'Next &raquo;':
                return <ButtonPrevNext setSearchParams={setSearchParams} key={index} url={item.url} type="next" />;
            default:
                return (
                    <ButtonNumber
                        setSearchParams={setSearchParams}
                        key={index}
                        url={item.url}
                        active={item.active}
                        page={item.label}
                    />
                );
        }
    };
    return <div className="paginate">{data && data.map((item, index) => checkPaginateBtn(item, index))}</div>;
};

const ButtonPrevNext = ({ url, type, setSearchParams }) => {
    const handleSetParam = () => {
        if (url) {
            Loading.circle();
            handleScollTop();
            return setSearchParams({ page: url.split('page=')[1] });
        }
    };
    return (
        <span onClick={handleSetParam} className={`paginate__btn ${url === null && 'paginate__btn--disable'}`}>
            {type === 'prev' ? <i className="bx bx-chevron-left"></i> : <i className="bx bx-chevron-right"></i>}
        </span>
    );
};

const ButtonNumber = ({ url, active, page, setSearchParams }) => {
    const handleSetParam = () => {
        if (url) {
            Loading.circle();
            handleScollTop();
            return setSearchParams({ page: url.split('page=')[1] });
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
