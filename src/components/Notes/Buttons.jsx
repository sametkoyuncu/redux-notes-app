import { useDispatch } from 'react-redux'

import EditNoteModal from '../Modals/EditNoteModal'
import { deleteNote } from '../../redux/notes/notesSlice'
import Pencil from '../icons/Pencil'
import Trash from '../icons/Trash'

const Buttons = ({ id }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    var shouldDelete = window.confirm('Do you really want to delete this note?')
    if (shouldDelete) {
      dispatch(deleteNote(id))
    }
  }

  const buttonClasses =
    'inline-block rounded-lg hover:bg-gray-200 hover:bg-opacity-30 hover:shadow-md active:shadow-none transition duration-300 ease-in-out w-9 h-9'
  return (
    <>
      <EditNoteModal
        id={id}
        buttonIcon={<Pencil />}
        buttonClasses={`${buttonClasses} mr-2`}
      />
      <button
        type="button"
        className={buttonClasses}
        onClick={() => handleDelete(id)}
      >
        <Trash />
      </button>
    </>
  )
}

export default Buttons
