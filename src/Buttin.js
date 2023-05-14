import { Button } from '@mui/material'
import React from 'react'

const Buttin = () => {
  return (
    <div>
        <Button onClick={()=>alert("hi")} color='success' sx={{margin:3}} variant='contained'>Fist</Button>
        <Button onClick={()=>alert("hi")} color="error" sx={{margin:3}} variant='outlined'>Second</Button>
        <Button onClick={()=>alert("hi")} color='warning' sx={{margin:3}} variant='text'>Third</Button>
    </div>
  )
}

export default Buttin