import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Tag from '~/components/Tag';
import { handleScoll } from '~/utils/scrollBody';

const Course = () => {
    const handleScollEnroll = () => {
        const offsetTop = document.querySelector('.course__container__content__body__opening-schedule').offsetTop;
        handleScoll(offsetTop);
    };
    return (
        <div className="course">
            <div className="course__container">
                <div className="container">
                    <div className="course__container__content">
                        <CourseHeader />
                        <CourseBody />
                    </div>
                    <PurchaseBadge onScrollEnroll={handleScollEnroll} />
                </div>
            </div>
            <div className="course__taskbar">
                <div className="container">
                    <div className="course__taskbar__info">
                        <div className="course__taskbar__info__header">
                            React - The Complete Guide (incl Hooks, React Router, Redux)
                        </div>
                        <div className="course__taskbar__info__sub">
                            <Tag />
                            <div className="course__taskbar__info__sub__star-total">4.5</div>
                            <div className="course__taskbar__info__sub__star">
                                <i className="bx bxs-star "></i>
                            </div>
                            <a href="/" className="course__taskbar__info__sub__count-courses">
                                (2022 ratings)
                            </a>
                        </div>
                    </div>
                    <div className="course__taskbar__action">
                        <span>$84.99</span>
                        <Button primary onClick={handleScollEnroll}>
                            Enroll now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CourseHeader = () => {
    return (
        <div className="course__container__content__header">
            <div className="course__container__content__header__breadcumb">
                <a href="/" className="course__container__content__header__breadcumb__link">
                    development
                </a>
                <i className="bx bx-chevron-right"></i>
                <a href="/" className="course__container__content__header__breadcumb__link">
                    programming languages
                </a>
                <i className="bx bx-chevron-right"></i>
                <a href="/" className="course__container__content__header__breadcumb__link">
                    react JS
                </a>
                <i className="bx bx-chevron-right"></i>
            </div>
            <div className="course__container__content__header__name-course">
                React - The Complete Guide (incl Hooks, React Router, Redux)
            </div>
            <div className="course__container__content__header__sub-name-course">
                Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js
                and way more!
            </div>
            <div className="course__container__content__header__preview">
                <Tag />
                <div className="course__container__content__header__preview__star-total">4.5</div>
                <div className="course__container__content__header__preview__star">
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                </div>
                <a href="/" className="course__container__content__header__preview__count-courses">
                    (2022 ratings)
                </a>
            </div>
            <div className="course__container__content__header__teacher">
                By <a href="/">Michael Jackson</a>
            </div>
        </div>
    );
};

const CourseBody = () => {
    const [desc, setDesc] = useState(false);
    const handleShowDesc = () => setDesc(!desc);

    return (
        <div className="course__container__content__body">
            <CourseSection title={`What you'll learn`}>
                <ul className="course__container__content__body__learn-list">
                    <li>
                        <i className="bx bx-check"></i>
                        <p>Build powerful, fast, user-friendly and reactive web apps</p>
                    </li>
                    <li>
                        <i className="bx bx-check"></i>
                        <p>Provide amazing user experiences by leveraging the power of JavaScript with ease</p>
                    </li>
                    <li>
                        <i className="bx bx-check"></i>
                        <p>
                            Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can
                            find in web dev right now
                        </p>
                    </li>
                    <li>
                        <i className="bx bx-check"></i>
                        <p>Learn all about React Hooks and React Components</p>
                    </li>
                </ul>
            </CourseSection>
            <CourseSection title={`Course content`}>
                <CourseContent />
            </CourseSection>
            <CourseSection title={`Description`}>
                <div
                    className={`course__container__content__body__description ${
                        desc && 'course__container__content__body__description--active'
                    }`}
                >
                    <div className="course__container__content__body__description__text">
                        <p>
                            <strong>
                                This course is fully up-to-date with React 18 (the latest version of React&#41;!
                            </strong>
                        </p>
                        <p>
                            <strong>
                                It was completely updated and re-recorded from the ground up - it teaches the very
                                latest version of React with all the core, modern features you need to know!
                            </strong>
                        </p>
                        <p>---</p>
                        <p>
                            This course also comes with <strong>two paths</strong> which you can take:&nbsp;The{' '}
                            <strong>"complete"&nbsp;path</strong> (full &gt;40h course&#41; and the{' '}
                            <strong>"summary"&nbsp;path</strong> (~4h summary module&#41; - you can choose the path that
                            best fits your time requirements!&nbsp;:-&#41;
                        </p>
                        <p>---</p>
                        <p>
                            React.js is <strong>THE most popular JavaScript library</strong> you can use and learn these
                            days to build modern, reactive user interfaces for the web.
                        </p>
                        <p>
                            This course teaches you React in-depth, <strong>from the ground up</strong>, step by step by
                            diving into all the core basics, exploring tons of examples and also introducing you to
                            advanced concepts as well.
                        </p>
                        <p>
                            You'll get{' '}
                            <strong>
                                all the theory, tons of examples and demos, assignments and exercises and tons of
                                important knowledge
                            </strong>{' '}
                            that is skipped by most other resources - after all, there is a reason why this course is
                            that huge! :&#41;
                        </p>
                        <p>
                            And in case you don't even know why you would want to learn React and you're just here
                            because of some ad or "the algorithm" - no worries: ReactJS is a key technology as a web
                            developer and <strong>in this course I will also explain WHY it's that important</strong>!
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            <strong>Welcome to "React - The Complete Guide"!</strong>
                        </p>
                        <p>
                            This course will teach you React.js in a practice-oriented way, using all the latest
                            patterns and best practices you need. You will learn all the key fundamentals as well as
                            advanced concepts and related topics to turn you into a React.js developer.
                        </p>
                        <p>
                            This is a huge course because{' '}
                            <strong>
                                it really covers EVERYTHING you need to know and learn to become a React.js developer!
                            </strong>
                        </p>
                        <p>
                            No matter if you <strong>know nothing about React</strong> or if you already{' '}
                            <strong>got some basic React knowledge</strong> (not required but also not a problem&#41;,
                            you will get <strong>tons of useful information and knowledge out of this course</strong>!
                        </p>
                        <p>
                            My goal with this course is to ensure that you feel confident working with React, so that
                            you can apply for React jobs, use it in your own projects or simply enhance your portfolio
                            as a developer - whatever your goal is: This course gets you there!
                        </p>
                        <p>
                            <br />
                        </p>
                        <p>
                            I originally created this course in 2017 and I have kept it updated since that -{' '}
                            <strong>redoing it from the ground up in 2021</strong>. And of course I'm dedicated to
                            keeping this course up-to-date - so that you can rely on this course to learn React in the
                            best possible way!
                        </p>
                        <p>
                            <strong>What's in this course?</strong>
                        </p>
                        <ul className="course__container__content__body__ul">
                            <li>
                                <p>A thorough introduction to React.js (What is it and why would you use it?&#41;</p>
                            </li>
                            <li>
                                <p>
                                    All the core basics: How React works, building components with React &amp; building
                                    UIs with React
                                </p>
                            </li>
                            <li>
                                <p>Components, props &amp; dynamic data binding</p>
                            </li>
                            <li>
                                <p>Working with user events and state to create interactive applications</p>
                            </li>
                            <li>
                                <p>
                                    A (thorough&#41; look behind the scenes to understand how React works under the hood
                                </p>
                            </li>
                            <li>
                                <p>Detailed explanations on how to work with lists and conditional content</p>
                            </li>
                            <li>
                                <p>React Hooks (in-depth&#41;!</p>
                            </li>
                            <li>
                                <p>Working with built-in Hooks and building custom Hooks</p>
                            </li>
                            <li>
                                <p>How to debug React apps</p>
                            </li>
                            <li>
                                <p>Styling React apps with "Styled Components" and "CSS Modules"</p>
                            </li>
                            <li>
                                <p>Working with "Fragments" &amp; "Portals"</p>
                            </li>
                            <li>
                                <p>Dealing with side effects</p>
                            </li>
                            <li>
                                <p>Class-based components and functional components</p>
                            </li>
                            <li>
                                <p>Sending Http requests &amp; handling transitional states + responses</p>
                            </li>
                            <li>
                                <p>Handling forms and user input (incl. validation&#41;</p>
                            </li>
                            <li>
                                <p>Redux &amp; Redux Toolkit</p>
                            </li>
                            <li>
                                <p>Routing with React Router</p>
                            </li>
                            <li>
                                <p>An in-depth introduction into Next.js</p>
                            </li>
                            <li>
                                <p>Deploying React Apps</p>
                            </li>
                            <li>
                                <p>Implementing Authentication</p>
                            </li>
                            <li>
                                <p>Unit Tests</p>
                            </li>
                            <li>
                                <p>Combining React with TypeScript</p>
                            </li>
                            <li>
                                <p>Adding Animations</p>
                            </li>
                            <li>
                                <p>
                                    Tons of examples and demo projects so that you can apply all the things you learned
                                    in real projects
                                </p>
                            </li>
                            <li>
                                <p>And so much more - check out the full curriculum on this page!</p>
                            </li>
                        </ul>
                        <p>This really is the "Complete Guide" - promised!</p>
                        <p>And best of all?</p>
                        <p>
                            <strong>You don't need any prior React knowledge!</strong>
                        </p>
                        <p>
                            This course starts with zero knowledge assumed!{' '}
                            <strong>All you need is basic web development and JavaScript knowledge</strong> (though the
                            course even <strong>includes a brief JavaScript refresher</strong> to ensure that we're all
                            on the same page!&#41;.
                        </p>
                        <p>
                            <strong>
                                Check out the full curriculum, the free preview videos and join the course risk-free
                                thanks to the 30-day money-back guarantee!
                            </strong>
                        </p>
                    </div>
                    <div className="course__container__content__body__description__show-all" onClick={handleShowDesc}>
                        {desc ? 'Show less' : 'Show more'} <i className="bx bx-chevron-down"></i>
                    </div>
                </div>
            </CourseSection>
            <CourseSection title={`Certificate Of Completion`}>
                <ul className="course__container__content__body__ul">
                    <li>
                        Certificate Of Completion <b>React - The Complete Guide (incl Hooks, React Router, Redux)</b>
                    </li>
                </ul>
            </CourseSection>
            <CourseSection title={`Opening Schedule`}>
                <div className="course__container__content__body__opening-schedule">
                    <ul className="course__container__content__body__ul">
                        <li>
                            <span>Tuition</span>{' '}
                            <span>
                                : <b>$84.9</b>
                            </span>
                        </li>
                        <li>
                            <span>Note</span>{' '}
                            <span>
                                : <b>Students will take the test directly in the practical machine room</b>
                            </span>
                        </li>
                    </ul>
                    <div id="opening-schedule" className="course__container__content__body__opening-schedule__table">
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

const PurchaseBadge = ({ onScrollEnroll }) => {
    return (
        <div className="course__container__purchase-badge">
            <div className="course__container__purchase-badge__content">
                <div className="course__container__purchase-badge__content__image">
                    <img src="https://files.fullstack.edu.vn/f8-prod/courses/3.png" alt="" />
                </div>
                <div className="course__container__purchase-badge__content__text">
                    <div className="course__container__purchase-badge__content__text__price">
                        <div className="course__container__purchase-badge__content__text__price__current">$84.99</div>
                        <div className="course__container__purchase-badge__content__text__price__original">$84.99</div>
                    </div>
                    <div className="course__container__purchase-badge__content__text__btn">
                        <Button primary onClick={() => onScrollEnroll()}>
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
                                <i className="bx bx-slideshow"></i>
                                <span>beginner level</span>
                            </li>
                            <li>
                                <i className="bx bx-file-blank"></i>
                                <span>50 articles</span>
                            </li>
                            <li>
                                <i className="bx bx-download"></i>
                                <span>92 downloadable resources</span>
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

const CourseSection = ({ children, title, more = '' }) => {
    return (
        <div className="course__container__content__body__section">
            <h1 className="course__container__content__body__section__title">
                {title} <span className="course__container__content__body__section__title__more">{more}</span>
            </h1>
            {children}
        </div>
    );
};

const CourseContent = () => {
    const [collapse, setCollapse] = useState({ 0: true });
    const [collapseAll, setCollapseAll] = useState(false);
    const collapseRef = useRef(null);

    const handleCollapse = (event) => setCollapse({ ...collapse, [event.target.id]: !collapse[event.target.id] });

    const handleCollapseAll = () => {
        if (collapseAll === true) {
            setCollapseAll(false);
            setCollapse({});
        } else {
            const liEl = collapseRef.current.querySelectorAll(
                'li > .course__container__content__body__course-list__item__header',
            );

            const listItem = {};

            liEl.forEach((item) => {
                listItem[item.id] = true;
            });

            setCollapse({ ...listItem });
            setCollapseAll(true);
        }
    };
    return (
        <>
            <div className="course__container__content__body__course-header">
                <div className="course__container__content__body__course-header__info">31 sections • 495 lectures</div>
                <div
                    className="course__container__content__body__course-header__open-toggle"
                    onClick={handleCollapseAll}
                >
                    {collapseAll ? 'Collapse all sections' : 'Expand all sections'}
                </div>
            </div>
            <ul ref={collapseRef} className="course__container__content__body__course-list">
                <li
                    className={`course__container__content__body__course-list__item ${
                        !collapse['0'] && 'course__container__content__body__course-list__item--active'
                    }`}
                >
                    <div
                        id="0"
                        className="course__container__content__body__course-list__item__header"
                        onClick={handleCollapse}
                    >
                        <div>
                            {!collapse['0'] ? <i className="bx bx-minus"></i> : <i className="bx bx-plus"></i>}
                            <span>Getting Started</span>
                        </div>
                        <span>3 lessons</span>
                    </div>
                    <div className="course__container__content__body__course-list__item__collapse">
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Welcome To The Course!</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>What is React.js?</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Why React Instead Of "Just JavaScript"?</span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                </li>
                <li
                    className={`course__container__content__body__course-list__item ${
                        !collapse['1'] && 'course__container__content__body__course-list__item--active'
                    }`}
                >
                    <div
                        id="1"
                        className="course__container__content__body__course-list__item__header"
                        onClick={handleCollapse}
                    >
                        <div>
                            {!collapse['1'] ? <i className="bx bx-minus"></i> : <i className="bx bx-plus"></i>}
                            <span>JavaScript Refresher</span>
                        </div>
                        <span>3 lessons</span>
                    </div>
                    <div className="course__container__content__body__course-list__item__collapse">
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Module Introduction</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Understanding "let" and "const"</span>
                            </div>
                            <span></span>
                        </div>
                        <div className="course__container__content__body__course-list__item__collapse__item">
                            <div>
                                <i className="bx bx-right-arrow-alt"></i>
                                <span>Arrow Functions</span>
                            </div>
                            <span></span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};
export default Course;
