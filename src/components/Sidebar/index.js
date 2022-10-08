import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import { authSelector, multilingualSelector, themeSelector } from '~/redux/selector';
import { disableScroll, enableScroll } from '~/utils/scrollBody';
import Button from '../Button';
import SidebarMenu from './SidebarMenu';
import SidebarSearch from './SidebarSearch';

const Sidebar = (props) => {
    const sidebarRef = useRef(null);
    const overlay = useRef(null);
    let unmountDelay;

    const handleCloseSidebar = () => {
        overlay.current.style.opacity = 0;
        sidebarRef.current.style.left = '-100vw';
        unmountDelay = setTimeout(() => {
            props.onClose();
        }, 500);
    };

    const clickOutSide = (e) => {
        if (document.querySelector('.overlay').contains(e.target)) return handleCloseSidebar();
    };

    useEffect(() => {
        document.addEventListener('click', clickOutSide);
        disableScroll();

        return () => {
            clearTimeout(unmountDelay);
            document.removeEventListener('click', clickOutSide);
            enableScroll();
        };
    }, []);

    return (
        <>
            <div ref={overlay} className="overlay"></div>
            {props.typeSidebar === 'sidebarMenu' ? (
                <div ref={sidebarRef} className={`sidebar`}>
                    <SidebarMenu
                        onClose={handleCloseSidebar}
                        onChangeTheme={props.onChangeTheme}
                        onChangeLanguage={props.onChangeLanguage}
                    />
                </div>
            ) : (
                <div ref={sidebarRef} className={`sidebar`}>
                    <SidebarSearch onClose={handleCloseSidebar} />
                </div>
            )}
        </>
    );
};

export default Sidebar;
