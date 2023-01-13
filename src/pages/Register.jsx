import React, { useState, useContext } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

import { UserContext } from "../context/UserContext";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    const register = (e) => {
        e.preventDefault();

        setTouched(true);
        setError("");

        if (username.length < 4) {
            return;
        }

        if (!validator.isEmail(email)) {
            return;
        }

        if (!validator.isStrongPassword(password)) {
            return;
        }

        if (password !== confirmPassword) {
            return;
        }

        const data = {
            username: username,
            email: email,
            password: password
        };

        axios
            .post(`http://localhost:5000/api/register`, data, { withCredentials: true })
            .then((response) => {
                setUser(response.data);

                window.localStorage.setItem("user", JSON.stringify(response.data));

                navigate("/profile");
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    return (
        <section className="register">
            <div className="register-container">
                <h1>Sign Up</h1>
                <p style={{ marginBottom: "2rem" }}>
                    Already have a CryptoSports Account? <Link to="/login">Sign In</Link>
                </p>
                <form autoComplete="off" noValidate className="register-form" onSubmit={register}>
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
                        name="email"
                        label="Email Address"
                        value={email}
                        onChange={setEmail}
                        touched={touched}
                        required={true}
                        errorMessage="Email address is not valid."
                        validateCb={(value) => value && validator.isEmail(value)}
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
                    <Input
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        touched={touched}
                        required={true}
                        errorMessage="Passwords do not match."
                        validateCb={(value) => value && value === password}
                    />
                    <p className="register-terms">
                        By continuing past this page, you agree to the <Link to="/">Terms of Use</Link> and understand that information will
                        be used as described in our <Link to="/">Privacy Policy</Link>.
                    </p>
                    {error ? (
                        <p className="input-error" style={{ textAlign: "center" }}>
                            {error}
                        </p>
                    ) : null}
                    <Button text="Sign Up" />
                </form>
            </div>
        </section>
    );
};

export default RegisterPage;
