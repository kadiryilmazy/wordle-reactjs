import React from "react";

function Board() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 select-none">
            {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 w-[350px] text-center">
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                        <div key={colIndex} className="flex items-center justify-center w-16 h-16 p-5 m-1 transition-shadow duration-300 border shadow-lg hover:shadow-2xl"></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
