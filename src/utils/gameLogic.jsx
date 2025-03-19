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
let usedBoardBox = [];
let letter = "";
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

export function dyeDiv() {
    if (howManyQuess > 1) {
        divFinderFromQuess = (howManyQuess - 1) * 5;
    }

    for (let i = 0; i < 5; i++) {
        const divBoxLocation = "board-box-" + (divFinderFromQuess + i);
        const boardDiv = document.getElementById(divBoxLocation);
        if (!boardDiv) continue;
        const letter = boardDiv.textContent;

        if (letter === selectedWord[i]) {
            boardDiv.classList.add("bg-green-400");
        } else if (selectedWord.includes(letter)) {
            boardDiv.classList.add("bg-yellow-400");
        } else {
            boardDiv.classList.add("bg-gray-400");
        }
    }
}

function selectedKeyEnter(key) {
    if (keyboardKeys === selectedWord) {
        console.log("Tebrikler!");
        dyeDiv();
        keyboardKeys = "";
        if (confettiCallback) {
            confettiCallback(true);
        }
    } else if (keyboardKeys.length === 5) {
        if (totalBoardKeys.length === 30) {
            howManyQuess += 1;
            dyeDiv();
            return null;
        }

        howManyQuess += 1;
        dyeDiv();
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
    if (confettiCallback) {
        confettiCallback(null); // Reset confetti callback
    }
}

function resetBoardText() {
    for (let i = 0; i < 30; i++) {
        const boardDiv = document.getElementById("board-box-" + i);
        if (boardDiv) {
            boardDiv.textContent = ""; // Metni temizle
            boardDiv.classList.remove("bg-green-400", "bg-yellow-400", "bg-gray-400"); // Yanlış harf);
        }
    }
    letter = "";
    keyboardKeys = ""; //TOTAL 5 LENGTH KEYBOARD INPUT
    totalBoardKeys = ""; //ALL TOTAL WORDS
    howManyQuess = 0; //QUEST QUESSES FOR ROW DOM
    divFinderFromQuess = 0;
    confettiCallback = null; //CONFETTI FOR WIN STATUS
    selectedWord = ""; //AUTOMATIC JSON TURKISH WORD SELECTED
    dyeLocationForGreen = [];
    dyeLocationForYellow = [];
    dyeLocationForGray = [];
    selectedWordFunc();
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

function shw(value) {
    try {
        if (typeof value === "string") {
            console.log("String: " + value);
        } else if (typeof value === "number") {
            console.log("Number: " + value);
        } else if (typeof value === "boolean") {
            console.log("Boolean: " + value);
        } else if (Array.isArray(value)) {
            console.log("Array: [" + value.join(", ") + "]");
        } else if (value instanceof HTMLElement) {
            console.log("DOM Element: ", value); // JSON'a çevirmeden direkt yazdır
        } else if (typeof value === "object" && value !== null) {
            console.log("Object: ", Object.assign({}, value)); // JSON.stringify() yerine doğrudan yazdır
        } else if (value === null) {
            console.log("Null: null değeri var.");
        } else if (typeof value === "undefined") {
            console.log("Undefined: Değer tanımsız.");
        } else {
            console.log("Bilinmeyen tür: ", value);
        }
    } catch (error) {
        console.error("Bir hata oluştu: ", error.message);
    }
}
