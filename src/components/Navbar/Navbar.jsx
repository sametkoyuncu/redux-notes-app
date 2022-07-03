import * as React from 'react'

// mui stuff
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

// noteapp components
import Modal from '../Modals/Modal'
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
            <Modal
              type="add"
              button={{
                styles: {
                  color: '#fff',
                  backgroundColor: '#22c55e',
                  borderRadius: 20,
                  boxShadow:
                    'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                  '&:hover': {
                    backgroundColor: '#16a34a',
                    boxShadow: 'none',
                  },
                },
                text: 'Add',
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
