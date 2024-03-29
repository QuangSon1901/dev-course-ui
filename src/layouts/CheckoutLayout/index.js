import { Loading } from 'notiflix';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HeaderCheckout from '~/components/HeaderCheckout';
import { themeSelector } from '~/redux/selector';

const CheckoutLayout = ({ children }) => {
    const theme = useSelector(themeSelector);

    useEffect(() => {
        Loading.remove(500);
    }, []);
    return (
        <div className={`${theme ? theme.theme : 'theme-mode-light'} ${theme ? theme.color : 'theme-color-blue'}`}>
            <HeaderCheckout />
            <div style={{ minHeight: '100vh' }}>{children}</div>
        </div>
    );
};

export default CheckoutLayout;
