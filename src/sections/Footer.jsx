import React from 'react'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
        <footer className="bg-subheading py-16">
            <div className="max-w-container mx-auto">
                <div className="flex">
                    <div>
                        <div>
                            <img src="./assets/images/footer_logo.png" alt="not found"/>
                        </div>
                        <span className="inline-block text-white font-robotocondenced uppercase font-normal text-xs pt-4">© Copyright Finsweet 2022</span>
                        <ul className="pt-8 flex flex-col gap-4">
                            <li>
                                <span className="inline-block text-white font-robotocondenced uppercase font-normal text-xs">(480) 555-0103</span>
                            </li>
                            <li>
                                <span className="inline-block text-white font-robotocondenced uppercase font-normal text-xs">4517 Washington Ave. </span>
                            </li>
                            <li>
                                <span className="inline-block text-white font-robotocondenced uppercase font-normal text-xs">finsweet@example.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-[255px]">
                        <h6 className="font-robotocondenced font-normal text-base text-white leading-6 capitalize">Quicklinks</h6>
                        <ul className="mt-5 flex flex-col gap-6">
                            <li>
                                <a href="#" className="inline-block uppercase font-robotocondenced text-xs text-white opacity-75">about us</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block uppercase font-robotocondenced text-xs text-white opacity-75">sermons</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block uppercase font-robotocondenced text-xs text-white opacity-75">contact</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block uppercase font-robotocondenced text-xs text-white opacity-75">blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-[72px]">
                        <h6 className="font-robotocondenced font-normal text-base text-white leading-6 capitalize">connect</h6>
                        <ul className="mt-5 flex gap-5">
                            <li>
                                <a href="#" className="text-primary">
                                    <BsFacebook/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-primary">
                                    <BsFacebook/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-primary">
                                    <BsFacebook/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-[115px]">
                        <h3 className="w-[377px] mb-8 uppercase font-robotocondenced font-bold text-white text-[32px] leading-[44px]]">Subscribe to get Latest Updates and News</h3>
                        <form className=" w-[512px] relative border-[1px] border-slate-400 rounded-xl">
                            <input className="p-5 w-full bg-transparent outline-0 text-white font-robotocondenced text-base font-normal" type="email" placeholder="Youremail@gmail.com"/>
                            <button className="bg-primary py-6 px-16 rounded-xl text-navbtn text-base font-normal uppercase font-robotocondenced leading-none inline-block absolute right-0 top-0" type="submit">subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer