import React from "react";
import {useAppContext} from "../context/context";

const StartScreen: React.FC = () => {

    const {state: {currentPlayer, players}} = useAppContext();

    return (
        <>
            <h1> {players[currentPlayer].name} </h1>
            <p> you are a winner!</p>
        </>
    )
};

export default StartScreen;