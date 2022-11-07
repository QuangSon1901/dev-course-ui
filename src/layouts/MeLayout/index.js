import { Loading } from 'notiflix';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '~/components/Footer';
import HeaderCheckout from '~/components/HeaderCheckout';
import HeroProfile from '~/components/HeroProfile';
import NavProfile from '~/components/NavProfile';
import { themeSelector } from '~/redux/selector';

const MeLayout = ({ children }) => {
    const theme = useSelector(themeSelector);

    useEffect(() => {
        Loading.remove(500);
    }, []);
    return (
        <div className={`${theme ? theme.theme : 'theme-mode-light'} ${theme ? theme.color : 'theme-color-blue'}`}>
            <HeaderCheckout />
            <div style={{ minHeight: '100vh' }}>
                <div className="profile">
                    <HeroProfile />
                    <NavProfile />
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MeLayout;
