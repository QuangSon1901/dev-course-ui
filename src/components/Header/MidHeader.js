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
import Image from '../Image';

const MidHeader = () => {
    const { isAuthenticated, loading, user } = useSelector(authSelector);
    const dispatch = useDispatch();

    const theme = useSelector(themeSelector);
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected } = multilingual;

    const [sidebarMenu, setSidebarMenu] = useState(false);
    const [sidebarSearch, setSidebarSearch] = useState(false);

    const userToggle = useRef(null);
    const notificationToggle = useRef(null);

    const handleChangeLanguage = (id) => {
        dispatch(multilingualSlice.actions.CHANGE_LANGUAGE(id));
    };

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
                    {loading ? (
                        'loading'
                    ) : isAuthenticated ? (
                        <>
                            <li className="header__wrapper__mid__user-menu__notification">
                                <a ref={notificationToggle} href="/" onClick={(e) => e.preventDefault()}>
                                    <i className="bx bx-bell"></i>
                                    <span className="header__wrapper__mid__user-menu__notification__quantity">32</span>
                                </a>
                                <Wrapper menu_toggle_ref={notificationToggle} className="dropdown__content">
                                    <Menu
                                        type="user"
                                        data={MEMU_ITEMS_NOTIFICATION}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                        }}
                                        headerNotify
                                        img
                                        footer="/view-all"
                                    ></Menu>
                                </Wrapper>
                            </li>
                            <li className="header__wrapper__mid__user-menu__user">
                                <>
                                    <div ref={userToggle} className="header__wrapper__mid__user-menu__user__avatar">
                                        <Image
                                            src={
                                                (user && process.env.REACT_APP_BASE_URL_FILE_UPLOAD + user.avatar) || ''
                                            }
                                            fallback={images.noAvt}
                                            alt=""
                                        />
                                    </div>
                                    <Wrapper menu_toggle_ref={userToggle} className="dropdown__content">
                                        <Menu
                                            type="user"
                                            data={MEMU_ITEMS_USER}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                            }}
                                            icon
                                            headerUser
                                        ></Menu>
                                    </Wrapper>
                                </>
                            </li>
                        </>
                    ) : (
                        <li className="header__wrapper__mid__user-menu__user">
                            <Button to={config.routes.login} primary>
                                Đăng nhập
                            </Button>
                        </li>
                    )}
                </ul>
            </div>
            {sidebarMenu ? (
                <Sidebar
                    classToggle=".header__wrapper__mid__menu-toggle"
                    onClose={() => setSidebarMenu(false)}
                    typeSidebar="sidebarMenu"
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
