import { useSelector } from 'react-redux'
import { selectNotes } from '../../redux/notes/notesSlice'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Note from './Note'

const Notes = () => {
  const notes = useSelector(selectNotes)
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4}>
            <Note note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Notes
