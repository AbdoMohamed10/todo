import React, {useState} from 'react'
import {List} from "@mui/material";
import {useSelector} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import TodoItemInfo from "../TodoItem/TodoItemInfo/TodoItemInfo";

const TodoList = () => {
    const todoList = useSelector(state => state.todo.todos)
    const [selectedTodo, setSelectedTodo] = useState(null)
    const [infoIsOpen, setInfoIsOpen] = useState(false)

    const handleShowTodoInfo = (todo) => {
        setSelectedTodo(todo)
        setInfoIsOpen(true)
    }

    return (
        <>
            <List>
                {todoList.map((todo) => {

                    return (
                        <TodoItem key={todo.id} todo={todo} showInfo={handleShowTodoInfo} />
                    );
                })}
            </List>
            {
                selectedTodo &&
                    <TodoItemInfo todo={selectedTodo} isOpen={infoIsOpen} setIsOpen={setInfoIsOpen} />
            }
        </>
    )
}

export default TodoList
