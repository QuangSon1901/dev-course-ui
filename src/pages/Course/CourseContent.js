import React, { useRef, useState } from 'react';

const CourseContent = () => {
    const [collapse, setCollapse] = useState({ 0: true });
    const [collapseAll, setCollapseAll] = useState(false);
    const collapseRef = useRef(null);

    const handleCollapse = (event) => setCollapse({ ...collapse, [event.target.id]: !collapse[event.target.id] });

    const handleCollapseAll = () => {
        if (collapseAll === true) {
            setCollapseAll(false);
            setCollapse({});
        } else {
            const liEl = collapseRef.current.querySelectorAll(
                'li > .course__container__content__body__course-list__item__header',
            );

            const listItem = {};

            liEl.forEach((item) => {
                listItem[item.id] = true;
            });

            setCollapse({ ...listItem });
            setCollapseAll(true);
        }
    };
    return (
        <>
            <div className="course__container__content__body__course-header">
                <div className="course__container__content__body__course-header__info">31 sections • 495 lectures</div>
                <div
                    className="course__container__content__body__course-header__open-toggle"
                    onClick={handleCollapseAll}
                >
                    {collapseAll ? 'Collapse all sections' : 'Expand all sections'}
                </div>
            </div>
            <ul ref={collapseRef} className="course__container__content__body__course-list">
                <li
                    className={`course__container__content__body__course-list__item ${
                        !collapse['0'] && 'course__container__content__body__course-list__item--active'
                    }`}
                >
                    <div
                        id="0"
                        className="course__container__content__body__course-list__item__header"
                        onClick={handleCollapse}
                    >
                        <div>
                            {!collapse['0'] ? <i className="bx bx-minus"></i> : <i className="bx bx-plus"></i>}
                            <span>Getting Started</span>
                        </div>
                        <span>3 lessons</span>
                    </div>
                    <div className="course__container__content__body__course-list__item__collapse">
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Welcome To The Course!</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>What is React.js?</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Why React Instead Of "Just JavaScript"?</span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                </li>
                <li
                    className={`course__container__content__body__course-list__item ${
                        !collapse['1'] && 'course__container__content__body__course-list__item--active'
                    }`}
                >
                    <div
                        id="1"
                        className="course__container__content__body__course-list__item__header"
                        onClick={handleCollapse}
                    >
                        <div>
                            {!collapse['1'] ? <i className="bx bx-minus"></i> : <i className="bx bx-plus"></i>}
                            <span>JavaScript Refresher</span>
                        </div>
                        <span>3 lessons</span>
                    </div>
                    <div className="course__container__content__body__course-list__item__collapse">
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Module Introduction</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Understanding "let" and "const"</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Arrow Functions</span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default CourseContent;
