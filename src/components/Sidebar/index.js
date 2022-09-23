import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import { multilingualSelector, themeSelector } from '~/redux/selector';
import { disableScroll, enableScroll } from '~/utils/scrollBody';
import Button from '../Button';

const Sidebar = (props) => {
    const authentication = false;

    const theme = useSelector(themeSelector);
    const multilingual = useSelector(multilingualSelector);
    const { translationSelected } = multilingual;

    const [history, setHistory] = useState([{ data: props.items }]);
    const current = history[history.length - 1];

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

    const renderProfile = () => {
        return authentication ? (
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
                                    to={render.to}
                                    onClick={(isParent && ((e) => addHistory(e))) || (() => handleCloseSidebar())}
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
                                        handleCloseSidebar();
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
                                            handleCloseSidebar();
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
        return authentication ? (
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

    return (
        <>
            <div ref={overlay} className="overlay"></div>
            {props.typeSidebar === 'sidebarMenu' ? (
                <div ref={sidebarRef} className={`sidebar`}>
                    <button className="sidebar__close" onClick={handleCloseSidebar}>
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
                </div>
            ) : (
                <div ref={sidebarRef} className={`sidebar`}>
                    <button className="sidebar__close" onClick={handleCloseSidebar}>
                        <i className="bx bx-x"></i>
                    </button>
                    <h2 className="sidebar__title">Tìm kiếm khoá học</h2>
                    <div className="sidebar__search">
                        <div className="sidebar__search__input">
                            <input type="text" placeholder="Search" />
                            <i className="bx bx-loader-alt sidebar__search__input-loading"></i>
                        </div>
                        <div className="sidebar__search__suggess"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
