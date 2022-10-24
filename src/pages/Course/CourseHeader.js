import React from 'react';
import Tag from '~/components/Tag';

const CourseHeader = ({ data }) => {
    return (
        <div className="course__container__content__header">
            <div className="course__container__content__header__breadcumb">
                <a href="/" className="course__container__content__header__breadcumb__link">
                    development
                </a>
                <i className="bx bx-chevron-right"></i>
                <a href="/" className="course__container__content__header__breadcumb__link">
                    programming languages
                </a>
                <i className="bx bx-chevron-right"></i>
                <a href="/" className="course__container__content__header__breadcumb__link">
                    react JS
                </a>
                <i className="bx bx-chevron-right"></i>
            </div>
            <div className="course__container__content__header__name-course">{data.name}</div>
            <div className="course__container__content__header__sub-name-course">{data.sub_name}</div>
            <div className="course__container__content__header__preview">
                <Tag />
                <div className="course__container__content__header__preview__star-total">4.5</div>
                <div className="course__container__content__header__preview__star">
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                </div>
                <a href="/" className="course__container__content__header__preview__count-courses">
                    (2022 ratings)
                </a>
            </div>
            <div className="course__container__content__header__teacher">
                By <a href="/">Michael Jackson</a>
            </div>
        </div>
    );
};

export default CourseHeader;
