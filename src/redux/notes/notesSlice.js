import { createSlice, nanoid } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: nanoid(),
        title: 'Add LocalStorage',
        content:
          'Add localStorage to store notes in browser. Add notes to localStorage when note is added or removed.',
        bgColor: 'bg-purple-300',
      },
      {
        id: nanoid(),
        title: 'Mobil Tasarımı Düzenle',
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
      {
        id: nanoid(),
        title: 'Statedeki bgColor Düzeltilse İyi Olur',
        content:
          'lorem ipsum dolor sit amet. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. lorem ipsum dolor sit amet. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. lorem ipsum dolor sit amet. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir. Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik kesilerek sunulur. Görsel bütünlük açısından güzel olabilir.',
        bgColor: 'bg-yellow-300',
      },
      {
        id: nanoid(),
        title: 'Detay Modalını Düzenle',
        content:
          "Detay modal'ında buttonlar çalışmıyor veya eksik çalışıyor. Bunları düzelt",
        bgColor: 'bg-green-300',
      },
      {
        id: nanoid(),
        title: 'Content Uzunluğu',
        content:
          'Eğer content karater sınırından kısaysa devamını oku kısmı gözükmesin.',
        bgColor: 'bg-blue-300',
      },
      {
        id: nanoid(),
        title: 'Detay Modal Tasarım',
        content:
          'Modal başlık rengi beyaz veya açık gri olsa daha iyi olur gibi. veya koyu arkaplan beyaz yazı rengi.',
        bgColor: 'bg-orange-300',
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
    deleteNote: {
      reducer: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
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
