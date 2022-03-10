import React from "react";
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { GameState } from "../../../context/actions";
import { colors } from "../../../theme/constants";

const PlayerStyle = styled.div<{ isActive?: boolean, gameState: GameState, currentPlayer: number }>`
padding: 0 50px;
background-color: ${({
    isActive,
    currentPlayer,
    gameState
}) => (isActive === true && gameState === GameState.started ? colors[currentPlayer] : '')};
display: ${({
    isActive,
    gameState
}: any) => (isActive === false && window.innerWidth < 500 && gameState === GameState.started ? "none" : '')};
`
    ;

interface PlayerProfs {
    name: string;
    points: number;
    gameState: GameState;
    currentPlayer: number;
    setNewPlayerName?: (name: string, index: number) => void;
    index: number;
}

const Player: React.FC<PlayerProfs> = ({ currentPlayer, name, points, gameState, setNewPlayerName, index }) => {

    const onChange = (e: { target: { value: any; }; }) => {
        if (setNewPlayerName) {
            setNewPlayerName(e.target.value, index);
        }
    }

    return (
        <PlayerStyle isActive={index === currentPlayer}
            gameState={gameState}
            currentPlayer={currentPlayer}>
            <h1> {name}</h1>
            {gameState === GameState.notStarted ?
                <TextField id="standard-basic" label="name" variant="standard" color="primary"
                    onChange={onChange} /> :
                <h1> {points} </h1>}
        </PlayerStyle>
    );
};

export default Player;
