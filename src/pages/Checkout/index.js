import { useFormik } from 'formik';
import React from 'react';
import { useEffect, useState } from 'react';
import images from '~/assets/images';
import Image from '~/components/Image';
import * as httpRequest from '~/utils/httpRequest';
import { handleScoll } from '~/utils/scrollBody';
import CheckoutBill from './CheckoutBill';
import CheckoutInfo from './CheckoutInfo';
import * as Yup from 'yup';
import CheckoutPaymentMethod from './CheckoutPaymentMethod';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const params = useParams();
    const [step, setStep] = useState(1);
    const [info, setInfo] = useState(null);

    const [paymentMethod, setPaymentMethod] = useState('');
    const [courseData, setCourseData] = useState({});

    const formik = useFormik({
        initialValues: {
            name: '',
            birth: new Date(),
            email: '',
            phone: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Full name is not required!'),
            email: Yup.string().required('Email is not required!').email('Email bad format!'),
            birth: Yup.date().required('Date is not required!'),
            phone: Yup.string().required('Phone is not required!'),
        }),
        onSubmit: (value) => {
            setStep(2);
            setInfo(value);
        },
    });

    useEffect(() => {
        handleScoll(0, false);
    }, []);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await httpRequest.get('/checkout/course/' + params.slug);
                if (res.success === 'success') setCourseData(res.course);
            } catch (error) {}
        };

        fetchCourse();
    }, [params.slug]);

    return (
        <div className="checkout">
            <div className="checkout__body">
                <div className="checkout__body__overview">
                    <div>
                        <div className="checkout__body__overview__header">Thanh toán</div>
                        <div className="checkout__body__overview__content">
                            {step === 1 && <CheckoutInfo formik={formik} setInfo={setInfo} />}
                            {step === 2 && (
                                <CheckoutPaymentMethod
                                    paymentMethod={paymentMethod}
                                    setPaymentMethod={setPaymentMethod}
                                />
                            )}
                            <div className="checkout__body__overview__content__section">
                                <div className="checkout__body__overview__content__section__title">Khoá học</div>
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
                    <CheckoutBill
                        courseData={courseData}
                        step={step}
                        setStep={setStep}
                        info={info}
                        onSubmitInfo={formik}
                        paymentMethod={paymentMethod}
                    />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
