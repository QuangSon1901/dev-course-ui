import React, { useEffect } from 'react';
import { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import images from '~/assets/images';
import { CardItem } from '~/components/Card';
import Grid from '~/components/Grid';
import Hero from '~/components/Hero';
import Section, { SectionBody, SectionTitle } from '~/components/Section';
import Skeleton from '~/components/Skeleton';
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
                            {newCourses.length === 0 ? (
                                <Skeleton width={1326} height={411}>
                                    <rect x="10" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="30" y="165" rx="8" ry="8" width="100" height="18" />
                                    <rect x="30" y="200" rx="8" ry="8" width="230" height="50" />
                                    <rect x="30" y="306" rx="8" ry="8" width="230" height="18" />
                                    <rect x="30" y="338" rx="8" ry="8" width="230" height="18" />
                                    <rect x="310" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="330" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="330" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="330" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="330" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="610" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="630" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="630" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="630" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="630" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="910" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="930" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="930" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="930" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="930" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1210" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="1230" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="1230" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="1230" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1230" y="339" rx="8" ry="8" width="230" height="18" />
                                </Skeleton>
                            ) : (
                                <ScrollContainer hideScrollbars={false} horizontal vertical={false} className="card">
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
                            )}
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
                        title="Các khóa học nổi bật cho ReactJS"
                        desc="Các khóa học lập trình ReactJS nổi bậc được nhiều người yêu thích"
                    />
                    <div className="container">
                        <SectionBody>
                            {newCourses.length === 0 ? (
                                <Skeleton width={1326} height={411} backgroundColor="#ccc" foregroundColor="#f5f5f5">
                                    <rect x="10" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="30" y="165" rx="8" ry="8" width="100" height="18" />
                                    <rect x="30" y="200" rx="8" ry="8" width="230" height="50" />
                                    <rect x="30" y="306" rx="8" ry="8" width="230" height="18" />
                                    <rect x="30" y="338" rx="8" ry="8" width="230" height="18" />
                                    <rect x="310" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="330" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="330" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="330" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="330" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="610" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="630" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="630" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="630" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="630" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="910" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="930" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="930" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="930" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="930" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1210" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="1230" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="1230" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="1230" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1230" y="339" rx="8" ry="8" width="230" height="18" />
                                </Skeleton>
                            ) : (
                                <ScrollContainer hideScrollbars={false} horizontal vertical={false} className="card">
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
                            )}
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
                        title="Các khóa học nổi bật cho Python"
                        desc="Các khóa học lập trình Python nổi bậc được nhiều người yêu thích"
                    />
                    <div className="container">
                        <SectionBody>
                            {newCourses.length === 0 ? (
                                <Skeleton width={1326} height={411}>
                                    <rect x="10" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="30" y="165" rx="8" ry="8" width="100" height="18" />
                                    <rect x="30" y="200" rx="8" ry="8" width="230" height="50" />
                                    <rect x="30" y="306" rx="8" ry="8" width="230" height="18" />
                                    <rect x="30" y="338" rx="8" ry="8" width="230" height="18" />
                                    <rect x="310" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="330" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="330" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="330" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="330" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="610" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="630" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="630" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="630" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="630" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="910" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="930" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="930" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="930" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="930" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1210" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="1230" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="1230" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="1230" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1230" y="339" rx="8" ry="8" width="230" height="18" />
                                </Skeleton>
                            ) : (
                                <ScrollContainer hideScrollbars={false} horizontal vertical={false} className="card">
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
                            )}
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
                        title="Top các khoá học về phát triển phần mềm"
                        desc="Các khóa học về phát triển phần mềm nổi bậc được nhiều người yêu thích"
                    />
                    <div className="container">
                        <SectionBody>
                            {newCourses.length === 0 ? (
                                <Skeleton width={1326} height={411}>
                                    <rect x="10" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="30" y="165" rx="8" ry="8" width="100" height="18" />
                                    <rect x="30" y="200" rx="8" ry="8" width="230" height="50" />
                                    <rect x="30" y="306" rx="8" ry="8" width="230" height="18" />
                                    <rect x="30" y="338" rx="8" ry="8" width="230" height="18" />
                                    <rect x="310" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="330" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="330" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="330" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="330" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="610" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="630" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="630" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="630" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="630" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="910" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="930" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="930" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="930" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="930" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1210" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="1230" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="1230" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="1230" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1230" y="339" rx="8" ry="8" width="230" height="18" />
                                </Skeleton>
                            ) : (
                                <ScrollContainer hideScrollbars={false} horizontal vertical={false} className="card">
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
                            )}
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
                        title="Top các khoá học về IT & Software"
                        desc="Các khóa học về IT & Software nổi bậc được nhiều người yêu thích"
                    />
                    <div className="container">
                        <SectionBody>
                            {newCourses.length === 0 ? (
                                <Skeleton width={1326} height={411}>
                                    <rect x="10" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="30" y="165" rx="8" ry="8" width="100" height="18" />
                                    <rect x="30" y="200" rx="8" ry="8" width="230" height="50" />
                                    <rect x="30" y="306" rx="8" ry="8" width="230" height="18" />
                                    <rect x="30" y="338" rx="8" ry="8" width="230" height="18" />
                                    <rect x="310" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="330" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="330" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="330" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="330" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="610" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="630" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="630" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="630" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="630" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="910" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="930" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="930" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="930" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="930" y="339" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1210" y="11" rx="8" ry="8" width="270" height="130" />
                                    <rect x="1230" y="166" rx="8" ry="8" width="100" height="18" />
                                    <rect x="1230" y="201" rx="8" ry="8" width="230" height="50" />
                                    <rect x="1230" y="307" rx="8" ry="8" width="230" height="18" />
                                    <rect x="1230" y="339" rx="8" ry="8" width="230" height="18" />
                                </Skeleton>
                            ) : (
                                <ScrollContainer hideScrollbars={false} horizontal vertical={false} className="card">
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
                            )}
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
