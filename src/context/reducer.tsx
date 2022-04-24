import {AppState} from "./context";
import {AppAction, GameState, IPlayer} from "./actions";
import {colors} from "../theme/constants"

export const initialPlayer = (number: number): IPlayer => (
    {name: `Player ${number}`, points: 501, color: colors[number - 1]}
)

export const initialState: AppState = {
    players: [initialPlayer(1), initialPlayer(2)],
    currentPlayer: 0,
    gameState: GameState.notStarted
}

export const appReducer = (state: AppState, action: AppAction): AppState => {

    switch (action.type) {
        case "ADD_PLAYER":

            return {...state, players: [...state.players, initialPlayer(state.players.length + 1)]}

        case "REMOVE_PLAYER":

            const newPlayers = [...state.players];
            newPlayers.splice(action.payload, 1);
            return {...state, players: [...newPlayers]}

        case "SET_PLAYER_NAME":

            return {
                ...state, players: state.players.map((player, index) =>
                    action.payload.index === index ?
                        {
                            ...player, name: action.payload.name
                        } : player)
            }

        case "SET_GAME_STATE":

            return {...state, gameState: action.payload}


        case "SUBTRACT_PLAYER_POINTS":

            const players = [...state.players];
            const player = {...state.players[state.currentPlayer]};

            player.points = player.points - action.payload;


            if (player.points === 0) {
                players.forEach(player => (
                    player.points = 501
                ))

                return {
                    ...state,
                    gameState: GameState.finished,
                    players
                }
            }

            if (player.points > 0) {
                players[state.currentPlayer] = player;
            }

            return {
                ...state,
                players,
                currentPlayer: state.currentPlayer + 1 < state.players.length ? state.currentPlayer + 1 : 0
            }

        case "SET_PLAYER_COLOR":

            return {
                ...state,
                players: state.players.map((player, index) =>
                    action.payload.index === index ?
                        {
                            ...player, color: action.payload.color
                        } : player)
            }
    }
}