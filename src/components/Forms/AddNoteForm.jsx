import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/notes/notesSlice'

// mui
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'

const INITIAL_STATE = {
  title: '',
  content: '',
  bgColor: 'red',
}

const colors = [
  { name: 'red', default: '#fca5a5', checked: '#ef4444' },
  { name: 'orange', default: '#fdba74', checked: '#f97316' },
  { name: 'yellow', default: '#fde047', checked: '#eab308' },
  { name: 'green', default: '#86efac', checked: '#22c55e' },
  { name: 'blue', default: '#93c5fd', checked: '#3b82f6' },
  { name: 'purple', default: '#d8b4fe', checked: '#a855f7' },
  { name: 'pink', default: '#f9a8d4', checked: '#ec4899' },
  { name: 'gray', default: '#d1d5db', checked: '#6b7280' },
]

const AddNoteForm = ({ setShowModal, btnShadow }) => {
  const [note, setNote] = useState(INITIAL_STATE)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!note.title.trim() || !note.content.trim()) {
      return
    }

    dispatch(addNote(note))
    setNote(INITIAL_STATE)
    setShowModal(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNote((prev) => ({ ...prev, [name]: value }))
  }

  const controlProps = (bgColor) => ({
    checked: note.bgColor === bgColor,
    onChange: handleChange,
    value: bgColor,
    name: 'bgColor',
  })

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Note Title"
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        label="Enter your note here..."
        variant="standard"
        fullWidth
        multiline
        rows={4}
        sx={{ mt: 2 }}
        name="content"
        value={note.content}
        onChange={handleChange}
      />
      <Box
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Typography variant="body1" style={{ color: colors[7].checked }}>
          Select note color:
        </Typography>
        {colors.map((color) => (
          <div style={{ display: 'inline-block' }}>
            <Radio
              key={color.name}
              {...controlProps(color.name)}
              sx={{
                color: color.default,
                '&.Mui-checked': {
                  color: color.checked,
                },
              }}
            />
          </div>
        ))}
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ef4444',
            borderRadius: 20,
            mr: 1,
            boxShadow: btnShadow,
            '&:hover': { backgroundColor: '#dc2626' },
          }}
          disableElevation
          onClick={() => setShowModal(false)}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#22c55e',
            borderRadius: 20,
            boxShadow: btnShadow,
            '&:hover': { backgroundColor: '#16a34a' },
          }}
          disableElevation
        >
          Save
        </Button>
      </Grid>
    </form>
  )
}

export default AddNoteForm
