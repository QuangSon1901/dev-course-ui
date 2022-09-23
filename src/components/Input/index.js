import React from 'react';

const Input = (props) => {
    return (
        <div className={`form-input ${props.error ? 'error' : ''}`}>
            <div>
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    className={`input-form`}
                ></input>
                <i className="bx bxs-error-circle"></i>
            </div>
            <span className="form-input__message-error">{props.error && props.error}</span>
        </div>
    );
};

export default Input;
