import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '~/layouts/AuthLayout/authSlice';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser());
    }, []);

    return null;
};

export default Logout;
