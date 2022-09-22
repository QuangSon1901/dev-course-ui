import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import Input from '~/components/Input';
import config from '~/config';

const RegisterForm = () => {
    const initalValues = { email: '', password: '', passwordConfirm: '' };
    const [formValues, setFormValues] = useState(initalValues);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <div className="auth__form">
            <form className="auth__form__form">
                <img src={images.devLogo} alt="" />
                <h1>Đăng nhập vào Dev IT</h1>
                <div className="auth__form__form__container">
                    <Input
                        type="text"
                        name="email"
                        placeholder="Địa chỉ Email"
                        value={formValues.email}
                        onChange={handleChangeInput}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        value={formValues.password}
                        onChange={handleChangeInput}
                    />
                    <Input
                        type="password"
                        name="passwordConfirm"
                        placeholder="Nhập lại mật khẩu"
                        value={formValues.passwordConfirm}
                        onChange={handleChangeInput}
                    />
                    <Button primary large type="submit">
                        Đăng ký
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
        </div>
    );
};

export default RegisterForm;
