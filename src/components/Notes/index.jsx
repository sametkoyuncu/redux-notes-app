import React from 'react'
import Note from './Note'

const Notes = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <Note bgColor="bg-pink-300" />
      <Note bgColor="bg-green-300" />
      <Note bgColor="bg-red-300" />
      <Note bgColor="bg-blue-300" />
      <Note bgColor="bg-purple-300" />
      <Note bgColor="bg-yellow-300" />
      <Note bgColor="bg-orange-300" />
    </div>
  )
}

export default Notes
