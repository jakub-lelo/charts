import React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import styled from "styled-components"

const ButtonsContainer = styled.div`
padding-top:  50px;
   `
;

const StartGameButtons: React.FC<{
    startGame: () => void;
    addNewPlayer: () => void;
}> = ({startGame, addNewPlayer}) => {

    return (
        <ButtonsContainer>
            <ButtonGroup variant="text" aria-label="outlined button group">
                <Button onClick={addNewPlayer}> add player</Button>
                <Button onClick={startGame}> start!</Button>
            </ButtonGroup>
        </ButtonsContainer>
    );
};

export default StartGameButtons;
