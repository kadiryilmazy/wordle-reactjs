import { useState } from "react";
import turkishWords from "./turkishWords.json";
import Confetti from "react-confetti";

let keyboardKeys = ""; //TOTAL 5 LENGTH KEYBOARD INPUT
let totalBoardKeys = ""; //ALL TOTAL WORDS
let howManyQuess = 0; //QUEST QUESSES FOR ROW DOM
let divFinderFromQuess = 0;
let confettiCallback = null; //CONFETTI FOR WIN STATUS
let selectedWord = ""; //AUTOMATIC JSON TURKISH WORD SELECTED
let dyeLocationForGreen = [];
let dyeLocationForYellow = [];
let dyeLocationForGray = [];
selectedWordFunc();

export default function handleKeyboardClick(key) {
    if (key === "←") {
        selectedKeyBackspace();
    } else if (key === "ENTER") {
        selectedKeyEnter(key);
    } else if (key === "RESET") {
        selectedKeyReset();
    } else if (key) {
        selectedKeyNormalKey(key);
    }
    keyListenerForBoard();
}

export function dyeDiv(statusForDyeAction) {
    if (statusForDyeAction === "dyeWin") {
        divFinderFromQuess = howManyQuess * 5; // Calculate the starting index for the current guess
        for (let i = 0; i < 5; i++) {
            const divBoxLocation = "board-box-" + (divFinderFromQuess + i);
            const boardDiv = document.getElementById(`${divBoxLocation}`);
            if (boardDiv) {
                boardDiv.style.backgroundColor = "green"; // Dye the winning boxes green
            }
        }

        if (confettiCallback) {
            confettiCallback(true); // Trigger confetti on win
        }
    }

    if (statusForDyeAction === "checkForDye") {
        divFinderFromQuess = (howManyQuess - 1) * 5; // Calculate the starting index for the current guess

        // Create a copy of the selectedWord to track which letters have been matched
        let tempSelectedWord = selectedWord.split("");
        let matchedIndexes = []; // To track matched indexes for yellow and green

        // First pass: mark correct letters (green)
        for (let i = 0; i < 5; i++) {
            if (keyboardKeys[i] === tempSelectedWord[i]) {
                const divBoxLocation = "board-box-" + (divFinderFromQuess + i);
                const boardDiv = document.getElementById(`${divBoxLocation}`);
                if (boardDiv) {
                    boardDiv.style.backgroundColor = "green"; // Dye the correct letters green
                    boardDiv.style.color = "white"; // Set text color to white for visibility
                }
                // Mark the letter as used
                tempSelectedWord[i] = null; // Mark this letter as matched
                matchedIndexes.push(i); // Store matched index
            }
        }

        // Second pass: mark letters that are in the word but in the wrong position (yellow)
        for (let i = 0; i < 5; i++) {
            if (keyboardKeys[i] !== tempSelectedWord[i]) {
                // Only check unused letters
                const index = tempSelectedWord.indexOf(keyboardKeys[i]);
                if (index !== -1) {
                    const divBoxLocation = "board-box-" + (divFinderFromQuess + i);
                    const boardDiv = document.getElementById(`${divBoxLocation}`);
                    if (boardDiv) {
                        boardDiv.style.backgroundColor = "yellow"; // Dye the letters yellow
                        boardDiv.style.color = "black"; // Set text color to black for visibility
                    }
                    // Mark the letter as used
                    tempSelectedWord[index] = null; // Mark this letter as matched
                    matchedIndexes.push(i); // Store matched index
                }
            }
        }

        // Third pass: mark letters that are not in the word (gray)
        for (let i = 0; i < 5; i++) {
            if (keyboardKeys[i] !== "_" && tempSelectedWord[i] !== null && !matchedIndexes.includes(i)) {
                const divBoxLocation = "board-box-" + (divFinderFromQuess + i);
                const boardDiv = document.getElementById(`${divBoxLocation}`);
                if (boardDiv) {
                    boardDiv.style.backgroundColor = "gray"; // Dye the letters gray
                    boardDiv.style.color = "white"; // Set text color to white for visibility
                }
            }
        }
    }
}
function selectedKeyEnter(key) {
    if (keyboardKeys === selectedWord) {
        console.log("Tebrikler!");
        dyeDiv("dyeWin");
        keyboardKeys = "";
    } else if (keyboardKeys.length === 5) {
        if (totalBoardKeys.length === 30) {
            return null;
        }
        howManyQuess += 1;
        dyeDiv("checkForDye");
        keyboardKeys = "";
    }
}

function selectedKeyBackspace() {
    totalBoardKeys = totalBoardKeys.slice(0, -1);
    keyboardKeys = keyboardKeys.slice(0, -1);
    resetBoardText();
}

function selectedKeyNormalKey(key) {
    if ((keyboardKeys.length === 5) & (key !== "ENTER")) {
        return null;
    }

    if (keyboardKeys.length < 30) {
        if (key === "←") return null;
        keyboardKeys += key;
        totalBoardKeys += key;
    }
}

export { handleKeyboardClick, selectedWord };

//DEFAULT FUNCTIONS

//RANDOM SELECTOR FROM JSON
function selectedWordFunc() {
    selectedWord = turkishWords[Math.floor(Math.random() * turkishWords.length)].toUpperCase();
    console.log(selectedWord);
}

//CONFETTI CONTROLLER
export function setConfettiCallback(callback) {
    confettiCallback = callback; // React bileşeninden gelen fonksiyonu kaydet
}

//RESET CONTROLLERS
function selectedKeyReset() {
    keyboardKeys = ""; // Clear the current input
    totalBoardKeys = ""; // Clear all previous guesses
    selectedWord = turkishWords[Math.floor(Math.random() * turkishWords.length)]; // Select a new word
    resetBoardText(); // Reset the board display
    selectedWordFunc(); // Select a new word for the next round
    if (confettiCallback) {
        confettiCallback(null); // Reset confetti callback
    }
}

function resetBoardText() {
    // Her bir kutunun sıfırlanması işlemi
    for (let i = 0; i < 30; i++) {
        const boardDiv = document.getElementById("board-box-" + i);
        if (boardDiv) {
            boardDiv.textContent = ""; // Metni temizle
            boardDiv.style.backgroundColor = "transparent"; // Arka plan rengini sıfırla
            boardDiv.style.color = "white"; // Yazı rengini beyaz yap
            boardDiv.style.border = "1px solid white"; // Kenarlık rengini beyaz yap
            boardDiv.style.transition = "background-color 0.3s ease"; // Geçiş efekti
            boardDiv.style.opacity = "1"; // Opaklık değerini sıfırla
        }
    }

    // Diğer oyun verilerini sıfırla
    keyboardKeys = ""; // Mevcut tahmini sıfırla
    totalBoardKeys = ""; // Tüm önceki tahminleri sıfırla
    howManyQuess = 0; // Tahmin sayısını sıfırla
    console.log("Game reset successful!");
}

//ACTIONS
function keyListenerForBoard() {
    if (keyboardKeys.length <= 5) {
        for (let i = 0; i < totalBoardKeys.length; i++) {
            const boardDiv = document.getElementById("board-box-" + i);
            if (boardDiv) {
                boardDiv.textContent = totalBoardKeys[i];
            }
        }
    }
}
