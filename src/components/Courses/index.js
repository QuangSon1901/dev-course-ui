import React from 'react';

const Courses = () => {
    return (
        <div className="courses">
            <ul className="courses__list">
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </ul>
            <div className="courses__paginate">
                <a href="/" className="courses__paginate__btn courses__paginate__btn--disable">
                    <i className="bx bx-chevron-left"></i>
                </a>
                <a href="/" className="courses__paginate__page courses__paginate__page--active">
                    1
                </a>
                <a href="/" className="courses__paginate__page">
                    2
                </a>
                <a href="/" className="courses__paginate__page">
                    3
                </a>
                <span className="courses__paginate__dots">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                </span>
                <a href="/" className="courses__paginate__page">
                    389
                </a>
                <a href="/" className="courses__paginate__btn">
                    <i className="bx bx-chevron-right"></i>
                </a>
            </div>
        </div>
    );
};

const CourseItem = () => {
    return (
        <a href="/" className="courses__list__item">
            <div className="courses__list__item__content">
                <div className="courses__list__item__content__image">
                    <img src="https://img-c.udemycdn.com/course/240x135/405282_27d2_3.jpg" alt="" />
                    <span className="courses__list__item__content__image__overlay"></span>
                </div>
                <div className="courses__list__item__content__content">
                    <h3 className="courses__list__item__content__content__title">
                        PHP for Beginners - Become a PHP Master - CMS Project
                    </h3>
                    <p className="courses__list__item__content__content__sub-title">
                        PHP for Beginners: learn everything you need to become a professional PHP developer with
                        practical exercises & projects.
                    </p>
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
                <h3 className="courses__list__item__price__current">1.000.000đ</h3>
                <h3 className="courses__list__item__price__original">3.000.000đ</h3>
            </div>
        </a>
    );
};

export default Courses;
