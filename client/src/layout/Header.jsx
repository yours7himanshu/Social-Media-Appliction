import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { orange } from '../constants/color'


function Header() {
  return (
    <div>
      <Box sx={{flexGlow:1}} height={"4rem"}/>
      <AppBar position='static' sx={{
        bgcolor:orange
      }}>

<Toolbar>
  <Typography
  variant='h6'
  sx={{
    display:{
      xs:"none",
      sm:"block"
    }
  }}
  >
    Chat Application
  </Typography>
</Toolbar>

      </AppBar>
    </div>
  )
}

export default Header
