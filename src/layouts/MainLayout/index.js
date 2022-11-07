import { Loading } from 'notiflix';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { themeSelector } from '~/redux/selector';

const MainLayout = ({ children }) => {
    const theme = useSelector(themeSelector);

    useEffect(() => {
        Loading.remove(500);
    }, []);

    return (
        <div className={`${theme ? theme.theme : 'theme-mode-light'} ${theme ? theme.color : 'theme-color-blue'}`}>
            <Header />
            <div style={{ minHeight: '100vh' }}>{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
