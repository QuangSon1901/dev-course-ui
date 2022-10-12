import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { CardItem } from '~/components/Card';
import Hero from '~/components/Hero';
import Section, { SectionBody, SectionTitle } from '~/components/Section';

const Home = () => {
    return (
        <>
            <Hero />
            <div className="home__new-courses">
                <Section>
                    <SectionTitle>KHÓA HỌC LẬP TRÌNH VỪA RA MẮT</SectionTitle>
                    <div className="container">
                        <SectionBody>
                            <ScrollContainer hideScrollbars={false} horizontal vertical={false} className="card">
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                                <CardItem />
                            </ScrollContainer>
                        </SectionBody>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Home;
