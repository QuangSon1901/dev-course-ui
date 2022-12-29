import React from 'react';
import Grid from '~/components/Grid';
import InputCustom from '~/components/InputCustom';

const CheckoutPaymentMethod = ({ courseData, paymentMethod, setPaymentMethod }) => {
    return (
        <>
            <div className="checkout__body__overview__content__section">
                <div className="checkout__body__overview__content__section__title">Địa chỉ vùng</div>
                <div className="checkout__body__overview__content__section__body">
                    <InputCustom
                        label="Country"
                        typeComp="select"
                        tag=""
                        sub="Luật pháp yêu cầu chúng tôi thu thuế giao dịch hiện hành đối với các giao dịch mua được thực hiện tại một số khu vực pháp lý thuế nhất định."
                        width={{ label: 'w-50', input: 'w-50' }}
                    >
                        <option value="VN" selected>
                            Vietnam
                        </option>
                    </InputCustom>
                </div>
            </div>
            <div className="checkout__body__overview__content__section">
                <div className="checkout__body__overview__content__section__title">Phương thức thanh toán</div>
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
                        classComp="disable"
                        checked={paymentMethod === 'credit'}
                        data-method="credit"
                        onClick={(event) => setPaymentMethod(event.target.dataset.method)}
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
                        onClick={(event) => setPaymentMethod(event.target.dataset.method)}
                    >
                        <div className="checkout__body__overview__content__section__body__collapse">
                            <span>
                                Để hoàn tất giao dịch của bạn, chúng tôi sẽ chuyển bạn đến các máy chủ an toàn của
                                PayPal.
                            </span>
                        </div>
                    </InputCustom>
                    <InputCustom
                        typeComp="radio-collapse"
                        left={{
                            img: 'https://inkythuatso.com/uploads/images/2021/12/vnpay-logo-inkythuatso-01-13-16-26-42.jpg',
                            title: 'VNPay',
                        }}
                        checked={paymentMethod === 'vnpay'}
                        data-method="vnpay"
                        onClick={(event) => setPaymentMethod(event.target.dataset.method)}
                    >
                        <div className="checkout__body__overview__content__section__body__collapse">
                            <span>
                                Để hoàn tất giao dịch của bạn, chúng tôi sẽ chuyển bạn đến các máy chủ an toàn của
                                VNPay.
                            </span>
                        </div>
                    </InputCustom>
                </div>
            </div>
        </>
    );
};

export default CheckoutPaymentMethod;
