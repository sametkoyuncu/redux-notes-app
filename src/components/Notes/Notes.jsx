import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// mui
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Masonry from '@mui/lab/Masonry'

// notesapp components
import Note from './Note'

import { selectNotes, selectSearch } from '../../redux/notes/notesSlice'

const Notes = () => {
  const search = useSelector(selectSearch)
  const notes = useSelector(selectNotes)
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', function (event) {
    setWidth(window.innerWidth)
  })

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
      {/* <Grid container spacing={3}> */}
      {/* columns={{ xs: 1, sm: 2, md: 3 }} --- works but its have some issue */}
      <Masonry
        columns={width > 900 ? 3 : width > 600 ? 2 : 1}
        defaultColumns={3}
        spacing={2}
        maxWidth="lg"
      >
        {filteredNotes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4}>
            <Note note={note} />
          </Grid>
        ))}
      </Masonry>
    </Container>
  )
}

export default Notes
