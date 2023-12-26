import React from 'react'
import {Grid, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";
import {useDispatch} from "react-redux";
import {archiveTodo, deleteTodo} from "../../../redux/slices/todoSlice";

const TodoItemActions = ({ todo, setEditIsOpen }) => {
    const dispatch = useDispatch()

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleArchiveTodo = (todo) => {
        let newTodo = {...todo}
        newTodo.archive_at = moment().format('YYYY-MM-DD hh:mm:ss')
        dispatch(archiveTodo(newTodo))
    }

    return (
        <Grid container spacing={2}>
            <Grid item>
                <IconButton
                    edge="end"
                    color="warning"
                    onClick={() => setEditIsOpen(true)}
                >
                    <EditIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton
                    edge="end"
                    color="secondary"
                    onClick={() => handleArchiveTodo(todo)}
                >
                    <ArchiveIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton
                    edge="end"
                    color="error"
                    onClick={() => handleDeleteTodo(todo.id)}
                >
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default TodoItemActions
