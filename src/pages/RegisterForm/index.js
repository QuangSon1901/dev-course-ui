import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import images from '~/assets/images';
import Button from '~/components/Button';
import Input from '~/components/Input';
import config from '~/config';
import authSlice, { registerUser } from '~/layouts/AuthLayout/authSlice';
import { authSelector } from '~/redux/selector';
import { Loading, Report } from 'notiflix';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { submit, notify } = useSelector(authSelector);
    const [errorRes, setErrorRes] = useState({
        email: '',
    });

    useEffect(() => {
        if (notify) {
            switch (notify.success) {
                case 'danger':
                    setTimeout(() => setErrorRes({ ...errorRes, email: notify.message }), 500);
                    break;
                case 'error':
                    Report.warning(
                        'Xử lý yêu cầu thất bại',
                        'Không thể xử lý yêu cầu ngay lúc này, vui lòng kiểm tra lại kết nối!',
                        'Okay',
                    );
                    break;
                default:
            }
            dispatch(authSlice.actions.clearNotify());
        }

        return () => {
            clearTimeout();
        };
    }, [notify]);

    const handleSubmitLoading = (loading) => {
        switch (loading) {
            case true:
                Loading.circle();
                return 'Đăng ký';
            default:
                Loading.remove(500);
                return 'Đăng ký';
        }
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', passwordConfirm: '' }}
            onSubmit={(values) => {
                dispatch(registerUser(values));
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Vui lòng nhập Họ tên!'),
                email: Yup.string().email('Email sai định dạng!').required('Vui lòng nhập Email!'),
                password: Yup.string().required('Vui lòng nhập Mật khẩu!'),
                passwordConfirm: Yup.string()
                    .required('Vui lòng nhập lại Mật khẩu!')
                    .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa đúng!'),
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
                                name="name"
                                placeholder="Họ tên"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.name && touched.name ? 'error' : ''}
                                error={errors.name && touched.name ? errors.name : ''}
                            />
                            <Input
                                type="text"
                                name="email"
                                placeholder="Địa chỉ Email"
                                value={values.email}
                                onChange={(e) => {
                                    setErrorRes({ ...errorRes, email: '' });
                                    handleChange(e);
                                }}
                                onBlur={handleBlur}
                                className={errors.email && touched.email ? 'error' : ''}
                                error={
                                    (errors.email && touched.email && errors.email) ||
                                    (errorRes.email && errorRes.email) ||
                                    ''
                                }
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
                            <Input
                                type="password"
                                name="passwordConfirm"
                                placeholder="Nhập lại mật khẩu"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.passwordConfirm && touched.passwordConfirm ? 'error' : ''}
                                error={errors.passwordConfirm && touched.passwordConfirm ? errors.passwordConfirm : ''}
                            />
                            <Button primary large type="submit">
                                {handleSubmitLoading(submit)}
                            </Button>
                        </div>
                        <div className="auth__form__form__change">
                            <span>Bạn đã có tài khoản?</span>
                            <Link className="auth__form__form__change__link" to={config.routes.login}>
                                Đăng nhập
                            </Link>
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
    );
};

export default RegisterForm;
