import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Modal from '../components/Modal'

const Navbar = () => {
    let [fixed, setFixed] = useState(false)
    let [modalshow, setModalshow] = useState(false)

    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 120){
            setFixed(true)
        }else{
            setFixed(false)
        }
    })

    let handleModal = () => {
        setModalshow(true)
    }
   

  return (
    <>  
        {
            modalshow &&
            <Modal show={modalshow}>
                <div>
                    <form className='bg-white p-8 flex flex-col gap-6 w-[500px]'>
                        <input className='bg-slate-200 py-4 px-6 rounded-lg' type="text" placeholder='Enter your name'/>
                        <input className='bg-slate-200 py-4 px-6 rounded-lg' type="number" placeholder='Enter your phone number'/>
                        <button className='bg-blue-500 text-white py-3 text-lg rounded-lg'>Submit</button>
                    </form>
                </div>
            </Modal>
        }
        <nav id='navbar' className={`bg-navbg py-3 top-0 w-full left-0 z-[999] transition-all duration-700 ${fixed ? 'fixed' : "absolute"}`}>
        <div className="max-w-container mx-auto">
            <div className="flex items-center">
                <div className="w-[200px] relative after:absolute after:content-[''] after:w-[2px] after:h-[80px] after:bg-white after:right-0 after:top-[-24px] after:opacity-25">
                    <img src="./assets/images/logo.png" alt=""/>
                </div>
                <div className="w-[1080px] flex items-center justify-between">
                    <ul className="flex gap-x-12 items-center ml-16">
                        <li>
                            <AnchorLink href="#banner" className="text-base font-normal text-white uppercase font-robotocondenced opacity-90 hover:opacity-100">home</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink  href='#service' className="text-base font-normal text-white uppercase font-robotocondenced opacity-90 hover:opacity-100">about us</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink  href='#xyz' className="text-base font-normal text-white uppercase font-robotocondenced opacity-90 hover:opacity-100">sermon</AnchorLink>
                        </li>
                        <li>
                            <AnchorLink href="#blog" className="text-base font-normal text-white uppercase font-robotocondenced opacity-90 hover:opacity-100">blog</AnchorLink>
                        </li>
                    </ul>
                    <a onClick={handleModal} className="inline-block bg-primary py-5 px-12 rounded-xl text-navbtn text-base font-normal uppercase font-robotocondenced leading-none">contact us</a>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar