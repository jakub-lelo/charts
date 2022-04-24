import React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import styled from "styled-components"

const ButtonsContainer = styled.div`
  padding-top: 50px;
`;

const ResultsButtons: React.FC<{
    startGame: () => void;
    endGame: () => void;
}> = ({startGame, endGame}) => {

    return (
        <ButtonsContainer>
            <ButtonGroup variant="text" aria-label="outlined button group">
                <Button onClick={startGame}> play again</Button>
                <Button onClick={endGame}> new game</Button>
            </ButtonGroup>
        </ButtonsContainer>
    );
};

export default ResultsButtons;
