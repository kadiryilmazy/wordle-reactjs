import { ModalCloseIcon } from "../assets/icons/ModalIcons.jsx";

import React from "react";

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
                    <h1>Nasıl Oynanır</h1>
                    <br />
                    <p>
                        WORDLE'i 6 denemede bulun.
                        <br /> Her tahmin 5 harfli doğru bir kelime olmalıdır. Göndermek için enter'a basın.
                    </p>
                    <br />
                    Her tahminden sonra kutucukların renkleri tahmininizin yakınlığına göre değişecektir. <br />
                    <hr className="my-2 text-gray-500 border-t-2" />
                    <h2>Örnekler</h2>
                    <div className="flex gap-2 mt-2 text-2xl font-bold">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-700 border-gray-600 border-3">K</div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400">A</div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400">L</div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400">E</div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400">M</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
