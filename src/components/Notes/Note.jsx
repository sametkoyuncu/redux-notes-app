import { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// notesapp components
import Buttons from './Buttons'
import NoteDetailsModal from '../Modals/NoteDetailsModal'

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
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
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
            {note.content.slice(0, 140).trim()}
            {note.content.length > 140 && (
              <>
                ...&nbsp;
                <br />
                <span
                  style={{ fontWeight: 'bold', cursor: 'pointer' }}
                  onClick={() => setOpen(true)}
                >
                  (read more 👆)
                </span>
              </>
            )}
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
      {open && (
        <NoteDetailsModal
          note={note}
          bgColor={colors[note.bgColor]}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  )
}
