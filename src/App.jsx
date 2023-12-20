import { useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import Banner from './sections/Banner'
import Service from './sections/Service'
import Love from './sections/Love'
import Watch from './sections/Watch'
import Upcoming from './sections/Upcoming'
import Visit from './sections/Visit'
import Blog from './sections/Blog'
import Footer from './sections/Footer'
import BottomToTop from './components/BottomToTop'


function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Service/>
    <Love/>
    <Watch/>
    <Upcoming/>
    <Visit/>
    <Blog/>
    <Footer/>
    <BottomToTop/>
    </>
  )
}

export default App
