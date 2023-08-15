import React from 'react'
import Fotter from '../Components/Common/Fotter/Fotter'
import Hero from '../Components/Services/Hero'
import AllServices from '../Components/Services/AllServices'
import Video from '../Components/Common/Video'
import Navbar from '../Components/Common/Navbar/Navbar'
import Testimonials from '../Components/Common/Testimonials'
import Qoute from '../Components/Common/Qoute'

const Services = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AllServices/>
    <Video/>
    {/* <Testimonials/> */}
    <Qoute/>
    <Fotter/>
    </>
  )
}

export default Services