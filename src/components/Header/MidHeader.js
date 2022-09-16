import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import images from '~/assets/images';
import { themeSelector } from '~/redux/selector';
import Search from '../Search';
import Sidebar from '../Sidebar';

const MidHeader = () => {
    const theme = useSelector(themeSelector);

    const [sidebarMenu, setSidebarMenu] = useState(false);
    const [sidebarSearch, setSidebarSearch] = useState(false);

    // const handleSidebarToggle = () => {
    //     sidebarRef.current.classList.toggle('active');
    // };

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
