import React from 'react'
import Peragraph from './Peragraph'

const BlogItem = ({category, title, details, author, date}) => {
  return (
    <>
        <div className="w-[302px] bg-serviceitembg px-8 py-12 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-0 after:h-4 after:bg-primary after:transition-all after:duration-700 hover:after:w-full">
            <h5 className="text-xs uppercase font-robotocondenced font-bold tracking-[0.96px] bg-clip-text bg-textgradiant">
                {category}
            </h5>
            <h4 className="mr-5 py-4 uppercase font-robotocondenced font-bold text-2xl text-subheading">
                {title}
            </h4>
            <Peragraph 
                className="capitalize font-robotocondenced font-normal text-subheading text-base opacity-75" 
                title={details}
            />
            <h4 className="mt-12 text-[18px] font-robotocondenced font-normal text-subheading leading-normal capitalize">By {author}</h4>
            <h5 className="mt-1 font-robotocondenced text-base font-normal text-subheading capitalize leading-6">
                {date}
            </h5>
        </div>
    </>
  )
}

export default BlogItem