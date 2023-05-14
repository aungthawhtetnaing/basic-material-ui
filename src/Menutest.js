import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const Menutest = () => {
    const [angerElm,setAngerElm] = useState(null)
    const [open,setOpen] = useState(false)
    const handleClose = () =>{
        setAngerElm(null);
        setOpen(false)
    }

    const handleOpen = (e) =>{
        setAngerElm(e.currentTarget)
        setOpen(true)
    }


  return (

    <div>
        <Button onClick={handleOpen} color="warning" variant="contained">Open Menu</Button>
        <Button onClick={handleOpen} >Open Menu Again</Button>
        <Menu angerElm={angerElm} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Setting</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>
  )
}

export default Menutest