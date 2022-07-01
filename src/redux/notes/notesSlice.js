import { createSlice, nanoid } from '@reduxjs/toolkit'

import {
  writeNotesToLocalStorage,
  readNotesFromLocalStorage,
} from '../../functions/localStorage'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [...readNotesFromLocalStorage()],
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload)
        writeNotesToLocalStorage(state.items)
        return state
      },
      prepare: ({ title, content, bgColor }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            bgColor,
          },
        }
      },
    },
    deleteNote: {
      reducer: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
        writeNotesToLocalStorage(state.items)
      },
    },
    editNote: {
      reducer: (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ...action.payload,
            }
          }
          return item
        })
        writeNotesToLocalStorage(state.items)
      },
    },
  },
})
export const selectNotes = (state) => state.notes.items
// FIXME: its not working
export const selectNoteById = (state, id) =>
  state.notes.items.find((item) => item.id === id)
export const { addNote, deleteNote, editNote, getNote } = notesSlice.actions
export default notesSlice.reducer
