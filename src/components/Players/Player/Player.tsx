import React from "react";
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { GameState } from "../../../context/actions";
import { colors } from "../../../theme/constants";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
`;
const NameAndRemove = styled.div`
display:flex;
`;


interface PlayerProfs {
    name: string;
    points: number;
    gameState: GameState;
    currentPlayer: number;
    setNewPlayerName?: (name: string, index: number) => void;
    removeAPlayer?: (index: number) => void;
    index: number;
}

const Player: React.FC<PlayerProfs> = ({
    currentPlayer,
    name,
    points,
    gameState,
    setNewPlayerName,
    index,
    removeAPlayer
}) => {

    const onChange = (e: { target: { value: any; }; }) => {
        if (setNewPlayerName) {
            setNewPlayerName(e.target.value, index);
        }
    }

    const onClick = (index: number) => {
        if (removeAPlayer) {
            removeAPlayer(index);
        }
    }

    return (
        <PlayerStyle isActive={index === currentPlayer}
            gameState={gameState}
            currentPlayer={currentPlayer}>
            {gameState === GameState.notStarted ?
                <NameAndRemove>
                    <h1> {name}</h1>
                    <IconButton aria-label="delete" onClick={() => onClick(index)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </NameAndRemove>
                : <h1> {name}</h1>
            }

            {gameState === GameState.notStarted ?
                <TextField id="standard-basic" label="name" variant="standard" color="primary"
                    onChange={onChange} /> :
                <h1> {points} </h1>}
        </PlayerStyle>
    );
};

export default Player;
