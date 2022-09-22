import { useSelector } from 'react-redux';
import images from '~/assets/images';
import { themeSelector } from '~/redux/selector';

const AuthLayout = ({ children }) => {
    const theme = useSelector(themeSelector);

    return (
        <div className={`${theme ? theme.theme : 'theme-mode-light'} ${theme ? theme.color : 'theme-color-blue'}`}>
            <div className="overlay"></div>
            <div className="auth" style={{ backgroundImage: `url(${images.loginBG})` }}>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
