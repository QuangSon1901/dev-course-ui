import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import images from '~/assets/images';
import config from '~/config';
import { authSelector, multilingualSelector, themeSelector } from '~/redux/selector';
import Button from '../Button';
import { Wrapper } from '../Popper';
import Menu from '../Popper/Menu';
import Search from '../Search';
import Sidebar from '../Sidebar';
import themeSlice from '../ThemeMenu/themeSlice';
import multilingualSlice from './multilingualSlice';

const MidHeader = () => {
    const { isAuthenticated, loading } = useSelector(authSelector);

    const dispatch = useDispatch();

    const theme = useSelector(themeSelector);
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected, translations } = multilingual;

    const [sidebarMenu, setSidebarMenu] = useState(false);
    const [sidebarSearch, setSidebarSearch] = useState(false);

    const userToggle = useRef(null);
    const notificationToggle = useRef(null);

    const SIDEBAR_MENU = [
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
                        data: [
                            {
                                title: translationSelected.messages.OfficeInformation,
                                data: [
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.CertificateInBasicITApplications,
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.AdvancedITApplicationCertificate,
                                        to: '/payment-guide',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages
                                            .BasicITapplicationCertificationExamPreparation,
                                        to: '/contact',
                                    },
                                ],
                            },
                            {
                                title: translationSelected.messages.DataAnalytics,
                                data: [
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.DataAnalysiswithPowerBI,
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.AdvancedITApplicationCertificate,
                                        to: '/payment-guide',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages
                                            .BasicITapplicationCertificationExamPreparation,
                                        to: '/contact',
                                    },
                                ],
                            },
                            {
                                title: translationSelected.messages.WebProgramming,
                                data: [
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.Pythonprogrammer,
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.PHPprogrammer,
                                        to: '/payment-guide',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.JavaScriptProgrammers,
                                        to: '/contact',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.DotNetprogrammer,
                                        to: '/contact',
                                    },
                                ],
                            },
                            {
                                title: translationSelected.messages.SoftwareTesting,
                                data: [
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.SoftwareTestingSpecialist,
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.Basicsoftwaretesting,
                                        to: '/payment-guide',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.Automatedsoftwaretesting,
                                        to: '/contact',
                                    },
                                ],
                            },
                            {
                                title: translationSelected.messages.Internet,
                                data: [
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.Introductiontonetworkadministration,
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.Networkinfrastructuremanagement,
                                        to: '/payment-guide',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.NetworkAdministration,
                                        to: '/contact',
                                    },
                                    {
                                        icon: 'bx bx-right-arrow-circle',
                                        title: translationSelected.messages.Networksecurity,
                                        to: '/contact',
                                    },
                                ],
                            },
                        ],
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
    ];

    const handleChangeTheme = (themeType, themeClass) => {
        switch (themeType) {
            case 'theme':
                dispatch(themeSlice.actions.SET_THEME(themeClass));
                return;
            case 'color':
                dispatch(themeSlice.actions.SET_COLOR(themeClass));
                return;
            default:
                return;
        }
    };

    const handleChangeLanguage = (id) => {
        dispatch(multilingualSlice.actions.CHANGE_LANGUAGE(id));
    };

    const MEMU_ITEMS_USER = [
        {
            id: uuidv4(),
            icon: 'bx bx-user',
            title: translationSelected.messages.personalPage,
            line: true,
            to: config.routes.profile,
        },
        {
            id: uuidv4(),
            icon: 'bx bx-bulb',
            title: translationSelected.messages.myCourses,
            to: '/me/courses',
        },
        {
            id: uuidv4(),
            icon: 'bx bx-log-out-circle',
            title: translationSelected.messages.logout,
            line: true,
            to: config.routes.logout,
        },
    ];

    const MEMU_ITEMS_NOTIFICATION = [
        {
            id: uuidv4(),
            img: 'devLogo',
            title: '[DevIT] - Xác nhận thanh toán thành công',
            line: true,
            to: '/me/profile',
        },
        {
            id: uuidv4(),
            img: 'devLogo',
            title: '[DevIT] - Chào mừng bạn đã gia nhập DevIT. Hãy luôn đam mê, kiên trì theo đuổi mục tiêu bạn nhé',
            line: true,
            to: '/me/courses',
        },
    ];

    return (
        <>
            <div className="header__wrapper__mid container">
                <div className="header__wrapper__mid__menu-toggle" onClick={() => setSidebarMenu(true)}>
                    <i className="bx bx-menu"></i>
                </div>
                <a href="/" className="header__wrapper__mid__logo">
                    <img src={theme.theme === 'theme-mode-light' ? images.lightLogo : images.darkLogo} alt="" />
                </a>
                <Search />
                <ul className="header__wrapper__mid__user-menu">
                    <li className="header__wrapper__mid__user-menu__search" onClick={() => setSidebarSearch(true)}>
                        <a href="/" onClick={(e) => e.preventDefault()}>
                            <i className="bx bx-search"></i>
                        </a>
                    </li>
                    {isAuthenticated ? (
                        <li className="header__wrapper__mid__user-menu__notification">
                            <a ref={notificationToggle} href="/" onClick={(e) => e.preventDefault()}>
                                <i className="bx bx-bell"></i>
                                <span className="header__wrapper__mid__user-menu__notification__quantity">32</span>
                            </a>
                            <Wrapper menu_toggle_ref={notificationToggle} className="dropdown__content">
                                <Menu
                                    type="user"
                                    data={MEMU_ITEMS_NOTIFICATION}
                                    style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}
                                    headerNotify
                                    img
                                    footer="/view-all"
                                ></Menu>
                            </Wrapper>
                        </li>
                    ) : (
                        ''
                    )}
                    <li className="header__wrapper__mid__user-menu__user">
                        {loading ? (
                            'Loading'
                        ) : isAuthenticated ? (
                            <>
                                <div ref={userToggle} className="header__wrapper__mid__user-menu__user__avatar">
                                    <img src={images.userAvt} alt="" />
                                </div>
                                <Wrapper menu_toggle_ref={userToggle} className="dropdown__content">
                                    <Menu
                                        type="user"
                                        data={MEMU_ITEMS_USER}
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                                        icon
                                        headerUser
                                    ></Menu>
                                </Wrapper>
                            </>
                        ) : (
                            <Button to={config.routes.login} primary>
                                Đăng nhập
                            </Button>
                        )}
                    </li>
                </ul>
            </div>
            {sidebarMenu ? (
                <Sidebar
                    classToggle=".header__wrapper__mid__menu-toggle"
                    onClose={() => setSidebarMenu(false)}
                    typeSidebar="sidebarMenu"
                    items={SIDEBAR_MENU}
                    onChangeTheme={handleChangeTheme}
                    onChangeLanguage={handleChangeLanguage}
                />
            ) : (
                ''
            )}
            {sidebarSearch ? (
                <Sidebar
                    classToggle=".header__wrapper__mid__user-menu__search"
                    onClose={() => setSidebarSearch(false)}
                    typeSidebar="sidebarSearch"
                />
            ) : (
                ''
            )}
        </>
    );
};

export default MidHeader;
