import { Formik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import images from '~/assets/images';
import Button from '~/components/Button';
import Input from '~/components/Input';
import config from '~/config';
import authSlice, { loginUser } from '~/layouts/AuthLayout/authSlice';
import { authSelector } from '~/redux/selector';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { submit, notify } = useSelector(authSelector);
    const [showSwalAlert, setShowSwalAlert] = useState(false);

    const handleCancelSwalAlert = () => {
        setShowSwalAlert(false);
        dispatch(authSlice.actions.clearNotify());
    };

    useEffect(() => {
        if (notify && notify.success === 'danger') {
            setShowSwalAlert(true);
        }
    }, [notify]);

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
                        const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
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
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email ? 'error' : ''}
                                        error={errors.email && touched.email ? errors.email : ''}
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password ? 'error' : ''}
                                        error={errors.password && touched.password ? errors.password : ''}
                                    />
                                    <Button primary large type="submit">
                                        {submit ? 'Đang xử lý...' : 'Đăng nhập'}
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
                {notify && (
                    <SweetAlert
                        danger={notify.success === 'danger' && true}
                        style={{ zIndex: '99999' }}
                        title="Lỗi!"
                        confirmBtnBsStyle="primary"
                        onConfirm={handleCancelSwalAlert}
                        onCancel={handleCancelSwalAlert}
                        show={showSwalAlert}
                    >
                        <span style={{ fontSize: '1.6rem' }}>{notify.message || ''}</span>
                    </SweetAlert>
                )}
            </div>
        </>
    );
};

export default LoginForm;
