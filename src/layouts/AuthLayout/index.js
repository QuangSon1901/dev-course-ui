import { Loading } from 'notiflix';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import { authSelector, themeSelector } from '~/redux/selector';

const AuthLayout = ({ children }) => {
    const theme = useSelector(themeSelector);
    const { isAuthenticated } = useSelector(authSelector);

    if (isAuthenticated) {
        Loading.remove(500);
        return <Navigate to={config.routes.home} />;
    }

    return (
        <div className={`${theme ? theme.theme : 'theme-mode-light'} ${theme ? theme.color : 'theme-color-blue'}`}>
            <div className="overlay"></div>
            <div className="auth" style={{ backgroundImage: `url(${images.loginBG})` }}>
                {children}
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
