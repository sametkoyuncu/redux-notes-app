import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// notesapp components
import Buttons from './Buttons'

const colors = {
  red: '#fca5a5',
  orange: '#fdba74',
  yellow: '#fde047',
  green: '#86efac',
  blue: '#93c5fd',
  purple: '#d8b4fe',
  pink: '#f9a8d4',
  gray: '#d1d5db',
}

export default function Note({ note }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 175,
        backgroundColor: colors[note.bgColor],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 3,
        p: 2,
        boxShadow:
          'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {note.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
        }}
      >
        <Buttons id={note.id} />
      </CardActions>
    </Card>
  )
}
