import { useState } from 'react'
import Pencil from '../icons/Pencil'
import Trash from '../icons/Trash'

const Buttons = () => {
  return (
    <>
      {' '}
      <button
        type="button"
        className="inline-block rounded-lg hover:bg-gray-200 hover:shadow-md active:shadow-none transition duration-300 ease-in-out w-9 h-9 mr-2"
      >
        <Pencil />
      </button>
      <button
        type="button"
        className="inline-block rounded-lg hover:bg-gray-200 hover:shadow-md active:shadow-none transition duration-300 ease-in-out w-9 h-9"
      >
        <Trash />
      </button>
    </>
  )
}

const Note = ({ bgColor }) => {
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div
        className={`block p-6 pb-5 rounded-lg shadow-lg ${
          bgColor || 'bg-white'
        } max-w-sm`}
      >
        <div className="cursor-pointer" onClick={handleOpen}>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Yapılacaklar
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik
            kesilerek sunulur. Görsel bütünlük açısından güzel olabilir.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <Buttons />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full ${
                  bgColor || 'bg-white'
                } outline-none focus:outline-none`}
              >
                {/*header*/}
                <div className="flex items-start justify-between py-4 px-6 border-b border-solid border-gray-400 rounded-t">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mt-1">
                    Yapılacaklar
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
                  <p className="text-gray-700 text-base mb-4">
                    Nota tıklanınca modalda açılabilir. Önizleme kısmında içerik
                    kesilerek sunulur. Görsel bütünlük açısından güzel olabilir.
                  </p>
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
