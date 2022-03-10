export const ADD_PLAYER = "ADD_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const SUBTRACT_PLAYER_POINTS = "SUBTRACT_PLAYER_POINTS";
export const SET_GAME_STATE = "SET_GAME_STATE";
export const SET_PLAYER_NAME = "SET_PLAYER_NAME";

export interface IPlayer {
    name: string;
    points: number;
}

export enum GameState {
    "notStarted",
    "started",
    "finished",
}

export interface AppAction {
    type: typeof ADD_PLAYER | typeof REMOVE_PLAYER | typeof SET_PLAYER_NAME | typeof SUBTRACT_PLAYER_POINTS | typeof SET_GAME_STATE,
    payload?: any
}

export const addPlayer = () => ({
    type: ADD_PLAYER
})

export const removePlayer = (player: number) => ({
    type: REMOVE_PLAYER,
    payload: player
})

export const subtractPlayerPoints = (points: number) => ({
    type: SUBTRACT_PLAYER_POINTS,
    payload: points
})

export const setGameState = (state: GameState) => ({
    type: SET_GAME_STATE,
    payload: state
})

export const setPlayerName = (payload: { name: string, index: number }) => ({
    type: SET_PLAYER_NAME,
    payload,
})

