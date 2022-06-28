import React from 'react'

const Form = () => {
  return (
    <div className="bg-white py-4 px-6 rounded-lg">
      <form onSubmit={(e) => e.preventDefault()}>
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
        ></textarea>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row">
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-pink-300 checked:border-4 checked:bg-pink-400 checked:border-pink-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault10"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-purple-300 checked:border-4 checked:bg-purple-400 checked:border-purple-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault20"
                checked
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-orange-300 checked:border-4 checked:bg-orange-400 checked:border-orange-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault20"
                checked
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-yellow-300 checked:border-4 checked:bg-yellow-400 checked:border-yellow-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault20"
                checked
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-blue-300 checked:border-4 checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault20"
                checked
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-green-300 checked:border-4 checked:bg-green-400 checked:border-green-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault20"
                checked
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 bg-red-300 checked:border-4 checked:bg-red-400 checked:border-red-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault20"
                checked
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
