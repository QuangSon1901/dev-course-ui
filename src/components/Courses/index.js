import React from 'react';
import Paginate from '../Paginate';
import Skeleton from '../Skeleton';

const Courses = ({ dataSearch = {}, setSearchParams }) => {
    return (
        <div className="courses">
            <ul className="courses__list">
                {!dataSearch.data && (
                    <>
                        <Skeleton width="100%" height={166}>
                            <rect x="0" y="10" rx="8" ry="8" width="50%" height="134" />
                            <rect x="55%" y="10" rx="4" ry="4" width="45%" height="34" />
                            <rect x="55%" y="60" rx="4" ry="4" width="45%" height="34" />
                            <rect x="55%" y="110" rx="4" ry="4" width="45%" height="34" />
                        </Skeleton>
                        <Skeleton width="100%" height={166}>
                            <rect x="0" y="10" rx="8" ry="8" width="50%" height="134" />
                            <rect x="55%" y="10" rx="4" ry="4" width="45%" height="34" />
                            <rect x="55%" y="60" rx="4" ry="4" width="45%" height="34" />
                            <rect x="55%" y="110" rx="4" ry="4" width="45%" height="34" />
                        </Skeleton>
                        <Skeleton width="100%" height={166}>
                            <rect x="0" y="10" rx="8" ry="8" width="50%" height="134" />
                            <rect x="55%" y="10" rx="4" ry="4" width="45%" height="34" />
                            <rect x="55%" y="60" rx="4" ry="4" width="45%" height="34" />
                            <rect x="55%" y="110" rx="4" ry="4" width="45%" height="34" />
                        </Skeleton>
                    </>
                )}
                {dataSearch.data && dataSearch.data.map((item) => <CourseItem key={item.id} data={item} />)}
            </ul>
            <Paginate data={dataSearch.links} setSearchParams={setSearchParams} />
        </div>
    );
};

const CourseItem = ({ data }) => {
    return (
        <a href="/" className="courses__list__item">
            <div className="courses__list__item__content">
                <div className="courses__list__item__content__image">
                    <img src={process.env.REACT_APP_BASE_URL_FILE_UPLOAD + data.image} alt="" />
                    <span className="courses__list__item__content__image__overlay"></span>
                </div>
                <div className="courses__list__item__content__content">
                    <h3 className="courses__list__item__content__content__title">{data.name}</h3>
                    <p className="courses__list__item__content__content__sub-title">{data.sub_name}</p>
                    <span className="courses__list__item__content__content__teacher">Michael Jackson</span>
                    <div className="courses__list__item__content__content__preview">
                        <span className="courses__list__item__content__content__preview__star-total">4.5</span>
                        <div className="courses__list__item__content__content__preview__star">
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                        </div>
                        <span className="courses__list__item__content__content__preview__count-courses">(2022)</span>
                    </div>
                    <div className="courses__list__item__content__content__tag">
                        <div className="courses__list__item__content__content__tag__best-seller">BestSeller</div>
                    </div>
                </div>
            </div>
            <div className="courses__list__item__price">
                <h3 className="courses__list__item__price__current">{data.price}đ</h3>
                <h3 className="courses__list__item__price__original">{data.price}đ</h3>
            </div>
        </a>
    );
};

export default Courses;
