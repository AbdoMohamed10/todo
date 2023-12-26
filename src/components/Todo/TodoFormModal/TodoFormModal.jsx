import React, {useEffect, useState} from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    TextField,
    useMediaQuery,
    useTheme
} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import {useDispatch} from "react-redux";
import {addTodo, editTodo} from "../../redux/slices/todoSlice";
import {nanoid} from "nanoid";
import moment from "moment";

const TodoFormModal = ({ type = 'create', isOpen, setIsOpen, todo }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleClose = () => {
        setIsOpen(false)
    }

    const resetForm = () => {
        setTitle('')
        setDescription('')
    }

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: nanoid(),
            title: title,
            description: description,
            checked: false,
            created_at: moment().format('YYYY-MM-DD hh:mm:ss'),
            finished_at: null,
            archive_at: null
        }))
        resetForm()
        handleClose()
    }

    const handleEditTodo = () => {
        dispatch(editTodo({...todo, title: title, description: description}))
        handleClose()
    }

    useEffect(() => {
        if(type === 'edit') {
            setTitle(todo.title)
            setDescription(todo.description)
        }
    }, [type])

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            fullScreen={fullScreen}
            fullWidth={true}
            maxWidth="lg"
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                { type === 'edit' ? 'Edit' : 'Add'} Todo
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Stack spacing={2}>
                    <TextField
                        autoFocus
                        variant="standard"
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        variant="standard"
                        label="Description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {
                        type === 'edit' ?
                            <Button
                                variant="contained"
                                startIcon={<EditIcon />}
                                onClick={handleEditTodo}
                            >
                                Edit
                            </Button>
                        :
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={handleAddTodo}
                            >
                                Add
                            </Button>
                    }
                </Stack>
            </DialogContent>

        </Dialog>
    )
}

export default TodoFormModal
