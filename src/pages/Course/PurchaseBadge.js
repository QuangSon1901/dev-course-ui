import React from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';

const PurchaseBadge = ({ data, onEnroll }) => {
    return (
        <div className="course__container__purchase-badge">
            <div className="course__container__purchase-badge__content">
                <div className="course__container__purchase-badge__content__image">
                    <Image
                        src={(data.image && process.env.REACT_APP_BASE_URL_FILE_UPLOAD + data.image) || ''}
                        fallback={images.noImg}
                        alt=""
                    />
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
                        <Button primary onClick={onEnroll}>
                            Enroll Now
                        </Button>
                        <Button primaryOutline hover={false}>
                            <i className="bx bx-heart"></i>
                        </Button>
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
