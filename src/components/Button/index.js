import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    to,
    href,
    children,
    primary = false,
    disable = false,
    small = false,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
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
            className={`btn ${primary ? 'primary' : ''} ${disable ? 'disable' : ''} ${
                small ? 'small' : ''
            } ${className}`}
            onClick={onClick}
        >
            {children}
        </Comp>
    );
};

export default Button;
