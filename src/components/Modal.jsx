import React, { useState } from 'react'

const Modal = ({children, show}) => {
  // let [modalshow, setModalshow] = useState(false)

  let [acea, setAcea] = useState(show)

  let handleModalClose = () => {
    // setModalshow(false)
    // console.log(!show);
    setAcea(false)
  }
  console.log(acea);

  return (
    <>
        {
          acea &&
          <div className='w-full h-full bg-slate-200 fixed left-0 top-0 z-[9999] flex items-center justify-center'>
              {children}
              <div onClick={handleModalClose} className='w-12 h-12 bg-black rounded absolute top-5 right-5 cursor-pointer flex items-center justify-center'>
                  <span className='text-white'>X</span>
              </div>
          </div>

        }
    </>
  )
}

export default Modal