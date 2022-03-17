import {AppState} from "./context";
import {AppAction, GameState, IPlayer} from "./actions";

export const initialPlayer = (number: number): IPlayer => (
    {name: `Player ${number}`, points: 501}
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

            const player = {...state.players[state.currentPlayer]};

            player.points = player.points - action.payload;

            if (player.points === 0) {
                return {...state, gameState: GameState.finished}

            } else {

                const players = [...state.players];

                if (player.points > 0) {
                    players[state.currentPlayer] = player;
                }

                return {
                    ...state,
                    players,
                    currentPlayer: state.currentPlayer + 1 < state.players.length ? state.currentPlayer + 1 : 0
                }
            }
    }
}