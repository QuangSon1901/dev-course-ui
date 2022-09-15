import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import images from '~/assets/images';
import { themeSelector } from '~/redux/selector';
import Search from '../Search';
import Sidebar from '../Sidebar';

const MidHeader = () => {
    const theme = useSelector(themeSelector);

    const [typeSidebar, setTypeSidebar] = useState('toggle-menu');

    const sidebarRef = useRef(null);
    const toggleSidebar = useRef(null);

    const handleToggle = () => {
        if (typeSidebar !== 'toggle-menu') sidebarRef.current.classList.remove('active');
        setTypeSidebar('toggle-menu');
        sidebarRef.current.classList.toggle('active');
    };

    const handleSearchMobile = (e) => {
        e.preventDefault();

        if (typeSidebar !== 'search') sidebarRef.current.classList.remove('active');
        setTypeSidebar('search');
        sidebarRef.current.classList.toggle('active');
    };
    return (
        <>
            <div className="header__wrapper__mid container">
                <div ref={toggleSidebar} onClick={() => handleToggle()} className="header__wrapper__mid__menu-toggle">
                    <i className="bx bx-menu"></i>
                </div>
                <a href="/" className="header__wrapper__mid__logo">
                    <img src={theme.theme === 'theme-mode-light' ? images.lightLogo : images.darkLogo} alt="" />
                </a>
                <Search />
                <ul className="header__wrapper__mid__user-menu">
                    <li className="header__wrapper__mid__user-menu__search">
                        <a href="/" onClick={(e) => handleSearchMobile(e)}>
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
            <Sidebar ref={sidebarRef} type={typeSidebar} />
        </>
    );
};

export default MidHeader;
