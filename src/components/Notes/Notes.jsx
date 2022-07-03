import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// mui
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// notesapp components
import Note from './Note'

import { selectNotes, selectSearch } from '../../redux/notes/notesSlice'

const Notes = () => {
  const search = useSelector(selectSearch)
  const notes = useSelector(selectNotes)
  const [filteredNotes, setFilteredNotes] = useState(notes)

  useEffect(() => {
    if (search) {
      const _notes = notes.filter((note) => {
        return note.title.toLowerCase().includes(search.toLowerCase())
      })
      setFilteredNotes([..._notes])
    } else {
      setFilteredNotes([...notes])
    }
  }, [search, notes])

  return (
    <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={3}>
        {filteredNotes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4}>
            <Note note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Notes
