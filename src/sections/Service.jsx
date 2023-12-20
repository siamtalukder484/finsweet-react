import React from 'react'
import ServiceItem from '../components/ServiceItem'
import {FaWaveSquare} from 'react-icons/fa'
import SecSubHeading from '../components/SecSubHeading'
import SecMainHeading from '../components/SecMainHeading'

const Service = () => {
  return (
    <>
        <section id='service' className="py-32">
            <div className="max-w-container mx-auto">
                <div>
                    <SecSubHeading title="service section"/>
                    <SecMainHeading title="A CHURCH THAT'S RELEVANT"/>
                </div>
                <div className="pt-16 flex gap-[25px] flex-wrap	items-center">
                    <ServiceItem icon={<FaWaveSquare/>} title="get involved" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <ServiceItem icon={<FaWaveSquare/>} title="get informa" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <ServiceItem icon={<FaWaveSquare/>} title="get achivem" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Service