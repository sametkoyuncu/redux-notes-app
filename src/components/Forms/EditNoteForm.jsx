import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { editNote, selectNotes } from '../../redux/notes/notesSlice'

const bgColors = ['pink', 'blue', 'green', 'yellow', 'orange', 'red', 'purple']

const EditNoteForm = ({ setShowModal, id }) => {
  // FIXME: must be get by id
  const notes = useSelector(selectNotes)
  console.log(notes)
  const [note, setNote] = useState({
    title: '',
    content: '',
    bgColor: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    setNote({ ...notes.find((note) => note.id === id) })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!note.title.trim() || !note.content.trim()) {
      return
    }

    dispatch(editNote(note))
    console.log('note', note)
    setNote(null)
    setShowModal(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log('name', name, 'value', value)
    setNote((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white py-4 px-6 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="flew flex-col">
          <div>
            <input
              className="
                form-control
                sm:w-96
                px-3
                py-1.5
                text-base
                font-bold
                text-gray-700
                bg-white bg-clip-padding
                border-b border-gray-300
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:outline-none
              "
              placeholder="Note Title"
              name="title"
              value={note.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="
                form-control
                w-full
                sm:w-96
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border-transparent
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-transparent focus:outline-none
                "
              rows="5"
              placeholder="Enter your note here..."
              name="content"
              value={note.content}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row">
            {bgColors.map((bgColor) => (
              <div key={bgColor} className="form-check">
                <input
                  className={`form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-${bgColor}-300 checked:border-4 checked:bg-${bgColor}-400 checked:border-${bgColor}-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
                  type="radio"
                  name="bgColor"
                  value={`bg-${bgColor}-300`}
                  checked={note.bgColor === `bg-${bgColor}-300`}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditNoteForm
