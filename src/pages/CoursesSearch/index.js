import { Loading } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Courses from '~/components/Courses';
import Filter from '~/components/Filter';
import Skeleton from '~/components/Skeleton';

import * as httpRequest from '~/utils/httpRequest';

const CoursesSearch = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get('page');
    const query = searchParams.get('query');
    const sortPr = searchParams.get('sort');
    const levelPr = searchParams.get('level');
    const [sort, setSort] = useState(sortPr || 'suggested');
    const [filterLevel, setFilterSet] = useState(
        (levelPr && levelPr.split(',').reduce((acc, curr) => (acc = { ...acc, [curr]: true }), {})) || {},
    );

    const [toggleFilter, setToggleFilter] = useState(true);
    const [dataSearch, setDataSearch] = useState({});
    const [result, setResult] = useState(true);

    useEffect(() => {
        const fecthDataSeach = async () => {
            setResult(true);
            let arr = [];
            const objectArray = Object.entries(filterLevel);
            objectArray.forEach(([key, value]) => {
                if (value) arr.push(key);
            });

            try {
                const res = await httpRequest.get('/search-keyword', {
                    params: {
                        q: query,
                        page,
                        sort,
                        level: arr,
                    },
                });

                res.success === 'success' ? setDataSearch(res.result) : setDataSearch({});
                Loading.remove(500);
            } catch (error) {
                console.log(error);
                setDataSearch({});
                setResult(false);
                Loading.remove(500);
            }
        };

        fecthDataSeach();
    }, [query, page, sort, filterLevel]);

    const handleSort = (event) => {
        let obj = {};
        searchParams.forEach((e, key) => (obj[key] = e));
        setSearchParams({ ...obj, sort: event.target.value });
        setSort(event.target.value);
    };

    const handleFilterLevel = (value) => {
        let level = { ...filterLevel, [value]: !filterLevel[value] };
        let arr = [];
        const objectArray = Object.entries(level);
        objectArray.forEach(([key, value]) => {
            if (value) arr.push(key);
        });
        let obj = {};
        searchParams.forEach((e, key) => (obj[key] = e));
        setSearchParams({ ...obj, level: arr.toString() });
        setFilterSet(level);
    };

    return (
        <div className="courses__search-page bg-main">
            <div className="container courses__search">
                {result && !dataSearch.data && (
                    <Skeleton width={'100%'} height={170}>
                        <rect x="0" y="0" rx="8" ry="8" width="80%" height="20%" />
                        <rect x="0" y="62" rx="8" ry="8" width="80%" height="40%" />
                    </Skeleton>
                )}

                {!result && (
                    <>
                        <h1 className="courses__search__header">
                            Xin lỗi, chúng tôi không thể tìm thấy bất kỳ kết quả nào cho “{query}”
                        </h1>
                        <p className="courses__search__header-sub">
                            Hãy thử điều chỉnh tìm kiếm của bạn. Đây là một số ý tưởng:
                        </p>
                        <ul className="courses__search__header-error">
                            <li>Hãy chắc chắn rằng tất cả các từ đều đúng chính tả</li>
                            <li>Thử các cụm từ tìm kiếm khác nhau</li>
                            <li>Thử các cụm từ tìm kiếm chung</li>
                        </ul>
                    </>
                )}

                {result && dataSearch.data && (
                    <>
                        <h1 className="courses__search__header">
                            {dataSearch.total && dataSearch.total} kết quả cho “{query}”
                        </h1>
                        <p className="courses__search__header-sub">
                            Khám phá <span>khoá học HTML5</span>
                        </p>
                        <p className="courses__search__header-sub">
                            Học viên khác cũng học{' '}
                            <span>CSS, Responsive, Design, Web, Design, HTML, JavaScript, Bootstrap</span>
                        </p>
                    </>
                )}

                {result && dataSearch.data && (
                    <div className="courses__search__filter-panel">
                        <div className="courses__search__filter-panel__btn">
                            <div
                                className="courses__search__filter-panel__btn__filter"
                                onClick={() => setToggleFilter(!toggleFilter)}
                            >
                                <i className="bx bx-filter"></i>
                                <h3>Bộ lọc</h3>
                            </div>
                            <div className="courses__search__filter-panel__btn__sort">
                                <select
                                    className="courses__search__filter-panel__btn__sort__select"
                                    defaultValue={sort}
                                    onChange={(event) => handleSort(event)}
                                >
                                    <option value="suggested">Đề nghị</option>
                                    <option value="lowest-price">Giá thấp nhất</option>
                                    <option value="highest-price">Giá cao nhất</option>
                                    <option value="lastest">Mới nhấT</option>
                                </select>
                                <i className="bx bx-chevron-down courses__search__filter-panel__btn__sort__arrow"></i>
                                <h3 className="courses__search__filter-panel__btn__sort__span">Sắp xếp theo</h3>
                            </div>
                        </div>
                        <div className="courses__search__filter-panel__btn__count">
                            {dataSearch.total && dataSearch.total} kết quả
                        </div>
                    </div>
                )}
                <div className={`courses__search__body ${toggleFilter ? '' : 'courses__search__body--hide'} `}>
                    <Filter
                        toggleFilter={toggleFilter}
                        on={!!dataSearch.data}
                        onToggleFilter={setToggleFilter}
                        result={result}
                        filterLevel={filterLevel}
                        onFilterLevel={handleFilterLevel}
                    />
                    <Courses dataSearch={dataSearch} result={result} />
                </div>
            </div>
        </div>
    );
};

export default CoursesSearch;
