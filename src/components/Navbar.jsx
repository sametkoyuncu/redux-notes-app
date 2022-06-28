import React from 'react'
import Modal from './Modal'
import Search from './Search'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen flex flex-col gap-2 sm:flex-row items-center justify-around sm:px-2 py-4 mb-2 sm:mb-10 bg-gray-600">
      <div>
        <h1 className="text-3xl font-bold text-white text-center">NotesApp</h1>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Modal />
      </div>
    </div>
  )
}

export default Navbar
