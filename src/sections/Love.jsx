import React from 'react'
import Images from '../components/Images'
import SecSubHeading from '../components/SecSubHeading'
import SecMainHeading from '../components/SecMainHeading'
import Peragraph from '../components/Peragraph'
import Button from '../components/Button'
import {BsArrowRight} from 'react-icons/bs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Love = () => {
  return (
    <>
         <section className="pb-32">
            <div className="max-w-container mx-auto">
                <div className="text-center">
                    <SecSubHeading title="love section"/>
                    <SecMainHeading title="love and compassion"/>
                    <Peragraph 
                        className="pb-14 pt-8 w-[845px] mx-auto text-center text-base font-robotocondenced text-subheading font-normal leading-6"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    />
                    <Button
                        href="#"
                        className="bg-primary py-6 px-16 rounded-xl text-navbtn text-base font-normal uppercase font-robotocondenced leading-none inline-block"
                        title="read more"
                    />
                </div>
                <div className="w-[1030px] mx-auto flex gap-x-[25px] mt-12">
                    <div className="w-[295px] h-[385px] rounded-[30px] overflow-hidden mt-[-64px]">
                        <Zoom >
                            <Images className="w-full h-full object-cover" source="./assets/images/love1.png" alt="Not Found"/>
                        </Zoom>
                    </div>
                    <div className="w-[390px] h-[510px] rounded-[30px] overflow-hidden ">
                        <Zoom>
                            <Images className="w-full h-full object-cover" source="./assets/images/love2.png" alt="not found"/>
                        </Zoom>
                    </div>
                    <div className="w-[295px] h-[385px] rounded-[30px] overflow-hidden mt-[-64px]">
                        <Zoom>
                            <Images className="w-full h-full object-cover" source="./assets/images/love3.png" alt="not found"/>
                        </Zoom>
                    </div>
                </div>
                <div className="text-center pt-16">
                    <SecSubHeading title="our mission & vision"/>
                    <SecMainHeading title="celebrate WITH US"/>
                    <Peragraph
                        className="py-4 w-[512px] mx-auto text-center text-base font-robotocondenced text-subheading font-normal leading-6"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <a href="#" className="text-[14px] leading-[16px] font-normal text-subheading capitalize flex items-center justify-center gap-2">
                        read more 
                        <BsArrowRight/>
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Love