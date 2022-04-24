import React, {useCallback} from "react";
import {useAppContext} from "../context/context";
import {setGameState, addPlayer, setPlayerName, setPlayerColor, GameState, removePlayer} from "../context/actions";
import StartGameButtons from "../components/StartGameButtons/StartGameButtons";
import Players from "../components/Players/Players";


const StartScreen: React.FC = () => {
    const {state: {gameState, players, currentPlayer}, dispatch} = useAppContext();

    const startGame = useCallback(() => dispatch(setGameState(GameState.started))
        , [dispatch]);

    const addNewPlayer = useCallback(() => dispatch(addPlayer())
        , [dispatch]);

    const removeAPlayer = useCallback((index: number) => dispatch(removePlayer(index))
        , [dispatch]);

    const setNewPlayerName = useCallback((name: string, index: number) => dispatch(setPlayerName({name, index}))
        , [dispatch]);

    const setNewPlayerColor = useCallback((color: string, index: number) => dispatch(setPlayerColor({color, index}))
        , [dispatch]);

    return (
        <>

            <Players players={players} gameState={gameState}
                     setNewPlayerName={setNewPlayerName}
                     setNewPlayerColor={setNewPlayerColor}
                     currentPlayer={currentPlayer}
                     removeAPlayer={removeAPlayer}/>

            <StartGameButtons startGame={startGame} addNewPlayer={addNewPlayer}/>
        </>
    )
};

export default StartScreen;
