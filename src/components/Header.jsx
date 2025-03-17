import React, { useState } from "react";
import { SortIcon, InfoIcon, SettingsIcon } from "../assets/icons/HeaderIcons.jsx";
import WordleLogo from "../assets/images/wordlelogo.png";
import { InfoModal, StatsModal, SettingsModal } from "./Modals.jsx";

function Header() {
    const [isInfoModalOpen, setInfoModal] = useState(false);
    const [isStatsModalOpen, setStatsModal] = useState(false);
    const [isSettingsModalOpen, setSettingsModal] = useState(false);

    const handleInfoModalClose = () => {
        setInfoModal(false);
    };
    const handleInfoModalOpen = () => {
        setInfoModal(true);
    };
    const handleStatsModalClose = () => {
        setStatsModal(false);
    };
    const handleStatsModalOpen = () => {
        setStatsModal(true);
    };

    const handleSettingsModalClose = () => {
        setSettingsModal(false);
    };
    const handleSettingsModalOpen = () => {
        setSettingsModal(true);
    };

    return (
        <div className="flex justify-between w-full p-1 px-5 bg-black border-gray-600 select-none border-b-1">
            <div className="pt-1 cursor-pointer" onClick={() => window.location.reload()}>
                <img src={WordleLogo} className="h-[20px] w-[20px]" />
            </div>
            <h3 className="text-xl font-semibold">WORDLE TR</h3>
            <div className="flex gap-2 pt-1 cursor-pointer">
                <div onClick={handleInfoModalOpen}>
                    <InfoIcon />
                </div>
                <div onClick={handleStatsModalOpen}>
                    <SortIcon />
                </div>
                <div onClick={handleSettingsModalOpen}>
                    <SettingsIcon />
                </div>
            </div>

            <InfoModal isOpen={isInfoModalOpen} onClose={handleInfoModalClose} />
            <StatsModal isOpen={isStatsModalOpen} onClose={handleStatsModalClose} />
            <SettingsModal isOpen={isSettingsModalOpen} onClose={handleSettingsModalClose} />
        </div>
    );
}

export default Header;
