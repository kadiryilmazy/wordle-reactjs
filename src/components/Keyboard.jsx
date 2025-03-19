import React, { useState } from "react";
import { handleKeyboardClick } from "../utils/gameLogic.jsx";

const Keyboard = () => {
    const keys = [
        ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü", "RESET"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç", "←"],
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-3 select-none">
            {keys.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-11 text-center w-[550px] sm:gap-10">
                    {row.map((key, colIndex) => (
                        <div
                            key={colIndex}
                            className={`flex items-center justify-center w-10 h-9 p-6 m-1 transition-shadow duration-300 border shadow-lg text-xs font-bold hover:shadow-2xl hover:bg-gray-500 cursor-pointer`}
                            onClick={() => handleKeyboardClick(key)}
                        >
                            {key}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
