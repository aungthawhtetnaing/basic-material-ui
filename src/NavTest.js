import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavTest = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>LOGO</Typography>
                <Button variant='contained' sx={{marginLeft:"auto"}} color="success">
                    Hello
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavTest