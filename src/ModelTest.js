import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const ModelTest = () => {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <Button variant='contained' color='secondary' onClick={()=>setOpen(true)} sx={{marginLeft:90 ,marginTop:10}}>Open Model</Button>
        <Modal  open={open} onClose={()=>setOpen(false)}>
          <Box position="absolute" top="50%" left="50%"> 
            <Typography>It is amodel</Typography>
            <Button variant='contained' onClick={()=>setOpen(false)}>Click Me</Button>
          </Box>
        </Modal>
    </div>
  )
}

export default ModelTest