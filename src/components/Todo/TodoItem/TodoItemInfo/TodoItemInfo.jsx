import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TodoItemInfo = ({ isOpen, setIsOpen, todo }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            fullScreen={fullScreen}
            fullWidth={true}
            maxWidth="lg"
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {todo.title}
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
                <Typography>
                    {todo.description}
                </Typography>
            </DialogContent>

        </Dialog>
    )
}

export default TodoItemInfo
