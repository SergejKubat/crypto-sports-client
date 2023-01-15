import React, { useState, useContext } from "react";

import Blockies from "react-blockies";

import ConnectWalletModal from "../../components/Modal/ConnectWalletModal";
import Button from "../../components/Form/Button";

import { UserContext } from "../../context/UserContext";
import { WalletContext } from "../../context/WalletContext";

import { getEllipsisText } from "../../utils/format";

const ProfilePage = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const { user } = useContext(UserContext);

    const { walletAddress } = useContext(WalletContext);

    return (
        <section className="profile">
            <Blockies seed="username" size={15} scale={10} color="#3b2076" bgColor="#2a79dd" className="profile-avatar" />
            <div className="profile-details">
                <p>
                    <b>Username:</b> {user.username}
                </p>
                <p>
                    <b>Email:</b> {user.email}
                </p>
                {walletAddress ? (
                    <p>
                        <b>Wallet Address:</b> {getEllipsisText(walletAddress)}
                    </p>
                ) : (
                    <Button text="Connect Wallet" onClick={() => setIsModalOpened(true)} />
                )}
            </div>
            <Button text="Delete Account" type="danger" />
            <ConnectWalletModal show={isModalOpened} onHide={() => setIsModalOpened(false)} />
        </section>
    );
};

export default ProfilePage;
