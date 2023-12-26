import React from 'react'
import {Container} from "@mui/material";
import Weather from "./Weather/Weather";
import Todo from "./Todo/Todo";

const Main = () => {
    return (
        <Container sx={{ marginBlock: '10px', textAlign: 'right' }}>
            <Weather />
            <Todo />
        </Container>
    )
}

export default Main
