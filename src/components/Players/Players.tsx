import React from "react";
import Player from "./Player/Player";
import styled from "styled-components"
import {GameState, IPlayer} from "../../context/actions";

const PlayersStyled = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
    `
;

interface PlayersProps {
    currentPlayer: number;
    players: Array<IPlayer>;
    gameState: GameState;
    setNewPlayerName?: (name: string, index: number) => void;
    removeAPlayer?: (index: number) => void;
}

const Players: React.FC<PlayersProps> = ({currentPlayer, players, gameState, setNewPlayerName, removeAPlayer}) => {

    return (
        <PlayersStyled>
            {players.map((item: any, index: number) => (
                <Player currentPlayer={currentPlayer}
                        name={item.name}
                        points={item.points}
                        gameState={gameState}
                        setNewPlayerName={setNewPlayerName}
                        removeAPlayer={removeAPlayer}
                        index={index}
                        key={`player-${index}`}/>
            ))}
        </PlayersStyled>
    );
};

export default Players;
