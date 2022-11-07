import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '~/layouts/AuthLayout/authSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(logoutUser());
        navigate(-1, { replace: true });
    }, []);

    return null;
};

export default Logout;
