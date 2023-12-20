import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <>
        <section id='banner' className="bg-banner bg-no-repeat bg-cover	bg-center pb-32 pt-48">
            <div className="max-w-container mx-auto">
                <div className="w-[650px]">
                    <h6 className="text-base uppercase font-robotocondenced text-white font-bold">Welcome to our CHURCH</h6>
                    <h1 className="text-bannerheading font-robotocondenced uppercase text-white font-bold pt-4 pb-8">
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                          // Same substring at the start will only be typed once, initially
                          'Become a part of our community',
                          1000,
                          'Become a part of our group',
                          1000,
                          'Become a part of our alumina',
                          1000,
                          'Become a part of our people',
                          1000,
                        ]}
                        speed={300}
                        // style={{ fontSize: '2em' }}
                        repeat={Infinity}
                      />

                    </h1>
                    <a href="#" className="inline-block	bg-primary py-6 px-16 rounded-xl text-navbtn text-base font-normal uppercase font-robotocondenced leading-none">contact us</a>
                    <p className="w-[338px] pl-[30px] mt-16 font-robotocondenced text-base text-white leading-normal relative after:absolute after:content-[''] after:w-[18px] after:h-[2px] after:bg-primary after:left-0 after:top-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner