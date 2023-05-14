import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
const array =["First","Second","Third","Fourth","Fifth"]
const ListTest = () => {
   const [open , setOpen] = useState(false)
  return (
   <Box>
    <List>
        <ListItem divider>
            <ListItemButton onClick={()=>setOpen(true)}>
                <ListItemIcon>{">"}</ListItemIcon>
                <ListItemText primary={"Expand List"}/>
            </ListItemButton>
         </ListItem>
    </List>
    <Collapse in={open}>
        <List sx ={{marginLeft:25}}>
            {array.map((listElm)=>(
            <ListItem divider>
                <ListItemButton onClick={()=>setOpen(false)}>
                    <ListItemText primary={listElm}/>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
     </Collapse>
   </Box>
  )
}

export default ListTest