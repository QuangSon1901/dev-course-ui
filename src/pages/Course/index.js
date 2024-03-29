import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import images from '~/assets/images';
import { handleScoll } from '~/utils/scrollBody';
import CourseContent from './CourseContent';
import CourseHeader from './CourseHeader';
import CourseSection from './CourseSection';
import CourseTaskbar from './CourseTaskbar';
import PurchaseBadge from './PurchaseBadge';
import * as httpRequest from '~/utils/httpRequest';
import Skeleton from '~/components/Skeleton';
import { useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';
import CourseClass from './CourseClass';
import ModalVideo, { ModalVideoContent } from '~/components/ModalVideo';
import getSrcYoutube from '~/utils/youtubeUrl';
import { storage } from '~/utils/storage';
import { Loading } from 'notiflix';
import { toast } from 'react-toastify';

const Course = () => {
    const { user } = useSelector(authSelector);
    const navigate = useNavigate();
    const params = useParams();
    const [paramsSearch] = useSearchParams();
    const [courseData, setCourseData] = useState({});
    const [modalVideo, setModalVideo] = useState(false);

    const onEnroll = () => {
        if (courseData.form_of_learning === 'Offline') {
            const offsetTop = document.querySelector('.course__container__content__body__opening-schedule').offsetTop;
            return handleScoll(offsetTop);
        }

        if (courseData.active) {
            navigate({
                pathname: '/view/course/' + courseData.slug,
            });
        } else {
            navigate({
                pathname: '/checkout/course/' + courseData.slug,
                search: `?class=${courseData.class_room[0].id}`,
            });
        }
    };

    const handleOnModalVideo = () => {
        document
            .getElementById('iframe_video')
            .setAttribute('src', getSrcYoutube('https://www.youtube.com/watch?v=red9YvYlPWg'));
        setModalVideo(true);
    };

    const handleCloseModalVideo = () => {
        document.getElementById('iframe_video').setAttribute('src', '');
        setModalVideo(false);
    };

    useEffect(() => {
        handleScoll(0, false);

        const fetchCourse = async () => {
            try {
                const userID = user ? user.id : -1;
                const res = await httpRequest.get('/course/' + params.slug, {
                    params: {
                        user: userID,
                    },
                });
                if (res.success === 'success') setCourseData(res.course);
            } catch (error) {}
        };

        fetchCourse();
    }, [params.slug, user]);

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
                                <CourseBody
                                    data={courseData}
                                    modalVideo={modalVideo}
                                    onCloseModalVideo={handleCloseModalVideo}
                                />
                            </div>
                            <PurchaseBadge data={courseData} onModalVideo={handleOnModalVideo} onEnroll={onEnroll} />
                        </>
                    )}
                </div>
            </div>
            {Object.keys(courseData).length > 0 && <CourseTaskbar onEnroll={onEnroll} data={courseData} />}
        </div>
    );
};

const CourseBody = ({ data, modalVideo, onCloseModalVideo }) => {
    const [desc, setDesc] = useState(false);
    const handleShowDesc = () => setDesc(!desc);

    return (
        <div className="course__container__content__body">
            <CourseSection title={`Bạn sẽ học được gì`}>
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

            <CourseSection title={`Nội dung khóa học`}>
                <CourseContent id={data.id} />
            </CourseSection>

            <CourseSection title={`Mô tả`}>
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

            <CourseSection title={`Chứng chỉ hoàn thành`}>
                <ul className="course__container__content__body__ul">
                    <li>
                        Chứng chỉ hoàn tất <b>{data.name}</b>
                    </li>
                </ul>
            </CourseSection>

            {data.active && (
                <CourseSection title={`Lịch khai giảng`}>
                    <CourseClass data={data} />
                </CourseSection>
            )}

            <CourseSection title={`Đánh giá nổi bật`}>
                <ul className="course__container__content__body__review">
                    <li className="course__container__content__body__review__item">
                        <div className="course__container__content__body__review__item__info">
                            <div className="course__container__content__body__review__item__info__avatar">
                                <img src={images.messi} alt="" />
                            </div>
                            <div className="course__container__content__body__review__item__info__body">
                                <h3>Lione Messi</h3>
                                <span>24 khoá học</span>
                                <span>6 đánh giá</span>
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
                            Robert là một người hướng dẫn thực sự tốt. Anh ấy có khả năng nắm bắt những khái niệm phức
                            tạp và đơn giản hóa chúng cho cả sự hiểu biết và lưu giữ. Tôi đánh giá cao khóa học này cho
                            bất kỳ ai quan tâm đến việc làm việc với socket.io.
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
                                <span>24 khoá học</span>
                                <span>6 đánh giá</span>
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
                            Robert là một người hướng dẫn thực sự tốt. Anh ấy có khả năng nắm bắt những khái niệm phức
                            tạp và đơn giản hóa chúng cho cả sự hiểu biết và lưu giữ. Tôi đánh giá cao khóa học này cho
                            bất kỳ ai quan tâm đến việc làm việc với socket.io.
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
                                <span>24 khoá học</span>
                                <span>6 đánh giá</span>
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
                            Robert là một người hướng dẫn thực sự tốt. Anh ấy có khả năng nắm bắt những khái niệm phức
                            tạp và đơn giản hóa chúng cho cả sự hiểu biết và lưu giữ. Tôi đánh giá cao khóa học này cho
                            bất kỳ ai quan tâm đến việc làm việc với socket.io.
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
            <ModalVideo active={modalVideo} onClose={onCloseModalVideo}>
                <ModalVideoContent onClose={onCloseModalVideo}>
                    <iframe id="iframe_video" width="100%" height="500px" title="trailer"></iframe>
                </ModalVideoContent>
            </ModalVideo>
        </div>
    );
};

export default Course;
