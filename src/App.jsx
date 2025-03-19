import { useEffect, useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Confetti from "react-confetti";
import { setConfettiCallback } from "./utils/gameLogic";

function App() {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setConfettiCallback(setShowConfetti); // gameLogic.js içindeki callback'i ayarla
    }, []);
    return (
        <div>
            {showConfetti && <Confetti />}
            <Header />
            <Board />
            <Keyboard />
        </div>
    );
}

export default App;
