import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Modal, CloseButton } from "react-bootstrap";
import validator from "validator";

import Input from "../Form/Input";
import Button from "../Form/Button";
import axios from "axios";

import { UserContext } from "../../context/UserContext";

const DeleteAccountModal = (props) => {
    const [password, setPassword] = useState("");
    const [touched, setTouched] = useState(false);

    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    const deleteAccount = (e) => {
        e.preventDefault();

        setTouched(true);

        if (!validator.isStrongPassword(password)) {
            return;
        }

        const data = {
            password: password
        };

        axios
            .delete(`${import.meta.env.VITE_API_URL}/users`, { data: data, withCredentials: true })
            .then(() => {
                setUser(null);

                window.localStorage.removeItem("user");

                navigate("/");
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (
        <Modal show={props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
            <Modal.Header>
                <Modal.Title as="h1">Delete your Account</Modal.Title>
                <CloseButton style={{ fontSize: "1.6rem" }} onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off" noValidate className="login-form" onSubmit={deleteAccount}>
                    <h2 className="mb-4">Please enter your password</h2>
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
                    <Button type="danger" text="DELETE ACCOUNT" />
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default DeleteAccountModal;
