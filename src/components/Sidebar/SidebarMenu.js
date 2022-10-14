import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelector, multilingualSelector, themeSelector } from '~/redux/selector';

import images from '~/assets/images';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import config from '~/config';
import * as httpRequest from '~/utils/httpRequest';
const SidebarMenu = (props) => {
    const { isAuthenticated, loading } = useSelector(authSelector);

    const theme = useSelector(themeSelector);
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected, translations } = multilingual;

    const [programs, setPrograms] = useState({ program: [] });

    const SIDEBAR_MENU = useRef([
        {
            title: translationSelected.messages.category,
            data: [
                {
                    icon: 'bx bx-home',
                    title: translationSelected.messages.home,
                    to: '/',
                },
                {
                    icon: 'bx bx-slideshow',
                    title: translationSelected.messages.educationProgram,
                    to: '/courses',
                    children: {
                        title: translationSelected.messages.educationProgram,
                        data: [],
                    },
                },
                {
                    icon: 'bx bx-news',
                    title: translationSelected.messages.news,
                    to: '/news',
                },
                {
                    icon: 'bx bx-help-circle',
                    title: translationSelected.messages.paymentGuide,
                    to: '/payment-guide',
                },
                {
                    icon: 'bx bx-support',
                    title: translationSelected.messages.contact,
                    to: '/contact',
                },
            ],
        },
        {
            title: 'Cài đặt',
            data: [
                {
                    icon: 'bx bx-money',
                    title: 'Loại tiền tệ',
                    to: '/currency',
                    children: {
                        title: 'Loại tiền tệ',
                        data: [
                            {
                                data: [
                                    {
                                        icon: 'bx bx-money',
                                        title: 'VND',
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-money',
                                        title: 'JPN',
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-money',
                                        title: 'EUR',
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-money',
                                        title: 'SPN',
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-money',
                                        title: 'USD',
                                        to: '/news',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    icon: 'bx bx-globe',
                    title: 'Ngôn ngữ',
                    to: '/language',
                    children: {
                        title: 'Ngôn ngữ',
                        data: [
                            {
                                data: [...translations],
                            },
                        ],
                    },
                },
                {
                    icon: 'bx bx-palette',
                    title: 'Cài đặt chủ đề',
                    to: '/theme',
                    children: {
                        title: 'Cài đặt chủ đề',
                        data: [
                            {
                                title: 'Chọn chủ đề',
                                data: [
                                    {
                                        title: 'Màu sáng',
                                        typeTheme: {
                                            id: 'light',
                                            type: 'theme',
                                            background: 'light-background',
                                            class: 'theme-mode-light',
                                        },
                                    },
                                    {
                                        title: 'Màu tối',
                                        typeTheme: {
                                            type: 'theme',
                                            id: 'dark',
                                            background: 'dark-background',
                                            class: 'theme-mode-dark',
                                        },
                                    },
                                ],
                            },
                            {
                                title: 'Chọn màu',
                                data: [
                                    {
                                        title: 'Màu xanh',
                                        typeTheme: {
                                            id: 'blue',
                                            type: 'color',
                                            background: 'blue-color',
                                            class: 'theme-color-blue',
                                        },
                                    },
                                    {
                                        title: 'Màu đỏ',
                                        typeTheme: {
                                            id: 'red',
                                            type: 'color',
                                            background: 'red-color',
                                            class: 'theme-color-red',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    ]);

    const [history, setHistory] = useState([{ data: SIDEBAR_MENU.current }]);
    const current = history[history.length - 1];

    const renderProfile = () => {
        return loading ? (
            'Loading'
        ) : isAuthenticated ? (
            <>
                <div className="sidebar__menu__avatar">
                    <img src={images.userAvt} alt="" />
                    <h3>Vũ Quang Sơn</h3>
                </div>
                <div className="sidebar__menu__select">
                    <span>{translationSelected.messages.personal}</span>
                    <ul className="sidebar__menu__select__list">
                        <li className="sidebar__menu__select__list__item">
                            <NavLink className="sidebar__menu__select__list__item__link" to="/me/profile">
                                <i className="bx bx-user"></i>
                                <span>{translationSelected.messages.personalPage}</span>
                            </NavLink>
                        </li>
                        <li className="sidebar__menu__select__list__item">
                            <NavLink className="sidebar__menu__select__list__item__link" to="/me/courses">
                                <i className="bx bx-bulb"></i>
                                <span>{translationSelected.messages.myCourses}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </>
        ) : (
            <>
                <div className="sidebar__menu__login-btn">
                    <Button to={config.routes.login} primary>
                        {translationSelected.messages.login}
                    </Button>
                </div>
            </>
        );
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            return (
                <div key={index} className="sidebar__menu__select">
                    <span>{item.title}</span>
                    <ul className="sidebar__menu__select__list">
                        {item.data.map((li, indexLi) => {
                            const isParent = !!li.children;

                            const addHistory = (e) => {
                                e.preventDefault();
                                setHistory([...history, { data: li.children.data, title: li.children.title }]);
                            };

                            const renderItemsHaveLink = (render) => (
                                <NavLink
                                    className="sidebar__menu__select__list__item__link"
                                    to={'course/' + render.to}
                                    onClick={(isParent && ((e) => addHistory(e))) || (() => props.onClose())}
                                >
                                    <i className={`${render.icon}`}></i>
                                    <span>{render.title ? render.title : ''}</span>
                                </NavLink>
                            );

                            const activeColor = (type) => {
                                switch (type.typeTheme.type) {
                                    case 'theme':
                                        let activeTheme = '';

                                        if (type.typeTheme.class === theme.theme) activeTheme = 'active';
                                        return activeTheme;
                                    case 'color':
                                        let activeColor = '';

                                        if (type.typeTheme.class === theme.color) activeColor = 'active';
                                        return activeColor;
                                    default:
                                        return;
                                }
                            };

                            const renderItemsHaveTheme = (render) => (
                                <div
                                    className="sidebar__menu__select__list__item__link"
                                    onClick={() => {
                                        props.onChangeTheme(render.typeTheme.type, render.typeTheme.class);
                                        props.onClose();
                                    }}
                                >
                                    {render.icon ? (
                                        <i className={`${render.icon}`}></i>
                                    ) : (
                                        <div
                                            className={`sidebar__menu__select__list__item__link__img ${
                                                render.typeTheme.background
                                            } ${activeColor(render)}`}
                                        >
                                            <i className="bx bx-check"></i>
                                        </div>
                                    )}
                                    <span>{render.title ? render.title : ''}</span>
                                </div>
                            );

                            const renderItemsNotLink = (render) => (
                                <div
                                    className="sidebar__menu__select__list__item__link"
                                    onClick={
                                        (isParent && ((e) => addHistory(e))) ||
                                        (() => {
                                            props.onClose();
                                            props.onChangeLanguage(render.id);
                                        })
                                    }
                                >
                                    <i className={`${render.icon}`}></i>
                                    <span>{render.title ? render.title : ''}</span>
                                </div>
                            );

                            return (
                                <li key={indexLi} className="sidebar__menu__select__list__item">
                                    {li.to ? renderItemsHaveLink(li) : ''}
                                    {li.typeTheme ? renderItemsHaveTheme(li) : ''}
                                    {!li.to && !li.typeTheme ? renderItemsNotLink(li) : ''}
                                    {isParent ? <i className="bx bx-chevron-right"></i> : ''}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        });
    };

    const renderLogout = () => {
        return isAuthenticated ? (
            <div className="sidebar__menu__select">
                <ul className="sidebar__menu__select__list">
                    <li className="sidebar__menu__select__list__item">
                        <NavLink className="sidebar__menu__select__list__item__link" to="/logout">
                            <i className="bx bx-log-out-circle"></i>
                            <span>{translationSelected.messages.logout}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        ) : (
            ''
        );
    };

    useEffect(() => {
        if (programs.program.length > 0) return;
        const fetchPrograms = async () => {
            try {
                const res = await httpRequest.get('/programs', {
                    params: { type: 'less' },
                });

                res.program.forEach((program) => {
                    const newCourse = [];
                    for (const { name, slug } of program.courses) {
                        newCourse.push({
                            title: name,
                            icon: 'bx bx-right-arrow-circle',
                            to: slug,
                        });
                    }

                    const sideObject = {
                        title: program.name,
                        data: newCourse,
                    };
                    SIDEBAR_MENU.current[0].data[1].children.data.push(sideObject);
                });
                setPrograms(res);
            } catch (error) {}
        };

        fetchPrograms();
    }, [programs]);
    return (
        <>
            <button className="sidebar__close" onClick={props.onClose}>
                <i className="bx bx-x"></i>
            </button>
            <h2 className="sidebar__title">
                {history.length > 1 ? (
                    <>
                        <button onClick={(e) => setHistory((prev) => prev.slice(0, prev.length - 1))}>
                            <i className="bx bx-arrow-back"></i>
                        </button>
                        {current.title}
                    </>
                ) : (
                    translationSelected.messages.personalAccount
                )}
            </h2>
            <div className="sidebar__menu">
                {history.length === 1 ? renderProfile() : ''}
                {renderItems()}
                {history.length === 1 ? renderLogout() : ''}
            </div>
        </>
    );
};

export default SidebarMenu;
