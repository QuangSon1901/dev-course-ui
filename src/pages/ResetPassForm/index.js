import { Formik } from 'formik';
import { Loading, Report } from 'notiflix';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import images from '~/assets/images';
import Button from '~/components/Button';
import Input from '~/components/Input';
import config from '~/config';
import * as httpRequest from '~/utils/httpRequest';

const ResetPassForm = () => {
    let { token, email } = useParams();
    const navigate = useNavigate();

    const handleSubmitLoading = (loading) => {
        switch (loading) {
            case true:
                Loading.circle();
                return 'Xác nhận';
            default:
                Loading.remove(500);
                return 'Xác nhận';
        }
    };

    const handleSubmitReset = async (values) => {
        Loading.circle();
        try {
            const res = await httpRequest.put(`/auth/reset-password/${token}`, {
                email,
                password: values.password,
                password_confirmation: values.passwordConfirm,
            });
            Loading.remove(500);
            Report.success('Gửi yêu cầu thành công', res.message, 'Đăng nhập ngay', () => {
                navigate('/login');
            });
        } catch (error) {
            Loading.remove(500);
            if (error.response.data) return Report.failure('Gửi yêu cầu thất bại', error.response.data.message, 'Okay');
            return Report.failure('Gửi yêu cầu thất bại', 'Hệ thống gặp chút xự cố, vui lòng thử lại sau!', 'Okay');
        }
    };

    return (
        <Formik
            initialValues={{ password: '', passwordConfirm: '' }}
            onSubmit={(values) => {
                handleSubmitReset(values);
            }}
            validationSchema={Yup.object().shape({
                password: Yup.string().required('Vui lòng nhập Mật khẩu mới!'),
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
                        <h1>Lấy lại mật khẩu</h1>
                        <div className="auth__form__form__container">
                            <Input
                                type="password"
                                name="password"
                                placeholder="Mật khẩu mới"
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
                                {handleSubmitLoading()}
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

export default ResetPassForm;
