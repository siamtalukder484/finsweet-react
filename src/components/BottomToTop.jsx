import React, { useState } from 'react'
import {FaAngleUp} from 'react-icons/fa'

const BottomToTop = () => {

    let [btnshow, setBtnshow] = useState(false)

    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 250){
            setBtnshow(true)
        }else{
            setBtnshow(false)
        }
    })

    let handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <>   
        {
            btnshow &&
            <div onClick={handleScrollTop} className='w-12 h-12 bg-primary fixed right-5 bottom-5 z-50 cursor-pointer flex items-center justify-center rounded-lg transition-all duration-700'>
                <FaAngleUp className='text-3xl'/>
            </div>
        }
    </>
  )
}

export default BottomToTop