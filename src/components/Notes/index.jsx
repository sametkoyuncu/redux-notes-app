import { useSelector } from 'react-redux'
import { selectNotes } from '../../redux/notes/notesSlice'
import Note from './Note'

const Notes = () => {
  const notes = useSelector(selectNotes)
  return (
    <div className="grid grid-cols-1 mx-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  )
}

export default Notes
