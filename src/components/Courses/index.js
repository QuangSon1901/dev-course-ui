import React from 'react';
import { Link } from 'react-router-dom';
import Paginate from '../Paginate';
import Skeleton from '../Skeleton';
import Tag from '../Tag';

const Courses = ({ dataSearch = {}, result }) => {
    return (
        <div className="courses">
            <ul className="courses__list">
                {result && !dataSearch.data && (
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
                {result && dataSearch.data && dataSearch.data.map((item) => <CourseItem key={item.id} data={item} />)}
            </ul>
            {result && <Paginate data={dataSearch.links} />}
        </div>
    );
};

const CourseItem = ({ data }) => {
    return (
        <Link to={'/course/' + data.slug} className="courses__list__item">
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
                        <div className="courses__list__item__content__content__preview__star-total">4.5</div>
                        <div className="courses__list__item__content__content__preview__star">
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                        </div>
                        <div className="courses__list__item__content__content__preview__count-courses">(2022)</div>
                    </div>
                    <Tag />
                </div>
            </div>
            <div className="courses__list__item__price">
                <h3 className="courses__list__item__price__current">{data.price}đ</h3>
                <h3 className="courses__list__item__price__original">{data.price}đ</h3>
            </div>
        </Link>
    );
};

export default Courses;
