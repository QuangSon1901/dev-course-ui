import React, { useEffect } from 'react';
import { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import images from '~/assets/images';
import Button from '~/components/Button';
import { CardItem } from '~/components/Card';
import Grid from '~/components/Grid';
import Hero from '~/components/Hero';
import Section, { SectionBody, SectionTitle } from '~/components/Section';
import * as httpRequest from '~/utils/httpRequest';

const Home = () => {
    const [newCourses, setNewCourses] = useState([]);

    useEffect(() => {
        if (newCourses.length > 0) return;
        const fetchListNewCourse = async () => {
            try {
                const res = await httpRequest.get('/courses');
                setNewCourses(res);
            } catch (error) {}
        };
        fetchListNewCourse();
    }, []);
    return (
        <>
            <Hero />
            <div className="home__section-support bg-second">
                <Section>
                    <SectionTitle
                        title="Học tốt hơn với sự hỗ trợ trong suốt quá trình"
                        desc="Học tốt hơn với sự hỗ trợ trong suốt quá trình"
                    />
                    <div className="container">
                        <SectionBody>
                            <div className="section-support">
                                <Grid col={4} mdCol={2} smCol={1} gap={50} className="section-support__list">
                                    <div className="section-support__list__item">
                                        <div className="section-support__list__item__img">
                                            <img src={images.iconSupport} alt="" />
                                        </div>
                                        <div className="section-support__list__item__body">
                                            <div className="section-support__list__item__body__title">Hỗ trợ 24/7</div>
                                            <div className="section-support__list__item__body__desc">
                                                Mạng lưới hơn 1400 cố vấn của chúng tôi luôn sẵn sàng để giúp bạn đi
                                                đúng hướng.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-support__list__item">
                                        <div className="section-support__list__item__img">
                                            <img src={images.iconResponseTime} alt="" />
                                        </div>
                                        <div className="section-support__list__item__body">
                                            <div className="section-support__list__item__body__title">
                                                Trả lời nhanh nhất trong vòng 1h
                                            </div>
                                            <div className="section-support__list__item__body__desc">
                                                Luôn không bị chặn với câu trả lời cho tất cả các câu hỏi của bạn trong
                                                1 giờ hoặc ít hơn.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-support__list__item">
                                        <div className="section-support__list__item__img">
                                            <img src={images.iconHighlyVetted} alt="" />
                                        </div>
                                        <div className="section-support__list__item__body">
                                            <div className="section-support__list__item__body__title">
                                                Được kiểm tra kỹ lưỡng
                                            </div>
                                            <div className="section-support__list__item__body__desc">
                                                Các cố vấn của chúng tôi hoàn thành quy trình tuyển dụng gồm 5 bước và
                                                thường là chính họ là một chương trình Nanodegree.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-support__list__item">
                                        <div className="section-support__list__item__img">
                                            <img src={images.iconFeedback} alt="" />
                                        </div>
                                        <div className="section-support__list__item__body">
                                            <div className="section-support__list__item__body__title">
                                                Phản hồi được cá nhân hóa
                                            </div>
                                            <div className="section-support__list__item__body__desc">
                                                Người cố vấn cá nhân đánh giá các bài nộp dự án, từng dòng một, dựa trên
                                                một phiếu đánh giá.
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </SectionBody>
                    </div>
                </Section>
            </div>

            <div className="home__new-courses bg-main">
                <Section>
                    <SectionTitle
                        title="Khoá học lập trình vừa ra mắt"
                        desc="Các khóa học lập trình online vừa được DevIT ra mắt"
                    />
                    <div className="container">
                        <SectionBody>
                            <ScrollContainer horizontal vertical={false} className="card">
                                {newCourses.map((item) => (
                                    <CardItem
                                        key={item.id}
                                        name={item.name}
                                        image={item.image}
                                        slug={item.slug}
                                        to={'course/' + item.slug}
                                    />
                                ))}
                            </ScrollContainer>
                        </SectionBody>
                        {/* <Button primaryOutline medium>
                            Xem thêm
                        </Button> */}
                    </div>
                </Section>
            </div>

            <div className="home__new-courses bg-second">
                <Section>
                    <SectionTitle
                        title="Khoá học lập trình vừa ra mắt"
                        desc="Các khóa học lập trình online vừa được DevIT ra mắt"
                    />
                    <div className="container">
                        <SectionBody>
                            <ScrollContainer horizontal vertical={false} className="card">
                                {newCourses.map((item) => (
                                    <CardItem
                                        key={item.id}
                                        name={item.name}
                                        image={item.image}
                                        slug={item.slug}
                                        to={'course/' + item.slug}
                                    />
                                ))}
                            </ScrollContainer>
                        </SectionBody>
                        {/* <Button primaryOutline medium>
                            Xem thêm
                        </Button> */}
                    </div>
                </Section>
            </div>

            <div className="home__new-courses bg-main">
                <Section>
                    <SectionTitle
                        title="Khoá học lập trình vừa ra mắt"
                        desc="Các khóa học lập trình online vừa được DevIT ra mắt"
                    />
                    <div className="container">
                        <SectionBody>
                            <ScrollContainer horizontal vertical={false} className="card">
                                {newCourses.map((item) => (
                                    <CardItem
                                        key={item.id}
                                        name={item.name}
                                        image={item.image}
                                        slug={item.slug}
                                        to={'course/' + item.slug}
                                    />
                                ))}
                            </ScrollContainer>
                        </SectionBody>
                        {/* <Button primaryOutline medium>
                            Xem thêm
                        </Button> */}
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Home;
