import React from 'react';
import {appReducer, initialState} from "./reducer";
import {addPlayer, GameState, setGameState, setPlayerName, subtractPlayerPoints} from "./actions";

describe('reducer tests', () => {
    it('ADD_PLAYER', () => {
        const action = addPlayer();
        const newState = appReducer(initialState, action);
        expect(newState.players).toHaveLength(3);
        expect(newState).toMatchSnapshot();
    });

    // tbd
    // it('REMOVE_PLAYER', () => {
    //     const action = removePlayer();
    //     const newState = appReducer(initialState, action);
    // });


    it('SET_PLAYER_NAME', () => {
        const action = setPlayerName({name: "Test Player", index: 0});
        const newState = appReducer(initialState, action);
        expect(newState.players[0].name).toMatch("Test Player");
        expect(newState).toMatchSnapshot();
    });

    it('SET_GAME_STATE', () => {
        const action = setGameState(GameState.finished);
        const newState = appReducer(initialState, action);
        expect(newState.gameState).toBe(GameState.finished);
        expect(newState).toMatchSnapshot();
    });

    it('SUBSTRACT_PLAYER_POINTS: Substract 1 point', () => {
        const action = subtractPlayerPoints(1);
        const newState = appReducer(initialState, action);
        expect(newState.players[0].points).toBe(500);
        expect(newState.currentPlayer).toBe(1);
        expect(newState).toMatchSnapshot();
    });

    it('SUBSTRACT_PLAYER_POINTS: Substract too many points', () => {
        const action = subtractPlayerPoints(602);
        const newState = appReducer(initialState, action);
        expect(newState.players[0].points).toBe(501);
        expect(newState.currentPlayer).toBe(1);
    });

    it('SUBSTRACT_PLAYER_POINTS: Change from last to the first player', () => {
        const action = subtractPlayerPoints(1);
        // kopiuje stan, a po przecinku nadbijuje konkretna wartosc
        const modifiedState = {...initialState, currentPlayer: 1};
        const newState = appReducer(modifiedState, action);
        expect(newState.currentPlayer).toBe(0);
    });

    it('SUBSTRACT_PLAYER_POINTS: Game over', () => {
        const action = subtractPlayerPoints(10);
        // kopiuje stan, a po przecinku nadbijuje konkretna wartosc
        const modifiedState = {...initialState};
        modifiedState.players[0].points = 10;
        const newState = appReducer(modifiedState, action);
        expect(newState.gameState).toBe(GameState.finished);
    });
});

