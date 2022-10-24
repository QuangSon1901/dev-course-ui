import React from 'react';
import Button from '~/components/Button';
import Tag from '~/components/Tag';

const CourseTaskbar = ({ onScollEnroll }) => {
    return (
        <div className="course__taskbar">
            <div className="container">
                <div className="course__taskbar__info">
                    <div className="course__taskbar__info__header">
                        React - The Complete Guide (incl Hooks, React Router, Redux)
                    </div>
                    <div className="course__taskbar__info__sub">
                        <Tag />
                        <div className="course__taskbar__info__sub__star-total">4.5</div>
                        <div className="course__taskbar__info__sub__star">
                            <i className="bx bxs-star "></i>
                        </div>
                        <a href="/" className="course__taskbar__info__sub__count-courses">
                            (2022 ratings)
                        </a>
                    </div>
                </div>
                <div className="course__taskbar__action">
                    <span>$84.99</span>
                    <Button primary onClick={onScollEnroll}>
                        Enroll now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CourseTaskbar;
