import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {appReducer, initialState} from "./reducer";
import {GameState, IPlayer} from "./actions";


export interface AppState {
    players: IPlayer[];
    currentPlayer: number;
    gameState: GameState;
}

interface Context {
    state: AppState;
    dispatch: Dispatch<any>;
}

const store = createContext<Context>({state: initialState, dispatch: () => null});
const {Provider} = store;

export const AppContextProvider: React.FC =
    ({children}) => {
        const [state, dispatch] = useReducer(appReducer, initialState);
        return <Provider value={{state, dispatch}}> {children} </Provider>
    };

export const useAppContext = () => useContext(store);