import React from 'react';

import GlobalStyle from '../src/theme/GlobalStyles';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {AppContextProvider} from "./context/context";
import Game from "./components/Game/Game";

const theme = createTheme({
    palette: {
        primary: {
            main: '#111111',
        }
    }
})

function App() {

    return (
        <AppContextProvider>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Game></Game>
            </ThemeProvider>
        </AppContextProvider>
    )

}

export default App;
