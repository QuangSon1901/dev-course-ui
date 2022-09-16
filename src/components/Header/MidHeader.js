import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import images from '~/assets/images';
import { multilingualSelector, themeSelector } from '~/redux/selector';
import Search from '../Search';
import Sidebar from '../Sidebar';

const MidHeader = () => {
    const theme = useSelector(themeSelector);
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected } = multilingual;

    const [sidebarMenu, setSidebarMenu] = useState(false);
    const [sidebarSearch, setSidebarSearch] = useState(false);

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
                                data: [
                                    {
                                        icon: 'bx bx-globe',
                                        title: 'Vietnamese',
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-globe',
                                        title: 'English',
                                        to: '/news',
                                    },
                                    {
                                        icon: 'bx bx-globe',
                                        title: 'Japanese',
                                        to: '/news',
                                    },
                                ],
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
                                        type: {
                                            id: 'light',
                                            background: 'light-background',
                                            class: 'theme-mode-light',
                                        },
                                    },
                                    {
                                        title: 'Màu tối',
                                        type: {
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
                                        type: {
                                            id: 'blue',
                                            background: 'blue-color',
                                            class: 'theme-color-blue',
                                        },
                                    },
                                    {
                                        title: 'Màu đỏ',
                                        type: {
                                            id: 'red',
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
                    <li className="header__wrapper__mid__user-menu__notification">
                        <a href="/">
                            <i className="bx bx-bell"></i>
                        </a>
                    </li>
                    <li className="header__wrapper__mid__user-menu__user">
                        <a href="/">
                            <i className="bx bx-user-circle"></i>
                        </a>
                    </li>
                </ul>
            </div>
            {sidebarMenu ? (
                <Sidebar
                    classToggle=".header__wrapper__mid__menu-toggle"
                    onClose={() => setSidebarMenu(false)}
                    typeSidebar="sidebarMenu"
                    items={SIDEBAR_MENU}
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
