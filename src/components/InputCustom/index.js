import React, { forwardRef } from 'react';
import { DatePicker } from 'react-rainbow-components';
import images from '~/assets/images';
import Image from '../Image';

const InputCustom = forwardRef(({ typeComp = 'text', className, children, width, ...props }, ref) => {
    let Comp = Input;
    switch (typeComp) {
        case 'select':
            Comp = Select;
            break;
        case 'radio-collapse':
            Comp = RadioCollapse;
            break;
        case 'date-picker':
            Comp = DatePickerInput;
            break;
        default:
            break;
    }

    return (
        <div className={`input-custom ${className}`}>
            <Comp children={children} width={width} {...props} />
        </div>
    );
});

const Input = ({
    label,
    tag = 'Required',
    type,
    width = { label: '', input: '' },
    value,
    name,
    error,
    placeholder = '',
    onChange,
    onBlur,
    ...props
}) => {
    return (
        <>
            <label className={`input-custom__label-input ${width.label}`}>
                <span className="input-custom__label-input__span">{label}</span>
                <span className="input-custom__label-input__tag">{tag}</span>
            </label>
            <div className={`input-custom__text-input ${width.input}`}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...props}
                />
            </div>
            <span className="input-custom__error-input">{error && error}</span>
        </>
    );
};

const Select = ({
    label,
    tag = 'Required',
    width = { label: '', input: '' },
    defaulOption = 'Please select...',
    sub,
    children,
}) => {
    return (
        <>
            <label className={`input-custom__label-input ${width.label}`}>
                <span className="input-custom__label-input__span">{label}</span>
                <span className="input-custom__label-input__tag">{tag}</span>
            </label>
            <div className={`input-custom__select-input ${width.input}`}>
                <select>
                    <option value="default">{defaulOption}</option>
                    {children}
                </select>
                <span className="input-custom__select-input__icon">
                    <i className="bx bx-chevron-down"></i>
                </span>
            </div>
            <span className="input-custom__sub">{sub}</span>
        </>
    );
};

const RadioCollapse = ({
    left = { img: images.noImg, title: '' },
    right = [],
    children,
    checked,
    onClick,
    ...props
}) => {
    return (
        <>
            <div
                className={`input-custom__radio-collapse-input ${
                    checked && 'input-custom__radio-collapse-input--active'
                }`}
            >
                <div className="input-custom__radio-collapse-input__header" onClick={onClick} {...props}>
                    <div className="input-custom__radio-collapse-input__header__left">
                        <span className="input-custom__radio-collapse-input__header__check"></span>
                        <span className="input-custom__radio-collapse-input__header__img">
                            <Image src={left.img || ''} fallback={images.noImg} alt="" />
                        </span>
                        <span className="input-custom__radio-collapse-input__header__title">{left.title}</span>
                    </div>
                    <div className="input-custom__radio-collapse-input__header__right">
                        {right.length > 0 &&
                            right.map((item, index) => (
                                <span key={index} className="input-custom__radio-collapse-input__header__img">
                                    <Image src={item || ''} fallback={images.noImg} alt="" />
                                </span>
                            ))}
                    </div>
                </div>
            </div>
            <div className="input-custom__radio-collapse-input__collapse">{children}</div>
        </>
    );
};

const DatePickerInput = ({
    label,
    tag = 'Required',
    type,
    width = { label: '', button: '' },
    value,
    error,
    onClick,
    onChange,
    ...props
}) => {
    return (
        <>
            <label className={`input-custom__label-input ${width.label}`}>
                <span className="input-custom__label-input__span">{label}</span>
                <span className="input-custom__label-input__tag">{tag}</span>
            </label>
            <div className={`input-custom__date-input ${width.input}`}>
                <DatePicker
                    formatStyle="large"
                    value={value}
                    label="DatePicker Label"
                    onChange={(value) => onChange(value)}
                    icon={<i className="bx bx-calendar"></i>}
                    className="input-custom__date-input__container"
                    hideLabel
                    locale="en"
                />
            </div>
            <span className="input-custom__error-input">{error && error}</span>
        </>
    );
};

export default InputCustom;
