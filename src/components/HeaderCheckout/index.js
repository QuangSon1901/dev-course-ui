import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import { themeSelector } from '~/redux/selector';
import Button from '../Button';

const HeaderCheckout = () => {
    const navigate = useNavigate();
    const theme = useSelector(themeSelector);

    return (
        <div className="header-checkout bg-main">
            <div className="container">
                <a href="/" className="header-checkout__logo">
                    <img src={theme.theme === 'theme-mode-light' ? images.lightLogo : images.darkLogo} alt="" />
                </a>
                <Button onClick={() => navigate(-1)} hover={false} className="header-checkout__cancel">
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default HeaderCheckout;
