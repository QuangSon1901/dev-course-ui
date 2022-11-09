import React from 'react';
import { useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';
import { useState } from 'react';
import Skeleton from '~/components/Skeleton';
import Schedule from '~/components/Schedule';
import moment from 'moment';
import { getDayInWeek } from '~/utils/dateEvent';

const LearningProfile = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [dayNow, setDayNow] = useState(new Date());
    const [dataCalendar, setDataCalendar] = useState({});
    const [scheduleLoading, setScheduleLoading] = useState(false);

    useEffect(() => {
        const fetchdata = async () => {
            const token = storage.get(process.env.REACT_APP_TOKEN);
            if (!token) return;

            try {
                const res = await httpRequest.get('/me/learning', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.success === 'success') {
                    setData(res);
                    setLoading(false);
                }
            } catch (error) {}
        };

        fetchdata();
    }, []);

    useEffect(() => {
        const fetchSchedule = async () => {
            const token = storage.get(process.env.REACT_APP_TOKEN);
            if (!token) return;
            setScheduleLoading(true);
            try {
                const res = await httpRequest.get('/me/learning/schedule', {
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
    }, [dayNow]);

    return (
        <div className="profile__info bg-second">
            <div className="container">
                <div className="profile__info__header">
                    <h3 className="profile__info__header__title">Learning</h3>
                    <ul className="breadcrumb"></ul>
                </div>

                {loading && (
                    <Skeleton backgroundColor="#ddd" foregroundColor="#fff" width="100%" height="100vh">
                        <rect x="0" y="0" rx="10" ry="10" width="25%" height="110" />
                        <rect x="27%" y="0" rx="10" ry="10" width="25%" height="110" />
                        <rect x="54%" y="0" rx="10" ry="10" width="25%" height="110" />
                        <rect x="81%" y="0" rx="10" ry="10" width="25%" height="110" />
                        <rect x="0" y="20%" rx="10" ry="10" width="100%" height="70%" />
                    </Skeleton>
                )}

                {!loading && (
                    <>
                        <div className="profile__learning">
                            <div className="profile__learning__card">
                                <div className="profile__learning__card__body">
                                    <div>
                                        <div className="profile__learning__card__body__db-info">
                                            <h6>My Class</h6>
                                            <h3>
                                                {data.total_course && data.total_course < 10
                                                    ? '0' + data.total_course
                                                    : data.total_course}
                                            </h3>
                                        </div>
                                        <div className="profile__learning__card__body__db-icon">
                                            <img src={images.iconTeacher1} alt="Dashboard Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile__learning__card">
                                <div className="profile__learning__card__body">
                                    <div>
                                        <div className="profile__learning__card__body__db-info">
                                            <h6>Wish list</h6>
                                            <h3>
                                                {data.total_wish_course && data.total_wish_course < 10
                                                    ? '0' + data.total_wish_course
                                                    : data.total_wish_course}
                                            </h3>
                                        </div>
                                        <div className="profile__learning__card__body__db-icon">
                                            <img src={images.iconTeacher2} alt="Dashboard Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile__learning__card">
                                <div className="profile__learning__card__body">
                                    <div>
                                        <div className="profile__learning__card__body__db-info">
                                            <h6>Certificate</h6>
                                            <h3>02</h3>
                                        </div>
                                        <div className="profile__learning__card__body__db-icon">
                                            <img src={images.iconStudent2} alt="Dashboard Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile__learning__card">
                                <div className="profile__learning__card__body">
                                    <div>
                                        <div className="profile__learning__card__body__db-info">
                                            <h6>Test Passed</h6>
                                            <h3>15</h3>
                                        </div>
                                        <div className="profile__learning__card__body__db-icon">
                                            <img src={images.iconStudent1} alt="Dashboard Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile__info__profile-tab-cont">
                            <Content
                                data={data}
                                dataCalendar={dataCalendar}
                                setDayNow={setDayNow}
                                scheduleLoading={scheduleLoading}
                                dayNow={dayNow}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const Content = ({ data, dataCalendar, setDayNow, scheduleLoading, dayNow }) => {
    return (
        <>
            <div className="profile__info__profile-tab-cont__content">
                <div>
                    <div className="profile__info__profile-tab-cont__content__card">
                        <div className="profile__info__profile-tab-cont__content__card__body">
                            <h5>
                                <span>My Class</span>
                                <button className="view-all-link">
                                    <p>View All</p>
                                </button>
                            </h5>
                            <div className="profile__info__profile-tab-cont__content__card__body__courses">
                                <ScrollContainer
                                    hideScrollbars={false}
                                    horizontal
                                    vertical={false}
                                    className="profile__info__profile-tab-cont__content__card__body__courses__scroll"
                                >
                                    {data.courses &&
                                        data.courses.length > 0 &&
                                        data.courses.map((item, index) => (
                                            <div key={index}>
                                                <Link to={`/me/learning/my-course/${item.class_id}`}>
                                                    <div className="profile__info__profile-tab-cont__content__card__body__courses__card">
                                                        <div
                                                            className="profile__info__profile-tab-cont__content__card__body__courses__card__media"
                                                            style={{
                                                                backgroundImage: `url('${
                                                                    item.image &&
                                                                    process.env.REACT_APP_BASE_URL_FILE_UPLOAD +
                                                                        item.image
                                                                }')`,
                                                            }}
                                                        >
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__media__overlay"></div>
                                                            <span className="profile__info__profile-tab-cont__content__card__body__courses__card__media__icon-play"></span>
                                                        </div>
                                                        <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body">
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__top">
                                                                {item.name}
                                                            </div>
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__mid">
                                                                <div> {item.total_unit} units</div>
                                                                <div>&#160;·&#160;</div>
                                                                <div> {item.total_lecture} lectures </div>
                                                            </div>
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__bottom">
                                                                <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__bottom__teacher">
                                                                    {item.teacher}
                                                                </div>
                                                                <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__bottom__price">
                                                                    <i className="bx bxs-check-square"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                </ScrollContainer>
                            </div>
                        </div>
                    </div>
                    <div className="profile__info__profile-tab-cont__content__card">
                        <div className="profile__info__profile-tab-cont__content__card__body">
                            <h5>
                                <span>Wish List</span>
                                <button className="view-all-link" href="/">
                                    <p>View All</p>
                                </button>
                            </h5>
                            <div className="profile__info__profile-tab-cont__content__card__body__courses">
                                <ScrollContainer
                                    hideScrollbars={false}
                                    horizontal
                                    vertical={false}
                                    className="profile__info__profile-tab-cont__content__card__body__courses__scroll"
                                >
                                    {data.wish_courses &&
                                        data.wish_courses.length > 0 &&
                                        data.wish_courses.map((item, index) => (
                                            <div key={index}>
                                                <Link to={`/course/${item.slug}`}>
                                                    <div className="profile__info__profile-tab-cont__content__card__body__courses__card">
                                                        <div
                                                            className="profile__info__profile-tab-cont__content__card__body__courses__card__media"
                                                            style={{
                                                                backgroundImage: `url('${
                                                                    item.image &&
                                                                    process.env.REACT_APP_BASE_URL_FILE_UPLOAD +
                                                                        item.image
                                                                }')`,
                                                            }}
                                                        >
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__media__overlay"></div>
                                                            <span className="profile__info__profile-tab-cont__content__card__body__courses__card__media__icon-play"></span>
                                                            <span className="profile__info__profile-tab-cont__content__card__body__courses__card__media__icon-heart">
                                                                <i className="bx bxs-heart-circle"></i>
                                                            </span>
                                                        </div>
                                                        <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body">
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__top">
                                                                {item.name}
                                                            </div>
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__mid">
                                                                <div> {item.total_unit} units</div>
                                                                <div>&#160;·&#160;</div>
                                                                <div> {item.total_lecture} lectures </div>
                                                            </div>
                                                            <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__bottom">
                                                                <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__bottom__teacher">
                                                                    ...
                                                                </div>
                                                                <div className="profile__info__profile-tab-cont__content__card__body__courses__card__body__bottom__price">
                                                                    ${item.price}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                </ScrollContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="profile__info__profile-tab-cont__content__card">
                        <div className="profile__info__profile-tab-cont__content__card__body">
                            <h5>
                                <span>Today’s Lesson</span>
                                <button className="view-all-link" href="/">
                                    <p>View All</p>
                                </button>
                            </h5>
                            <div className="profile__info__profile-tab-cont__content__card__body__dash-details">
                                <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity">
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__lesson-imgs">
                                        <i className="bx bx-tv"></i>
                                    </div>
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__views-lesson">
                                        <h5>Class</h5>
                                        <h4>Electrical Engg</h4>
                                    </div>
                                </div>
                                <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity">
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__lesson-imgs">
                                        <i className="bx bx-book-alt"></i>
                                    </div>
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__views-lesson">
                                        <h5>Lessons</h5>
                                        <h4>5 Lessons</h4>
                                    </div>
                                </div>
                                <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity">
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__lesson-imgs">
                                        <i className="bx bx-user"></i>
                                    </div>
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__views-lesson">
                                        <h5>Teacher</h5>
                                        <h4>Quang Son</h4>
                                    </div>
                                </div>
                                <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity">
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__lesson-imgs">
                                        <i className="bx bx-time-five"></i>
                                    </div>
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__views-lesson">
                                        <h5>Time</h5>
                                        <h4>Lessons</h4>
                                    </div>
                                </div>
                                <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity">
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__lesson-imgs">
                                        <i className="bx bx-home-alt-2"></i>
                                    </div>
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__views-lesson">
                                        <h5>Room</h5>
                                        <h4>Room-01</h4>
                                    </div>
                                </div>
                                <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity">
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__lesson-imgs">
                                        <i className="bx bx-location-plus"></i>
                                    </div>
                                    <div className="profile__info__profile-tab-cont__content__card__body__dash-details__lesson-activity__views-lesson">
                                        <h5>Address</h5>
                                        <h4>215 Điện Biên Phủ</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__info__profile-tab-cont__content" style={{ gridTemplateColumns: '1fr' }}>
                <div>
                    <div className="profile__info__profile-tab-cont__content__card">
                        <div className="profile__info__profile-tab-cont__content__card__body">
                            <h5>
                                <span>Calendar</span>
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
        </>
    );
};

export default LearningProfile;
