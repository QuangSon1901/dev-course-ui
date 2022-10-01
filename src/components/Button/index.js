import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const Button = ({
    to,
    href,
    children,
    primary = false,
    disable = false,
    small = false,
    large = false,
    className,
    style,
    leftIcon,
    rightIcon,
    img,
    imgStyle,
    line,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            className={`btn ${primary ? 'primary' : ''} ${disable ? 'disable' : ''}  ${small ? 'small' : ''}  ${
                line ? 'line' : ''
            } ${large ? 'large' : ''} ${className}`}
            onClick={onClick}
            style={style}
            {...props}
        >
            {leftIcon && (
                <span style={{ marginRight: '8px' }} className="icon-btn">
                    <i className={`${leftIcon}`}></i>
                </span>
            )}
            {img && <img className="img-btn" style={imgStyle} src={images[img]} alt="" />}
            <span className="children-btn">{children}</span>
            {rightIcon && (
                <span style={{ marginLeft: '8px' }} className="icon-btn">
                    <i className={`${rightIcon}`}></i>
                </span>
            )}
        </Comp>
    );
};

export default Button;
