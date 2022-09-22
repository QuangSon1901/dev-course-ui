import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import Input from '~/components/Input';
import config from '~/config';

const LoginForm = () => {
    const initalValues = { email: '', password: '' };
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
                        className="error"
                        onChange={handleChangeInput}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        value={formValues.password}
                        className="error"
                        onChange={handleChangeInput}
                    />
                    <Button primary large type="submit">
                        Đăng nhập
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
        </div>
    );
};

export default LoginForm;
