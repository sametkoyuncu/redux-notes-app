import { useState } from 'react'

import Buttons from './Buttons'

const Note = ({ note }) => {
  const [showModal, setShowModal] = useState(false)

  const { id, title, content, bgColor } = note

  const handleOpen = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div
        className={`flex flex-col justify-between p-6 pb-5 rounded-lg shadow-lg ${
          bgColor || 'bg-white'
        } max-w-sm h-60`}
      >
        <div className="cursor-pointer" onClick={handleOpen}>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {title}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {content.slice(0, 140).trim()}...&nbsp;
            <span className="text-gray-500">(devamını oku 👆)</span>
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Buttons id={id} />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-start mt-16 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full ${
                  bgColor || 'bg-white'
                } outline-none focus:outline-none`}
              >
                {/*header*/}
                <div className="flex items-start justify-between py-4 px-6 border-b border-solid border-gray-400 rounded-t">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mt-1">
                    {title}
                  </h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClose}
                  >
                    <span className="bg-transparent text-red-700 h-6 w-6 opacity-60 block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="text-gray-700 text-base mb-4">{content}</p>
                  <div className="flex flex-row justify-end">
                    <Buttons />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Note
