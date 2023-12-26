import React, {useState} from 'react'
import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {editTodo} from "../../redux/slices/todoSlice";
import {useDispatch} from "react-redux";
import TodoItemActions from "./TodoItemActions/TodoItemActions";
import TodoFormModal from "../TodoFormModal/TodoFormModal";
import moment from "moment/moment";

const TodoItem = ({ todo, showInfo }) => {
    const dispatch = useDispatch()
    const [editIsOpen, setEditIsOpen] = useState(false)

    const handleToggleCheckTodo = (todo) => {
        let newTodo = {...todo}
        newTodo.checked = !todo.checked
        if(newTodo.checked) {
            newTodo.finished_at = moment().format('YYYY-MM-DD hh:mm:ss')
        } else {
            newTodo.finished_at = null
        }
        dispatch(editTodo(newTodo))
    }

    const handleShowTodoInfo = (todo) => {
        showInfo(todo)
    }

    return (
        <ListItem
            key={todo.id}
            disablePadding
            secondaryAction={
                <TodoItemActions todo={todo} setEditIsOpen={setEditIsOpen} />
            }
        >
            <ListItemButton onClick={() => handleShowTodoInfo(todo)}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.checked}
                        disableRipple
                        onChange={() => handleToggleCheckTodo(todo)}
                        onClick={e => e.stopPropagation()}
                    />
                </ListItemIcon>
                <ListItemText primary={todo.title} />
            </ListItemButton>
            <TodoFormModal isOpen={editIsOpen} setIsOpen={setEditIsOpen} todo={todo} type="edit" />
        </ListItem>
    )
}

export default TodoItem
