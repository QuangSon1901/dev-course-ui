import { Loading } from 'notiflix';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import { authSelector, themeSelector } from '~/redux/selector';

const AuthLayout = ({ children }) => {
    const theme = useSelector(themeSelector);
    const { isAuthenticated } = useSelector(authSelector);
    const navigate = useNavigate();

    if (isAuthenticated) {
        Loading.remove(500);
        return navigate(-1, { replace: true });
    }

    return (
        <div className={`${theme ? theme.theme : 'theme-mode-light'} ${theme ? theme.color : 'theme-color-blue'}`}>
            <div className="overlay"></div>
            <div className="auth" style={{ backgroundImage: `url(${images.loginBG})` }}>
                <div className="auth__form">{children}</div>
                <ul className="auth__sub">
                    <li>
                        <Link to={config.routes.home}>Về trang chủ</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Dev-IT trên facebook</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Dev-IT trên youtube</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AuthLayout;
