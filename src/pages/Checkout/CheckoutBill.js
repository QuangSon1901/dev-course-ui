import { loadScript } from '@paypal/paypal-js';
import React, { useEffect, useRef } from 'react';
import InputCustom from '~/components/InputCustom';
import { storage } from '~/utils/storage';
import * as httpRequest from '~/utils/httpRequest';
import { toast } from 'react-toastify';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';

const CheckoutBill = ({ courseData, step, setStep, onSubmitInfo, paymentMethod, info }) => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [paramsSearch] = useSearchParams();
    const { user } = useSelector(authSelector);

    const paymentRef = useRef();

    useEffect(() => {
        paymentRef.current.children[1] && paymentRef.current.removeChild(paymentRef.current.children[1]);

        if (step === 1) return;

        const loadPaypal = async () => {
            try {
                const paypal = await loadScript({ 'client-id': process.env.REACT_APP_CLIENT_ID_PAYPAL });
                await paypal
                    .Buttons({
                        fundingSource: paypal.FUNDING.PAYPAL,
                        createOrder: async (data, actions, err) => {
                            const token = storage.get(process.env.REACT_APP_TOKEN);
                            if (!token) return;

                            try {
                                const res = await httpRequest.post(
                                    '/paypal/order/create',
                                    {
                                        user_id: user.id,
                                        class_id: paramsSearch.get('class'),
                                        price: String(courseData.price),
                                        name: info.name,
                                        phone: info.phone,
                                        email: info.email,
                                        birth: info.birth,
                                    },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    },
                                );
                                return res.id;
                            } catch (error) {
                                if (error.response.data && typeof error.response.data.message === 'string') {
                                    toast.error(error.response.data.message);
                                    return;
                                } else if (error.response.data && typeof error.response.data.message === 'object') {
                                    toast.error(Object.values(error.response.data.message)[0][0]);
                                    return;
                                }
                                toast.error(error.message);
                                return;
                            }
                        },
                        onApprove: async (data, actions) => {
                            const token = storage.get(process.env.REACT_APP_TOKEN);
                            if (!token) return;
                            try {
                                const res = await httpRequest.post(
                                    '/paypal/order/capture',
                                    {
                                        vendor_order_id: data.orderID,
                                        user_id: user.id,
                                        class_id: paramsSearch.get('class'),
                                    },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    },
                                );

                                if (res.success === 'success') {
                                    toast.success('Payment success');
                                    navigate(-1);
                                }
                            } catch (error) {
                                if (error.response.data && typeof error.response.data.message === 'string') {
                                    toast.error(error.response.data.message);
                                    return;
                                } else if (error.response.data && typeof error.response.data.message === 'object') {
                                    toast.error(Object.values(error.response.data.message)[0][0]);
                                    return;
                                }
                                toast.error(error.message);
                                return;
                            }
                        },
                        onError: (err) => {
                            toast.error(err);
                        },
                        style: {
                            color: 'black',
                        },
                    })
                    .render(paymentRef.current);
            } catch (error) {}
        };
        loadPaypal();
    }, [step]);

    const handleTest = async () => {
        const token = storage.get(process.env.REACT_APP_TOKEN);

        try {
            const res = await httpRequest.post(
                '/vnpay/order/create',
                {
                    order_desc: 'sdaf',
                    amount: Number(courseData.price),
                    language: 'vn',
                    bank_code: 'NCB',
                    user_id: user.id,
                    class_id: paramsSearch.get('class'),
                    name: info.name,
                    phone: info.phone,
                    email: info.email,
                    birth: info.birth,
                    slug,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            window.open(res.data).focus();
        } catch (error) {}
    };
    return (
        <div>
            <div className="checkout__body__bill__header">Hoá đơn</div>
            <div className="checkout__body__bill__content">
                <ul className="checkout__body__bill__content__list-amount w-100">
                    <li>
                        <span>Giá gốc:</span>
                        <span>
                            {courseData.price && '$' + courseData.price}
                            {!courseData.price && <i className="bx bx-loader-circle bx-spin"></i>}
                        </span>
                    </li>
                </ul>
                <span className="checkout__body__bill__content__line w-100"></span>
                <div className="checkout__body__bill__content__total">
                    <span>Total:</span>
                    <span className="checkout__body__bill__content__total__price">
                        {courseData.price && '$' + courseData.price}
                        {!courseData.price && <i className="bx bx-loader-circle bx-spin"></i>}
                    </span>
                </div>
                <span className="checkout__body__bill__content__sub">
                    Bằng cách hoàn tất việc mua hàng của bạn, bạn đồng ý với những <a href="/">điều khoản dịch vụ</a>.
                </span>
                <div ref={paymentRef} className={`${paymentMethod !== 'paypal' && 'hidden'}`}></div>
                <InputCustom
                    typeComp="button"
                    onClick={onSubmitInfo.handleSubmit}
                    classComp={`primary ${step === 1 ? '' : 'dnone'}`}
                    value="Next Step"
                />
                {step > 1 && (
                    <>
                        <InputCustom
                            typeComp="button"
                            classComp={`mt-10 ${paymentMethod !== 'vnpay' && 'hidden'}`}
                            value="VN Pay"
                            onClick={handleTest}
                        />
                        <InputCustom
                            typeComp="button"
                            classComp="mt-10"
                            onClick={() => setStep(step - 1)}
                            value="Back Step"
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default CheckoutBill;
