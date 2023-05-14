import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const DialogTest = () => {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <Button variant='outlined' onClick={()=>setOpen(true)} sx={{marginLeft:90 ,marginTop:10}}>Open Dialog</Button>
        <Dialog hideBackdrop open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>Hello Welcome</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Aungtha rhsnf aknd dakf sfskans fsoaisf anfs fansf asfs afksanfs afanfsa foasfs fasfnaf aosff,fms
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Aggre</Button>
                <Button onClick={()=>setOpen(false)}>Cancle</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default DialogTest