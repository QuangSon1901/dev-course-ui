import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__top__group">
                        <div className="footer__top__group__header">
                            <img src={images.devLightLogo} alt="" />
                            <h2>Học lập trình để đi làm</h2>
                        </div>
                        <ul className="footer__top__group__body">
                            <li>Điện thoại: 0399.999.999</li>
                            <li>Email: contact@tinhocstar.site</li>
                            <li>Địa chỉ: Tầng 81, Landmark 81, Điện Biên Phủ, Bình Thạnh, TP HCM</li>
                        </ul>
                    </div>
                    <div className="footer__top__middle">
                        <div className="footer__top__group">
                            <div className="footer__top__group__header">
                                <h2>Về DEV - IT</h2>
                            </div>
                            <ul className="footer__top__group__body">
                                <Link to="/">Giới thiệu</Link>
                                <Link to="/">Cơ hội việc làm</Link>
                            </ul>
                        </div>
                        <div className="footer__top__group">
                            <div className="footer__top__group__header">
                                <h2>CÔNG CỤ</h2>
                            </div>
                            <ul className="footer__top__group__body">
                                <Link to="/">Shortener URL</Link>
                            </ul>
                        </div>
                        <div className="footer__top__group">
                            <div className="footer__top__group__header">
                                <h2>HỖ TRỢ</h2>
                            </div>
                            <ul className="footer__top__group__body">
                                <Link to="/">Liên hệ</Link>
                                <Link to="/">Bảo mật</Link>
                                <Link to="/">Điều khoản</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__top__group">
                        <div className="footer__top__group__header">
                            <h2>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC DEV - IT</h2>
                        </div>
                        <ul className="footer__top__group__body">
                            <li>Mã số thuế: 0123456789</li>
                            <li>Ngày thành lập: 01/01/2010</li>
                            <li>
                                Lĩnh vực: Công nghệ, giáo dục, lập trình. DevIT xây dựng và phát triển những sản phẩm
                                mang lại giá trị cho cộng đồng.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom__copyright">
                        © 2010 - 2022 Dev - IT. Nền tảng học lập trình hàng đầu Việt Nam
                    </div>
                    <div className="footer__bottom__contact">
                        <i className="bx bxl-youtube footer__bottom__contact__youtube"></i>
                        <i className="bx bxl-facebook-circle footer__bottom__contact__facebook"></i>
                        <i className="bx bxl-instagram-alt footer__bottom__contact__instagram"></i>
                        <i className="bx bxl-telegram footer__bottom__contact__telegram"></i>
                        <i className="bx bxl-twitter footer__bottom__contact__twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
