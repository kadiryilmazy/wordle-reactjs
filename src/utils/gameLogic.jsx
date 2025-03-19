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
    if (howManyQuess !== 0) {
        howManyQuess = howManyQuess * 5;
    }

    if (statusForDyeAction === "dyeWin") {
        if (howManyQuess !== 0) {
            howManyQuess = howManyQuess * 5;
        }
        for (let i = 0; i < 5; i++) {
            const divLocation = "board-box-" + (howManyQuess + i);
            const boardDiv = document.getElementById(`${divLocation}`);
            boardDiv.style.backgroundColor = "green";
        }

        if (confettiCallback) {
            confettiCallback(true);
        }
    }
    if (statusForDyeAction === "checkForDye") {
        console.log("checking");
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if (keyboardKeys[i] === selectedWord[j]) {
                    console.log(selectedWord[j]);
                    console.log(keyboardKeys[i]);
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
            selectedKeyReset();
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
    keyboardKeys = "";
    totalBoardKeys = "";
    selectedWord = turkishWords[Math.floor(Math.random() * turkishWords.length)];
    resetBoardText();
    selectedWordFunc();
    if (confettiCallback) {
        confettiCallback(null);
    }
}

function resetBoardText() {
    for (let i = 0; i < 30; i++) {
        const boardDiv = document.getElementById("board-box-" + i);
        if (boardDiv) {
            boardDiv.textContent = totalBoardKeys[i];
            boardDiv.style.backgroundColor = "transparent";
            console.log("RESETTED");
        }
    }
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
