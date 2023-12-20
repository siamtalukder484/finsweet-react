import React from 'react'
import BlogItem from '../components/BlogItem'
import SecSubHeading from '../components/SecSubHeading'
import SecMainHeading from '../components/SecMainHeading'

const Blog = () => {
  return (
    <>
    <section id='blog' className="py-32">
        <div className="max-w-container mx-auto">
            <div className="text-center w-[554px] mx-auto">
                <SecSubHeading title="read our blog"/>
                <SecMainHeading title="SHARE, INSPIRE, INNOVATE"/>
            </div>
            <div className="mt-16 flex flex-wrap gap-[24px]">
                <BlogItem 
                    category="relationship" 
                    title="WATCH AND LISTEN TO OUR SERMONS" 
                    details="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor." 
                    author="Mathew Johnson" 
                    date="Tuesday 13 May, 2021"
                />
                <BlogItem 
                    category="relationship" 
                    title="WATCH AND LISTEN TO OUR SERMONS" 
                    details="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor." 
                    author="Mathew Johnson" 
                    date="Tuesday 13 May, 2021"
                />
                <BlogItem 
                    category="relationship" 
                    title="WATCH AND LISTEN TO OUR SERMONS" 
                    details="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor." 
                    author="Mathew Johnson" 
                    date="Tuesday 13 May, 2021"
                />
                <BlogItem 
                    category="relationship" 
                    title="WATCH AND LISTEN TO OUR SERMONS" 
                    details="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor." 
                    author="Mathew Johnson" 
                    date="Tuesday 13 May, 2021"
                />
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog