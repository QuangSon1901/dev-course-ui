import { Formik } from 'formik';
import { Block, Loading } from 'notiflix';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// import ReCAPTCHA from 'react-google-recaptcha';
import images from '~/assets/images';
import Button from '~/components/Button';
import Input from '~/components/Input';
import config from '~/config';
import authSlice, { loginUser } from '~/layouts/AuthLayout/authSlice';
import { authSelector } from '~/redux/selector';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { submit, notify } = useSelector(authSelector);
    const [errorRes, setErrorRes] = useState({
        password: '',
    });
    // const handleCaptcha = (e) => {
    //     console.log('Captcha value:', e);
    // };
    useEffect(() => {
        if (notify && notify.success === 'danger') {
            setTimeout(() => setErrorRes({ ...errorRes, password: notify.message }), 500);
            dispatch(authSlice.actions.clearNotify());
        }

        return () => {
            clearTimeout();
        };
    }, [notify]);

    const handleSubmitLoading = (loading) => {
        switch (loading) {
            case true:
                Loading.circle({ zindex: 99999, svgColor: '#2835d5' });
                return 'Đăng nhập';
            default:
                Loading.remove(500);
                return 'Đăng nhập';
        }
    };

    return (
        <>
            <div className="auth__form">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        dispatch(loginUser(values));
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Email sai định dạng!').required('Vui lòng nhập Email!'),
                        password: Yup.string().required('Vui lòng nhập Mật khẩu!'),
                    })}
                >
                    {(props) => {
                        const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
                        return (
                            <form className="auth__form__form" onSubmit={handleSubmit}>
                                <img src={images.devLogo} alt="" />
                                <h1>Đăng nhập vào Dev IT</h1>
                                <div className="auth__form__form__container">
                                    <Input
                                        type="text"
                                        name="email"
                                        placeholder="Địa chỉ Email"
                                        value={values.email}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? 'error' : ''}
                                        error={errors.email && touched.email ? errors.email : ''}
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        value={values.password}
                                        onChange={(e) => {
                                            setErrorRes({ ...errorRes, password: '' });
                                            handleChange(e);
                                        }}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password ? 'error' : ''}
                                        error={
                                            (errors.password && touched.password && errors.password) ||
                                            (errorRes.password && errorRes.password) ||
                                            ''
                                        }
                                    />
                                    {/* <ReCAPTCHA
                                        sitekey="6LdU1VIiAAAAAFTpDdcI56xsrWCTSb8pcCEjY9WE"
                                        onChange={handleCaptcha}
                                    /> */}
                                    <Button primary large type="submit" className="login-submit">
                                        {handleSubmitLoading(submit)}
                                    </Button>
                                </div>
                                <div className="auth__form__form__change">
                                    <span>Bạn chưa có tài khoản?</span>
                                    <Link className="auth__form__form__change__link" to={config.routes.register}>
                                        Đăng ký
                                    </Link>
                                </div>
                                <div className="auth__form__form__forget-pass">
                                    <Link to="/">Quên mật khẩu?</Link>
                                </div>
                                <div className="auth__form__form__service-term">
                                    <span>Việc bạn tiếp tục trang web này đồng nghĩa bạn đồng ý với</span>
                                    <span>
                                        <Link className="auth__form__form__service-term__link" to="/">
                                            Điều khoản dịch vụ
                                        </Link>{' '}
                                        của chúng tôi
                                    </span>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </>
    );
};

export default LoginForm;
