import { useFormik } from 'formik';
import React from 'react';
import InputCustom from '~/components/InputCustom';
import * as Yup from 'yup';

const CheckoutInfo = ({ formik }) => {
    return (
        <div className="checkout__body__overview__content__section">
            <div className="checkout__body__overview__content__section__title">Student Information</div>
            <div className="checkout__body__overview__content__section__body">
                <InputCustom
                    label="Fullname"
                    validate={true}
                    name="name"
                    value={formik.values.name}
                    placeholder="VD: Lionel Messi"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name && formik.touched.name ? formik.errors.name : ''}
                />
                <InputCustom
                    label="Birth"
                    name="birth"
                    value={formik.values.birth}
                    validate={true}
                    typeComp="date-picker"
                    tag="Required | Date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.birth && formik.touched.birth ? formik.errors.birth : ''}
                />
                <InputCustom
                    label="Email"
                    validate={true}
                    name="email"
                    tag="Required | Email"
                    value={formik.values.email}
                    placeholder="VD: messi@gmail.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
                />
                <InputCustom
                    label="Phone"
                    validate={true}
                    name="phone"
                    value={formik.values.phone}
                    placeholder="VD: 0394062185"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}
                />
            </div>
        </div>
    );
};

export default CheckoutInfo;
