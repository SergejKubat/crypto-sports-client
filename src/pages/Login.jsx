import React, { useState } from "react";

import { Link } from "react-router-dom";
import validator from "validator";

import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [touched, setTouched] = useState(false);
    //const [error, setError] = useState("");

    const login = (e) => {
        e.preventDefault();

        setTouched(true);
        // setError("");

        if (username.length < 4) {
            return;
        }

        if (!validator.isStrongPassword(password)) {
            return;
        }

        console.log("login");

        // @TODO: Login logic
    };

    return (
        <section className="login">
            <div className="login-container">
                <h1>Sign Up</h1>
                <p style={{ marginBottom: "2rem" }}>
                    New to CryptoSports? <Link to="/login">Sign Up</Link>
                </p>
                <form autoComplete="off" noValidate className="login-form" onSubmit={login}>
                    <Input
                        name="username"
                        label="Username"
                        value={username}
                        onChange={setUsername}
                        touched={touched}
                        required={true}
                        errorMessage="Username must contain at least 3 characters."
                        validateCb={(value) => value && value.length > 3}
                    />
                    <Input
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={setPassword}
                        touched={touched}
                        required={true}
                        errorMessage="Password must containt at least 8 characters."
                        validateCb={(value) => value && validator.isStrongPassword(value)}
                    />
                    <p className="login-forgot">
                        <Link to="/">Forgot Password?</Link>
                    </p>
                    <p className="login-terms">
                        By continuing past this page, you agree to the <Link to="/">Terms of Use</Link> and understand that information will
                        be used as described in our <Link to="/">Privacy Policy</Link>.
                    </p>
                    <Button text="Sign In" />
                </form>
                {/*error ? (
                    <p className="input-error" style={{ marginTop: "1rem" }}>
                        {error}
                    </p>
                ) : null*/}
            </div>
        </section>
    );
};

export default LoginPage;
