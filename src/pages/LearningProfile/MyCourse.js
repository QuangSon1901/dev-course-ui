import moment from 'moment/moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDayInWeek, getNextWeek, getPrevWeek } from '~/utils/dateEvent';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';
import getSrcYoutube from '~/utils/youtubeUrl';
import { useParams } from 'react-router-dom';
import Schedule from '~/components/Schedule';

const MyCourse = () => {
    const params = useParams();
    const [dayNow, setDayNow] = useState(new Date());
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [dataCalendar, setDataCalendar] = useState({});
    const [collapse, setCollapse] = useState({});
    const [scheduleLoading, setScheduleLoading] = useState(false);

    useEffect(() => {
        const fetchdata = async () => {
            const token = storage.get(process.env.REACT_APP_TOKEN);
            if (!token) return;

            try {
                const res = await httpRequest.get('/me/learning/class/' + params.class, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.success === 'success') {
                    setData(res);
                }
            } catch (error) {}
        };

        fetchdata();
    }, [params]);

    useEffect(() => {
        const fetchSchedule = async () => {
            const token = storage.get(process.env.REACT_APP_TOKEN);
            if (!token) return;
            setScheduleLoading(true);
            try {
                const res = await httpRequest.get('/me/learning/schedule/' + params.class, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        date_start: moment(getDayInWeek(dayNow, 1)).format('DD-MM-YYYY'),
                        date_end: moment(getDayInWeek(dayNow, 7)).format('DD-MM-YYYY'),
                    },
                });

                if (res.success === 'success') {
                    setScheduleLoading(false);
                    setDataCalendar(res);
                }
            } catch (error) {
                setScheduleLoading(false);
            }
        };

        fetchSchedule();
    }, [dayNow, params]);

    return (
        <div className="profile__info bg-second">
            <div className="container">
                <div className="profile__info__header">
                    <h3 className="profile__info__header__title">{`${data.class && data.class.name_course} | ${
                        data.class && data.class.class_id
                    }`}</h3>
                    <ul className="breadcrumb"></ul>
                </div>

                <div className="profile__info__profile-tab-cont">
                    <div className="profile__info__profile-tab-cont__content">
                        <div>
                            <div className="profile__info__profile-tab-cont__content__card">
                                <div
                                    className="profile__info__profile-tab-cont__content__card__body"
                                    style={{ maxHeight: '554px' }}
                                >
                                    <iframe
                                        src={getSrcYoutube('https://www.youtube.com/watch?v=red9YvYlPWg')}
                                        id="iframe_video"
                                        width="100%"
                                        height="500px"
                                        title="trailer"
                                        className="profile__info__profile-tab-cont__content__card__body__media"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="profile__info__profile-tab-cont__content__card">
                                <div
                                    className="profile__info__profile-tab-cont__content__card__body"
                                    style={{ maxHeight: '554px', overflow: 'hidden' }}
                                >
                                    <h5>
                                        <span>My Courses</span>
                                        <button className="view-all-link">
                                            <p>View All</p>
                                        </button>
                                    </h5>
                                    <ul
                                        className="course__container__content__body__course-list"
                                        style={{ maxHeight: '465px', overflow: 'hidden', overflowY: 'overlay' }}
                                    >
                                        {data.class &&
                                            data.class.units.length > 0 &&
                                            data.class.units.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={`course__container__content__body__course-list__item ${
                                                        collapse[item.id] === true
                                                            ? ''
                                                            : 'course__container__content__body__course-list__item--active'
                                                    }`}
                                                    onClick={() => setCollapse({ [item.id]: !collapse[item.id] })}
                                                >
                                                    <div className="course__container__content__body__course-list__item__header">
                                                        <div>
                                                            <i className="bx bx-plus"></i>
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <span>{item.total_lecture} lectures</span>
                                                    </div>
                                                    <div className="course__container__content__body__course-list__item__collapse">
                                                        {item.lectures.length > 0 &&
                                                            item.lectures.map((lecture, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="course__container__content__body__course-list__item__collapse__item"
                                                                >
                                                                    <div>
                                                                        <i className="bx bx-right-arrow-alt"></i>
                                                                        <span>{lecture.name}</span>
                                                                    </div>
                                                                    <span></span>
                                                                </div>
                                                            ))}
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile__info__profile-tab-cont__content" style={{ gridTemplateColumns: '1fr' }}>
                        <div>
                            <div className="profile__info__profile-tab-cont__content__card">
                                <div className="profile__info__profile-tab-cont__content__card__body">
                                    <h5>
                                        <span>Calendar by class "{data.class && data.class.class_id}"</span>
                                        <button className="view-all-link">
                                            <p></p>
                                        </button>
                                    </h5>
                                    <Schedule
                                        dataCalendar={dataCalendar}
                                        dayNow={dayNow}
                                        handleDayNow={setDayNow}
                                        loading={scheduleLoading}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCourse;
