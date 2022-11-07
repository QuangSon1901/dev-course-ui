import React from 'react';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import Image from '../Image';

const NavProfile = () => {
    return (
        <div className="profile__nav">
            <div className="profile__nav__body">
                <div className="profile__nav__body__avatar">
                    <Image src={images.userAvt} />
                </div>
                <div className="profile__nav__body__text">
                    <div className="profile__nav__body__text__name">
                        <div>Vu Quang Son</div>
                    </div>
                    <div className="profile__nav__body__text__links">
                        <NavLink to={config.routes.profile}>Profile</NavLink>
                        <NavLink to={config.routes.myLearning}>My learning</NavLink>
                        <NavLink to="/">Account</NavLink>
                        <NavLink to="/">Payment</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavProfile;
