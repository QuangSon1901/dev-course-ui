import React from 'react';

import MenuItem from './MenuItem';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const Menu = ({ data, type, style, icon, headerUser, headerNotify, img, footer }) => {
    return (
        <div className="menu__wrapper">
            {headerUser ? (
                <div className="menu__wrapper__avatar">
                    <img src={images.userAvt} alt="" />
                    <h3>Vũ Quang Sơn</h3>
                </div>
            ) : (
                ''
            )}
            {headerNotify ? (
                <div className="menu__wrapper__avatar">
                    <h3>Thông báo</h3>
                </div>
            ) : (
                ''
            )}
            {data.map((item) => (
                <MenuItem
                    key={item.id}
                    id={item.id}
                    type={type}
                    title={item.title}
                    style={style || {}}
                    leftIcon={icon && item.icon}
                    img={img && item.img}
                    line={item.line ? item.line : false}
                />
            ))}
            {footer ? (
                <div className="menu__wrapper__footer">
                    <Link to={footer}>View all</Link>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Menu;
