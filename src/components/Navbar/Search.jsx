import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{
        p: '3px 7px 2px 13px',
        display: 'flex',
        alignItems: 'center',
        width: { xs: 200, sm: 300, md: 350 },
        borderRadius: '40px',
        height: '35px',
        transition: 'all 0.2s ease-in-out',
        boxShadow: 'none',
        opacity: '0.5',
        '&:focus-within': {
          opacity: '1',
          boxShadow: '0 0 0 1px #ddd',
        },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search notes.."
        inputProps={{ 'aria-label': 'search notes' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
