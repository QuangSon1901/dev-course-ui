import React from 'react';
import Grid from '~/components/Grid';
import InputCustom from '~/components/InputCustom';

const CheckoutPaymentMethod = ({ courseData, paymentMethod, setPaymentMethod }) => {
    return (
        <>
            <div className="checkout__body__overview__content__section">
                <div className="checkout__body__overview__content__section__title">Billing Address</div>
                <div className="checkout__body__overview__content__section__body">
                    <InputCustom
                        label="Country"
                        typeComp="select"
                        tag=""
                        sub="Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions."
                        width={{ label: 'w-50', input: 'w-50' }}
                    >
                        <option value="VN">Vietnam</option>
                    </InputCustom>
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
                                In order to complete your transaction, we will transfer you over to PayPal's secure
                                servers.
                            </span>
                        </div>
                    </InputCustom>
                </div>
            </div>
        </>
    );
};

export default CheckoutPaymentMethod;
