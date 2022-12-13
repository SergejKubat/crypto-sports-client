import React, { useState, useEffect, useMemo } from "react";

import { useLocation, useNavigate, Link } from "react-router-dom";
import validator from "validator";

import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [expired, setExpired] = useState(false);
    const [touched, setTouched] = useState(false);
    //const [error, setError] = useState("");

    const { search } = useLocation();

    const navigate = useNavigate();

    const query = useMemo(() => new URLSearchParams(search), [search]);

    const resetPassword = (e) => {
        e.preventDefault();

        setTouched(true);

        if (!validator.isStrongPassword(password)) {
            return;
        }

        if (password !== confirmPassword) {
            return;
        }

        console.log("reset password");

        navigate("/profile");
    };

    useEffect(() => {
        const resetPasswordCode = query.get("code");

        console.log(`code: ${resetPasswordCode}`);

        setExpired(resetPasswordCode ? true : false);
    }, [query]);

    return (
        <section className="reset-password">
            <div className="reset-password-container">
                <h1>Reset Password</h1>
                {expired ? (
                    <React.Fragment>
                        <p style={{ margin: "2rem 0" }}>
                            Unfortunately, the link has expired. <br /> Please submit a new password reset request.
                        </p>
                        <Link to="/forgotten-password">Submit new request</Link>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p style={{ marginBottom: "2rem" }}>Please enter new password for your account</p>
                        <form autoComplete="off" noValidate className="register-form" onSubmit={resetPassword}>
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
                            <Button text="Reset Password" />
                        </form>
                    </React.Fragment>
                )}
            </div>
        </section>
    );
};

export default ResetPasswordPage;
