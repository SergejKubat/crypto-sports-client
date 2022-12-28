import React from "react";

import Blockies from "react-blockies";

import Button from "../../components/Form/Button";

const ProfilePage = () => {
    return (
        <section className="profile">
            <Blockies seed="username" size={15} scale={10} color="#3b2076" bgColor="#2a79dd" className="profile-avatar" />
            <div className="profile-details">
                <p>
                    <b>Username:</b> sergej99
                </p>
                <p>
                    <b>Email:</b> sergej.kubat18@gmail.com
                </p>
                <p>
                    <b>Registered:</b> 20.12.2022 15:50
                </p>
            </div>
            <Button text="Delete Account" type="danger" />
        </section>
    );
};

export default ProfilePage;
