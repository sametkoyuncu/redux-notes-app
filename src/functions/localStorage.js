export const writeNotesToLocalStorage = (state) => {
  localStorage.setItem('notes', JSON.stringify(state))
}

export const readNotesFromLocalStorage = () => {
  const notes = localStorage.getItem('notes')
  return notes ? JSON.parse(notes) : []
}
