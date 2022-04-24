import React, {useCallback, useEffect, useRef} from 'react';
import lottie from 'lottie-web';

import {useAppContext} from "../context/context";
import styled from "styled-components";
import ResultsButtons from "../components/ResultsButtons/ResultsButtons";
import {GameState, setGameState} from "../context/actions";


const Lottie = styled.div`
  width: 100%;
  height: 40vh;
  align-self: center
`;

const ResultsScreen: React.FC = () => {

    const {state: {currentPlayer, players}, dispatch} = useAppContext();

    const startGame = useCallback(() => dispatch(setGameState(GameState.started))
        , [dispatch]);

    const endGame = useCallback(() => dispatch(setGameState(GameState.notStarted))
        , [dispatch]);

    const container = useRef(null)

    useEffect(() => {

        lottie.loadAnimation({
            // @ts-ignore
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("../assets/lotties/winner.json")
        })
    }, [])

    return (
        <>
            <h1> {players[currentPlayer].name} </h1>
            <p> you are the winner!</p>
            <Lottie className="container" ref={container}></Lottie>
            <ResultsButtons startGame={startGame} endGame={endGame}/>
        </>
    )
};

export default ResultsScreen;