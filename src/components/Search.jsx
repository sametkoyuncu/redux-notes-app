import React from 'react'

const Search = () => {
  return (
    <input
      type="text"
      className="
        form-control
        w-72
        px-4
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-gray-100 bg-clip-padding
        border-2 border-solid border-transparent
        rounded-lg
        shadow-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:border-2 focus:outline-none
      "
      placeholder="Search..."
    />
  )
}

export default Search
