import React from 'react'

const Visit = () => {
  return (
    <>
        <section className="bg-visitbg bg-no-repeat bg-cover bg-center py-32">
            <div className="max-w-container mx-auto">
                <div className="w-[768px] bg-white mx-auto py-[72px] px-[48px] border-b-[16px] border-primary relative">
                    <h2 className="uppercase font-robotocondenced font-bold text-5xl leading-16 w-[370px]">We want to serve the world around us</h2>
                    <p className="py-4 capitalize font-robotocondenced font-normal text-subheading text-base w-[302px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <a href="#" className="bg-primary py-6 px-16 rounded-xl text-navbtn text-base font-normal uppercase font-robotocondenced leading-none inline-block">visit</a>
                    <picture className="absolute top-[170px] right-12">
                        <img src="./assets/images/quate.png" alt=""/>
                    </picture>
                </div>
            </div>
        </section>
    </>
  )
}

export default Visit