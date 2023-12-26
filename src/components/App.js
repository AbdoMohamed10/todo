import {Box, IconButton} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useDispatch, useSelector} from "react-redux";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {toggleTheme} from "../redux/slices/themeSlice";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WeatherDetails from "./Weather/WeatherDetails/WeatherDetails";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "weather/:lat/:lng",
        element: <WeatherDetails />
    }
]);

function App() {
    const isDark = useSelector(state => state.theme.dark)
    const dispatch = useDispatch()
    const darkTheme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
        },
    });

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ margin: '10px', textAlign: 'right' }}>
                <IconButton sx={{ ml: 1 }} onClick={handleToggleTheme} color="inherit">
                    {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
