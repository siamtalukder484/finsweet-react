import React from 'react'
import Peragraph from './Peragraph'


const ServiceItem = ({icon,title,details}) => {
  return (
    <>
        <div className="bg-serviceitembg p-20 w-[410px] relative after:absolute after:content-[''] after:w-full after:h-4 after:bg-primary after:bottom-0 after:left-0">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center	justify-center">
                {icon}
            </div>
            <h4 className="uppercase font-robotocondenced font-bold text-[32px] leading-[44px] mt-6 mb-2 text-subheading">
                {title}
            </h4>
            <Peragraph
                className="text-base font-normal font-robotocondenced text-subheading"
                title={details}
            />
        </div>
    </>
  )
}

export default ServiceItem