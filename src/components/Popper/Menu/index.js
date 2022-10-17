import React from 'react';

import MenuItem from './MenuItem';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';
import Image from '~/components/Image';

const Menu = ({ data, type, style, icon, headerUser, headerNotify, img, footer }) => {
    const { user } = useSelector(authSelector);

    return (
        <div className="menu__wrapper">
            {headerUser ? (
                <div className="menu__wrapper__avatar">
                    <Image
                        src={(user.avatar && process.env.REACT_APP_BASE_URL_FILE_UPLOAD + user.avatar) || ''}
                        fallback={images.noAvt}
                        alt=""
                    />
                    <h3>{user && user.name}</h3>
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
                    to={item.to}
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
