import { ModalCloseIcon } from "../assets/icons/ModalIcons.jsx";

import React, { useState } from "react";

const InfoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-100">
            <div className="absolute flex text-xs bg-black bg-opacity-70 top-0 h-[25%] w-[50%] border-amber-500">
                <div clas>
                    <div className="absolute cursor-pointer top-5 right-5 " onClick={onClose}>
                        <ModalCloseIcon />
                    </div>
                </div>
                <div className="p-10 text-xl">
                    <h2 className="font-bold text-center uppercase">Nasıl Oynanır</h2>
                    <br />
                    <p>
                        WORDLE'i 6 denemede bulun.
                        <br /> Her tahmin 5 harfli doğru bir kelime olmalıdır. Göndermek için enter'a basın.
                    </p>
                    <br />
                    Her tahminden sonra kutucukların renkleri tahmininizin yakınlığına göre değişecektir. <br />
                    <hr className="my-2 text-gray-500 border-t-2" />
                    <h2 className="font-semibold">Örnekler</h2>
                    <div className="flex gap-2 mt-2 text-2xl font-bold">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-gray-600 border-3">K</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-gray-600 border-3">A</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 border-2 border-gray-400">R</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-600 border-2 border-gray-400">M</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-600 border-2 border-gray-400">A</div>
                    </div>
                    <p className="pt-2">
                        <span className="font-semibold text-green-500">K</span> ve <span className="font-semibold text-green-500">A</span> harfi kelimede var ve doğru yerde.
                    </p>
                    <div className="flex gap-2 mt-2 text-2xl font-bold">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-gray-600 border-3">K</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-gray-600 border-3">A</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-2 border-gray-400 ">D</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 border-2 border-gray-400">R</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-600 border-2 border-gray-400">O</div>
                    </div>
                    <p className="pt-2">
                        <span className="font-semibold text-yellow-500">R</span> harfi kelimede var fakat yanlış yerde.
                    </p>
                    <div className="flex gap-2 mt-2 text-2xl font-bold">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-gray-600 border-3">K</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-gray-600 border-3">A</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-2 border-gray-400 ">D</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-600 border-2 border-gray-400">E</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-2 border-gray-400">R</div>
                    </div>
                    <p className="pt-2">
                        <span className="font-semibold text-gray-500">E</span> harfi kelimede yok.
                    </p>
                    <hr className="my-2 text-gray-500 border-t-2" />
                    <p className="pt-2">Her gün yeni bir WORDLE gelir!</p>
                </div>
            </div>
        </div>
    );
};

const StatsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-100">
            <div className="absolute flex text-xs bg-black bg-opacity-70 top-0 h-[25%] w-[60%] border-amber-500">
                <div clas>
                    <div className="absolute cursor-pointer top-5 right-5 " onClick={onClose}>
                        <ModalCloseIcon />
                    </div>
                </div>
                <div className="p-10 text-xl">
                    <h2 className="font-bold text-center uppercase">İSTATİSTİK</h2>
                    <div className="flex items-center justify-center gap-6 p-2 m-5 text-center ">
                        <div>
                            <span className="text-2xl font-bold text-green-400">0</span> <br />
                            Oynanan
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-green-400">0</span> <br />
                            Galibiyet
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-green-400">0</span> <br />
                            Seri Galibiyet
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-green-400">0</span> <br />
                            Seri Skoru
                        </div>
                    </div>
                    <h2 className="font-bold uppercase">TAHMİN DAĞILIMI</h2>
                    <div className="flex items-center justify-center gap-6 p-2 m-5 text-center ">
                        <div>VERİ YOK</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SettingsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [isHardModeOn, setIsHardModeOn] = useState(false);
    const toggleHardModeHandler = () => {
        setIsHardModeOn(!isHardModeOn);
    };

    const [isBlackModeOn, setIsBlackModeOn] = useState(false);
    const toggleBlackModeHandler = () => {
        setIsBlackModeOn(!isBlackModeOn);
    };

    const [isHighContrastModeOn, setIsHighContrastModeOn] = useState(false);
    const toggleHighContrastModeHandler = () => {
        setIsHighContrastModeOn(!isHighContrastModeOn);
    };

    return (
        <div className="fixed top-0 left-0 flex items-start justify-center w-full h-full bg-black bg-opacity-100">
            <div className="flex flex-col items-center justify-start text-xs bg-black bg-opacity-70 w-[60%] h-auto border-amber-500 relative p-5">
                <div className="absolute cursor-pointer top-5 right-5" onClick={onClose}>
                    <ModalCloseIcon />
                </div>
                <div className="flex flex-col items-center justify-center w-full p-10 text-xl">
                    <div className="w-full max-w-lg">
                        <h2 className="font-bold text-center uppercase">AYARLAR</h2>
                        <div className="flex items-center justify-between gap-6 p-2 m-5 text-center">
                            <h2>Zor Mod</h2>
                            <div className="flex items-center justify-center">
                                <input type="checkbox" checked={isHardModeOn} onChange={toggleHardModeHandler} className="absolute w-0 h-0 opacity-0" />
                                <div onClick={toggleHardModeHandler} className={`cursor-pointer w-16 h-8 rounded-full ${isHardModeOn ? "bg-green-500" : "bg-gray-400"} transition-all duration-300`}>
                                    <div className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isHardModeOn ? "translate-x-8" : "translate-x-0"}`} />
                                </div>
                            </div>
                        </div>
                        <hr className="my-2 text-gray-500 border-t-2" />
                    </div>
                    <div className="w-full max-w-lg">
                        <div className="flex items-center justify-between gap-6 p-2 m-5 text-center">
                            <h2>Zor Mod</h2>
                            <div className="flex items-center justify-center">
                                <input type="checkbox" checked={isBlackModeOn} onChange={toggleBlackModeHandler} className="absolute w-0 h-0 opacity-0" />
                                <div onClick={toggleBlackModeHandler} className={`cursor-pointer w-16 h-8 rounded-full ${isBlackModeOn ? "bg-green-500" : "bg-gray-400"} transition-all duration-300`}>
                                    <div className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isBlackModeOn ? "translate-x-8" : "translate-x-0"}`} />
                                </div>
                            </div>
                        </div>
                        <hr className="my-2 text-gray-500 border-t-2" />
                    </div>
                    <div className="w-full max-w-lg">
                        <div className="flex items-center justify-between gap-6 p-2 m-5 text-center">
                            <h2>Zor Mod</h2>
                            <div className="flex items-center justify-center">
                                <input type="checkbox" checked={isHighContrastModeOn} onChange={toggleHighContrastModeHandler} className="absolute w-0 h-0 opacity-0" />
                                <div
                                    onClick={toggleHighContrastModeHandler}
                                    className={`cursor-pointer w-16 h-8 rounded-full ${isHighContrastModeOn ? "bg-green-500" : "bg-gray-400"} transition-all duration-300`}
                                >
                                    <div
                                        className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isHighContrastModeOn ? "translate-x-8" : "translate-x-0"}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="my-2 text-gray-500 border-t-2" />
                    </div>
                    <div className="w-full max-w-lg">
                        <div className="flex items-center justify-between gap-6 p-2 m-5 text-center">
                            <h2>Bize Ulaşın</h2>
                            <div className="flex items-center justify-center text-gray-700 underline">
                                <a href="#">Github</a>
                            </div>
                        </div>
                        <hr className="my-2 text-gray-500 border-t-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { InfoModal, StatsModal, SettingsModal };
