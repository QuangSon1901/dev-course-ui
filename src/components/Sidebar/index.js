import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import { disableScroll, enableScroll } from '~/utils/scrollBody';
import Button from '../Button';

const Sidebar = (props) => {
    const authentication = true;

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
        if (!document.querySelector(props.classToggle).contains(e.target) && !sidebarRef.current.contains(e.target))
            return handleCloseSidebar();
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
                    <button className="sidebar__close" onClick={handleCloseSidebar}>
                        <i className="bx bx-x"></i>
                    </button>
                    <h2 className="sidebar__title">Tài khoản cá nhân</h2>
                    <div className="sidebar__menu">
                        {authentication ? (
                            <>
                                <div className="sidebar__menu__avatar">
                                    <img src={images.userAvt} alt="" />
                                    <h3>Vũ Quang Sơn</h3>
                                </div>
                                <div className="sidebar__menu__select">
                                    <span>Cá nhân</span>
                                    <ul className="sidebar__menu__select__list">
                                        <li className="sidebar__menu__select__list__item">
                                            <NavLink
                                                className="sidebar__menu__select__list__item__link"
                                                to="/me/profile"
                                            >
                                                <i className="bx bx-user"></i>
                                                <span>Trang cá nhân</span>
                                            </NavLink>
                                        </li>
                                        <li className="sidebar__menu__select__list__item">
                                            <NavLink
                                                className="sidebar__menu__select__list__item__link"
                                                to="/me/courses"
                                            >
                                                <i className="bx bx-bulb"></i>
                                                <span>Khoá học của tôi</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="sidebar__menu__login-btn">
                                    <Button primary>Đăng nhập tài khoản</Button>
                                </div>
                            </>
                        )}
                        <div className="sidebar__menu__select">
                            <span>Danh mục</span>
                            <ul className="sidebar__menu__select__list">
                                <li className="sidebar__menu__select__list__item">
                                    <NavLink className="sidebar__menu__select__list__item__link" to="/">
                                        <i className="bx bx-home"></i>
                                        <span>Trang chủ</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar__menu__select__list__item">
                                    <NavLink className="sidebar__menu__select__list__item__link" to="/courses">
                                        <i className="bx bx-slideshow"></i>
                                        <span>Chương trình đào tạo</span>
                                    </NavLink>
                                    <i className="bx bx-chevron-right"></i>
                                </li>
                                <li className="sidebar__menu__select__list__item">
                                    <NavLink className="sidebar__menu__select__list__item__link" to="/news">
                                        <i className="bx bx-news"></i>
                                        <span>Tin tức</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar__menu__select__list__item">
                                    <NavLink className="sidebar__menu__select__list__item__link" to="/payment-guide">
                                        <i className="bx bx-help-circle"></i>
                                        <span>Hướng dẫn thanh toán</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar__menu__select__list__item">
                                    <NavLink className="sidebar__menu__select__list__item__link" to="/contact">
                                        <i className="bx bx-support"></i>
                                        <span>Liên hệ</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {authentication ? (
                            <div className="sidebar__menu__select">
                                <ul className="sidebar__menu__select__list">
                                    <li className="sidebar__menu__select__list__item">
                                        <NavLink className="sidebar__menu__select__list__item__link" to="/logout">
                                            <i className="bx bx-log-out-circle"></i>
                                            <span>Đăng xuất</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            ''
                        )}
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
