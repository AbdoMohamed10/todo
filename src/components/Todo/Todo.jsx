import React, {useState} from 'react'
import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./TodoList/TodoList";
import TodoFormModal from "./TodoFormModal/TodoFormModal";

const Todo = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setIsOpen(true)}
            >
                Add Todo
            </Button>
            <TodoList />
            <TodoFormModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    )
}

export default Todo
