import React, {useCallback} from "react";
import Players from "../components/Players/Players";
import {useAppContext} from "../context/context";
import InGameButtons from "../components/InGameButtons/InGameButtons";
import {subtractPlayerPoints} from "../context/actions";

const InGameScreen: React.FC = () => {
    const {state: {gameState, players, currentPlayer}, dispatch} = useAppContext();

    const setPlayerPoints = useCallback((points: number) => dispatch(subtractPlayerPoints(points))
        , [dispatch]);

    return (
        <>
            <Players players={players} gameState={gameState} currentPlayer={currentPlayer}/>
            <InGameButtons setPlayerPoints={setPlayerPoints}/>
        </>
    )
};

export default InGameScreen;
