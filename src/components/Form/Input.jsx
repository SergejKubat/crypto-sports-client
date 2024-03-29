import React, { useState, useEffect } from "react";

const Input = (props) => {
    const [value, setValue] = useState(props.value);
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState(false);

    const onChange = (e) => {
        const _value = e.target.value;

        setValue(_value);

        if (touched && props.validateCb) {
            setError(!props.validateCb(_value));
        }

        if (props.onChange) {
            props.onChange(_value);
        }
    };

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    useEffect(() => {
        setTouched(props.touched);
    }, [props.touched]);

    useEffect(() => {
        if (touched && props.validateCb) {
            setError(!props.validateCb(value));
        } else {
            setError(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [touched]);

    return (
        <div className={`input${props.className ? ` ${props.className}` : ""}`}>
            {props.label ? (
                <div className="input-header">
                    <label className="label">{props.label}</label>
                </div>
            ) : null}
            <input
                name={props.name}
                value={value}
                required={props.required}
                disabled={props.disabled}
                type={props.type || "text"}
                placeholder={props.placeholder}
                className={props.inputClassName}
                style={error ? { borderColor: "#d93a3a" } : null}
                onChange={onChange}
                onBlur={() => setTouched(true)}
            />
            {error ? <p className="input-error">{props.errorMessage}</p> : null}
        </div>
    );
};

export default Input;
