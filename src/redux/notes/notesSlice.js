import { createSlice, nanoid } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: nanoid(),
        title: 'Javascript Öğren',
        content:
          'lorem ipsum dolor sit amet. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir.',
        bgColor: 'bg-pink-300',
      },
      {
        id: nanoid(),
        title: 'Swift Öğren',
        content:
          'lorem ipsum dolor sit amet. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. lorem ipsum dolor sit amet. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. lorem ipsum dolor sit amet. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir.',
        bgColor: 'bg-green-300',
      },
    ],
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload)
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
  },
})
export const selectNotes = (state) => state.notes.items
export const { addNote } = notesSlice.actions
export default notesSlice.reducer
