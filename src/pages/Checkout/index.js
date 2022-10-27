import { loadScript } from '@paypal/paypal-js';
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import images from '~/assets/images';
import Grid from '~/components/Grid';
import Image from '~/components/Image';
import InputCustom from '~/components/InputCustom';
import { authSelector } from '~/redux/selector';
import * as httpRequest from '~/utils/httpRequest';
import { storage } from '~/utils/storage';

const Checkout = () => {
    const navigate = useNavigate();

    const params = useParams();
    const [paramsSearch, setParamsSearch] = useSearchParams();
    const checkoutRef = useRef(null);

    const { user } = useSelector(authSelector);

    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [courseData, setCourseData] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    const handleCollapse = (event) => setPaymentMethod(event.dataset.method);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await httpRequest.get('/checkout/course/' + params.slug);
                if (res.success === 'success') setCourseData(res.course);
            } catch (error) {}
        };

        fetchCourse();
    }, [params.slug]);

    useEffect(() => {
        if (checkoutRef.current.children[0]) {
            checkoutRef.current.removeChild(checkoutRef.current.children[0]);
        }

        if (paymentMethod !== 'paypal' || !courseData.price) return;

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
                                        class_id: Number(paramsSearch.get('class')),
                                        price: String(courseData.price),
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
                                        class_id: Number(paramsSearch.get('class')),
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
                    .render(checkoutRef.current);
            } catch (error) {}
        };
        loadPaypal();
    }, [paymentMethod, courseData.price]);

    return (
        <div className="checkout">
            <div className="checkout__body">
                <div className="checkout__body__overview">
                    <div>
                        <div className="checkout__body__overview__header">Checkout</div>
                        <div className="checkout__body__overview__content">
                            <div className="checkout__body__overview__content__section">
                                <div className="checkout__body__overview__content__section__title">Billing Address</div>
                                <div className="checkout__body__overview__content__section__body">
                                    <InputCustom
                                        label="Country"
                                        typeComp="select"
                                        sub="Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions."
                                        width={{ label: 'w-50', input: 'w-50' }}
                                    >
                                        <option value="VN">Vietnam</option>
                                    </InputCustom>
                                </div>
                            </div>
                            <div className="checkout__body__overview__content__section">
                                <div className="checkout__body__overview__content__section__title">
                                    Student Information
                                </div>
                                <div className="checkout__body__overview__content__section__body">
                                    <InputCustom label="Fullname" name="student_name" placeholder="VD: Lionel Messi" />
                                    <InputCustom
                                        label="Birth"
                                        name="birth"
                                        typeComp="date-picker"
                                        value={startDate}
                                        onChange={setStartDate}
                                    />
                                    <InputCustom label="Email" name="email" placeholder="VD: messi@gmail.com" />
                                    <InputCustom label="Phone" name="phone" placeholder="VD: 0394062185" />
                                </div>
                            </div>
                            <div className="checkout__body__overview__content__section">
                                <div className="checkout__body__overview__content__section__title">Payment Method</div>
                                <div className="checkout__body__overview__content__section__body">
                                    <InputCustom
                                        typeComp="radio-collapse"
                                        left={{
                                            img: 'https://www.udemy.com/staticx/udemy/images/v9/card-default.svg',
                                            title: 'Credit/Debit Card',
                                        }}
                                        right={[
                                            'https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg',
                                            'https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg',
                                            'https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg',
                                            'https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg',
                                        ]}
                                        checked={paymentMethod === 'credit'}
                                        data-method="credit"
                                        onClick={(e) => handleCollapse(e.target)}
                                    >
                                        <div className="checkout__body__overview__content__section__body__collapse">
                                            <InputCustom label="Card number" placeholder="0000 0000 0000 0000" />
                                            <Grid col={2} gap={20}>
                                                <InputCustom label="CVC/CVV" placeholder="CVC" />
                                                <InputCustom label="Expiry date" placeholder="MM/YY" />
                                            </Grid>
                                        </div>
                                    </InputCustom>
                                    <InputCustom
                                        typeComp="radio-collapse"
                                        left={{
                                            img: 'https://www.udemy.com/staticx/udemy/images/v9/hpp-paypal.svg',
                                            title: 'PayPal',
                                        }}
                                        checked={paymentMethod === 'paypal'}
                                        data-method="paypal"
                                        onClick={(e) => handleCollapse(e.target)}
                                    >
                                        <div className="checkout__body__overview__content__section__body__collapse">
                                            <span>
                                                In order to complete your transaction, we will transfer you over to
                                                PayPal's secure servers.
                                            </span>
                                        </div>
                                    </InputCustom>
                                </div>
                            </div>
                            <div className="checkout__body__overview__content__section">
                                <div className="checkout__body__overview__content__section__title">Order</div>
                                <div className="checkout__body__overview__content__section__body">
                                    {(Object.keys(courseData).length > 0 && (
                                        <ul className="checkout__body__overview__content__section__body__list-course">
                                            <li className="checkout__body__overview__content__section__body__list-course__item">
                                                <div>
                                                    <Image
                                                        src={
                                                            process.env.REACT_APP_BASE_URL_FILE_UPLOAD +
                                                            courseData.image
                                                        }
                                                        fallback={images.noImg}
                                                        alt=""
                                                    />
                                                    <h3>{courseData.name}</h3>
                                                </div>
                                                <span>${courseData.price}</span>
                                            </li>
                                        </ul>
                                    )) || (
                                        <i className="bx bx-loader-circle bx-spin checkout__body__overview__content__section__body__loading"></i>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout__body__bill bg-second">
                    <div>
                        <div className="checkout__body__bill__header">Summary</div>
                        <div className="checkout__body__bill__content">
                            <ul className="checkout__body__bill__content__list-amount w-100">
                                <li>
                                    <span>Original price:</span>
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
                                By completing your purchase you agree to these <a href="/">Terms of Service</a>.
                            </span>
                            <div ref={checkoutRef} className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
