import { useState } from "react";

const useDialog = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(prev => !prev)
    }
    return { 
        open,
        handleOpen
    };
}

export default useDialog;