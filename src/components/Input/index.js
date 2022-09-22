import React from 'react';

const Input = (props) => {
    return (
        <div className="form-input">
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={`input-form ${props.className ? props.className : ''}`}
            />
            <span></span>
        </div>
    );
};

export default Input;
