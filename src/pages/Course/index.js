import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import { handleScoll } from '~/utils/scrollBody';
import CourseContent from './CourseContent';
import CourseHeader from './CourseHeader';
import CourseSection from './CourseSection';
import CourseTaskbar from './CourseTaskbar';
import PurchaseBadge from './PurchaseBadge';
import * as httpRequest from '~/utils/httpRequest';
import Skeleton from '~/components/Skeleton';

const Course = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [courseData, setCourseData] = useState({});

    const onEnroll = () => {
        if (courseData.form_of_learning !== 'Online') {
            const offsetTop = document.querySelector('.course__container__content__body__opening-schedule').offsetTop;
            return handleScoll(offsetTop);
        }

        navigate('/checkout/course/' + courseData.slug);
    };

    useEffect(() => {
        handleScoll(0, false);

        const fetchCourse = async () => {
            try {
                const res = await httpRequest.get('/course/' + params.slug);
                if (res.success === 'success') setCourseData(res.course);
            } catch (error) {}
        };

        fetchCourse();
    }, [params.slug]);
    return (
        <div className="course">
            <div className="course__container">
                <div className="container">
                    {Object.keys(courseData).length === 0 && (
                        <>
                            <Skeleton width={'100%'} height={560}>
                                <rect x="0" y="0" rx="8" ry="8" width="45%" height="20" />
                                <rect x="0" y="40" rx="8" ry="8" width="50%" height="36" />
                                <rect x="0" y="90" rx="8" ry="8" width="95%" height="40" />
                                <rect x="0" y="150" rx="8" ry="8" width="45%" height="60" />
                                <rect x="0" y="250" rx="8" ry="8" width="100%" height="190" />
                            </Skeleton>
                            <Skeleton width={'100%'} height={560}>
                                <rect x="0" y="0" rx="8" ry="8" width="100%" height="200" />
                                <rect x="107" y="216" rx="8" ry="8" width="50%" height="50" />
                                <rect x="107" y="280" rx="8" ry="8" width="50%" height="50" />
                            </Skeleton>
                        </>
                    )}
                    {Object.keys(courseData).length > 0 && (
                        <>
                            <div className="course__container__content">
                                <CourseHeader data={courseData} />
                                <CourseBody data={courseData} />
                            </div>
                            <PurchaseBadge data={courseData} onEnroll={onEnroll} />
                        </>
                    )}
                </div>
            </div>
            {Object.keys(courseData).length > 0 && <CourseTaskbar onEnroll={onEnroll} />}
        </div>
    );
};

const CourseBody = ({ data }) => {
    const [desc, setDesc] = useState(false);
    const handleShowDesc = () => setDesc(!desc);

    return (
        <div className="course__container__content__body">
            <CourseSection title={`What you'll learn`}>
                <ul className="course__container__content__body__learn-list">
                    {data.objectives &&
                        data.objectives.map((objective, index) => (
                            <li key={index}>
                                <i className="bx bx-check"></i>
                                <p>{objective}</p>
                            </li>
                        ))}
                </ul>
            </CourseSection>

            <CourseSection title={`Course content`}>
                <CourseContent id={data.id} />
            </CourseSection>

            <CourseSection title={`Description`}>
                <div
                    className={`course__container__content__body__description ${
                        desc && 'course__container__content__body__description--active'
                    }`}
                >
                    <div
                        className="course__container__content__body__description__text"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                    <div className="course__container__content__body__description__show-all" onClick={handleShowDesc}>
                        {desc ? 'Show less' : 'Show more'} <i className="bx bx-chevron-down"></i>
                    </div>
                </div>
            </CourseSection>

            <CourseSection title={`Certificate Of Completion`}>
                <ul className="course__container__content__body__ul">
                    <li>
                        Certificate Of Completion <b>{data.name}</b>
                    </li>
                </ul>
            </CourseSection>

            {data.form_of_learning !== 'Online' && (
                <CourseSection title={`Opening Schedule`}>
                    <div className="course__container__content__body__opening-schedule">
                        <ul className="course__container__content__body__ul">
                            <li>
                                <span>Tuition</span>{' '}
                                <span>
                                    : <b>${data.price}</b>
                                </span>
                            </li>
                            <li>
                                <span>Note</span>{' '}
                                <span>
                                    : <b>Students will take the test directly in the practical machine room</b>
                                </span>
                            </li>
                        </ul>
                        <div
                            id="opening-schedule"
                            className="course__container__content__body__opening-schedule__table"
                        >
                            <div className="course__container__content__body__opening-schedule__table__header">
                                <div className="course__container__content__body__opening-schedule__table__row">
                                    <div className="course__container__content__body__opening-schedule__table__row__content">
                                        <div className="course__container__content__body__opening-schedule__table__row__content__row">
                                            <div>Class ID</div>
                                            <div>Time</div>
                                            <div>Opening</div>
                                            <div>Estimated end time</div>
                                            <div>Address</div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course__container__content__body__opening-schedule__table__body">
                                <div className="course__container__content__body__opening-schedule__table__row">
                                    <div className="course__container__content__body__opening-schedule__table__row__content">
                                        <div className="course__container__content__body__opening-schedule__table__row__content__row course__container__content__body__opening-schedule__table__row__content__mobile">
                                            <div>Class ID</div>
                                            <div>Time</div>
                                            <div>Opening</div>
                                            <div>Estimated end time</div>
                                            <div>Address</div>
                                            <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden"></div>
                                        </div>
                                        <div className="course__container__content__body__opening-schedule__table__row__content__row">
                                            <div>UDCB_280C246</div>
                                            <div>2nd, 3rd, 4th (13:30 - 16:45)</div>
                                            <div>07-11-2022</div>
                                            <div>07-02-2023</div>
                                            <div>21-23 Jennie, 5 Dist</div>
                                            <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden">
                                                <Button primary>Enroll Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course__container__content__body__opening-schedule__table__row__mobile-show">
                                        <Button primary>Enroll Now</Button>
                                    </div>
                                </div>
                                <div className="course__container__content__body__opening-schedule__table__row">
                                    <div className="course__container__content__body__opening-schedule__table__row__content">
                                        <div className="course__container__content__body__opening-schedule__table__row__content__row course__container__content__body__opening-schedule__table__row__content__mobile">
                                            <div>Class ID</div>
                                            <div>Time</div>
                                            <div>Opening</div>
                                            <div>Estimated end time</div>
                                            <div>Address</div>
                                            <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden"></div>
                                        </div>
                                        <div className="course__container__content__body__opening-schedule__table__row__content__row">
                                            <div>UDCB_280C246</div>
                                            <div>2nd, 3rd, 4th (13:30 - 16:45)</div>
                                            <div>07-11-2022</div>
                                            <div>07-02-2023</div>
                                            <div>21-23 Jennie, 5 Dist</div>
                                            <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden">
                                                <Button primary>Enroll Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course__container__content__body__opening-schedule__table__row__mobile-show">
                                        <Button primary>Enroll Now</Button>
                                    </div>
                                </div>
                                <div className="course__container__content__body__opening-schedule__table__row">
                                    <div className="course__container__content__body__opening-schedule__table__row__content">
                                        <div className="course__container__content__body__opening-schedule__table__row__content__row course__container__content__body__opening-schedule__table__row__content__mobile">
                                            <div>Class ID</div>
                                            <div>Time</div>
                                            <div>Opening</div>
                                            <div>Estimated end time</div>
                                            <div>Address</div>
                                            <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden"></div>
                                        </div>
                                        <div className="course__container__content__body__opening-schedule__table__row__content__row">
                                            <div>UDCB_280C246</div>
                                            <div>2nd, 3rd, 4th (13:30 - 16:45)</div>
                                            <div>07-11-2022</div>
                                            <div>07-02-2023</div>
                                            <div>21-23 Jennie, 5 Dist</div>
                                            <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden">
                                                <Button primary>Enroll Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course__container__content__body__opening-schedule__table__row__mobile-show">
                                        <Button primary>Enroll Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CourseSection>
            )}

            <CourseSection title={`Featured review`}>
                <ul className="course__container__content__body__review">
                    <li className="course__container__content__body__review__item">
                        <div className="course__container__content__body__review__item__info">
                            <div className="course__container__content__body__review__item__info__avatar">
                                <img src={images.messi} alt="" />
                            </div>
                            <div className="course__container__content__body__review__item__info__body">
                                <h3>Lione Messi</h3>
                                <span>24 courses</span>
                                <span>6 reviews</span>
                            </div>
                        </div>
                        <div className="course__container__content__body__review__item__star">
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                        </div>
                        <div className="course__container__content__body__review__item__comment">
                            Robert is a really good instructor. He has an ability to take complicated concepts and
                            simplify them for both understanding and retention. I highly recommend this course for
                            anyone interested in working with socket.io.
                        </div>
                        <div className="course__container__content__body__review__item__feedback-action">
                            <button className="course__container__content__body__review__item__feedback-action__btn">
                                <i className="bx bx-like"></i>
                            </button>
                            <button className="course__container__content__body__review__item__feedback-action__btn">
                                <i className="bx bx-dislike"></i>
                            </button>
                        </div>
                    </li>
                    <li className="course__container__content__body__review__item">
                        <div className="course__container__content__body__review__item__info">
                            <div className="course__container__content__body__review__item__info__avatar">
                                <img src={images.messi} alt="" />
                            </div>
                            <div className="course__container__content__body__review__item__info__body">
                                <h3>Lione Messi</h3>
                                <span>24 courses</span>
                                <span>6 reviews</span>
                            </div>
                        </div>
                        <div className="course__container__content__body__review__item__star">
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                        </div>
                        <div className="course__container__content__body__review__item__comment">
                            Robert is a really good instructor. He has an ability to take complicated concepts and
                            simplify them for both understanding and retention. I highly recommend this course for
                            anyone interested in working with socket.io.
                        </div>
                        <div className="course__container__content__body__review__item__feedback-action">
                            <button className="course__container__content__body__review__item__feedback-action__btn">
                                <i className="bx bx-like"></i>
                            </button>
                            <button className="course__container__content__body__review__item__feedback-action__btn">
                                <i className="bx bx-dislike"></i>
                            </button>
                        </div>
                    </li>
                    <li className="course__container__content__body__review__item">
                        <div className="course__container__content__body__review__item__info">
                            <div className="course__container__content__body__review__item__info__avatar">
                                <img src={images.messi} alt="" />
                            </div>
                            <div className="course__container__content__body__review__item__info__body">
                                <h3>Lione Messi</h3>
                                <span>24 courses</span>
                                <span>6 reviews</span>
                            </div>
                        </div>
                        <div className="course__container__content__body__review__item__star">
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                            <i className="bx bxs-star "></i>
                        </div>
                        <div className="course__container__content__body__review__item__comment">
                            Robert is a really good instructor. He has an ability to take complicated concepts and
                            simplify them for both understanding and retention. I highly recommend this course for
                            anyone interested in working with socket.io.
                        </div>
                        <div className="course__container__content__body__review__item__feedback-action">
                            <button className="course__container__content__body__review__item__feedback-action__btn">
                                <i className="bx bx-like"></i>
                            </button>
                            <button className="course__container__content__body__review__item__feedback-action__btn">
                                <i className="bx bx-dislike"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </CourseSection>
        </div>
    );
};

export default Course;
