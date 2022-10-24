import React from 'react';

const CourseSection = ({ children, title, more = '' }) => {
    return (
        <div className="course__container__content__body__section">
            <h1 className="course__container__content__body__section__title">
                {title} <span className="course__container__content__body__section__title__more">{more}</span>
            </h1>
            {children}
        </div>
    );
};

export default CourseSection;
