import { useDispatch } from 'react-redux'
import { deleteNote } from '../../redux/notes/notesSlice'
import Pencil from '../icons/Pencil'
import Trash from '../icons/Trash'

const Buttons = ({ id }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    var shouldDelete = window.confirm(
      'Do you really want to delete this awesome Medium article?'
    )
    if (shouldDelete) {
      dispatch(deleteNote(id))
    }
  }

  const buttonClasses =
    'inline-block rounded-lg hover:bg-gray-200 hover:bg-opacity-30 hover:shadow-md active:shadow-none transition duration-300 ease-in-out w-9 h-9'
  return (
    <>
      <button type="button" className={`${buttonClasses} mr-2`}>
        <Pencil />
      </button>
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
