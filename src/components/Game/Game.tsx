import React from "react";
import {useAppContext} from "../../context/context";
import StartScreen from "../../screens/StartScreen";
import {GameState} from "../../context/actions";
import InGameScreen from "../../screens/InGameScreen";
import ResultsScreen from "../../screens/ResultsScreen";
import styled from "styled-components"
import {colors} from "../../theme/constants"


const GameWrapper = styled.div<{ currentPlayer: number, gameState: number }>`

@media (max-width: 500px) {
height: 100vh;  
background-color: ${({currentPlayer, gameState}) => gameState === GameState.started ? colors[currentPlayer] : "inherit"};
}
`

const Game: React.FC = () => {
    
    const {state: {gameState, currentPlayer}} = useAppContext();

    return (
        <GameWrapper currentPlayer={currentPlayer} gameState={gameState}>
            <h1> Lelo Darts</h1>
            {gameState === GameState.notStarted && <StartScreen/>}
            {gameState === GameState.started && <InGameScreen/>}
            {gameState === GameState.finished && <ResultsScreen/>}
        </GameWrapper>
    )
};

export default Game;
