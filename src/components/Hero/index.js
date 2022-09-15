import React, { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import images from '~/assets/images';
import Button from '~/components/Button';

const slider = [
    {
        id: uuidv4(),
        title: 'Trở thành Fullstack sau 6 tháng',
        desc: 'Chúng tôi giúp bạn học lập trình Fullstack đi làm chỉ từ sau 6 tháng thay vì học mò mẫm không có hiệu quả',
    },
    {
        id: uuidv4(),
        title: 'Lập trình Frontend chuyên nghiệp',
        desc: 'Nắm rõ được 3 ngôn ngữ chính: HTML, CSS và Javascript. Rèn luyện khả năng lập trình giao diện chuẩn SEO',
    },
    {
        id: uuidv4(),
        title: 'Lập trình Backend chuyên nghiệp',
        desc: 'Hiểu về lập trình Backend, rèn luyện kỹ năng logic, giao tiếp trực tiếp Database, xử lý API...',
    },
];

const Hero = () => {
    const [slideActive, setSlideActive] = useState(0);
    const [slidePlay, setSlidePlay] = useState(false);

    const sliderRef = useRef(null);

    const nextSlide = useCallback(() => {
        const index = slideActive + 1 === slider.length ? 0 : slideActive + 1;
        setSlideActive(index);
    });

    useEffect(() => {
        let autoSlider;
        if (slidePlay === true) {
            autoSlider = setInterval(() => nextSlide(), 5000);
        }

        sliderRef.current.addEventListener('mouseover', () => setSlidePlay(false));
        sliderRef.current.addEventListener('mouseleave', () => setSlidePlay(false));

        return () => {
            clearInterval(autoSlider);
        };
    }, [nextSlide, slidePlay]);

    const handleControllSlide = (index) => {
        setSlideActive(index);
    };

    return (
        <div className="hero bg-main">
            <div className="hero__body container">
                <div ref={sliderRef} className="hero__body__slider">
                    {slider.map((item, index) => (
                        <HeroItem item={item} key={index} active={index === slideActive} />
                    ))}
                    <div className="hero__body__slider__controll">
                        {slider.map((item, index) => (
                            <span
                                key={index}
                                className={`${slideActive === index ? 'active' : ''}`}
                                onClick={() => handleControllSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="hero__body__images">
                    <div>
                        <img src={images.heroImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeroItem = (props) => {
    return (
        <div className={`hero__body__slider__slide ${props.active ? 'active' : ''}`}>
            <h1 className="hero__body__slider__slide__title">{props.item.title}</h1>
            <p className="hero__body__slider__slide__desc">{props.item.desc}</p>
            <div className="hero__body__slider__slide__group-btn">
                <Button primary>Đăng ký ngay</Button>
                <Button>Xem thêm</Button>
            </div>
        </div>
    );
};

export default Hero;
