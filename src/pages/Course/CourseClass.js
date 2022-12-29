import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import InputCustom from '~/components/InputCustom';
import { authSelector } from '~/redux/selector';
import * as httpRequest from '~/utils/httpRequest';

const CourseClass = ({ data }) => {
    const navigate = useNavigate();
    const { user } = useSelector(authSelector);
    const [classes, setClasses] = useState([]);

    const onEnroll = (active, classID) => {
        if (active) {
            navigate({
                pathname: '/me/learning/my-course/' + classID,
            });
        } else {
            navigate({
                pathname: '/checkout/course/' + data.slug,
                search: `?class=${classID}`,
            });
        }
    };

    useEffect(() => {
        if (data.form_of_learning !== 'Offline') return;

        const fetchClass = async () => {
            try {
                const userID = user ? user.id : -1;
                const res = await httpRequest.get('/course/class/' + data.slug, {
                    params: {
                        user: userID,
                    },
                });
                if (res.success === 'success') setClasses(res.classes);
            } catch (error) {}
        };

        fetchClass();
    }, [data]);

    return (
        <div className="course__container__content__body__opening-schedule">
            <ul className="course__container__content__body__ul">
                <li>
                    <span>Học phí</span>{' '}
                    <span>
                        : <b>${data.price}</b>
                    </span>
                </li>
                <li>
                    <span>Ghi chú</span>{' '}
                    <span>
                        : <b>Học viên sẽ làm bài kiểm tra trực tiếp tại phòng máy thực hành</b>
                    </span>
                </li>
            </ul>
            <div id="opening-schedule" className="course__container__content__body__opening-schedule__table">
                <div className="course__container__content__body__opening-schedule__table__header">
                    <div className="course__container__content__body__opening-schedule__table__row">
                        <div className="course__container__content__body__opening-schedule__table__row__content">
                            <div className="course__container__content__body__opening-schedule__table__row__content__row">
                                <div>Mã lớp</div>
                                <div>Tiết học</div>
                                <div>Ngày khai giảng</div>
                                <div>Ngày kết thúc</div>
                                <div>Địa chỉ</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course__container__content__body__opening-schedule__table__body">
                    {classes.length > 0 &&
                        classes.map((classItem, index) => (
                            <div key={index} className="course__container__content__body__opening-schedule__table__row">
                                <div className="course__container__content__body__opening-schedule__table__row__content">
                                    <div className="course__container__content__body__opening-schedule__table__row__content__row course__container__content__body__opening-schedule__table__row__content__mobile">
                                        <div>Mã lớp</div>
                                        <div>Tiết học</div>
                                        <div>Ngày khai giảng</div>
                                        <div>Ngày kết thúc</div>
                                        <div>Địa chỉ</div>
                                        <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden"></div>
                                    </div>
                                    <div className="course__container__content__body__opening-schedule__table__row__content__row">
                                        <div>{classItem.class_id}</div>
                                        <div>
                                            {classItem.weekdays} {classItem.time}
                                        </div>
                                        <div>{classItem.opening_day}</div>
                                        <div>{classItem.estimated_end_time}</div>
                                        <div>{classItem.address}</div>
                                        <div className="course__container__content__body__opening-schedule__table__row__mobile-hidden">
                                            <InputCustom
                                                onClick={() => onEnroll(classItem.active, classItem.class_id)}
                                                typeComp="button"
                                                width="w-100 "
                                                classComp={`${classItem.active ? '' : 'primary'} sm`}
                                                className="fl-1"
                                                value={classItem.active ? 'View Class' : 'Enroll Now'}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="course__container__content__body__opening-schedule__table__row__mobile-show">
                                    <div>
                                        <InputCustom
                                            onClick={() => onEnroll(classItem.active, classItem.class_id)}
                                            typeComp="button"
                                            width="w-50"
                                            classComp={`${classItem.active ? '' : 'primary'} sm`}
                                            className="fl-1"
                                            value={classItem.active ? 'View Class' : 'Enroll Now'}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CourseClass;
