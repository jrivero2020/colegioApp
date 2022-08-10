import React from "react"
import MainRouter from "./MainRouter"
import { BrowserRouter } from 'react-router-dom'


import theme from "./theme"
import { hot } from "react-hot-loader"

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from "@mui/material/styles"
import { CacheProvider } from "@emotion/react"
import createEmotionCache from "../server/createEmotionCache"
import Menu from "./core/menu"

const cache = createEmotionCache();

const App = () => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }, [])

    return (
        <BrowserRouter>   
                    <Menu />             
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <MainRouter />
                </ThemeProvider>
            </CacheProvider>
        </BrowserRouter>
    )
}
export default hot(module)(App)

