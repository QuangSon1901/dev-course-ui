import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDayInWeek, getNextWeek, getPrevWeek } from '~/utils/dateEvent';

const Schedule = ({ dataCalendar, dayNow, handleDayNow, loading }) => {
    const [tag, setTag] = useState({});
    useEffect(() => {
        if (!dataCalendar.class || dataCalendar.class.schedule.length <= 0) return;
        setTag(dataCalendar.class.schedule);
    }, [dataCalendar, tag]);

    return (
        <div className="profile__info__profile-tab-cont__content__card__body__calendar">
            <div className="profile__info__profile-tab-cont__content__card__body__calendar__event">
                <button onClick={() => handleDayNow(getPrevWeek(dayNow))}>
                    <i className="bx bx-chevron-left"></i>
                    Prev
                </button>
                <button onClick={() => handleDayNow(getNextWeek(dayNow))}>
                    Next
                    <i className="bx bx-chevron-right"></i>
                </button>
            </div>
            <div
                className={`profile__info__profile-tab-cont__content__card__body__calendar__body ${
                    loading && 'loading'
                }`}
            >
                {loading && <i className="bx bx-loader-circle bx-spin"></i>}
                {!loading && (
                    <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid">
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block">
                            <p>Monday</p>
                            <p>({moment(getDayInWeek(dayNow, 1)).format('DD-MM-YYYY')})</p>
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block">
                            <p>Tuesday</p>
                            <p>({moment(getDayInWeek(dayNow, 2)).format('DD-MM-YYYY')})</p>
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block">
                            <p>Wednesday</p>
                            <p>({moment(getDayInWeek(dayNow, 3)).format('DD-MM-YYYY')})</p>
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block">
                            <p>Thursday</p>
                            <p>({moment(getDayInWeek(dayNow, 4)).format('DD-MM-YYYY')})</p>
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block">
                            <p>Friday</p>
                            <p>({moment(getDayInWeek(dayNow, 5)).format('DD-MM-YYYY')})</p>
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block">
                            <p>Saturday</p>
                            <p>({moment(getDayInWeek(dayNow, 6)).format('DD-MM-YYYY')})</p>
                        </div>
                        <div
                            className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block"
                            style={{ borderRight: 'transparent' }}
                        >
                            <p>Sunday</p>
                            <p>({moment(getDayInWeek(dayNow, 7)).format('DD-MM-YYYY')})</p>
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block class">
                            {tag[moment(getDayInWeek(dayNow, 1)).format('YYYY-MM-DD')] &&
                                tag[moment(getDayInWeek(dayNow, 1)).format('YYYY-MM-DD')].map((item, index) => (
                                    <div
                                        key={index}
                                        className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block__tag"
                                    >
                                        <p>
                                            <b>Class</b>: {item.class_id}
                                        </p>
                                        <p>
                                            <b>Course</b>: {item.name_course}
                                        </p>
                                        <p>
                                            <b>Lesson</b>: {item.lesson}
                                        </p>
                                        <p>
                                            <b>Room</b>: {item.room}
                                        </p>
                                        <p>
                                            <b>Teacher</b>: {item.teacher}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block class">
                            {tag[moment(getDayInWeek(dayNow, 2)).format('YYYY-MM-DD')] &&
                                tag[moment(getDayInWeek(dayNow, 2)).format('YYYY-MM-DD')].map((item, index) => (
                                    <div
                                        key={index}
                                        className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block__tag"
                                    >
                                        <p>
                                            <b>Class</b>: {item.class_id}
                                        </p>
                                        <p>
                                            <b>Course</b>: {item.name_course}
                                        </p>
                                        <p>
                                            <b>Lesson</b>: {item.lesson}
                                        </p>
                                        <p>
                                            <b>Room</b>: {item.room}
                                        </p>
                                        <p>
                                            <b>Teacher</b>: {item.teacher}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block class">
                            {tag[moment(getDayInWeek(dayNow, 3)).format('YYYY-MM-DD')] &&
                                tag[moment(getDayInWeek(dayNow, 3)).format('YYYY-MM-DD')].map((item, index) => (
                                    <div
                                        key={index}
                                        className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block__tag"
                                    >
                                        <p>
                                            <b>Class</b>: {item.class_id}
                                        </p>
                                        <p>
                                            <b>Course</b>: {item.name_course}
                                        </p>
                                        <p>
                                            <b>Lesson</b>: {item.lesson}
                                        </p>
                                        <p>
                                            <b>Room</b>: {item.room}
                                        </p>
                                        <p>
                                            <b>Teacher</b>: {item.teacher}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block class">
                            {tag[moment(getDayInWeek(dayNow, 4)).format('YYYY-MM-DD')] &&
                                tag[moment(getDayInWeek(dayNow, 4)).format('YYYY-MM-DD')].map((item, index) => (
                                    <div
                                        key={index}
                                        className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block__tag"
                                    >
                                        <p>
                                            <b>Class</b>: {item.class_id}
                                        </p>
                                        <p>
                                            <b>Course</b>: {item.name_course}
                                        </p>
                                        <p>
                                            <b>Lesson</b>: {item.lesson}
                                        </p>
                                        <p>
                                            <b>Room</b>: {item.room}
                                        </p>
                                        <p>
                                            <b>Teacher</b>: {item.teacher}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block class">
                            {tag[moment(getDayInWeek(dayNow, 5)).format('YYYY-MM-DD')] &&
                                tag[moment(getDayInWeek(dayNow, 5)).format('YYYY-MM-DD')].map((item, index) => (
                                    <div
                                        key={index}
                                        className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block__tag"
                                    >
                                        <p>
                                            <b>Class</b>: {item.class_id}
                                        </p>
                                        <p>
                                            <b>Course</b>: {item.name_course}
                                        </p>
                                        <p>
                                            <b>Lesson</b>: {item.lesson}
                                        </p>
                                        <p>
                                            <b>Room</b>: {item.room}
                                        </p>
                                        <p>
                                            <b>Teacher</b>: {item.teacher}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block class">
                            {tag[moment(getDayInWeek(dayNow, 6)).format('YYYY-MM-DD')] &&
                                tag[moment(getDayInWeek(dayNow, 6)).format('YYYY-MM-DD')].map((item, index) => (
                                    <div
                                        key={index}
                                        className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block__tag"
                                    >
                                        <p>
                                            <b>Class</b>: {item.class_id}
                                        </p>
                                        <p>
                                            <b>Course</b>: {item.name_course}
                                        </p>
                                        <p>
                                            <b>Lesson</b>: {item.lesson}
                                        </p>
                                        <p>
                                            <b>Room</b>: {item.room}
                                        </p>
                                        <p>
                                            <b>Teacher</b>: {item.teacher}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block class">
                            {tag[moment(getDayInWeek(dayNow, 7)).format('YYYY-MM-DD')] &&
                                tag[moment(getDayInWeek(dayNow, 7)).format('YYYY-MM-DD')].map((item, index) => (
                                    <div
                                        key={index}
                                        className="profile__info__profile-tab-cont__content__card__body__calendar__body__grid__block__tag"
                                    >
                                        <p>
                                            <b>Class</b>: {item.class_id}
                                        </p>
                                        <p>
                                            <b>Course</b>: {item.name_course}
                                        </p>
                                        <p>
                                            <b>Lesson</b>: {item.lesson}
                                        </p>
                                        <p>
                                            <b>Room</b>: {item.room}
                                        </p>
                                        <p>
                                            <b>Teacher</b>: {item.teacher}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Schedule;
