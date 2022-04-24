import React from "react";
import {useAppContext} from "../../context/context";
import StartScreen from "../../screens/StartScreen";
import {GameState, IPlayer} from "../../context/actions";
import InGameScreen from "../../screens/InGameScreen";
import ResultsScreen from "../../screens/ResultsScreen";
import styled from "styled-components"

const GameWrapper = styled.div<{ currentPlayer: number, gameState: number, players: IPlayer[] }>`

  @media (max-width: 500px) {
    height: 100vh;
    background-color: ${({
                           currentPlayer,
                           gameState,
                           players
                         }) => gameState === GameState.started ? players[currentPlayer].color : "inherit"};
    display: flex;
    flex-direction: column;
  }
`


const Game: React.FC = () => {

    const {state: {gameState, currentPlayer, players}} = useAppContext();

    return (
        <GameWrapper currentPlayer={currentPlayer} gameState={gameState} players={players}>
            <h2> Lelo Darts</h2>
            {gameState === GameState.notStarted && <StartScreen/>}
            {gameState === GameState.started && <InGameScreen/>}
            {gameState === GameState.finished && <ResultsScreen/>}
        </GameWrapper>
    )
};

export default Game;
