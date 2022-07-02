import * as React from 'react'

// mui stuff
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

// noteapp components
import AddNoteModal from '../Modals/AddNoteModal'
import Search from './Search'
import { Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#1f2937',
        opacity: '.8',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <img src="./logo.png" style={{ width: 32 }} alt="logo" />
            <Typography
              variant="h6"
              sx={{ marginLeft: '5px', display: { xs: 'none', sm: 'flex' } }}
            >
              Notes
            </Typography>
          </Box>

          <Search />
          <Box sx={{ flexGrow: 0 }}>
            <AddNoteModal />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
