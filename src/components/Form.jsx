import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice'

const INITIAL_STATE = {
  title: '',
  content: '',
  bgColor: 'bg-pink-300',
}

const Form = ({ setShowModal }) => {
  // FIXME: add one state for note {title, content, bgColor}
  const [note, setNote] = useState(INITIAL_STATE)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNote(note))
    console.log('note', note)
    setNote(INITIAL_STATE)
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
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-pink-300 checked:border-4 checked:bg-pink-400 checked:border-pink-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="bgColor"
                value="bg-pink-300"
                checked={note.bgColor === 'bg-pink-300'}
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-purple-300 checked:border-4 checked:bg-purple-400 checked:border-purple-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="bgColor"
                value="bg-purple-300"
                checked={note.bgColor === 'bg-purple-300'}
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-orange-300 checked:border-4 checked:bg-orange-400 checked:border-orange-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="bgColor"
                value="bg-orange-300"
                checked={note.bgColor === 'bg-orange-300'}
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-yellow-300 checked:border-4 checked:bg-yellow-400 checked:border-yellow-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="bgColor"
                value="bg-yellow-300"
                checked={note.bgColor === 'bg-yellow-300'}
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-blue-300 checked:border-4 checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="bgColor"
                value="bg-blue-300"
                checked={note.bgColor === 'bg-blue-300'}
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-green-300 checked:border-4 checked:bg-green-400 checked:border-green-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="bgColor"
                value="bg-green-300"
                checked={note.bgColor === 'bg-green-300'}
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-red-300 checked:border-4 checked:bg-red-400 checked:border-red-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="bgColor"
                value="bg-red-300"
                checked={note.bgColor === 'bg-red-300'}
                onChange={handleChange}
              />
            </div>
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

export default Form
