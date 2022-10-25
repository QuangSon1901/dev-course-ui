import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Skeleton from '~/components/Skeleton';
import * as httpRequest from '~/utils/httpRequest';

const CourseContent = ({ id }) => {
    const [collapse, setCollapse] = useState({ 0: true });
    const [collapseAll, setCollapseAll] = useState(false);
    const collapseRef = useRef(null);

    const [unitsData, setUnitsData] = useState({});
    const [unitShowAll, setUnitShowAll] = useState(false);

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

    useEffect(() => {
        const fetchUnits = async () => {
            try {
                const res = await httpRequest.get('/units/units-by-course', {
                    params: {
                        course_id: id,
                    },
                });

                if (res.success === 'success') setUnitsData(res.data);
            } catch (error) {}
        };
        fetchUnits();
    }, [id]);

    return unitsData.units ? (
        unitsData.units.length > 0 && (
            <>
                <div className="course__container__content__body__course-header">
                    <div className="course__container__content__body__course-header__info">
                        {unitsData.total_sections} sections • {unitsData.total_lectures} lectures
                    </div>
                    <div
                        className="course__container__content__body__course-header__open-toggle"
                        onClick={handleCollapseAll}
                    >
                        {collapseAll ? 'Collapse all sections' : 'Expand all sections'}
                    </div>
                </div>
                <ul ref={collapseRef} className="course__container__content__body__course-list">
                    {unitsData.units.map((unit, index) => {
                        if (!unitShowAll && index >= 10) return null;
                        return (
                            <li
                                key={index}
                                className={`course__container__content__body__course-list__item ${
                                    !collapse[index] && 'course__container__content__body__course-list__item--active'
                                }`}
                            >
                                <div
                                    id={index}
                                    className="course__container__content__body__course-list__item__header"
                                    onClick={handleCollapse}
                                >
                                    <div>
                                        {!collapse[index] ? (
                                            <i className="bx bx-minus"></i>
                                        ) : (
                                            <i className="bx bx-plus"></i>
                                        )}
                                        <span>{unit.name}</span>
                                    </div>
                                    <span>{unit.lessons_count} lectures</span>
                                </div>
                                <div className="course__container__content__body__course-list__item__collapse">
                                    {unit.lessons.map((lesson, index) => (
                                        <div
                                            key={index}
                                            className="course__container__content__body__course-list__item__collapse__item"
                                        >
                                            <div>
                                                <i className="bx bx-right-arrow-alt"></i>
                                                <span>{lesson.name}</span>
                                            </div>
                                            <span></span>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        );
                    })}
                    <li
                        className={`course__container__content__body__course-list__item--more`}
                        onClick={() => setUnitShowAll(!unitShowAll)}
                    >
                        {unitShowAll ? 'Show less sections' : `${unitsData.units.length - 10} more sections`}
                    </li>
                </ul>
            </>
        )
    ) : (
        <Skeleton width={'100%'} height={200}>
            <rect x="0" y="0" rx="8" ry="8" width="100%" height="54" />
            <rect x="0" y="74" rx="8" ry="8" width="100%" height="54" />
            <rect x="0" y="148" rx="8" ry="8" width="100%" height="54" />
        </Skeleton>
    );
};

export default CourseContent;
