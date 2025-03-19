import React from "react";
import "../utils/gameLogic.jsx";

function Board() {
    return (
        <div className="flex flex-col items-center justify-center mt-0 select-none sm:mt-10">
            {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 text-center">
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                        <div
                            id={`board-box-${rowIndex * 5 + colIndex}`}
                            key={colIndex}
                            className="flex items-center justify-center p-5 m-1 transition-shadow duration-300 border shadow-lg h-14 w-14 sm:w-16 sm:h-16 hover:shadow-2xl"
                        >{`${rowIndex * 5 + colIndex}`}</div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
