import React from 'react';
import images from '~/assets/images';
import InputCustom from '~/components/InputCustom';

const PurchaseBadge = ({ data, onEnroll, onModalVideo }) => {
    return (
        <div className="course__container__purchase-badge">
            <div className="course__container__purchase-badge__content">
                <div
                    className="course__container__purchase-badge__content__image"
                    style={{
                        backgroundImage: `url('${
                            (data.image && process.env.REACT_APP_BASE_URL_FILE_UPLOAD + data.image) || images.noImg
                        }')`,
                    }}
                >
                    <div className="course__container__purchase-badge__content__image__toggle-video"></div>
                    <div
                        className="course__container__purchase-badge__content__image__toggle-video__button"
                        onClick={onModalVideo}
                    >
                        <i className="bx bx-play"></i>
                    </div>
                </div>
                <div className="course__container__purchase-badge__content__text">
                    <div className="course__container__purchase-badge__content__text__price">
                        <div className="course__container__purchase-badge__content__text__price__current">
                            ${data.price}
                        </div>
                        <div className="course__container__purchase-badge__content__text__price__original">
                            ${data.price}
                        </div>
                    </div>
                    <div className="course__container__purchase-badge__content__text__btn">
                        <InputCustom
                            onClick={onEnroll}
                            typeComp="button"
                            width="w-100 "
                            classComp={data.active ? 'primary' : 'disable'}
                            className="fl-1"
                            value={data.active ? 'Enroll Now' : 'Coming Soon'}
                        />
                        <InputCustom leftIcon="bx bx-heart" typeComp="button" width="w-auto" />
                    </div>
                    <div className="course__container__purchase-badge__content__text__about">
                        <h3>This course includes:</h3>
                        <ul>
                            <li>
                                <i className="bx bxl-meta"></i>
                                <span>Form of learning: {data.form_of_learning}</span>
                            </li>
                            <li>
                                <i className="bx bx-traffic-cone"></i>
                                <span>{data.level}</span>
                            </li>
                            <li>
                                <i className="bx bx-slideshow"></i>
                                <span>{data.total_sections} sections</span>
                            </li>
                            <li>
                                <i className="bx bx-file-blank"></i>
                                <span>{data.total_lectures} lectures</span>
                            </li>
                            <li>
                                <i className="bx bx-mobile-alt"></i>
                                <span>Access on mobile and TV</span>
                            </li>
                            <li>
                                <i className="bx bx-notepad"></i>
                                <span>Assignments</span>
                            </li>
                            <li>
                                <i className="bx bx-shield"></i>
                                <span>Certificate of completion</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseBadge;
