import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

const Upcoming = () => {

    // abc = () => {
    //     -webkit-background-clip: text,
    //     style={{-webkit-background-clip: text;
    //         -webkit-text-fill-color: transparent;}}
    // }

  return (
    <>
    <section id='xyz' className="py-32">
        <div className="max-w-container mx-auto">
            <div className="text-center w-[554px] mx-auto">
                <h5 className="text-base font-robotocondenced font-normal uppercase text-center text-subheading">Upcoming SERMONS</h5>
                <h3 className="uppercase font-robotocondenced leading-16 text-5xl text-subheading font-bold text-center pt-4">join us and become part of something great</h3>
            </div>
            <div className="mt-16 bg-serviceitembg w-full h-[512px] flex">
                <div className="w-[435px] h-full py-[61px] px-[90px] relative">
                    <h5 className="text-xs uppercase font-robotocondenced font-bold tracking-[0.96px] bg-clip-text bg-textgradiant">Upcoming Event</h5>
                    <h4 className="py-4 uppercase font-robotocondenced font-bold text-2xl text-subheading">WATCH AND LISTEN TO OUR SERMONS</h4>
                    <p className="font-robotocondenced font-normal text-subheading text-base leading-normal	opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className="mt-8 flex gap-4 flex-col">
                        <div className="flex gap-4 items-start">
                            <div>
                                <AiOutlineClockCircle/>
                            </div>
                            <div>
                                <p className="font-robotocondenced text-base font-normal leading-normal text-subheading">Friday 23:39 IST</p>
                                <p className="font-robotocondenced text-base font-normal leading-normal text-subheading">Saturday 11:20 ISD</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div>
                                <AiOutlineClockCircle/>
                            </div>
                            <div>
                                <p className="font-robotocondenced text-base font-normal leading-normal text-subheading">Friday 23:39 IST</p>
                                <p className="font-robotocondenced text-base font-normal leading-normal text-subheading">Saturday 11:20 ISD</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="mt-8 bg-subheading py-6 px-16 rounded-xl text-primary text-base font-normal uppercase font-robotocondenced leading-none inline-block">read more</a>
                    <div className="w-auto absolute top-8 right-8 text-center">
                        <h3 className="font-robotocondenced text-2xl text-subheading font-bold leading-none">20</h3>
                        <span className="font-robotocondenced font-bold text-base text-subheading uppercase leading-none">july</span>
                    </div>
                </div>
                <div className="w-[845px] h-full overflow-hidden">
                    <img src="./assets/images/upcoming.jpg" className="w-full h-full object-cover leading-none" alt="not found"/>
                </div>
            </div>
            <div className="text-right mt-12">
                <a href="#" className="font-robotocondenced font-normal text-2xl text-subheading capitalize flex items-center justify-end gap-2">view all sermons <BsArrowRight/></a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Upcoming
