import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    todos: [],
    archivedTodos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            let selectedTodoIndex = state.todos.map(todo => todo.id).indexOf(action.payload.id)
            state.todos[selectedTodoIndex] = action.payload
        },
        archiveTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            state.archivedTodos = [...state.archivedTodos, action.payload]
        },
    }
})

export const { addTodo, editTodo, deleteTodo, archiveTodo } = todoSlice.actions
export default todoSlice.reducer
